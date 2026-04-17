class Product {
    constructor({ id, name, productSector, minQuantity, currentQuantity, price }) {
        this.id = id;
        this.name = name;
        this.minQuantity = minQuantity;
        this.currentQuantity = currentQuantity;
        this.price = price;
        this.productSector = productSector;
    }
}

module.exports = Product;