// Find index of item
export const index = (array, nameOfItem) => array.findIndex(item => item.nameOfItem == nameOfItem)

// Change number to CAD
export const numToCurrency = price => {
  let dollarCAD = Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  return dollarCAD.format(price)
}


/* CART RELATED FUNCTIONS */
export const remove = product_name => prev => prev.filter(item => item.product_name !== product_name)

export const increment = (cart, product_name, stock, num = 1) => {
  const i = index(cart, product_name)
  const newCart = [...cart]

  if (i !== -1 && cart[i].quantity < stock) {
    newCart[i].quantity = cart[i].quantity + num;
  }

  return newCart
}

export const decrement = (cart, product_name, num = 1) => {
  const i = index(cart, product_name)

  if (cart[i].quantity === 1) {
    return remove(product_name)
  }

  const newCart = [...cart];
  newCart[i].quantity = cart[i].quantity - num;
  return newCart
}

export const addToCart = (cart, setCart, setIsCartOpen, product_name, price, stock, image = null) => {
  const i = index(cart, product_name)

  if (i === -1 ) {
    setCart([...cart, {
      product_name: product_name,
      image: image,
      price: price,
      stock: stock,
      quantity: 1
    }])
  } else if (cart[i].quantity < stock) {
    setCart(increment(cart, product_name, stock))
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
export const uploadDetails = (uploadItem, setUploadItem, key, value) => {
  // uploadItem[type][key] = value
  setUploadItem({ ...uploadItem, [key]: value })
}

/* ------------------------ */