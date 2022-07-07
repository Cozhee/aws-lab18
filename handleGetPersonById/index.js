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
        let fetchedPerson = await personModel.get({"id": id})
        response.statusCode = 200;
        response.body = JSON.stringify(fetchedPerson);

    } catch(e){
        console.error(e);
        response.statusCode = 500;
        response.body = JSON.stringify(e.message);
    }

    return response;
};