const products = [
    { title: 'Pizza', price: 121, id: '๐' },
    { title: 'Burger', price: 121, id: '๐' },
    { title: 'Hot cakes', price: 121, id: '๐ฅ' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Sacamos un elemento del array de products y lo colocamos en el array de myProducts
const productIndex = products.findIndex(item => item.id === '๐');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


// Update
// Queremos hacer un actualizaciรณn sobre un elemento del array

const productsV2 = [
    { title: 'Pizza', price: 121, id: '๐' },
    { title: 'Burger', price: 121, id: '๐' },
    { title: 'Hot cakes', price: 121, id: '๐ฅ' },
];

const update = {
    id: '๐ฅ',
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id)
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);