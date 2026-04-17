const { v4: uuidv4 } = require("uuid");
const Product = require("../../domain/entities/Product");

class CreateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(data) {
    if (!data.name) throw new Error("Nome obrigatório");

    const product = new Product({
      id: uuidv4(),
      name: data.name,
      minQuantity: data.minQuantity || 0,
      currentQuantity: data.currentQuantity || 0,
      productSector: data.productSector,
      price: data.price || 0,
    });

    return await this.productRepository.create(product);
  }
}

module.exports = CreateProduct;