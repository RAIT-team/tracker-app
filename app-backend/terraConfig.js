const { default: Terra } = require("terra-api");

const API_KEY = "OAdpqscL1RpXLlJ36LeW5kS2NWP3KUHF";
const DEV_ID = "rait-prod-QQNbCoqZZL";
const SECRET = "<Your Signing secret>";

const terra = new Terra("DEV_ID", "API_KEY", "SECRET");

terra.getProviders().then((p) => {
  console.log(p);
});

// dev_id = rait-prod-QQNbCoqZZL
// api_key = OAdpqscL1RpXLlJ36LeW5kS2NWP3KUHF
