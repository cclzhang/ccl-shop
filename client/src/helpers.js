const index = (cart, product_name) => cart.findIndex(item => item.product_name == product_name)

const remove = product_name => prev => prev.filter(item => item.product_name !== product_name)

const numToCurrency = price => {
  let dollarCAD = Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  return dollarCAD.format(price)
}

const increment = (cart, product_name, stock) => {
  console.log(cart, product_name, stock)
  const i = index(cart, product_name)
  const newCart = [...cart]

  if (i !== -1 && cart[i].quantity < stock) {
    newCart[i].quantity = cart[i].quantity + 1;
  }

  return newCart
}

const decrement = (cart, product_name) => {
  const i = index(cart, product_name)

  if (cart[i].quantity === 1) {
    return remove(product_name)
  }

  const newCart = [...cart];
  newCart[i].quantity = cart[i].quantity - 1;
  return newCart
}

const addToCart = (cart, setCart, product_name, price, stock, image = null) => {
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
}

const calc = (cart) => {
  let subtotal = 0

  cart.forEach(item => {
    subtotal += item.price * item.quantity
  })

  return subtotal
}

export {
  index,
  remove,
  numToCurrency, 
  increment, 
  decrement, 
  addToCart,
  calc
}