var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 getCart().push({itemName : item, itemPrice : Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  var total = 0
  var cart = getCart()
  for (let i = 0; i < cart.length; i++)
  {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  var cart = getCart()
  for(let i = 0; i < cart.length; i++)
  {
    if (cart[i].itemName === item)
    {
      cart.splice(i, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  var cartTotal = total()
  cart = cart.splice(0, cart.length)
  if (isNaN(cardNumber))
  {
    return 'Sorry, we dont have a credit card on file for you.'
  }
  else
  {
    return `Your total cost is ${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}
