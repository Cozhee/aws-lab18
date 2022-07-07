const dynamoose = require('dynamoose')


const personSchema = new dynamoose.Schema({
    id: String,
    name: String,
    age: String
})

const personModel = dynamoose.model('davisrcody-lab18', personSchema)

exports.handler = async (event) => {

    console.log(event.queryStringParameters)

    let response = {}

    try {
        let peopleRecords = await personModel.scan().exec()
        response.statusCode = 200
        response.body = JSON.stringify(peopleRecords)
    } catch(e) {
        console.error(e)
        response.statusCode = 500
        response.body = JSON.stringify(e.message)
    }

    return response;
};
