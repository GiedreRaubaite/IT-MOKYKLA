let shoppingItems = localStorage.getItem('totalItems');
if (shoppingItems) {
    updateShoppingCartText(shoppingItems);
}
let checkOutSum = JSON.parse(localStorage.getItem('checkOutHTML'));
if (checkOutSum) {
    document.getElementById("subtotal").innerHTML = checkOutSum;
}
let quantityEachEl = JSON.parse(localStorage.getItem('quantity'));
if (quantityEachEl) {
    document.querySelectorAll(".quantity").forEach(function(element, i = 0) {
        element.value = quantityEachEl[i];
        i++;
    });
};
let notDisabledButtons = JSON.parse(localStorage.getItem('notDisabledButtons'));
if (notDisabledButtons && (notDisabledButtons.length > 0)) {
    notDisabledTrashButtonsArray = [];
    notDisabledButtons.forEach(function(element) {
        document.getElementById(element).disabled = false;
        notDisabledTrashButtonsArray.push(element);
    })
} else {
    notDisabledTrashButtonsArray = [];
}

function initializeEventliteners() {
    const shoppingCartButtons = document.querySelectorAll(".shopButton");
    $(shoppingCartButtons).children().tooltip();
    shoppingCartButtons.forEach(function(element) {
        element.addEventListener('click', function(e) {
            addItem(e);
        });
    });
    document.getElementById("confirmItemRemove").addEventListener('click', function(e) {
        $('#confirmation').modal('hide');
        removeItem(findItemToRemove());
    });
    const trashButtons = document.querySelectorAll(".trashButton");
    trashButtons.forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.currentTarget.setAttribute("data-clicked", true);
        });
    });
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains("CheckOut")) {
            $('#popuptext').html("Sorry, I know you're thirsty... <br> But this shop is not open now :) ");
            $('#popup').modal("show");
        };
    })
};

initializeEventliteners();

function addItem(e) {
    const quantityArr = [];
    const productQuantityElement = e.target.closest('tr').childNodes[5].childNodes[1];
    const trashButtonToEnable = e.target.closest('tr').childNodes[7].childNodes[1].children[1];
    const remainingProductQuantity = parseInt(productQuantityElement.value);
    const reducedQuantity = remainingProductQuantity - 1
    $(trashButtonToEnable).children().tooltip();
    if (remainingProductQuantity === 0) {
        return showNoMoreItemsModal();
    } else {
        productQuantityElement.value = reducedQuantity;
        document.querySelectorAll(".quantity").forEach(function(element) {
            quantityArr.push(element.value);
            localStorage.setItem('quantity', JSON.stringify(quantityArr));
        });
    };
    toggleTrashButtonEnableDisable(trashButtonToEnable, false);
    updateShoppingCartQuantity();
    updateSubtotal(e.target);
}

function removeItem(e) {
    const remainingQuantity = parseInt(e.closest('tr').childNodes[5].childNodes[1].value);
    const trashButtonToDisable = e.closest('tr').childNodes[7].childNodes[1].children[1];
    if (remainingQuantity === 19) {
        toggleTrashButtonEnableDisable(trashButtonToDisable);
    };
    const increasedQuantity = remainingQuantity + 1;
    e.closest('tr').childNodes[5].childNodes[1].value = increasedQuantity;
    quantityArr = [];
    document.querySelectorAll(".quantity").forEach(function(element) {
        quantityArr.push(element.value);
        localStorage.setItem('quantity', JSON.stringify(quantityArr));
    });
    updateShoppingCartQuantity(false);
    updateSubtotal(e, false);
}

function findItemToRemove(e) {
    const trashButtons = document.querySelectorAll(".trashButton");
    let itemToRemove = null;
    trashButtons.forEach(function(element) {
        if (element.getAttribute("data-clicked") == "true") {
            itemToRemove = element;
            element.setAttribute("data-clicked", false);
        }
    });
    return itemToRemove;
}

function updateShoppingCartText(shoppingItems) {
    let itemCountMessage = shoppingItems == 1 ? `is 1 item` : `are ${shoppingItems} items`;
    document.getElementById("countingText").innerHTML = `<p>There ${itemCountMessage} in your <i class='fas fa-shopping-cart'></i> </p>`;
}

function updateShoppingCartQuantity(isAdd = true) {
    let updateValue = 1;
    if (!isAdd) {
        updateValue = -1;
    }
    if (localStorage.hasOwnProperty('totalItems')) {
        const totalItems = localStorage.getItem('totalItems');
        if (!isAdd && totalItems == 0) return;
        const newQuantity = parseInt(totalItems) + updateValue;
        updateShoppingCartText(newQuantity);
        localStorage.setItem('totalItems', (newQuantity));
    } else {
        updateShoppingCartText(1);
        localStorage.setItem('totalItems', 1);
    };
}

function showNoMoreItemsModal() {
    $('#popuptext').html("Sorry... <br> There are no items left");
    $('#popup').modal("show");
}

function updateSubtotal(clickedButton, isAdd = true) {
    let updateValue = null;
    let subtotal = 0;
    let price = parseFloat(clickedButton.closest('tr').childNodes[3].innerText);
    if (!isAdd) {
        price = -price;
    }
    if (localStorage.hasOwnProperty('subtotal')) {
        subtotal = parseFloat(localStorage.getItem('subtotal')) + parseFloat(price);
    } else {
        subtotal = price;
    }
    localStorage.setItem('subtotal', subtotal);
    updateSubtotalHTML(subtotal);
}

function updateSubtotalHTML(subtotal) {
    var checkOutText = `<h4>Subtotal:</h4>
  <h1>${subtotal.toFixed(2)} Eur</h1> <button class="CheckOut btn btn-dark mb-4 btn-lg pl-5 pr-5">Checkout</a>`;
    document.getElementById("subtotal").innerHTML = checkOutText;
    localStorage.setItem('checkOutHTML', JSON.stringify(checkOutText));
}

function toggleTrashButtonEnableDisable(trashButton, disabled = true) {
    if (!disabled) {
        trashButton.disabled = false;
        $(trashButton).children().tooltip();
        notDisabledTrashButtonsArray.push(trashButton.id);
        localStorage.setItem('notDisabledButtons', JSON.stringify(notDisabledTrashButtonsArray));
    } else {
        trashButton.disabled = true;
        const index = notDisabledTrashButtonsArray.indexOf(trashButton.id);
        notDisabledTrashButtonsArray.splice(index, 1);
        $(trashButton).children().tooltip("disable");
        localStorage.setItem('notDisabledButtons', JSON.stringify(notDisabledTrashButtonsArray));

    }


}