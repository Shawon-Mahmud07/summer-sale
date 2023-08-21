const productContainer = document.getElementById("productItems");
const priceContainer = document.getElementById("productPrice");
const PurchaseBtn = document.getElementById("PurchaseBtn");
const applyBtn = document.getElementById("applyBtn");
const applyInput = document.getElementById("applyInput");
const discount = document.getElementById("discount");
const totalItemPrice = document.getElementById("total");
const goHomeBtn = document.getElementById("goHome");

function handleBtn(target) {
  // product item section
  const itemName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  const count = productContainer.childElementCount;
  li.innerText = `${count + 1}. ${itemName}`;
  productContainer.appendChild(li);

  // product item section
  const itemPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  const total = parseInt(priceContainer.innerText);
  const price = parseInt(itemPrice);
  priceContainer.innerText = (price + total).toFixed(2);

  // validation section
  if (priceContainer.innerText >= 0) {
    PurchaseBtn.removeAttribute("disabled");
  } else {
    PurchaseBtn.setAttribute("disabled", true);
  }

  if (priceContainer.innerText >= 200) {
    applyBtn.classList.remove("opacity-60", "cursor-not-allowed");
  } else {
    applyBtn.classList.add("opacity-60", "cursor-not-allowed");
  }
}

applyBtn.addEventListener("click", function () {
  if (applyInput.value === "SELL200") {
    const originalValue = parseFloat(priceContainer.innerText);
    const percentage = 0.2;
    const result = originalValue * percentage;
    const totalDiscount = result.toFixed(2);
    discount.innerText = totalDiscount;
    const total = originalValue - parseFloat(discount.innerText);
    totalItemPrice.innerText = total.toFixed(2);
  } else {
    alert("please, provide valid promo code.");
  }
});

goHomeBtn.addEventListener("click", function () {
  productContainer.innerText = "";
  priceContainer.innerText = "0";
  discount.innerText = "0";
  totalItemPrice.innerText = "0";
});
