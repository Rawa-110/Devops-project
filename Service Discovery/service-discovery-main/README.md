# Service Discovery Example

This project demonstrates service discovery using Consul, Node.js microservices, and an API Gateway.

**Related Project:** [Service Discovery Roadmap](https://roadmap.sh/projects/service-discovery)

## Project Structure

## Project Structure

```

api-gateway/
  gateway.js
consul/
  docker-compose.yml
services/
  service-a.js
  service-b.js
  service-c.js
```

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Getting Started

### 1. Start Consul

Navigate to the `consul` directory and run:

```sh
docker-compose up -d
```

Consul UI will be available at [http://localhost:8500](http://localhost:8500).

### 2. Start Services

In separate terminals, start each service from the `services` directory:

```sh
node service-a.js
node service-b.js
node service-c.js
```

### 3. Start API Gateway

In the `api-gateway` directory:

```sh
node gateway.js
```

### 4. Check Application Working

- Visit [http://localhost:4000/service-a/info](http://localhost:4000/service-a/info)
- Visit [http://localhost:4000/service-b/info](http://localhost:4000/service-b/info)
- Visit [http://localhost:4000/service-c/info](http://localhost:4000/service-c/info)

You should receive a JSON response with the service name and timestamp.

##