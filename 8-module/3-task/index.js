export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product) {
      return;
    }
    let cartItem;
    let productInTheCart = this.cartItems.find((item) =>
      item.product.id === product.id
    )
    if (!productInTheCart) {
      cartItem = { product, count: 1 };
      this.cartItems.push(cartItem);
    } else {
      productInTheCart.count++;
      cartItem = productInTheCart;
    }
    console.log(this.cartItems);
    if (cartItem) {
      this.onProductUpdate(cartItem);
    }
  }

  updateProductCount(productId, amount) {
    let productIndex = this.cartItems.findIndex((item) =>
      item.product.id === productId
    )
    if (productIndex < 0) {
      return;
    }
    if (this.cartItems[productIndex].count >= 1) {
      this.cartItems[productIndex].count += amount;
    }
    if (this.cartItems[productIndex].count == 0) {
      this.cartItems.splice(this.cartItems[productIndex], 1);
    }
    console.log(this.cartItems);
    let cartItem = this.cartItems[productIndex];
    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    return this.cartItems.length == 0;
  }

  getTotalCount() {
    let totalCount = 0;
    this.cartItems.forEach((item) => {
      totalCount += item.count;
    })
    return totalCount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.cartItems.forEach((item) => {
      totalPrice += item.product.price * item.count;
    })
    return totalPrice;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

