"use strict";

const itemNames = ["Camisa", "Pantalon", "Calcetines"];
const itemPrices = ["13", "27", "100"];

class Item {
  constructor(itemNames, itemPrices) {
    this.itemNames = itemNames;
    this.itemPrices = itemPrices;
  }
  static getInventary(itemNames, itemPrices) {
    return itemNames.map((itemName, index) => {
      return new Item(itemName, itemPrices[index]);
    });
  }
}

class CartItem {
  unit = 1;
  constructor(item) {
    this.item = item;
  }
  increase() {
    this.unit++;
  }
}

class User {
  cart = [];
  constructor(name, cart) {
    this.name = name;
    this.cart = cart;
  }
  addToCart() {
    for (const itemCart of this.cart) {
      if (item.name === itemCart.item.name) {
        CartItem.increase();
      } else {
        this.cart.push(new CartItem(item));
      }
    }
  }
  fillCart(limit, catalogue) {
    for (let i = 0; i < limit; i++) {
      const itemIndex = Math.round(Math.random() * catalogue.length);
      this.addToCart(catalogue[itemIndex]);
    }
  }
  pay(shop) {
    shop.checkout(this.cart);
  }
}
class Shop {
  checkout(cart) {
    for (const CartItem of cart) {
    }
  }
}

const myItems = new Item(itemNames, itemPrices);
console.log(myItems);
const myCatalogue = Item.getInventary(itemNames, itemPrices);
console.log(Item.getInventary(itemNames, itemPrices));
console.log(myItems);
const cart = [];
cart.push(new CartItem(catalogue[2]));
cart[0].increase();
console.log(cart);
const myUser = new User("Amancio");
myUser.fillCart(5, myCatalogue);
console.log(myUser);
