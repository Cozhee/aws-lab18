const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
    id: String,
    name: String,
    age: String,
});

// create model
const personModel = dynamoose.model('davisrcody-lab18', personSchema);

exports.handler = async (event) => {

    let { id } = event.queryStringParameters;
    let response = {};

    try {
        let deletedPerson = await personModel.delete({"id": id})
        response.statusCode = 200;
        response.body = JSON.stringify(deletedPerson);

    } catch(e){
        console.error(e);
        response.statusCode = 500;
        response.body = JSON.stringify(e.message);
    }

    return response;
};