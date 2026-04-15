const DynamoProductRepository = require("./src/adapters/repositories/DynamoProductRepository");

const CreateProduct = require("./src/application/useCases/CreateProduct");
const GetAllProduct = require("./src/application/useCases/GetAllProduct");
const GetProductById = require("./src/application/useCases/GetProductById");
const DeleteProduct = require("./src/application/useCases/DeleteProduct");

const ProductController = require("./src/adapters/controllers/ProductController");

const repository = new DynamoProductRepository();

const useCases = {
    create: new CreateProduct(repository),
    get: new GetAllProduct(repository),
    getById: new GetProductById(repository),
    delete: new DeleteProduct(repository)
}

const controller = new ProductController(useCases);

exports.handler = async (event) => {
    console.log(JSON.stringify(event, null, 2));
    console.log("event.requestContext.http.method === " + event.requestContext.http.method); // correto
    console.log("rawPath === " + event.rawPath); // correto

    const method = event.requestContext.http.method;
    const [ , , path, params] = event.rawPath.split("/");
    console.log("path === " + path)

    if (method === "GET" && path === "products") {
        return await controller.getAll();
    } 

    if (method === "GET" && path === "products" && params) {
        return await controller.getById();
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