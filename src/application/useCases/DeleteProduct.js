class GetAllProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(id) {
    return await this.productRepository.delete(id);
  }
}

module.exports = GetAllProduct;