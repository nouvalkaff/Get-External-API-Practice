const https = require("https");

const exLink = "https://api.zippopotam.us/us/90210";

https
  .get(exLink, (res) => {
    let body = "";

    res.on("data", (data) => {
      body += data;
    });

    res.on("end", () => {
      dataOutput = JSON.parse(body);
      console.log(dataOutput);
      const placeName = dataOutput.places[0]["place name"];
      console.log(placeName);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
