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
      quantity: data.quantity || 0,
      price: data.price || 0,
    });

    return await this.productRepository.create(product);
  }
}

module.exports = CreateProduct;