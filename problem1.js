const rawOrders = [
  { id: "ORD_1", customer: "Sakib", itemsTotal: 1200, deliveryFee: 60, status: "pending" },
  { id: "ORD_2", customer: "Rahim", itemsTotal: 450, deliveryFee: 50, status: "delivered" },
  { id: "ORD_3", customer: "Nabila", itemsTotal: 3100, deliveryFee: 100, status: "pending" },
  { id: "ORD_4", customer: "Tanvir", itemsTotal: 850, deliveryFee: 60, status: "cancelled" },
]

// orders
  const pemndingOrders = rawOrders.filter(order => order.status === 'pending')

  const newItem = pemndingOrders.map(order => ({
    orderID : order.id,
    customerName : order.customer,
    totalAmount : order.itemsTotal + order.deliveryFee
  }))

  const dueAmmount = pemndingOrders.reduce((prev,order)=> {
    return prev + order.itemsTotal + order.deliveryFee
  }, 0)

  console.log('pending order' , pemndingOrders)
  console.log(newItem)
  console.log('Due amount',dueAmmount)

