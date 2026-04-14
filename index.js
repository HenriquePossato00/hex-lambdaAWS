const DynamoProductRepository = require("./src/adapters/repositories/DynamoProductRepository");

const CreateProduct = require("./src/application/useCases/createProduct");
const GetProduct = require("./src/application/useCases/GetAllProduct");

const ProductController = require("./src/adapters/controllers/ProductController");

const repository = new DynamoProductRepository();

const useCases = {
    create: new CreateProduct(repository),
    get: new GetProduct(repository)
}

const controller = new ProductController(useCases);

exports.handler = async (event) => {
    const { httpMethod, path } = event;

    if (httpMethod === "POST" && path === "/products") {
        return await controller.create(event);
    }

    if (httpMethod === "GET" && path === "/products") {
        return await controller.getAll();
    }

    return { statusCode: 404, body: "Not Found" };
}