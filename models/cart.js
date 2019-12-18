class CartItem {
  constructor(cartItem = {}) {
    // a product ID for the cart item
    this.id = cartItem.id;
    // The product object
    this.product = cartItem.product;
    // The quantity of the products in the cart
    this.qty = cartItem.qty || 0;
    // The price of products in the cart
    this.price = cartItem.price || 0;
  }
}

class Cart {
  constructor(cart = {}) {
    this.items = cart.items || {};
    // the total amount of items in the cart
  }
  get TotalQty() {
    return this.toArray().reduce((sum, item) => sum + item.qty, 0);
  }
  get totalPrice() {
    return this.toArray().reduce((sum, item) => sum + item.price, 0);
  }
  toArray() {
    return Object.values(this.items);
  }
  // add items to the cart
  add(id, product) {
    // if an item exists in the cart
    const item = this.items[id]
      ? new CartItem(this.items[id])
      : new CartItem({ id, product });

    // increment the items quantity
    item.qty += 1;
    // Update the items price
    item.price = item.product.price * item.qty;

    this.items = {
      ...this.items,
      [id]: item
    };
  }

  // Remove products from cart
  remove(id) {
    // if an item exists in the cart clone it to a new item
    const item = this.items[id] && new CartItem(this.items[id]);
    // if it does not exist, do nothing
    if (!item) return;
    // if the items quantity is 1 just remove all of it
    if (item.qty <= 1) return this.removeAll(id);
    // otherwise decrement the items quantity
    item.qty -= 1;
    // Update the items price
    item.price = item.product.price * item.qty;

    //Set the item in thee items hashmap
    this.items = {
      ...this.items,
      [id]: item
    };
  }
  // remove all of one item from the cart
  removeAll(id) {
    const newItems = { ...this.items };
    delete newItems[id];
    this.items = newItems;
  }
}

module.exports = Cart;
