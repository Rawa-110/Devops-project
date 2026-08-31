# Monitoring System Architecture

## Components

- **Prometheus**: Scrapes metrics from exporters and custom endpoints.
- **Grafana**: Visualizes metrics from Prometheus.
- **Node Exporter**: System-level metrics.
- **NGINX Exporter**: Exposes Nginx stats.
- **Custom Exporter**: Application-specific metrics via Python script.

## Flow

1. Exporters expose metrics on `/metrics`
2. Prometheus scrapes those endpoints
3. Grafana queries Prometheus for visualization
