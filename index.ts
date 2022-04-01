import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
  const message = "Im full-stack developer"
  const response = {
    statusCode: 200,
    body: message,
  };
  return response;
};