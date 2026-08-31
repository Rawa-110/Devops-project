from prometheus_client import start_http_server, Gauge
import random
import time

metric = Gauge('your_custom_metric', 'Example custom metric')

if __name__ == '__main__':
    start_http_server(9200)
    while True:
        metric.set(random.uniform(0, 100))
        time.sleep(5)
