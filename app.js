const apiCallFromRequest = require("./getRequest");
const apiCallFromNode = require("./getHTTP");

const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/request") {
      apiCallFromRequest.callApi((response) => {
        res.write(JSON.stringify(response));
        res.end();
      });
    } else if (req.url === "/node") {
      apiCallFromNode.callApi((response) => {
        res.write(response);
        res.end();
      });
    }
  })
  .listen(3001);

console.log("Running on port 3001.....");
