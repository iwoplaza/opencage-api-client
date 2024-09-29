const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // console.log('Will throw an error');
  const error = new Error(response.statusText);
  error.status = {
    code: response.status,
    message: response.statusText,
  };
  // error.response = response;
  throw error;
};

const parseJSON = (response) => response.json();

const fetchUrl = (url) => fetch(url);

module.exports = (url, resolve, reject) =>
  fetch(url)
    .then((r) => r.json())
    .then(resolve)
    .catch(reject);
// exports below for unit test purposes
module.exports.fetchUrl = fetchUrl;
module.exports.parseJSON = parseJSON;
module.exports.checkStatus = checkStatus;
