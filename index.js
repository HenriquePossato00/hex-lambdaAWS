const DynamoProductRepository = require("./src/adapters/repositories/DynamoProductRepository");

const CreateProduct = require("./src/application/useCases/CreateProduct");
const GetAllProduct = require("./src/application/useCases/GetAllProduct");
const GetProductById = require("./src/application/useCases/GetProductById");
const DeleteProduct = require("./src/application/useCases/DeleteProduct");
const UpdateProduct = require("./src/application/useCases/UpdateProduct");

const ProductController = require("./src/adapters/controllers/ProductController");

const repository = new DynamoProductRepository();

const useCases = {
    create: new CreateProduct(repository),
    get: new GetAllProduct(repository),
    getById: new GetProductById(repository),
    delete: new DeleteProduct(repository),
    update: new UpdateProduct(repository)
}

const controller = new ProductController(useCases);

exports.handler = async (event) => {
    console.log(JSON.stringify(event, null, 2));

    const method = event.requestContext.http.method;
    const [, , path, params] = event.rawPath.split("/");

    if (method === "GET" && path === "products") {
        if (params) {
            return await controller.getById(params);
        } else {
            return await controller.getAll();
        }
    }

    if (method === "POST" && path === "products") {
        return await controller.create(event);
    }

    if (method === "PUT" && path === "products") {
        return await controller.update(event);
    }

    if (method === "DELETE" && path === "products" && params) {
        return await controller.delete(params);
    }

    return { statusCode: 404, body: "Not Found" };
}