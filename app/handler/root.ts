import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda'

// MEMO: cloudwatchによるチェックを一瞬で返すためのエンドポイント
export const index: Handler = (event: APIGatewayEvent, _context: Context, cb: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event
    })
  }

  cb(null, response)
}
