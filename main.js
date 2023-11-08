// ------show and hide assets section in portfolio expert level----------
let advancedDetail = document.getElementById("portfolio-assets");
let showArrow = document.getElementById("showArrow");
function hideShowAdvancedDetail() {
  advancedDetail.classList.toggle("portfolio-assets-hide");
  showArrow.classList.toggle("show-arrow");
}

// let tickerTable = document.getElementById("ticker-data");
// let tickerRow = document.createElement("tr");
// let tickerData = document.createElement("td");
// function addTicker() {
//   tickerRow.appendChild(tickerData);
//   tickerTable.appendChild(tickerRow);
//   console.log(tickerRow);
//   console.log(tickerTable);
// }

let portfolioWeightDistributionCard = document.getElementById(
  "portfolio-weight-distribution-card"
);
let arrow2 = document.getElementById("weights-distribution-arrow");
function showsection() {
  portfolioWeightDistributionCard.classList.toggle("show");
}
