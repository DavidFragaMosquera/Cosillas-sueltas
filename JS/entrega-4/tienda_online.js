'use strict';

const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

//############################
// ### C l a s s   I t e m ###
//############################

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // Metodo estatico para generar inventario
  // nombre de articulos con sus precios
  static getInventory(names, prices) {
    return names.map((name, index) => {
      return new Item(name, prices[index]);
    });
  }
}

//####################################
// ### C l a s s   C a r t I t e m ###
//####################################

class CartItem {
  unit = 1;
  constructor(item) {
    this.item = item;
  }
  increase() {
    this.unit++;
  }
}

//############################
// ### C l a s s   U s e r ###
//############################

class User {
  cart = [];
  constructor(name) {
    this.name = name;
  }

  addToCart(item) {
    const itemInCart = this.cart.find((i) => i.item.name === item.name);

    if (itemInCart) {
      itemInCart.increase();
    } else {
      this.cart.push(new CartItem(item));
    }
  }
  fillCart(limit, catalogo) {
    for (let i = 0; i < limit; i++) {
      const itemIndex = Math.floor(Math.random() * catalogo.length);
      this.addToCart(catalogo[itemIndex]);
    }
  }
  pay(shop) {
    shop.checkout(this.cart);
  }
}
class Shop {
  checkout(cart) {
    for (const cartItem of cart) {
    }
  }
}
// Inventario, productos con sus precios
const myCatalogo = Item.getInventory(itemNames, itemPrices);
console.log(myCatalogo);

// Usuario con sus productos en el carrito
const myUser = new User('Tito Amancio');
myUser.fillCart(8, myCatalogo);
console.log(myUser);

