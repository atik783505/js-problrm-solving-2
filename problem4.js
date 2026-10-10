const inventory = [
  { sku: "SKU-01", title: "Wireless Mouse", stock: 15, isDiscontinued: false },
  { sku: "SKU-02", title: "Mechanical Keyboard", stock: 0, isDiscontinued: false },
  { sku: "SKU-03", title: "USB-C Cable", stock: 42, isDiscontinued: true },
  { sku: "SKU-04", title: "Monitor Arm", stock: 8, isDiscontinued: false },
];


const skuObjets = inventory.find(i => i.sku === 'SKU-02')
console.log(skuObjets)

const filtedInventory = inventory.filter(i => !i.isDiscontinued)

const updatedInventory = filtedInventory.map(({...rest}) => {
    return {
        ...rest,
        warehouse: "Dhaka_Central"
    }
})

console.log(updatedInventory)

const totalStock = inventory.reduce((prev , stock) => {
    return prev + stock.stock
}, 0)

console.log(totalStock)