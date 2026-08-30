const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 4000;

// Discover service from Consul
async function getService(serviceName) {
  const res = await axios.get(`http://localhost:8500/v1/catalog/service/${serviceName}`);
  if (res.data.length > 0) {
    const service = res.data[0];
    return `http://${service.Address}:${service.ServicePort}`;
  }
  throw new Error(`Service ${serviceName} not found`);
}

// Route requests
app.get("/:service/info", async (req, res) => {
  try {
    const serviceUrl = await getService(req.params.service);
    const response = await axios.get(`${serviceUrl}/info`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
