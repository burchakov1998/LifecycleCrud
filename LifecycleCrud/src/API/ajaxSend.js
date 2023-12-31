const ajaxSend = async (options) => {
  const URL = "http://localhost:7070/"
  const requestUrl = `${URL}?${options.query}`;

  const request = await fetch(requestUrl, {
    method: options.method,
    body: options.data ? options.data : null,
  });

  console.log(request, "request");
  const response = await request.json();
  console.log(response, "response");
  if (options.callback) {
    options.callback(response);
  }

  return response;
};

export default ajaxSend;
