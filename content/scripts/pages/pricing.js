// tresta to heldor switch

let animationDiv = $(".animation-div");
let heldorBtn = $(".btn__toggle-heldor");
let trestaBtn = $(".btn__toggle-tresta");
let newPrice;
let clickedBtn;

function changeToHeldor() {
  if (clickedBtn == "heldor") return;
  animationDiv.css("display", "block");
  trestaBtn.css("background", "#fff");
  trestaBtn.css("color", "#002147");
  animationDiv
    .animate({ right: "-=130px" }, 500)
    .promise()
    .done(function (res) {
      heldorBtn.css("background", "#00b2b2");
      heldorBtn.css("color", "#fff");
      animationDiv.css("display", "none");
      $(".card__header.pricing__header").each(function (priceInList, price) {
        newPrice = +$(price).text() * 2;
        $(price).html(newPrice.toFixed(2));
        $(".purchase-btn").attr("data-img", "content/images/mask.png");
        $(".purchase-btn").attr("data-name", "Heldor - Black");
        $(".purchase-btn").attr("data-colors", "bgbo");
        $(".purchase-btn").attr("data-product-name", "heldor");
      });
      for (let i = 0; i < heldor_benefits.length; i++) {
        $(".benefits-list__benefit").eq(i).html(`${heldor_benefits[i]}`);
      }
    });
  clickedBtn = "heldor";
}

function changeToTresta() {
  if (clickedBtn == "tresta") return;
  animationDiv.css("display", "block");
  heldorBtn.css("background", "#fff");
  heldorBtn.css("color", "#002147");
  animationDiv
    .animate({ right: "+=130px" }, 500)
    .promise()
    .done(function (res) {
      trestaBtn.css("background", "#00b2b2");
      trestaBtn.css("color", "#fff");
      animationDiv.css("display", "none");
      $(".card__header.pricing__header").each(function (priceInList, price) {
        newPrice = +$(price).text() / 2;
        $(price).html(newPrice.toFixed(2));
        $(".purchase-btn").attr("data-img", "content/images/watch.png");
        $(".purchase-btn").attr("data-name", "Tresta - Black");
        $(".purchase-btn").attr("data-colors", "bgcg");
        $(".purchase-btn").attr("data-product-name", "tresta");
      });
      for (let i = 0; i < tresta_benefits.length; i++) {
        $(".benefits-list__benefit").eq(i).html(`${tresta_benefits[i]}`);
      }
    });
  clickedBtn = "tresta";
}

$(heldorBtn).on("click", changeToHeldor);
$(trestaBtn).on("click", changeToTresta);
