const DynamoProductRepository = require("./src/adapters/repositories/DynamoProductRepository");

const CreateProduct = require("./src/application/useCases/CreateProduct");
const GetProduct = require("./src/application/useCases/GetAllProduct");

const ProductController = require("./src/adapters/controllers/ProductController");

const repository = new DynamoProductRepository();

const useCases = {
    create: new CreateProduct(repository),
    get: new GetProduct(repository)
}

const controller = new ProductController(useCases);

exports.handler = async (event) => {
    console.log(JSON.stringify(event, null, 2));
    
    const routeKey = event.routeKey;

    if (routeKey === "GET /products") {
        return await controller.getAll();
    }

    if (routeKey === "POST /products") {
        return await controller.create(event);
    }

    return { statusCode: 404, body: "Not Found" };
}