const request = require("request");

_EXTERNAL_URL = "http://api.zippopotam.us/us/90210";

const callExternalApiUsingRequest = (callback) => {
  request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

module.exports.callApi = callExternalApiUsingRequest;
