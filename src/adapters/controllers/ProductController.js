class ProductController {
    constructor(productUsecase) {
        this.productUsecase = productUsecase;
    }

    async create(event) {
        const body = JSON.parse(event.body);
        const result = await this.productUsecase.create.execute(body);

        return {
            statusCode: 201,
            body: JSON.stringify(result),
        };
    }

    async getAll() {
        const result = await this.productUsecase.get.execute();

        return { 
            statusCode: 200, 
            body: JSON.stringify(result) 
        };
    }

    async update(event) {
        const body = JSON.parse(event.body);
        const result = await this.productUsecase.update(body);

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    }

    async delete(event) {

    }
}

module.exports = ProductController;