
let productos = [{}];

productos.splice( 0);
function addProduct(nomb, precio) {
    const nuevoProducto = {        
        nombre: nomb,
        precio: precio
    };
    productos.push(nuevoProducto);
    productos.map((elemento, index) => elemento.id = index)
    return productos;
    
};
/*
addProduct('jamon', 120);
addProduct('piña', 12);
addProduct('filete', 20);
console.log(productos);
*/
function getProducts(){
    console.log(productos);
};
/*
getProducts()
console.log(productos);
*/
function getProduct(id){
    const producto = productos.find(prod => prod.id === id)
    //console.log(producto);
    return producto;
};
//getProduct(2)



function removeProduct( id) {
    productos =productos.filter(producto => producto.id !== id);
};
/*
removeProduct(2);
console.log(productos);
*/

function updateProduct (id){
    const productoIndex = productos.findIndex(producto => producto.id === id);
    if (productoIndex ===-1){
        console.log('El producto no está');
    } else{
        productos[productoIndex].nombre = 'Tarta de queso';
        productos[productoIndex].precio = 25;
        productos[productoIndex];
    };
};
/*
updateProduct(1)
console.log(productos);
*/
function resetProducts(){
    productos =[{
        id: 0,
        nombre:'',
        precio: 0
    }];
};

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
};
