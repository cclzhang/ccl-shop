// Change number to CAD
export const numToCurrency = price => {
  let dollarCAD = Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  return dollarCAD.format(price)
}


/* CART RELATED FUNCTIONS */

export const increment = (cart, id, stock, num = 1) => {
  const i = cart.findIndex(item=>item.id === id)
  const newCart = [...cart]

  if (i !== -1 && cart[i].quantity < stock) {
    newCart[i].quantity = cart[i].quantity + num;
  } else {
    alert("out of stock")
  }

  return newCart
}

export const decrement = (cart, id, num = 1) => {
  const i = cart.findIndex(item=>item.id === id)

  if (cart[i].quantity === 1) {
    return cart.filter(item => item.id !== id)
  }

  const newCart = [...cart];
  newCart[i].quantity = cart[i].quantity - num;

  return newCart
}

export const addToCart = (product, product_name, cart, setCart, setIsCartOpen) => {
  const i = cart.findIndex(item=>item.id === product.id)

  if (i === -1 ) {
    setCart([{
      id: product.id,
      product_name: product_name,
      image: product.image,
      stock: product.stock,
      price: product.price,
      quantity: 1
    }, ...cart])
  } else if (cart[i].quantity < product.stock) {
    setCart(increment(cart, product.id, product.stock))
  } else {
    alert("out of stock")
    return
  }

  setIsCartOpen(true)
}

// Calculate Subtotal before Taxes
export const calc = (cart) => {
  let subtotal = 0

  cart.forEach(item => {
    subtotal += item.price * item.quantity
  })

  return subtotal
}
/* ---------------------- */


/* UPLOAD RELATED FUNCTIONS */


/* ------------------------ */