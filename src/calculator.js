import AutoNumeric from "AutoNumeric";

if (document.querySelector(".calc")) {
  new AutoNumeric(document.querySelector(".calc__symbol .calc__input"), {
    decimalPlaces: 0,
  });

  window.addEventListener("load", function () {
    // CALCULATOR
    Number.prototype.format = function (n, x) {
      var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
      return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
    };

    var mLoanAmt = 0;
    var nTerm = 0;
    var nInt = 0;
    var nIntP = 0;
    var tPay = 0;
    var tInt = 0;
    var emiCalc = 0;
    var chrP = 100;
    var chrI = 0;
    var chrI1 = chrI.format(1) + "% Interest";
    var chrI2 = chrI;
    var chrP1 = chrP.format(1) + "% Principal";
    var chrP2 = chrP;
    var chrT = "Total Payment: " + tPay.format(2);
    var col1 = "#e0e0e0";
    var col2 = "#e0e0e0";

    google.charts.load("current", { packages: ["corechart"] });

    google.charts.setOnLoadCallback(drawChart);

    //document.getElementById('emicalForm').onsubmit = fCalculate();

    function formatMoney(n, c, d, t) {
      var c = isNaN((c = Math.abs(c))) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
        j = (j = i.length) > 3 ? j % 3 : 0;

      return (
        s +
        (j ? i.substr(0, j) + t : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
        (c
          ? d +
            Math.abs(n - i)
              .toFixed(c)
              .slice(2)
          : "")
      );
    }

    function fCalculate() {
      mLoanAmt = document.getElementById("mLoan").value;
      mLoanAmt = mLoanAmt.replace(/\D/g, "");
      nTerm = document.getElementById("nTerm").value;
      nInt = document.getElementById("nInterest").value;
      nIntP = nInt / 100;
      mLoanAmt = parseFloat(mLoanAmt);
      tInt = parseFloat(tInt);

      emiCalc =
        (mLoanAmt * nIntP * parseFloat(Math.pow(1 + nIntP, nTerm))) / parseFloat(Math.pow(1 + nIntP, nTerm) - 1);
      emiCalc = emiCalc.toFixed(2);

      tInt = emiCalc * nTerm - mLoanAmt;
      //tInt = tInt.toFixed(2);

      tPay = mLoanAmt + tInt;

      document.getElementById("mEMI").textContent = "$" + formatMoney(emiCalc);
      document.getElementById("mInterest").textContent = "$" + formatMoney(tInt);
      document.getElementById("mPayment").textContent = "$" + formatMoney(tPay);

      chrP = (mLoanAmt / tPay) * 100;
      chrI = (tInt / tPay) * 100;

      chrI1 = chrI.format(1) + "% Interest";
      chrI2 = chrI;

      chrP1 = chrP.format(1) + "% Principal";
      chrP2 = chrP;

      chrT = '<tspan style="color: red;">Total Payment: $</tspan> ' + formatMoney(tPay);
      col1 = "#A8C7FF";
      col2 = "#4285F4";

      google.charts.setOnLoadCallback(drawChart);
    }

    function fClear() {
      tPay = 0;
      chrP = 100;
      chrI = 0;
      chrI1 = chrI.format(1) + "% Interest (" + nIntP.toFixed(2) + ")";
      chrI2 = chrI;
      chrP1 = chrP.format(1) + "% Principal (" + mLoanAmt.toFixed(2) + ")";
      chrP2 = chrP;
      chrT = '<tspan style="color: red;">Total Payment:</tspan> ' + tPay.format(2);

      document.getElementById("mLoan").value = "0.00";
      document.getElementById("nInterest").value = "0";
      document.getElementById("nTerm").value = "0";
      document.getElementById("mEMI").value = "0.00";
      document.getElementById("mInterest").value = "0.00";
      document.getElementById("mPayment").value = "0.00";

      col1 = "#e0e0e0";
      col2 = "#e0e0e0";

      google.charts.setOnLoadCallback(drawChart);
    }

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Interest", "Principal"],
        [chrI1, chrI2],
        [chrP1, chrP2],
      ]);

      var options = {
        title: "",
        chartArea: { width: "100%", height: "100%" },
        colors: [col1, col2],
        pieHole: 0.75,
        fontName: "Muli",
        fontSize: 16,
        legend: "none",
        pieSliceText: "none",
        enableInteractivity: false,
        backgroundColor: {
          fill: "transparent",
        },
      };

      var truncatedP1 = chrP1.substring(0, 5);
      document.getElementById("principal-legend").innerHTML = truncatedP1;

      var truncatedI1 = chrI1.substring(0, 5);
      document.getElementById("interest-legend").innerHTML = truncatedI1;

      var chart = new google.visualization.PieChart(document.getElementById("donutchart"));
      chart.draw(data, options);
    }

    // Draw chart with default values
    fCalculate();

    // Radio button input assign to hidden value

    document.querySelectorAll('input[name="nInterestValue"]').forEach(function (el) {
      el.addEventListener("change", function () {
        document.querySelector("#nInterest").value = this.value;
      });
    });

    // Range Slider Background changes
    //   document.getElementById("mLoan").oninput = function () {
    //     mLoanShow2.value = mLoan.value;
    //     this.style.background =
    //       "linear-gradient(to right, #ED1C24 0%, #ED1C24 " +
    //       mLoanShow2.value / 1000 +
    //       "%, #D3D3D3 " +
    //       mLoanShow2.value / 1000 +
    //       "%, #D3D3D3 100%)";
    //   };

    //   document.getElementById("mLoanShow2").oninput = function () {
    //     mLoan.value = mLoanShow2.value;
    //     mLoan.style.background =
    //       "linear-gradient(to right, #ED1C24 0%, #ED1C24 " +
    //       mLoanShow2.value / 1000 +
    //       "%, #D3D3D3 " +
    //       mLoanShow2.value / 1000 +
    //       "%, #D3D3D3 100%)";
    //   };

    //   document.getElementById("nTerm").oninput = function () {
    //     nTermShow.value = this.value;
    //     var monthPercentage = 2.7777;
    //     this.style.background =
    //       "linear-gradient(to right, #ED1C24 0%, #ED1C24 " +
    //       nTermShow.value * monthPercentage +
    //       "%, #D3D3D3 " +
    //       nTermShow.value * monthPercentage +
    //       "%, #D3D3D3 100%)";
    //   };

    document.querySelector(".calc__button").addEventListener("click", fCalculate);

    // Chart redraw when window size is changed
    window.addEventListener("resize", function () {
      drawChart();
    });
  });
}
