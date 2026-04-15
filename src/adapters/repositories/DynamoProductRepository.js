require("dotenv").config();
const dynamo = require("../../infrastructure/aws/dynamoClient");

class DynamoProductRepository {
    constructor() {
        this.tableName = process.env.DYNAMODB_TABLE_NAME;
    }

    async create(product) {
        await dynamo.put({
            TableName: this.tableName,
            Item: product,
        }).promise();
        
        return product;
    }    
    
    // need to avoid using scan command
    async getAll() {
        const result = await dynamo.scan({
            TableName: this.tableName
        }).promise();

        return result.Items;
    }

    async getById(id) {
        const result = await dynamo.get({
            TableName: this.tableName,
            Key: { id },
        }).promise();

        return result.Item;
    }

    async update(product) {
        await dynamo.put({
            TableName: this.tableName,
            Item: product,
        }).promise();

        return product;
    }

    async delete(id) {
        await dynamo.delete({
            TableName: this.tableName,
            Key: { id },
        }).promise();
    }
}

module.exports = DynamoProductRepository;