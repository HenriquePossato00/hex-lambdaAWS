class GetAllProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(id) {
    return await this.productRepository.getById(id);
  }
}

module.exports = GetAllProduct;