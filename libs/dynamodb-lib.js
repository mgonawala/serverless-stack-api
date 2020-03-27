import AWS from "aws-sdk";

export function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient(
        {region: 'us-east-1',
            accessKeyId: process.env.awsAccessKey,
            secretAccessKey: process.env.awsSecretKey}
    );

    return dynamoDb[action](params).promise();
}