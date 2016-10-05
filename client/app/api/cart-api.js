const cart = window.localStorage;

function addToCart(id) {
  if (cart[id]) {
    cart[id] = (Number(cart.getItem(id)) + 1);
  } else {
    cart[id] = 1;
  }
}

function getCart() {
  const items = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart.key(i) !== 'debug') {
      items.push({ id: cart.key(i), qty: Number(cart[cart.key(i)]) });
    }
  }
  return items;
}

export { addToCart, getCart };
