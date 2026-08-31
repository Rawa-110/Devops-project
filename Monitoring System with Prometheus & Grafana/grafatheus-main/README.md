# Monitoring System with Prometheus & Grafana

This project sets up a comprehensive monitoring system using **Prometheus** for metric collection and **Grafana** for visualization. It provides real-time insights into the health and performance of your server infrastructure, including system metrics (CPU, memory, disk, network) and application-specific metrics (using custom exporters).

## 🚀 **Getting Started**

Follow the steps below to set up and run the monitoring system on your machine.

### 1. **Clone the Repository**
First, clone the repository to your local machine:
```bash
git clone https://github.com/PeymanSohi/grafatheus
cd grafatheus
```

### 2. **Set Up Custom Exporter (Python)**
If you're running the custom Python exporter to collect application-specific metrics, follow these steps:

#### Create a Virtual Environment:
```bash
cd custom-exporters
python3 -m venv venv
```

#### Activate the Virtual Environment:

- On **Linux/macOS**:
  ```bash
  source venv/bin/activate
  ```

- On **Windows**:
  ```bash
  venv\Scripts\activate
  ```

#### Install the Dependencies:
```bash
pip install -r requirements.txt
```

#### Run the Exporter:
```bash
python app.py
```

This will start an HTTP server on `http://localhost:9200/metrics` that exposes the custom metrics.

---

### 3. **Start Docker Compose Stack**
To run Prometheus, Grafana, and the exporters (Node Exporter and NGINX Exporter), use Docker Compose. From the root directory, run:

```bash
docker-compose up -d
```

This will start the following services:

- **Prometheus**: Access it via `http://localhost:9090`
- **Grafana**: Access it via `http://localhost:3000` (default username: `admin`, password: `admin`)
- **Node Exporter**: Exposes metrics at `http://localhost:9100/metrics`
- **NGINX Exporter**: Exposes metrics at `http://localhost:9113/metrics`

---

### 4. **Add Prometheus as a Data Source in Grafana**
- Go to Grafana at `http://localhost:3000`.
- Log in with the default credentials (`admin` / `admin`).
- Go to **Settings → Data Sources**.
- Add **Prometheus** as the data source.
  - Set **URL** to `http://prometheus:9090`.
  - Click **Save & Test**.

---

### 5. **Import Dashboards in Grafana**
Grafana dashboards for system and application metrics are available in the `dashboards/` directory.

To import dashboards:
- Go to **Dashboards → Import**.
- Upload the `system.json` or `app-metrics.json` files from the `dashboards/` directory.
- Ensure the Prometheus data source is selected.

---

### 6. **Explore Metrics**
You can now explore metrics in Grafana dashboards or directly in the Prometheus UI (`http://localhost:9090`).

Some example queries in Prometheus:

- `node_cpu_seconds_total`
- `your_custom_metric`
- `nginx_connections_active`

---

## 🧹 **Stop and Clean Up**
To stop and remove the containers:
```bash
docker-compose down
```

---

## ⚙️ **GitHub Actions CI Workflow**

This repository includes a GitHub Actions workflow to test the Python custom exporter. The action will:

- Create a virtual environment
- Install dependencies
- Run the exporter
- Verify that the `/metrics` endpoint is reachable

The workflow runs on every push and pull request to the `custom-exporters/` directory.

You can view the workflow in the `.github/workflows/python-exporter.yml` file.

---

## 🛠 **Tech Stack**

- **Prometheus**: Open-source system monitoring and alerting toolkit.
- **Grafana**: Open-source data visualization and monitoring platform.
- **Node Exporter**: System metrics exporter for Prometheus.
- **NGINX Exporter**: Prometheus exporter for NGINX.
- **Python Exporter**: Custom application-specific metrics exporter using `prometheus_client`.
- **Docker**: To containerize the services and simplify deployment.

---


https://roadmap.sh/projects/monitoring