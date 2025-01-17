---
title: Observe Ballerina programs with DataDog
description: See how Ballerina supports observability by exposing itself via metrics and tracing to DataDog.
keywords: ballerina, observability, metrics, tracing, datadog
permalink: /learn/observe-ballerina-programs-with-datadog/
active: observe-ballerina-programs-with-datadog
intro: The sections below include information about how to observe Ballerina programs with DataDog.
---

Users can observe Ballerina programs with [DataDog](https://www.datadoghq.com/), which is a comprehensive observability and monitoring platform for cloud-scale applications. It provides developers, IT operations teams, and business users with tools to monitor, troubleshoot, and optimize performance across their entire technology stack, including applications, servers, databases, and services. Both metrics and tracing in Ballerina can be viewed with DataDog.

This [Example](<LINK_TO_OVERVIEW_OF_BALLERINA_OBSERVABILITY_PAGE_EXAMPLE_SECTION>) will be used in the guide. Follow the steps given below to observe Ballerina tracing and metrics in DataDog.

Create a new account in DataDog. Select a billing plan according to your needs (A free plan is also included).

Then follow the steps below to set up your Datadog account to view metrics and tracing provided by Ballerina.

1. Add Prometheus to the Integrations for your account

   You need to add Prometheus in the Integrations. Please go to the “Integrations” tab and search for Prometheus.

   ![Adding Prometheus in DataDog Integrations](/learn/images/datadog-add-prometheus.png "Adding Prometheus in DataDog Integrations")

2. Create an API key

    You need to create an API key for the DataDog agent. To create an API key,

    > **Click Profile → Organization Settings → API keys**

    ![Creating an API key in DataDog](/learn/images/datadog-creating-apikey.png "Creating an API key in DataDog")

### Step 2 - Set up the DataDog agent

After setting up your DataDog account, you need to set up a DataDog Agent in your instance.

You can follow this [documentation](https://docs.datadoghq.com/agent/?tab=Linux) to get started with the DataDog agent on your local machine.

You need to include the API key you generated in your DataDog account to `datadog.yaml` in the `datadog-agent/etc` folder.

Then follow the steps below to configure metrics and tracing data publishing to DataDog.

1. Add configuration for metrics

    Once you add Prometheus by following step 1, you will get a guide to configure a DataDog agent in your instance.

    ![Prometheus configurations for DataDog agent](/learn/images/datadog-agent-prometheus-configurations.png "Prometheus configurations for DataDog agent")

    You can follow the instructions given in the above configuration to set up a DataDog agent.

    A sample of the conf.yaml file which you should include in the prometheus.d folder can be found here.

    ```yaml
    init_config:

    instances:
      - prometheus_url: http://localhost:9797/metrics
        namespace: ballerina
        metrics:
          - response_time_seconds_value
          - response_time_seconds_max
          - response_time_seconds_min 
          - response_time_seconds_mean  
          - response_time_seconds_stdDev
          - response_time_seconds
          - response_time_nanoseconds_total_value
          - requests_total_value
          - response_errors_total_value 
          - inprogress_requests_value
          - kafka_publishers_value
          - kafka_consumers_value
          - kafka_errors_value  
        headers:
        Accept: "text/plain; version=0.0.4"
    ```

2. Add configuration for tracing

    You need to use the following configurations in the `datadog.yaml`.

    To view traces in DataDog, we need to enable the APM (Application Performance Monitoring) in your DataDog agent.

    ```yaml
    apm_config:
    enabled: true
    ```

    Ballerina uses OpenTelemetry to provide traces. Therefore, we need to set up OpenTelemetry configurations as follows.

    ```yaml
    otlp_config:
        receiver:
            protocols:
                grpc:
                endpoint: 0.0.0.0:4317
    ```

### Step 3 - Import Ballerina Prometheus and Jaeger extensions

To include the Prometheus and Jaeger extensions into the executable, the `ballerinax/prometheus` and `ballerinax/jaeger` modules need to be imported into your Ballerina project `main.bal` file.

```ballerina
import ballerinax/prometheus as _;
import ballerinax/jaeger as _;
```

To support Prometheus as the metrics reporter, an HTTP endpoint starts with the context of `/metrics` in default port 9797 when starting the Ballerina service.

Jaeger extension has an `Opentelemetry GRPC Span Exporter` which will push tracing data as batches to the endpoint (default - http://localhost:4317) in opentelemetry format.

### Step 4 - Configure Ballerina runtime configurations

Tracing and metrics can be enabled in your Ballerina project using configurations similar to the following in your `Config.toml` file.

```toml
[ballerina.observe]
tracingEnabled=true
tracingProvider="jaeger"
metricsEnabled=true
metricsReporter="prometheus"

[ballerinax.prometheus]
port=9797
host="0.0.0.0"

[ballerinax.jaeger]
agentHostname="localhost"
agentPort=4317
samplerType="const"
samplerParam=1.0
reporterFlushInterval=2000
reporterBufferSize=1000
```

The table below provides the descriptions of each configuration option and possible values that can be assigned.

Configuration key | Description | Default value | Possible values 
--- | --- | --- | --- 
ballerinax.prometheus. port | The value of the port to which the '/metrics' service will bind. This service will be used by Prometheus to scrape the information of the Ballerina service. | `9797` | Any suitable value for port 0 - 0 - 65535. However, within that range, ports 0 - 1023 are generally reserved for specific purposes, therefore it is advisable to select a port without that range. 
ballerinax.prometheus. host | The name of the host to which the '/metrics' service will bind. This service will be used by Prometheus to scrape the information of the Ballerina service. | `0.0.0.0` | IP or Hostname or 0.0.0.0 of the node in which the Ballerina service is running.
ballerinax.jaeger. agentHostname | Hostname of the Jaeger agent | localhost | IP or hostname of the Jaeger agent. If it is running on the same node as Ballerina, it can be localhost. 
ballerinax.jaeger. agentPort | Port of the Jaeger agent | 4317 | The port on which the Jaeger agent is listening.
ballerinax.jaeger. samplerType | Type of the sampling methods used in the Jaeger tracer. | const | `const`, `probabilistic`, or `ratelimiting`.
ballerinax.jaeger. samplerParam | It is a floating value. Based on the sampler type, the effect of the sampler param varies | 1.0 | For `const` `0` (no sampling) or `1` (sample all spans), for `probabilistic` `0.0` to `1.0`, for `ratelimiting` any positive integer (rate per second).
ballerinax.jaeger. reporterFlushInterval | The Jaeger client will be sending the spans to the agent at this interval. | 2000 | Any positive integer value.
ballerinax.jaeger. reporterBufferSize | Queue size of the Jaeger client. | 1000 | Any positive integer value.

### Step 5 - Run the Ballerina service

When Ballerina observability is enabled, the Ballerina runtime collects tracing and metrics data and will be published to DataDog.

Run the following command to start the Ballerina service.

```
$ bal run

Compiling source

Running executable

ballerina: started Prometheus HTTP listener 0.0.0.0:9797
ballerina: started publishing traces to Jaeger on localhost:4317
```

### Step 6 - Send requests
 
Send requests to <http://localhost:8090/shop/products>.

Example cURL commands:

```
$ curl -X GET http://localhost:8090/shop/products
```
```
$ curl -X POST http://localhost:8090/shop/product \
-H "Content-Type: application/json" \
-d '{
    "id": 4, 
    "name": "Laptop Charger", 
    "price": 50.00
}'
```
```
$ curl -X POST http://localhost:8090/shop/order \
-H "Content-Type: application/json" \
-d '{
    "productId": 1, 
    "quantity": 1
}'
```
```
$ curl -X GET http://localhost:8090/shop/order/1
```

### Step 7 - View metrics on DataDog

You can observe the metrics in the DataDog platform under the `Metrics` tab in the left navigation.

![Metrics Explorer in DataDog](/learn/images/datadog-metrics-explorer.png "Metrics Explorer in DataDog")

You can add filters and use functions in the DataDog to visualize what you want with the metrics provided by Ballerina.

Ballerina provides a [dashboard](https://raw.githubusercontent.com/ballerina-platform/module-ballerinax-prometheus/refs/heads/main/metrics-dashboards/datadog/ballerina_metrics_dashboard.json) in the DataDog to observe metrics in Ballerina applications.

You can add a new dashboard in the DataDog under the `Dashboards` tab in the left navigation. After creating the new dashboard, go to the `Configure` tab in the dashboard. Import the `dashboard.json` file provided above.

![Importing a dashboard json](/learn/images/datadog-importing-dashboard.png "Importing a dashboard json")

The Ballerina Dashboard in the DataDog will be displayed as below.

![Ballerina Dashboard in DataDog](/learn/images/datadog-metrics-dashboard-1.png "Ballerina Dashboard in DataDog")
![Ballerina Dashboard in DataDog](/learn/images/datadog-metrics-dashboard-2.png "Ballerina Dashboard in DataDog")

### Step 8 - View tracing on DataDog

To view traces of the Ballerina application, go to **APM → Traces** in the DataDog.

![Trace Explorer in DataDog](/learn/images/datadog-trace-explorer.png "Trace Explorer in DataDog")

You can filter the traces with the service name, resource, operation name, span kind, etc.

![Filter traces in DataDog](/learn/images/datadog-filter-traces.png "Filter traces in DataDog")

Once you select a trace, you can get more information with the tags attached to the span.


![Span tags for a given span](/learn/images/datadog-span-tags.png "Span tags for a given span")
