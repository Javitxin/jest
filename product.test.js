const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});
describe('addProduct', () => {

    it('should add one product', () => {
        expect(addProduct('jamon', 120)).toEqual([{ id: 0,  nombre: 'jamon', precio:120}]);
    });
    it('name and price should not be empty', () => {
        expect(() => addProduct('pera',)).toThrow('name and price should not be empty');
    });
    it('the product already exists', () => {
        expect(addProduct('jamon', 120)).toEqual([{ id: 2,  nombre: 'jamon', precio:120}]);
    });
});

describe('getProduct', () => {

    it('should show a product', () => {
        expect(getProduct( 1)).toEqual([{ id: 1 }]);
    });
   
    it('the product already exists', () => {
        expect(getProduct( 1)).toEqual([{ id: 1 }]);
    });
});

describe('updateProduct', () => {

    it('should show a product', () => {
        expect(updateProduct( 1)).toEqual([{ id: 1, nombre: 'manzana', precio: 23 }]);
    });
   
    it('the product does not exist', () => {
        expect(updateProduct( 1)).toEqual(undefined);
    });
});

describe('removeProduct', () => {

    it('should remove a product', () => {
        expect(removeProduct( 1)).toEqual([{ id: 1, nombre: 'manzana', precio: 23 }]);
    });
   
    it('the product does not exist', () => {
        expect(removeProduct( 1)).toEqual(undefined);
    });
});
afterEach(() => {
    resetProducts();
});