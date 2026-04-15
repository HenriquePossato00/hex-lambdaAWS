class UpdateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(data) {
    if (!data.id) {
      throw new Error("ID é obrigatório para atualizar");
    }

    const existingProduct = await this.productRepository.getById(data.id);

    if (!existingProduct) {
      throw new Error("Produto não encontrado");
    }

    const updatedProduct = {
      ...existingProduct,
      name: data.name ?? existingProduct.name,
      quantity: data.quantity ?? existingProduct.quantity,
      price: data.price ?? existingProduct.price,
    };

    return await this.productRepository.update(updatedProduct);
  }
}

module.exports = UpdateProduct;