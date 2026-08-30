const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3003;
const SERVICE_NAME = "service-c";

app.get("/info", (req, res) => {
  res.json({ service: SERVICE_NAME3, timestamp: new Date().toISOString() });
});

app.listen(PORT, async () => {
  console.log(`${SERVICE_NAME} running on port ${PORT}`);

  // Register service with Consul
  await axios.put(`http://localhost:8500/v1/agent/service/register`, {
    Name: SERVICE_NAME3,
    ID: SERVICE_NAME3,
    Address: "localhost",
    Port: PORT,
    Check: {
      HTTP: `http://localhost:${PORT}/info`,
      Interval: "10s"
    }
  });
});
