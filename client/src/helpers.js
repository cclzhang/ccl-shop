const index = (cart, pname) => cart.findIndex(item => item.product_name == pname)

const remove = pname => prev => prev.filter(item => item.product_name !== pname)

const numToCurrency = price => {
  let dollarCAD = Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  return dollarCAD.format(price)
}

const increment = (cart, pname, stock) => {
  console.log(cart, pname, stock)
  const i = index(cart, pname)
  const newCart = [...cart]

  if (i !== -1 && cart[i].quantity < stock) {
    newCart[i].quantity = cart[i].quantity + 1;
  }

  return newCart
}

const decrement = (cart, pname) => {
  const i = index(cart, pname)

  if (cart[i].quantity === 1) {
    return remove(pname)
  }

  const newCart = [...cart];
  newCart[i].quantity = cart[i].quantity - 1;
  return newCart
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
  calc
}