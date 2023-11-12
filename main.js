// ------show and hide assets section in portfolio expert level----------
let advancedDetail = document.getElementById("portfolio-assets");
let showArrow = document.getElementById("showArrow");
function hideShowAdvancedDetail() {
  advancedDetail.classList.toggle("portfolio-assets-hide");
  showArrow.classList.toggle("show-arrow");
}

// ------show and hide portfolio weight distrubtion section ----------
let portfolioWeightDistributionCard = document.getElementById(
  "portfolio-weight-distribution-card"
);
let showSectionArrow = document.getElementById(
  "weights-distribution-arrow-down"
);
let hideSectionArrow = document.getElementById("weights-distribution-arrow-up");

function showSection() {
  portfolioWeightDistributionCard.classList.toggle("show");
  showSectionArrow.classList.toggle("hide");
  hideSectionArrow.classList.toggle("hide");
}

function hideSection() {
  portfolioWeightDistributionCard.classList.toggle("show");
  showSectionArrow.classList.toggle("hide");
  hideSectionArrow.classList.toggle("hide");
}

// --------------------------------------------------------
// -----------toggle advanced details section in stock recommendation ( recommended portfolio analysis tab)---------
let advancedSection = document.querySelector(".advanced-details-content");
let hideArrow = document.querySelector("#hideArrow");
let showAdnavcedArrow = document.querySelector("#showArrow");
function hideAdvanced() {
  advancedSection.classList.toggle("hide");
  hideArrow.classList.toggle("hide");
  showAdnavcedArrow.classList.toggle("hide");
}

function showAdvanced() {
  advancedSection.classList.toggle("hide");
  showAdnavcedArrow.classList.toggle("hide");
  hideArrow.classList.toggle("hide");
}
// -----------toggle information block in stock recommendation ---------
let infoBlock = document.querySelector("#info-block");

function toggleInfoBlock() {
  infoBlock.classList.toggle("hide");
}
