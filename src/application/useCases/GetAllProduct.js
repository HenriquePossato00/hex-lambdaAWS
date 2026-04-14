class GetProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute() {
    return await this.productRepository.getAll();
  }
}

module.exports = GetProduct;