/*--------------get things from localStorage------------------ *\
/*how many items in the shoppingcart, menubar */
var totalShoppingItems = localStorage.getItem('totalItems');
if (totalShoppingItems) {
  totalShoppingItems == 1 ? document.getElementById("countingText").innerHTML = `<p>There is 1 item in your <i class='fas fa-shopping-cart'></i> </p>` : document.getElementById("countingText").innerHTML = `<p>There are ${totalShoppingItems} items in your <i class='fas fa-shopping-cart'></i> </p>`;
};
/*checkout sum in the footer */
var checkoutSum = JSON.parse(localStorage.getItem('checkoutSum'));
if (checkoutSum) {
  document.getElementById("subtotal").innerHTML = checkoutSum;
}
/*values for all quantity inputs */
var quantityEachEl = JSON.parse(localStorage.getItem('quantity'));
if (quantityEachEl) {
  document.querySelectorAll(".quantity").forEach(function (element, i = 0) {
    element.value = quantityEachEl[i];
    i++;
  });
};
/*---------------***************************------------------*\
/*click shopping cart icon */
var shoppingCartBtn = document.querySelectorAll(".shopButton");
shoppingCartBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    addItem(e);
  });
});
/*click trash button icon */
document.getElementById("confirm").addEventListener('click', function (e) {
  var TrashBtn = document.querySelectorAll(".trashButton");
  TrashBtn.forEach(function (element) {
    if (element.getAttribute("data-clicked") == "true") {
      removeItem(element);
    }
  })
  $('#confirmation').modal('hide');
});
/*additem to shoppingcart, reduce quantity, count total sum */
function addItem(e) {
  var quantity = parseInt(e.target.closest('tr').childNodes[5].childNodes[1].value);
  var reducedQuantity = quantity - 1
  if (quantity === 0) {
    $('#popuptext').html("Sorry... <br> There are no items left");
    $('#popup').modal("show");
    return;
  }
  else {
    e.target.closest('tr').childNodes[5].childNodes[1].value = reducedQuantity;
    quantityArr = [];
    document.querySelectorAll(".quantity").forEach(function (element) {
      quantityArr.push(element.value);
      localStorage.setItem('quantity', JSON.stringify(quantityArr));
    });
  };
  /*update text in the shopping cart */
  if (localStorage.hasOwnProperty('totalItems')) {
    var totalItems = localStorage.getItem('totalItems');
    document.getElementById("countingText").innerHTML = `<p>There are ${parseFloat(totalItems) + 1} items in your <i class='fas fa-shopping-cart'></i> </p>`;
    localStorage.setItem('totalItems', (parseFloat(totalItems) + 1))
  }
  else {
    document.getElementById("countingText").innerHTML = `<p>There is 1 item in your <i class='fas fa-shopping-cart'></i> </p>`;
    localStorage.setItem('totalItems', 1)
  };
  /*update subtotal price in footer Subtotal  */
  var price = parseFloat(e.target.closest('tr').childNodes[3].innerText);
  if (localStorage.hasOwnProperty('subtotal')) {
    var subtotalPrice = localStorage.getItem('subtotal');
    subtotalPrice = parseFloat(subtotalPrice) + parseFloat(price);
  }
  else {
     var subtotalPrice = price;
  }
  localStorage.setItem('subtotal', subtotalPrice);
  var checkOutText = `<h4>Subtotal:</h4>
   <h1>${subtotalPrice.toFixed(2)} Eur</h1> <button class="CheckOut btn btn-dark mb-4 btn-lg pl-5 pr-5">Checkout</a><h1 >`;
  document.getElementById("subtotal").innerHTML = checkOutText;
  localStorage.setItem('checkoutSum', JSON.stringify(checkOutText));
}
/* remove item, increase quantity, count total */
function removeItem(e) {
  e.removeAttribute("data-clicked");
  var quantity = parseInt(e.closest('tr').childNodes[5].childNodes[1].value);
  if (quantity === 20) {
    $('#popuptext').html("<br> This item is not in your shopping cart");
    $('#popup').modal("show");
    return;
  };
  var increasedQuantity = quantity + 1;
  e.closest('tr').childNodes[5].childNodes[1].value = increasedQuantity;
  quantityArr = [];
  document.querySelectorAll(".quantity").forEach(function (element) {
    quantityArr.push(element.value);
    localStorage.setItem('quantity', JSON.stringify(quantityArr));
  });
  /*text in the shopping cart */
  if (localStorage.hasOwnProperty('totalItems')) {
    var totalItems = localStorage.getItem('totalItems');
    document.getElementById("countingText").innerHTML = `<p>There are ${parseFloat(totalItems) - 1} items in your <i class='fas fa-shopping-cart'></i> </p>`;
    localStorage.setItem('totalItems', (parseFloat(totalItems) - 1));
  }
  else {
    document.getElementById("countingText").innerHTML = `<p>There is 1 item in your <i class='fas fa-shopping-cart'></i> </p>`;
    localStorage.setItem('totalItems', 1);
  };
  /*update total price in the footer Subtotal  */
  var price = parseFloat(e.closest('tr').childNodes[3].innerText);
  var subtotalPrice = localStorage.getItem('subtotal');
  subtotalPrice = parseFloat(subtotalPrice) - parseFloat(price);
  var checkOutText = `<h4>Subtotal:</h4>
    <h1>${subtotalPrice.toFixed(2)} Eur</h1> <button class="CheckOut btn btn-dark mb-4 btn-lg pl-5 pr-5">Checkout</a><h1 >`;
  document.getElementById("subtotal").innerHTML = checkOutText;
  localStorage.setItem('subtotal', subtotalPrice);
  localStorage.setItem('checkoutSum', JSON.stringify(checkOutText));
};
/*-------------------------------------------------------------------------------*/
/* set attribute to clicked button */
var TrashBtn = document.querySelectorAll(".trashButton");
TrashBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.currentTarget.setAttribute("data-clicked", true);
  });
});
/*checkout button*/
var checkOutBtn = document.getElementsByClassName("CheckOut");
checkOutBtn[0].addEventListener('click', function (e) {
    $('#popuptext').html("Sorry, I know you're thirsty... <br> But this shop is not open now :) ");
    $('#popup').modal("show");
    e.preventDefault();
    return;
  });
/*tooltips*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});





