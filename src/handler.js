let messages = require('./message');

const getMessage = (request, h) => {
  console.log("get message")
    const response = h.response(messages)
    response.code(200)
    return response

}

const postMessage = (request,h) => {
  const { messageData } = request.payload
  

    //messages = {}

    const newData = {
      message: messageData
    }
    messages = newData
    const response = h.response({
      currentMessage: newData,
    })
    

    console.log('response:',messages)
    console.log('----------------------')

    response.code(200)
    return response;
}

module.exports = {
  getMessage,
  postMessage,
};
