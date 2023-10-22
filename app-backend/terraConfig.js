const express = require("express");
const bodyParser = require("body-parser");
const { default: Terra } = require("terra-api");

const API_KEY = "OAdpqscL1RpXLlJ36LeW5kS2NWP3KUHF";
const DEV_ID = "rait-prod-QQNbCoqZZL";
const SECRET = "a763a835aade669eb5117443f9641b25f7473fa8d108f098";

const terra = new Terra("DEV_ID", "API_KEY", "SECRET");

const app = express();
var options = {
  inflate: true,
  limit: "4000kb",
  type: "application/json",
};

app.use(bodyParser.raw(options));

app.post("/consumeTerraWebhook", function (req, res) {
  res.sendStatus(200);
  const data = JSON.parse(req.body);
  console.log(JSON.stringify(data));
  try {
    const verified = terra.checkTerraSignature(
      req.headers["terra-signature"],
      req.body
    );
  } catch (err) {
    const verified = false;
  }
});

terra.getProviders().then((p) => {
  console.log(p);
});
const fetch = require("node-fetch");

const url = "https://webhook.site/958117e9-d028-4244-81df-8da653c05487";

// dev_id = rait-prod-QQNbCoqZZL
// api_key = OAdpqscL1RpXLlJ36LeW5kS2NWP3KUHF
