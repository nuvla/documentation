export const mockMarketplaceAppsData = {
  "count" : 17,
  "acl" : {
    "query" : [ "group/nuvla-user" ],
    "add" : [ "group/nuvla-user" ]
  },
  "resource-type" : "module-collection",
  "id" : "module",
  "resources" : [ {
    "valid" : true,
    "description" : "# Prometheus Node Exporter\n\n\nPrometheus Node Exporter is a powerful tool that helps you monitor and collect metrics from your system's hardware and operating system. \nWith this app, you can easily expose a wide range of system-level metrics, including CPU usage, memory usage, disk I/O statistics, network activity, and more.\n\nThe Prometheus Node Exporter app provides a simple and efficient way to collect and analyze system metrics at the edge. It is designed to work seamlessly with [Prometheus Monitoring Dashboard](https://nuvla.io/ui/apps/sixsq/monitoring-dashboard/?apps-tab=overview), and can be easily integrated with other monitoring tools and dashboards.\n\nNote: This version runs as a container with docker-compose",
    "path" : "sixsq/prometheus-node-exporter",
    "tags" : [ "monitoring", "prometheus" ],
    "license" : {
      "url" : "https://sixsq.com/legal/generic-apps-license.html",
      "name" : "Nuvla.io Apps 1.0",
      "description" : "Nuvla.io License for Apps 1.0"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-04-15T10:31:14.230Z",
    "name" : "Prometheus Node Exporter",
    "created" : "2023-03-01T14:49:52.124Z",
    "parent-path" : "sixsq",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "owners" : [ "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "delete" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-acl" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "manage" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-meta" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c"
    }, {
      "rel" : "delete",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/prometheus-logo-vignette.png",
    "versions" : [ {
      "href" : "module-application/2f23edb8-1808-4684-8315-efa39f305e74",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/4f2c5a23-3186-4734-9852-9607cda5d0d1",
      "author" : "group/sixsq-vendor",
      "commit" : "adding port variable",
      "published" : false
    }, {
      "href" : "module-application/456454d0-986e-4c6a-9391-b8cd494072a6",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/4f213a8a-1c67-4f43-8fee-5a8a0425b1fb",
      "author" : "group/sixsq-vendor",
      "commit" : "Set the price and the image version",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MjehsHG9PNMTNBOHz1bNw1D",
      "product-id" : "prod_NUdz9uKADd0tyV",
      "account-id" : "acct_1Hvm9aQnlRSicN2f",
      "cent-amount-daily" : 10,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : false,
    "description" : "# Prometheus Monitoring Dashboard\n\nThe Prometheus Monitoring Dashboard app combines the power of Prometheus with the advanced visualization capabilities of Grafana.\n\nIt is designed to work with multiple node exporters, each can be deployed with the [Prometheus Node Exporter](https://nuvla.io/ui/apps/sixsq/prometheus-node-exporter/) app. This means you can monitor and analyze the performance of multiple systems from a single dashboard.\n\nThis app provides a comprehensive and powerful monitoring and analysis environment that can help you optimize the performance of your edge computing solution.\n\nFor convinience this app also integrate a Prometheus Node Exporter instance.",
    "path" : "sixsq/monitoring-dashboard",
    "tags" : [ "monitoring", "dashboard", "prometheus" ],
    "license" : {
      "url" : "https://sixsq.com/legal/sixsq-apps-license.html",
      "name" : "SixSq Apps 1.0",
      "description" : "SixSq License for Apps 1.0"
    },
    "compatibility" : "swarm",
    "updated" : "2023-03-09T14:43:39.765Z",
    "name" : "Prometheus Monitoring Dashboard",
    "created" : "2023-02-24T15:24:12.270Z",
    "parent-path" : "sixsq",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a",
    "validation-message" : "argument of type 'int' is not iterable",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "owners" : [ "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "delete" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-acl" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "manage" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-meta" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a"
    }, {
      "rel" : "delete",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/prometheus%20resized.png",
    "versions" : [ {
      "href" : "module-application/0d9a78fc-3d45-435f-80a7-811a984b309a",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "removed cadvisor",
      "published" : false
    }, {
      "href" : "module-application/13188cd7-129d-4890-ab90-91f031ff2931",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding default dashboard",
      "published" : false
    }, {
      "href" : "module-application/652350b9-6eb0-495d-b46f-2ef7ce8f2de6",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fixed local-dashboards.yml",
      "published" : true
    } ],
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "Collects, stores and performs real-time analysis on the measurement results (sent by the QoSAgent). Offers **real-time observability** using ready-to-use dashboards to view results and get insights on network and application latency. Offers open APIs to export data. Pre-packaged with InfluxDB and Grafana Open Source components. Easy to deployed as a Docker image.\n\nImportant technical notes:\n\n* For IP ports to open on the Analyzer, please refer to [Prerequisites](https://docs.latence.ca/02-prerequisites-and-assumptions/)\n* For an explanation of the Analyzer Dashboard, please refer to [Dashboard Explanations](https://docs.latence.ca/05-dashboard-explanation/)\n\nFor more details, your can also refer to our generic documentation [docs.latence.ca](https://docs.latence.ca). Note that this documentation contains certains steps that are not required in this packaging for Nuvla.io\n\nRefer to link for details in the [End User License Agreement EULA](https://www.latencetech.com/eula)\n\n&copy; LatenceTech Technologies Inc., 2022",
    "path" : "latencetech/analyzer",
    "tags" : [ "Real-time", "Dashboards", "Time-Series Database", "Latency Analytics" ],
    "license" : {
      "url" : "https://latencetech.com/eula/",
      "name" : "LatenceTech EULA",
      "description" : "LatenceTech EULA"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-01-24T21:19:30.898Z",
    "name" : "LatenceTech Analyzer",
    "created" : "2022-11-27T05:38:45.658Z",
    "parent-path" : "latencetech",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/15bf2c99-6ef8-4268-882a-c2cb2579eb17",
    "created-by" : "user/d08e3f6a-9127-4eea-bc8b-894bee4b2433",
    "id" : "module/84a0ed01-dcc3-4602-9165-f97d469cace0",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/latencetech-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://latencetech.com/wp-content/uploads/2022/12/Analyzer-icon-Ssmall2.png",
    "versions" : [ {
      "href" : "module-application/4c69ac6d-ce0b-40ea-8932-c2126536b1e5",
      "author" : "group/latencetech-vendor",
      "commit" : "first version",
      "published" : false
    }, {
      "href" : "module-application/5654bc2c-47ab-4243-ac80-16d0c20c9703",
      "author" : "group/latencetech-vendor",
      "commit" : "license"
    }, {
      "href" : "module-application/6440546f-79c7-42c2-810d-ed443311f6fd",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/63728e03-c867-4b50-a044-8ad79c12c54f",
      "author" : "group/latencetech-vendor",
      "commit" : "clean docker-compose",
      "published" : false
    }, {
      "href" : "module-application/8de2b72d-97c2-4499-af10-b19579a663e5",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/2db2e0b4-ea5b-422c-833c-912124acd2cb",
      "author" : "group/latencetech-vendor",
      "commit" : "cleaned docker-compose",
      "published" : false
    }, {
      "href" : "module-application/adfabc99-bfc7-442b-9e49-0369f42b276b",
      "author" : "group/latencetech-vendor",
      "commit" : "added registry",
      "published" : false
    }, {
      "href" : "module-application/651be362-b311-4c1d-b7f1-eeacf45bfaeb",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/80dd7949-c4a2-4a5a-bb96-256db4ae53f2",
      "author" : "group/latencetech-vendor",
      "commit" : "fixed docker-compose",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MAc3dHG9PNMTNBOaEEWLCzE",
      "product-id" : "prod_MuQv4tdyGBGE89",
      "account-id" : "acct_1MAaxHH9O7SWT6yt",
      "cent-amount-daily" : 830,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "Target or End Point for the QoS Agent, responds to requests and returns QoS and Latency measurements in near real-time. A Reflector can support multiple agents. Packaged as a Docker image.\n\nFor more details, please refer to [docs.latence.ca](https://docs.latence.ca)\n\nRefer to link for details in the [End User License Agreement EULA](https://www.latencetech.com/eula)\n\n&copy; LatenceTech Technologies Inc., 2022",
    "path" : "latencetech/reflector",
    "tags" : [ "Reflector", "Latency Measurements", "Real-time" ],
    "license" : {
      "url" : "https://latencetech.com/eula/",
      "name" : "LatenceTech EULA",
      "description" : "LatenceTech EULA"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-01-13T12:33:31.190Z",
    "name" : "LatenceTech Reflector",
    "created" : "2022-11-23T23:49:39.997Z",
    "parent-path" : "latencetech",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/d08e3f6a-9127-4eea-bc8b-894bee4b2433",
    "created-by" : "user/d08e3f6a-9127-4eea-bc8b-894bee4b2433",
    "id" : "module/7a5fa8f0-85d6-423c-bc59-6189f8033355",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/latencetech-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://latencetech.com/wp-content/uploads/2022/12/Reflector-icon-Ssmall2.png",
    "versions" : [ {
      "href" : "module-application/4afdec95-63d6-409a-9749-127a6b08d054",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/11f39b30-a5ab-4174-8231-fa8747e7e890",
      "author" : "group/latencetech-vendor",
      "commit" : "added network capability",
      "published" : true
    }, {
      "href" : "module-application/c76fbf7e-005f-4842-b9ee-c6801949f4a3",
      "author" : "group/latencetech-vendor",
      "commit" : "network mode : host",
      "published" : true
    }, {
      "href" : "module-application/04f5e838-bf9d-415b-92d5-2ea681db0d6e",
      "author" : "group/latencetech-vendor",
      "commit" : "nuvla license key",
      "published" : true
    }, {
      "href" : "module-application/ced462d9-36e4-4e06-8d3d-9b69c9bfcd10",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/d760f707-0df8-4bf8-aafe-5fb0f16da9e7",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/7157c8cf-cfdd-4a41-9d7b-d0990c03a916",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/b66766db-5e97-44dc-a4d9-5f7db3e09cf3",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/7114f653-7afc-4a24-925c-b3a0f96eced3",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/4e94aae8-c3df-476b-ad62-564e9d6ad297",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/b9334908-9734-4051-bbd5-fac64df43273",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/20c2c27c-5b88-45eb-9070-4cfc521ce232",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/f8d413a5-6f9e-4e4b-90a8-cf5b4db9b403",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/633783e3-baa5-472e-8721-f1b7211cdf09",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/87dc7620-c7a8-45f5-84c6-b8075833f0e0",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/b0326a1a-9ddc-449b-8ed7-523331498869",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/f5df96c8-10ce-4342-8c89-a1264db48745",
      "author" : "group/latencetech-vendor",
      "commit" : "updated registry",
      "published" : true
    }, {
      "href" : "module-application/45d9b5e9-90f3-41f9-bd08-a2b1e4300951",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MAc4CHG9PNMTNBObKYiDykP",
      "product-id" : "prod_MuQwo4A9H4c6wE",
      "account-id" : "acct_1MAaxHH9O7SWT6yt",
      "cent-amount-daily" : 10,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "Collects Quality of Service (QoS) measurements in near real-time by using the **Reflector**. Then it sends the results to the **Analyzer** platform. Supports ICMP, TCP/UDP, HTTP/S, TWAMP, Traceroute and Iperf3 protocols for latency, bandwidth, network path and reliability measurements. Easy to deploye, as a Docker image, on 5G modem or connected device, or EDGE node, VM, OpenShift, etc.\n\nFor more details, please refer to [docs.latence.ca](https://docs.latence.ca)\n\nRefer to link for details in the [End User License Agreement EULA](https://www.latencetech.com/eula)\n\n&copy; LatenceTech Technologies Inc., 2022",
    "path" : "latencetech/latencetech",
    "tags" : [ "Latency Measurement", "Real-time" ],
    "license" : {
      "url" : "https://latencetech.com/eula/",
      "name" : "LatenteTech EULA",
      "description" : "LatenceTech EULA"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-01-13T12:33:59.194Z",
    "name" : "LatenceTech QoSAgent",
    "created" : "2022-09-15T13:01:12.874Z",
    "parent-path" : "latencetech",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/d08e3f6a-9127-4eea-bc8b-894bee4b2433",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/800dea65-fd4f-4e13-b44a-daca420f8225",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/latencetech-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "group/sixsq-vendor" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "group/sixsq-vendor" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "group/sixsq-vendor" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://latencetech.com/wp-content/uploads/2022/12/QoSAgent-icon-Ssmall2.png",
    "versions" : [ {
      "href" : "module-application/184d6a76-2622-44cc-becd-8803c5958117",
      "author" : "group/latencetech-vendor",
      "commit" : "placeholder",
      "published" : false
    }, {
      "href" : "module-application/20907854-dd31-4d80-93a0-c85e869ae6f3",
      "author" : "group/latencetech-vendor",
      "commit" : "first version",
      "published" : false
    }, {
      "href" : "module-application/34623b05-caf1-4b6c-9262-018390b06657",
      "author" : "group/latencetech-vendor",
      "commit" : "light parameters"
    }, {
      "href" : "module-application/d4218be1-58ce-4370-ab2c-06b7287bbf53",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/c98f24b9-8132-4365-880c-e671f8bf32a2",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/1fb314da-5f33-4c06-b15b-ab31e36139e7",
      "author" : "group/latencetech-vendor",
      "commit" : "1.4.0",
      "published" : false
    }, {
      "href" : "module-application/7e0c9860-a254-4d6f-afc8-f3f1a3be956b",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/66b97801-7df8-4b64-849e-fe05999a6524",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/423fcdf1-4224-4dcb-ac75-c933827481db",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/3a7c5777-2160-4e34-912b-20b39df6e7b1",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/54cc796c-a0da-4301-8245-44f176f14058",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/3a226a60-ba2e-478e-8844-29a04721fb62",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/17a24150-0ea9-41f1-a6dc-f309beb6ac37",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/c18f1209-745e-42a7-a523-b6c8c013d7e6",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/50fc5f0e-fdfd-4c57-98f3-8404efc05568",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/5efde92d-27aa-419b-8380-7b9c5534a044",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/34a3f4b4-c09d-4a10-b9e3-2746082ed3fe",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/d8d2b4e7-b6fc-4af7-a1a9-77b7f9d07a81",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/b17f5ac7-0d34-40cf-927f-556d7fadea37",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/4e5640e3-bede-4257-a3d4-88577b37d755",
      "author" : "group/latencetech-vendor",
      "commit" : "removed obsolete env variables",
      "published" : false
    }, {
      "href" : "module-application/e89fb609-3873-439f-83a1-b09144f740a9",
      "author" : "group/latencetech-vendor",
      "commit" : "removed obsolete env variables",
      "published" : false
    }, {
      "href" : "module-application/05018a1d-07fc-48b1-8c2c-5a419e8d8cd8",
      "author" : "group/latencetech-vendor",
      "commit" : "added registry",
      "published" : false
    }, {
      "href" : "module-application/b52bb6c8-eb15-4847-ba87-34d803eab987",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MAc4eHG9PNMTNBO8UoijupM",
      "product-id" : "prod_MuQw2NnQzi2O38",
      "account-id" : "acct_1MAaxHH9O7SWT6yt",
      "cent-amount-daily" : 165,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "The ReliVision app from Relimetrics is hardware and image-modality agnostic and applicable across different use cases,\nenabling quality automation and smart manufacturing without writing a single line of code.\n\nMore details at [www.relimetrics.com](https://www.relimetrics.com/).",
    "path" : "relimetrics/relimetrics",
    "compatibility" : "swarm",
    "updated" : "2023-01-31T13:54:36.015Z",
    "name" : "ReliVision",
    "created" : "2022-09-14T12:52:36.666Z",
    "parent-path" : "relimetrics",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/relimetrics-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175"
    }, {
      "rel" : "delete",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175/delete-version"
    } ],
    "logo-url" : "https://i.ytimg.com/vi/q1ZyiezByGE/maxresdefault.jpg",
    "versions" : [ {
      "href" : "module-application/eee50b44-5640-4284-9f47-2469fa1621aa",
      "author" : "group/relimetrics-vendor",
      "commit" : "placeholder",
      "published" : true
    } ],
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "## Net-Tracer\n\nNet-Tracer is the best way to detect, diagnose and resolve performance issues impacting your business. See what drives degradations in SaaS and web apps, user experience, hybrid networks and cloud infrastructure.\n\n### Pricing\n\nNet-Tracer pricing is based on the number of tests executed per month. This is defined by:\n* the frequency of the tests: (1, 5, 15, 20, 30 minutes)\n* the number of test origin-destination pairs (test origin/tester \u2192 application/target):\n  * Net-Tracer is the test origin (this app's location)\n  * Target applicaton(s) are configured in the Kadiska platform\n* See our [documentation](https://docs.kadiska.com) for details\n\n#### Pricing Tiers - Application Test Targets\n~~~\n    \u2264 5 Targets: \u20AC144/month - Price indicated in Nuvla.io marketplace\n( 5,10] Targets: \u20AC180/month - Contact us to enable\n(10,25] Targets: \u20AC216/month - Contact us to enable\n(10,25] Targets: \u20AC288/month - Contact us to enable\n~~~\n\n#### Volume Discounts - Deployment Locations (Net-Tracer \"sites\")\n~~~\n     \u2264 25 Sites:  0%\n( 25, 50] Sites: 20% - Contact us for coupon code\n( 50,100] Sites: 30% - Contact us for coupon code\n(100,250] Sites: 40% - Contact us for coupon code\n    > 250 Sites: __% - Contact us\n~~~\n**See below** for platform and contact information.\n\n#### Note:\n\nNet-Tracer is free to download and deploy. Billing is based on usage as described above. An account on the Kadiska platform is required to use Net-Tracer to configure it, collect data, and report results. Please contact Kadiska to setup an account. \n\n[Start a Free Trial](https://kadiska.com/start-a-free-trial/) or [Contact Kadiska](https://kadiska.com/company/contact-us/)",
    "path" : "kadiska/kadiska",
    "license" : {
      "url" : "https://learn.kadiska.com/terms-and-conditions",
      "name" : "Kadiska Terms and Conditions",
      "description" : "Kadiska Terms and Conditions for Net-Tracer App"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-03-13T11:27:21.899Z",
    "name" : "Net-Tracer",
    "created" : "2022-09-13T17:37:56.636Z",
    "parent-path" : "kadiska",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "owners" : [ "group/kadiska-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "delete" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "edit-acl" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "manage" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "edit-meta" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b"
    }, {
      "rel" : "delete",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-kadiska.png",
    "versions" : [ {
      "href" : "module-application/0e496404-a082-4835-b28a-3fb9b79e7211",
      "author" : "group/kadiska-vendor",
      "commit" : "placeholder",
      "published" : false
    }, {
      "href" : "module-application/cfe9c67f-d8da-47f6-8764-84f4881efc52",
      "author" : "group/kadiska-vendor",
      "commit" : "added kadiska compose file "
    }, {
      "href" : "module-application/ee72d7ba-bf81-4ad8-b2d6-e3f40894f314",
      "author" : "group/kadiska-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/b699e595-d1dd-486a-9645-24883ddd3a3a",
      "author" : "group/kadiska-vendor",
      "commit" : "fixed env"
    }, {
      "href" : "module-application/910dee1f-97bb-47c6-bfa6-991ba8d934eb",
      "author" : "group/kadiska-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/3e2c4d30-02a9-4ed7-ae3d-43a7c045712e",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding privileged: true",
      "published" : false
    }, {
      "href" : "module-application/21c62238-fbfc-419d-b828-dce33818b65a",
      "author" : "group/sixsq-vendor",
      "commit" : "adding watchtower param description",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MeZczHG9PNMTNBOKW27qqzr",
      "product-id" : "prod_NPOPBq2aYuFbFC",
      "account-id" : "acct_1MNLUSH7UWDhXmAZ",
      "cent-amount-daily" : 480,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "### Varnish Enterprise 6\n\nA supercharged version of Varnish Cache, for accelerating content delivery while protecting web services.\n\nVarnish Enterprise is a powerful, feature-rich reverse proxy and HTTP accelerator that speeds up websites and reduces streaming latency to deliver a great web experience to all users, at all times. Varnish caching technology is trusted by millions of websites worldwide to reduce backend server load by up to 99% while delivering all types of content much faster.\n\nFrom the team behind the popular open-source Varnish Cache, Varnish Enterprise adds more features, more power and more flexibility for scaling up web services while protecting critical infrastructure. With enterprise-grade features and security at pay-as-you-go prices, it is the easy way to expand your reach and resilience while reducing the complexity of your web operations. You can even use it to build your own CDN.\n\nFull support is also available, with the Varnish team helping you deliver web services with high performance, reliability, security and scale. Visit us at [https://www.varnish-software.com/support/](https://www.varnish-software.com/support/) to activate support.\n\nFor a complete feature list, go to [https://www.varnish-software.com/softwareandvmods/](https://www.varnish-software.com/softwareandvmods/).\n\nVarnish is a registered trademark of Varnish Software AB and its affiliates\n\n[Learn more](https://www.varnish-software.com/varnish-cache/)\n\n**About Varnish Software Inc.**\n\nVarnish Software is a pioneer in high-performance content delivery. Powered by a uniquely flexible caching technology, our solutions are the indispensable common denominator among the world\u2019s most popular brands, such as Nikon, Sky, Emirates and Tesla. We are the company behind Varnish Cache.",
    "path" : "varnish/varnishcache",
    "license" : {
      "url" : "https://varnish-software-eula.s3.amazonaws.com/20210618/Varnish_Cloud_Subscription_and_Services_Agreement_20210618.pdf",
      "name" : "Varnish Cloud Subscription and Services Agreement"
    },
    "compatibility" : "swarm",
    "updated" : "2023-01-30T12:59:29.828Z",
    "name" : "Varnish Enterprise 6",
    "created" : "2022-09-05T12:27:12.437Z",
    "parent-path" : "varnish",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/sixsq-vendor", "group/varnish-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "group/project-5gemerge-sf2" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "group/project-5gemerge-sf2" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "group/project-5gemerge-sf2" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6"
    }, {
      "rel" : "delete",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-varnish.png",
    "versions" : [ {
      "href" : "module-application/294cf8a6-fc42-47b9-8330-92100709033d",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "first version with hardcoded hostname. This should be moved to env. variable"
    }, {
      "href" : "module-application/92076716-05cd-459e-8c61-07606b225f83",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "added env var"
    }, {
      "href" : "module-application/9dd2788b-6dee-4e8b-bae0-61b6a5b19204",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fixed the compose file version"
    }, {
      "href" : "module-application/f00e1448-12f5-4bfc-8c5c-ced13d2acecf",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reused a varnish docker compose file"
    }, {
      "href" : "module-application/c4aa3eab-6652-4856-b994-da96684cd3d6",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "removed composed commands"
    }, {
      "href" : "module-application/586c2ba8-6033-4842-8a77-d03a0bdb06f5",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fixed path"
    }, {
      "href" : "module-application/dc067857-6339-4e02-a44b-796b77b97fac",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "cleanup"
    }, {
      "href" : "module-application/ebde4a10-72e9-4f0d-8f1b-bf7fcc04989e",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding default vcl"
    }, {
      "href" : "module-application/24e3aee4-a562-4251-aeb8-2a1db0303165",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding config"
    }, {
      "href" : "module-application/ce38c02f-472a-4793-b255-221db37a92f4",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "try one more time to copy the config file"
    }, {
      "href" : "module-application/15888ef2-d87f-4f0c-8c80-8d5a357ce096",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fixed the config syntax"
    }, {
      "href" : "module-application/9087e8ad-703b-4d7d-ba4b-b1014dc1a530",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "removed the size param"
    }, {
      "href" : "module-application/3fa66caf-dfd0-4683-9575-769b26e58403",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "removed a command"
    }, {
      "href" : "module-application/91ec549d-5c44-45c1-bd0e-c4df9fce946f",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding httpd service"
    }, {
      "href" : "module-application/f2da23bd-92bf-441a-bf7b-ff663c7adee5",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "changed port to avoid conflict"
    }, {
      "href" : "module-application/29bf2613-79f5-4fce-92d2-1cb553ea0c4b",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "switched to latest varnish image"
    }, {
      "href" : "module-application/e015355c-f77e-4fd4-8b6b-f5792e2adb7c",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fix config"
    }, {
      "href" : "module-application/d0ea4cbe-b22d-431e-91ed-49acf487d785",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "added host to cache as an env variable"
    }, {
      "href" : "module-application/4085043b-7157-4751-a39a-450bab14ed3f",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reverted",
      "published" : false
    }, {
      "href" : "module-application/7871291c-5975-43a4-89cf-3d0670aa86cc",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reverted"
    }, {
      "href" : "module-application/c831ec06-4edf-4642-9367-d52448067a0b",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reverted"
    }, {
      "href" : "module-application/ce1597fc-a659-4c3c-8373-52254ee2035e",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reverted"
    }, {
      "href" : "module-application/d3c72197-d2c1-46c4-aa24-80f98ae660a0",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "added varnishlog command"
    }, {
      "href" : "module-application/732d460d-9249-43c5-8c1e-c538c52fe9b4",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "only varnishlog"
    }, {
      "href" : "module-application/abb111d7-d613-45d4-996a-514f1e5eb0c9",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fixed the command"
    }, {
      "href" : "module-application/20ea33eb-78a8-4710-8816-322d783be708",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "removed varnishlog"
    }, {
      "href" : "module-application/d9d63ecd-285c-4419-9034-aaef88a62260",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding debug flag -d"
    }, {
      "href" : "module-application/d9218b4f-6aac-4e37-8f85-53719523883f",
      "author" : "group/varnish-vendor",
      "commit" : "Change to Varnish Enterprise version"
    }, {
      "href" : "module-application/1975d849-ad53-43e9-85c9-d28c732f288a",
      "author" : "group/varnish-vendor",
      "commit" : "Add log sidecar"
    }, {
      "href" : "module-application/2b263ffa-9d1b-401f-8870-26422ce771bf",
      "author" : "group/varnish-vendor",
      "commit" : "Environment to enable logging"
    }, {
      "href" : "module-application/a52ce152-bc1e-47ce-a349-1505c1363393",
      "author" : "group/varnish-vendor",
      "commit" : "Environment for logging",
      "published" : false
    }, {
      "href" : "module-application/4b4dafde-2f89-47b4-8d76-879170e56a66",
      "author" : "group/varnish-vendor",
      "commit" : "Try to fix entrypoint of logging",
      "published" : false
    }, {
      "href" : "module-application/ce126436-867e-4053-83a8-99c97fe1f740",
      "author" : "group/varnish-vendor",
      "commit" : "Logging is possible to toggle with environment variable",
      "published" : false
    }, {
      "href" : "module-application/198ce7b2-4138-4685-b7ae-7f4ee9e47f1c",
      "author" : "group/varnish-vendor",
      "commit" : "Remove public httpd port, not needed as varnishd can access http directly on docker network."
    }, {
      "href" : "module-application/90e233d9-2f47-423d-9ee5-5306e6c27b67",
      "author" : "group/varnish-vendor",
      "commit" : "Remove environment from compose since environment configuration does not pass through into container."
    }, {
      "href" : "module-application/78f3fba0-1635-4134-8514-3c5551dfe003",
      "author" : "group/varnish-vendor",
      "commit" : "Test if this passes environment correctly",
      "published" : false
    }, {
      "href" : "module-application/39d36513-6663-40de-a9cb-7744f874d3c6",
      "author" : "group/varnish-vendor",
      "commit" : "Added some useful environment variables and cut down on vcl.",
      "published" : false
    }, {
      "href" : "module-application/75939ca2-e561-44be-8506-b0ab654daf18",
      "author" : "group/varnish-vendor",
      "commit" : "changed default logging = true and fixed varnish_ncsa restart if logging = false",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MP2VMHG9PNMTNBOIzWu4zRW",
      "product-id" : "prod_N9LBsMpndzI6VF",
      "account-id" : "acct_1MOykkHHNQK89yS9",
      "cent-amount-daily" : 1875,
      "currency" : "EUR"
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# ClearBlade Intelligent Assets \n\n#### IoT, Edge and AI made simple with ClearBlade\u2019s Intelligent Assets Application.\n\n### Configure Rapidly\n\nBrownfield or greenfield \u2013 any device Asset Types like \u201CFuel Truck\u201D or \u201CCompressor\u201D. \nRules that make sense \u201CWhen the tank is low\u201D. \nAlerts over Slack, Teams, Email or Text.\n\n_A real time view of your business assets to get maximum efficiency_\n\n### Connect any asset\nClearBlade\u2019s Intelligent Assets application enables you to connect, monitor, and control any asset in your business, all without needing a computer science degree or expensive services from a systems integrator.\n\n\n[www.clearblade.com/intelligent-assets](https://www.clearblade.com/intelligent-assets/)",
    "path" : "clearblade/clearblade-intelligent-assets",
    "compatibility" : "docker-compose",
    "updated" : "2022-12-20T16:43:10.101Z",
    "name" : "ClearBlade Intelligent Assets ",
    "created" : "2022-06-08T16:33:38.181Z",
    "parent-path" : "clearblade",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/clearblade", "group/nuvla-admin" ],
      "owners" : [ "group/clearblade-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/clearblade", "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "delete" : [ "group/clearblade", "group/nuvla-admin" ],
      "view-meta" : [ "group/clearblade", "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "edit-acl" : [ "group/clearblade", "group/nuvla-admin" ],
      "view-data" : [ "group/clearblade", "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "manage" : [ "group/clearblade", "group/nuvla-admin" ],
      "edit-meta" : [ "group/clearblade", "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da"
    }, {
      "rel" : "delete",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-clearblade.png",
    "versions" : [ {
      "href" : "module-application/7aca0f5f-6f21-4b51-952e-62004996a2ba",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/f226de72-51b8-4707-9162-3385cc1defe1",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/918f38d1-73f6-4619-8ade-a82d053ff4af",
      "author" : "group/nuvla-admin",
      "commit" : "Initial commit"
    }, {
      "href" : "module-application/02991ea4-0e5a-4408-8675-bbbc9b5ecaaf",
      "author" : "group/nuvla-admin",
      "commit" : "adding default IP address"
    }, {
      "href" : "module-application/08c1164e-3e0a-4d72-8d8a-b250a7f37946",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/b8cc47ce-b4f1-4889-973d-48f69d3587e8",
      "author" : "group/clearblade-vendor",
      "commit" : "no commit message"
    } ],
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# AI EdgeLabs cyber security sensors\n\n### What is AI EdgeLabs?\n\nAI EdgeLabs is a powerful and autonomous cybersecurity AI platform that helps security teams respond immediately to ongoing attacks and protect Edge/IoT infrastructures against malware, DDoS, botnets, and other threats. AI EdgeLabs delivers cybersecurity measures by bringing network visibility, early threat detection, and automated incident response in the Edge and on-prem environments.\n\n### Sensor\n#### How does the AI EdgeLabs Sensor work?\n\nThe EdgeLabs Sensor is a proprietary network telemetry and monitoring agent that continuously analyzes and models network behavior of a particular Edge node. It holds an AI-powered model stack that continuously checks inbound and outbound connectivity via pre-trained AI models.\n\nWith EdgeLabs Sensor, infrastructure teams can locate hidden network threats and zero-day attacks that might cause business disruption. The sensor models normal and abnormal connectivity states and immediately reports them to Operation teams with cause and recommends remediation actions for the incidents.\n\nDuring the first deployment, the EdgeLabs Sensor runs a configurable set of security checks and topology research to collect the initial context of the environment. Collected data is then analyzed by the EdgeLabs AI Platform\u2122 (ELAP).\n\nELAP provides a set of AI-based models which are pre-trained in the existing knowledge base of threat patterns and attack signatures; this pre-training is always done centrally on ELAP. By running these collections from a fleet of well-distributed/placed EdgeLabs Sensors, the AI Security team can dramatically improve the precision with which they instrument, monitor, and maintain their application delivery infrastructure.\n\n![AI EdgeLabs](https://sos-ch-gva-2.exo.io/nuvla-images/ai_edgelabs_sensor.svg)\n\n[edgelabs.ai/platform](https://edgelabs.ai/platform/)",
    "path" : "ai-edgelabs/ai-edgelabs-sensors",
    "license" : {
      "url" : "https://edgelabs.ai/terms-and-conditions/",
      "name" : "AI EdgeLabs Terms and Conditions",
      "description" : "AI EdgeLabs Terms and Conditions"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-02-03T16:26:34.159Z",
    "name" : "AI EdgeLabs sensors",
    "created" : "2022-06-08T15:59:54.894Z",
    "parent-path" : "ai-edgelabs",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/2baaa349-9691-4c85-a1e2-d8eb9a6cfd80",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/ai-edgelabs-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://sixsq.com/assets/img/logo-ai-edgelabs.png",
    "versions" : [ {
      "href" : "module-application/195b09c4-101f-43f5-a16b-1d8d85018e5f",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/3ce3ef7f-4de5-4041-8568-df8434ff28b4",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/48bf5bc4-242d-400f-aac1-4baa9f6d74af",
      "author" : "group/ai-edgelabs-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/955a04b7-fdaa-4bf9-8a2f-186486375fb9",
      "author" : "group/ai-edgelabs-vendor",
      "commit" : "alpha"
    }, {
      "href" : "module-application/ee285008-b706-4289-84da-c965c74643b9",
      "author" : "lionel@sixsq.com",
      "commit" : "Use multi-arch image"
    }, {
      "href" : "module-application/6cacacb7-12b5-4797-a595-377ae16abe2b",
      "author" : "lionel@sixsq.com",
      "commit" : "Rename SENSOR_KEY to API_KEY",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MXS5tHG9PNMTNBOHIQefZKD",
      "product-id" : "prod_NI2A8e6ievzGb6",
      "account-id" : "acct_1MRftMQc0fBTNwa0",
      "cent-amount-daily" : 330,
      "currency" : "EUR",
      "follow-customer-trial" : false
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# Cybus Connectware\n#### The software to digitize your production in only a few weeks\n\n\n### Pave the way for digitization\n#### No more fragmented data flow and lock-ins\nThe slow pace of digitalization is caused by several barriers such as the heterogeneity of production environments, security concerns, working across data silos or missing communication between OT and IT. Factories also experience technical debts from the historically grown production infrastructure. Resulting vendor lock-ins could hinder the integration of new and more competitive technologies for future development.\n\n### A factory full of knowledge\n#### No more sunk cost or data loss\n\nInitial digital projects implemented without a central database tend to create an inconsistent and fragmented data flow between production and IT. The results are blind spots in production processes and data silos. This not only hinders deployment, but also the piloting of additional use cases. By contrast, with a common data infrastructure, you reduce hidden costs and the loss of valuable knowledge.\n\n\n### Easy digitalization with a seamless data flow\n#### The Smart Factory data infrastructure fully integrates production and IT\n\nThe modern software solution provides a shared data basis with applicable real-time data. The typical barriers are dissolved as Connectware connects your production with your IT, every application and every system. The central data source provides all assets and resources to digitize your factory \u2013 all from one software.\n\n![cybus connectware data infrastructure logo](https://www.cybus.io/wp-content/uploads/2022/04/cybus-connectware-data-infrastructure-logo.png)\n\n[www.cybus.io/en/product/cybus-connectware/](https://www.cybus.io/en/product/cybus-connectware/)",
    "path" : "cybus/cybus-connectware",
    "compatibility" : "swarm",
    "updated" : "2022-12-20T15:57:18.064Z",
    "name" : "Cybus Connectware",
    "created" : "2022-06-08T15:25:09.018Z",
    "parent-path" : "cybus",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/536de66b-0efd-4f30-8851-40300f4b53a2",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/cybus-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2"
    }, {
      "rel" : "delete",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-cybus.png",
    "versions" : [ {
      "href" : "module-application/13429f86-c58c-4ada-9241-fed10da8f370",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/2c9432a6-18e3-41e9-8a08-893d8a880b48",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/d58042dd-a88d-4ee9-8817-4f3685e58f9a",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/79b6e0d1-2473-43f4-8753-2b19762d4b66",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : true
    } ],
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# ENTERA\n\n#### The Most Advanced GDPR-compliant video analytics platform in the world.\n#### What. Where. When. How...Never Who.\n\nProprietary 100% FACELESS AI\u2122\n- 360-degree behavioral analysis including journey, dwell, engagement, and touch\n- Patented Faceless Socio-Demographic classification\n- Patented Faceless Camera-to-Camera re-connection\n- GDPR Compliance by Design\n\nRevolutionary AUTOFOCUS\u2122 Self-Learning AI\n\n- Take Full Advantage of Existing Commodity Video Security Infrastructure\n- Patented Technology guarantees accuracy under all camera and lighting conditions\n- Full Audit Capability for All Key Analysis Points\n\n_A Wide Breadth of Solutions and Applications_\n\n_The ENTERA\u2122 feature-set is the most comprehensive in the industry and empowers our business partners and customers with mission-critical data in real-time._\n\n[www.c2ro.com/entera](https://www.c2ro.com/entera)",
    "path" : "c2ro/entera-video-analytics-agent",
    "license" : {
      "url" : "https://sixsq.com/legal/generic-apps-license.html",
      "name" : "Nuvla.io Apps 1.0",
      "description" : "Nuvla.io License for Apps 1.0"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-01-20T16:40:54.509Z",
    "name" : "C2RO ENTERA Video Analytics Agent",
    "created" : "2022-06-08T15:07:53.671Z",
    "parent-path" : "c2ro",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/532d0646-9e25-4215-be1c-c584554d7448",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/6e14a44a-1182-47e0-adc3-983ecdee4630",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/c2ro-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/6e14a44a-1182-47e0-adc3-983ecdee4630"
    }, {
      "rel" : "delete",
      "href" : "module/6e14a44a-1182-47e0-adc3-983ecdee4630"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/6e14a44a-1182-47e0-adc3-983ecdee4630/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/6e14a44a-1182-47e0-adc3-983ecdee4630/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/6e14a44a-1182-47e0-adc3-983ecdee4630/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/6e14a44a-1182-47e0-adc3-983ecdee4630/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/c2ro-entera.jpeg",
    "versions" : [ {
      "href" : "module-application/72fe69e2-6289-449a-9bc7-c0a392397f81",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/5068ae80-0763-4630-8392-a41b54208f10",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/f0ffe51f-f21f-440c-ae51-437bb853d88c",
      "author" : "group/c2ro-vendor",
      "commit" : "added basic docker ",
      "published" : true
    }, {
      "href" : "module-application/c53acc6b-efbd-4d60-9cca-ca0756383cce",
      "author" : "group/c2ro-vendor",
      "commit" : "added exposed port to expose feed",
      "published" : true
    }, {
      "href" : "module-application/24490b76-9b04-4e33-ab01-9b8cdfc06017",
      "author" : "group/c2ro-vendor",
      "commit" : "explicitly declare ENV variable ",
      "published" : true
    }, {
      "href" : "module-application/dd61f6d4-aca9-4463-934a-9bd62bbaf270",
      "author" : "group/c2ro-vendor",
      "commit" : "Added parameter to control frame rate "
    }, {
      "href" : "module-application/3fe6c40e-cdd1-49c3-836a-d821ee1564ba",
      "author" : "group/c2ro-vendor",
      "commit" : "added the parameter to compose "
    }, {
      "href" : "module-application/e33a6978-4b47-4a3e-b626-57e87e50f604",
      "author" : "group/c2ro-vendor",
      "commit" : "Param FRAME_RATE",
      "published" : true
    } ],
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# MJPG-Streamer for NuvlaBox\n\nThis application will deploy an mjpg-streamer server on a NuvlaBox. It allow to retreive video stream from an USB camera and expose it as an MJPG stream over HTTP. \n\nBy default, the app is conected to the NuvlaBox's shared network.",
    "path" : "lionel/tests/mjpgstreamer-for-nuvlabox",
    "compatibility" : "docker-compose",
    "updated" : "2022-04-05T15:05:19.293Z",
    "name" : "MJPG-Streamer for NuvlaBox",
    "created" : "2021-09-01T04:44:20.110Z",
    "parent-path" : "lionel/tests",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/8fbc737d-3201-493f-90e7-376f8d759d15",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "view-acl" : [ "group/ekinops", "group/nuvla-admin", "group/sixsq-vendor" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/ekinops", "group/nuvla-admin", "group/nuvla-user", "group/sixsq-vendor" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/ekinops", "group/nuvla-admin", "group/nuvla-user", "group/sixsq-vendor" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://media.giphy.com/media/JTmtoOQi4eveoiAcoo/giphy.gif",
    "versions" : [ {
      "href" : "module-application/4ac77b22-f152-4045-b100-98ef1b6cb867",
      "author" : "lionel@sixsq.com",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/90dc7205-1456-45e5-8344-dc6e66aa1974",
      "author" : "lionel@sixsq.com",
      "commit" : "minor bugfix"
    }, {
      "href" : "module-application/77cf9f04-ba2b-4547-8a90-d6e12026989d",
      "author" : "lionel@sixsq.com",
      "commit" : "Remove INTERNAL_PORT"
    }, {
      "href" : "module-application/9f1dea86-833b-4f93-a215-1c31fe07888f",
      "author" : "lionel@sixsq.com",
      "commit" : "Remove EXTERNAL_PORT"
    }, {
      "href" : "module-application/4d368f96-4751-41bd-bd5e-253e5bb5c005",
      "author" : "lionel@sixsq.com",
      "commit" : "Add 8881 as external port"
    }, {
      "href" : "module-application/fa5b5773-a71a-42eb-a310-c20096dff4d8",
      "author" : "lionel@sixsq.com",
      "commit" : "fix stream url",
      "published" : true
    } ],
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# Traffic Based Lighting\n\n### Next-generation solution for smart, efficient street lighting\n\nElektron and SixSq launch the first industrialized traffic-based lighting solution in Switzerland.\n\nElektron teamed up with software technology expert and CERN spin-off SixSq to create a next-generation connected Smart Street Lighting solution.\n\n**TrafficDim** is the first industrialized solution of its kind and was developed 100% in Switzerland.\nThe solution has been specially engineered for major traffic axes - where it pays off most to reduce energy and light pollution.\n\nGeneva / Au (ZH) \u2013 Elektron has been testing traffic-dependent lighting control systems in various pilot projects (W\u00E4denswil/Smart City Lab Basel Wolf) for some time now. Right from the start, Elektron worked closely with cantonal civil engineering offices and traffic engineers, as they already use traffic sensor technology for their analyses. Now Elektron has teamed up with the software technology expert and CERN spin-off SixSq. Together they developed the first industrialized traffic-based lighting solution in Switzerland.\n\n\u201CWe had been working on the topic for some time and had examined different approaches. Only when we started the collaboration with SixSq we made progress. SixSq understood us right from the start and implemented our wishes incredibly fast and competently\u201D.\nEnrico Baumann, CEO Elektron AG\nTrafficDim is ideally suited for adjusting the light intensity on busy roads. It reduces energy consumption and light emissions while complying with the applicable safety standards and norms. The solution achieves this by controlling street lighting based on real-time traffic monitoring. The data is automatically analyzed on SixSq's secure edge-to-cloud management platform Nuvla.io, which allows for easy processing of the collected traffic data and continuously transmits the information to the CityTouch lighting management system to control the luminaires.\n\n\u201CI am impressed with how Elektron has leveraged Nuvla.io to create something new. With TrafficDim, ELEKTRON has integrated our real-time monitoring capabilities at the edge with the Signify CityTouch light management system to deliver an industrial scale product. This solution will make smart cities safer and more energy efficient.\u201D\nMarc-Elian B\u00E9gin, SixSq CEO and Co-founder\n\n[Press Release (EN)](https://www.elektron.ch/en/news/news/sixsq-elektron-trafficdim)\n\nDetails: [FR](https://www.elektron.ch/fr/produits-et-solutions/eclairage/routes/gestion-de-la-lumiere/trafficdim-controle) - [DE](https://www.elektron.ch/de/produkte-loesungen/licht/strassenbeleuchtung/lichtmanagement)\n\nThe TrafficDim\u2122 trademark belongs to [Elektron](https://elektron.ch). The Citytouch\u2122 trademark belongs to [Signify](https://signify.com) \n\nCopyright \u00A9 [SixSq](https://sixsq.com) ",
    "path" : "sixsq/trafficdim",
    "license" : {
      "url" : "https://sixsq.com/legal/sixsq-apps-license.html",
      "name" : "SixSq Apps 1.0",
      "description" : "SixSq License for Apps 1.0"
    },
    "compatibility" : "swarm",
    "updated" : "2022-12-21T16:15:26.386Z",
    "name" : "TrafficDim",
    "created" : "2021-05-11T17:40:04.608Z",
    "parent-path" : "sixsq",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/f820e91d-6dc9-404d-9a2c-fa11c372e2f1",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/3003848f-34fc-4dcf-922a-3da7a9e5f6c4",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "owners" : [ "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82", "user/e53f6f2e-c831-4978-b055-b4ecae38bdda" ],
      "delete" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "view-meta" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82", "user/e53f6f2e-c831-4978-b055-b4ecae38bdda" ],
      "edit-acl" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "view-data" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82", "user/e53f6f2e-c831-4978-b055-b4ecae38bdda" ],
      "manage" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "edit-meta" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/3003848f-34fc-4dcf-922a-3da7a9e5f6c4"
    }, {
      "rel" : "delete",
      "href" : "module/3003848f-34fc-4dcf-922a-3da7a9e5f6c4"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/3003848f-34fc-4dcf-922a-3da7a9e5f6c4/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/3003848f-34fc-4dcf-922a-3da7a9e5f6c4/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/3003848f-34fc-4dcf-922a-3da7a9e5f6c4/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/3003848f-34fc-4dcf-922a-3da7a9e5f6c4/delete-version"
    } ],
    "logo-url" : "https://www.elektron.ch/images/bereiche/licht/Lichtmanagement/GIF_TrafficDim_5-4.gif",
    "versions" : [ {
      "href" : "module-application/aa959678-741f-4a3a-85ed-a9bad3f06947",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/b637643a-777e-4b07-a59e-f46127703c70",
      "author" : "group/sixsq-vendor",
      "commit" : "add registry credential",
      "published" : true
    }, {
      "href" : "module-application/59c2aaa9-d246-444c-8f28-d5e2322b5dd2",
      "author" : "group/sixsq-vendor",
      "commit" : "add registry credential"
    } ],
    "price" : {
      "price-id" : "price_1IpziWHG9PNMTNBODxdwd9HV",
      "product-id" : "prod_JSvZ31R4jBgM2N",
      "account-id" : "acct_1Hvm9aQnlRSicN2f",
      "cent-amount-daily" : 100,
      "currency" : "EUR"
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# VolumLight\u00AE Application\n\nDynamic lighting, driven in real-time by the amount of trafic measured. Delivers up to 40% energy savings, completly autonomously.",
    "path" : "sixsq/volumlight",
    "license" : {
      "url" : "https://sixsq.com/legal/sixsq-apps-license.html",
      "name" : "SixSq Apps 1.0",
      "description" : "SixSq License for Apps 1.0"
    },
    "compatibility" : "swarm",
    "updated" : "2022-12-21T16:15:37.576Z",
    "name" : "VolumLight\u00AE",
    "created" : "2021-05-11T14:42:54.548Z",
    "parent-path" : "sixsq",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/f820e91d-6dc9-404d-9a2c-fa11c372e2f1",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/a08e5cd7-5346-452a-b2c2-976b6fa680e3",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "owners" : [ "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82", "user/e53f6f2e-c831-4978-b055-b4ecae38bdda" ],
      "delete" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "view-meta" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82", "user/e53f6f2e-c831-4978-b055-b4ecae38bdda" ],
      "edit-acl" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "view-data" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82", "user/e53f6f2e-c831-4978-b055-b4ecae38bdda" ],
      "manage" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "edit-meta" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/a08e5cd7-5346-452a-b2c2-976b6fa680e3"
    }, {
      "rel" : "delete",
      "href" : "module/a08e5cd7-5346-452a-b2c2-976b6fa680e3"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/a08e5cd7-5346-452a-b2c2-976b6fa680e3/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/a08e5cd7-5346-452a-b2c2-976b6fa680e3/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/a08e5cd7-5346-452a-b2c2-976b6fa680e3/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/a08e5cd7-5346-452a-b2c2-976b6fa680e3/delete-version"
    } ],
    "logo-url" : "https://www.dropbox.com/s/x0m24hrah4i2783/volumlight-200x284.png?raw=1",
    "versions" : [ {
      "href" : "module-application/e132d4d3-3efd-4d80-bbe2-eaa19b233bfd",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/11a33096-c287-4ba7-bc99-239681cd9fbb",
      "author" : "group/sixsq-vendor",
      "commit" : "Add private registry",
      "published" : true
    }, {
      "href" : "module-application/a53cd193-4a2c-4695-a992-b34529296067",
      "author" : "group/sixsq-vendor",
      "commit" : "Add private registry"
    } ],
    "price" : {
      "price-id" : "price_1IpzkzHG9PNMTNBOxUCfI3mt",
      "product-id" : "prod_JSvcCkZoiS2nMK",
      "account-id" : "acct_1Hvm9aQnlRSicN2f",
      "cent-amount-daily" : 100,
      "currency" : "EUR"
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# BlackBox to Save all Important Edge Data\n\nThis app allows users to trigger the creation of an airplane-style blackbox which archives data to the cloud. It is a valuable tool for investigating the cause of a significant event such as a crash, an accident or a cyber attack.\n\nThe app records all data it sees on the MQTT data bus, with a configurable rentention policy. This ensures the edge device does not run out of disk space.\n\nOnce triggered, the app creates the blackbox, encrypts and signs it. This way, the blackbox can only be read by the owner of the private GPG key corresponding to the public key assigned to the app. The app then delivers the blackbox to a remote S3 storage endpoint.\n\nFinally, it notifies the user that a blackbox was created and the reason why. The user can then start forensic activity to better understand the circumstances surounding the significant event that led to the trigger.\n\nTo trigger the creation of a new blackbox, simply send a message to the topic blackbox/record.\nFor example with the following command:\n\n```\nmosquitto_pub -h data-gateway -t 'blackbox/record' -m 'Alert'\n```\n\n![blackbox overview](https://sixsq.com/assets/img/blog/bb-overview.png)\n\nPrerequisites:\n- The S3 must be registered on Nuvla as an infrastructure service.\n- The S3 bucket must exist on the S3 service.\n- The S3 bucket must have CORS rules allowing download from _nuvla.io_.\n- A GPG public key must be registered on Nuvla.\n\n\u00A9 2021, SixSq SA",
    "path" : "sixsq/blackbox",
    "tags" : [ "blackbox ready" ],
    "license" : {
      "url" : "https://sixsq.com/legal/sixsq-apps-license.html",
      "name" : "SixSq Apps 1.0",
      "description" : "SixSq License for Apps 1.0"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-01-09T09:37:42.113Z",
    "name" : "BlackBox",
    "created" : "2021-04-07T14:20:10.651Z",
    "parent-path" : "sixsq",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/5aa83244-5e03-4d30-adc5-6b9cf5db1e5c",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "owners" : [ "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "delete" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "edit-acl" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "manage" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "edit-meta" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/5aa83244-5e03-4d30-adc5-6b9cf5db1e5c"
    }, {
      "rel" : "delete",
      "href" : "module/5aa83244-5e03-4d30-adc5-6b9cf5db1e5c"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/5aa83244-5e03-4d30-adc5-6b9cf5db1e5c/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/5aa83244-5e03-4d30-adc5-6b9cf5db1e5c/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/5aa83244-5e03-4d30-adc5-6b9cf5db1e5c/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/5aa83244-5e03-4d30-adc5-6b9cf5db1e5c/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/blackbox.png",
    "versions" : [ {
      "href" : "module-application/a1c61ee0-2858-4050-99be-a331b7d06d8d",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/6399968a-976e-4d50-996a-de81b078d1ac",
      "author" : "group/sixsq-vendor",
      "commit" : "Add NETWORK"
    }, {
      "href" : "module-application/41d1881c-541f-4457-896a-6024a1d8313c",
      "author" : "lionel@sixsq.com",
      "commit" : "Add Private Registry"
    }, {
      "href" : "module-application/7226f494-978e-4473-9687-d53e919aaebe",
      "author" : "lionel@sixsq.com",
      "commit" : "network external"
    }, {
      "href" : "module-application/5545bd11-5932-4253-bb6f-46f403af5c6c",
      "author" : "lionel@sixsq.com",
      "commit" : "other network format"
    }, {
      "href" : "module-application/2f33dc97-c7a2-4141-b511-60ec4f685b3d",
      "author" : "lionel@sixsq.com",
      "commit" : "network v3"
    }, {
      "href" : "module-application/49b1a1b8-3a01-4b34-8100-ca764b803f8b",
      "author" : "lionel@sixsq.com",
      "commit" : "switch to compose"
    }, {
      "href" : "module-application/fbd84b12-5e17-4445-904e-14b7f46f60ea",
      "author" : "lionel@sixsq.com",
      "commit" : "?"
    }, {
      "href" : "module-application/a0e03ed8-2d78-4294-8160-97d46cdbebaf",
      "author" : "lionel@sixsq.com",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/681fc42c-1e2f-476c-bacc-dd0502e8404a",
      "author" : "lionel@sixsq.com",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/9391b469-6192-40fb-8405-65f1678c9eff",
      "author" : "lionel@sixsq.com",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/a73098a3-24c0-4bee-a9ed-76a8966d8406",
      "author" : "lionel@sixsq.com",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/818e6671-d98a-4331-b19c-8ad4f0e0ebea",
      "author" : "lionel@sixsq.com",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/5f859cee-d17e-4a07-9a37-11db9cdac4b2",
      "author" : "lionel@sixsq.com",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/cf78bd00-5e41-43dd-a177-ca933019e142",
      "author" : "group/sixsq-vendor",
      "commit" : "Make app public to all authenticated users"
    }, {
      "href" : "module-application/8aac3f10-655b-4556-9e98-0023619b3fbd",
      "author" : "group/sixsq-vendor",
      "commit" : "Grant Nuvla access",
      "published" : false
    }, {
      "href" : "module-application/b3e7011c-2d68-4211-89f1-91d201b42d58",
      "author" : "lionel@sixsq.com",
      "commit" : "Add support for GPG signing and encryption"
    }, {
      "href" : "module-application/1aaa3787-f739-4809-acf1-2666ce9ef03f",
      "author" : "group/sixsq-vendor",
      "commit" : "Add EXTRA_ARGS",
      "published" : false
    }, {
      "href" : "module-application/15c084a2-7e54-419f-8764-1ae111616b24",
      "author" : "group/sixsq-vendor",
      "commit" : "Compatibility with v0.5.0"
    }, {
      "href" : "module-application/fbcf1d38-669d-48fb-afc8-9144dbc38f0e",
      "author" : "group/sixsq-vendor",
      "commit" : "Update default MQTT_HOST to data-gateway"
    }, {
      "href" : "module-application/3a9bda8d-35a9-4361-9a40-2de1c39b3245",
      "author" : "group/sixsq-vendor",
      "commit" : "use main tag"
    }, {
      "href" : "module-application/54639946-f374-439e-8755-e79cb963f3cb",
      "author" : "group/sixsq-vendor",
      "commit" : "Fixed env vars"
    }, {
      "href" : "module-application/ae750c2b-892a-413b-955f-bb0602c773a3",
      "author" : "group/sixsq-vendor",
      "commit" : "use tag latest",
      "published" : false
    }, {
      "href" : "module-application/16f67bd1-96c4-44d3-9054-fc3eb0b3c41a",
      "author" : "group/sixsq-vendor",
      "commit" : "Add prerequisite ",
      "published" : false
    }, {
      "href" : "module-application/84ea859e-2167-4f29-8c7e-9cff0549c0a1",
      "author" : "group/sixsq-vendor",
      "commit" : "Add prerequisite "
    }, {
      "href" : "module-application/60796334-0610-4d61-a4a9-fd8889bffd0d",
      "author" : "group/sixsq-vendor",
      "commit" : "Add prerequisite "
    }, {
      "href" : "module-application/899e7ba4-f4f9-405d-8ad7-9501e1e9d473",
      "author" : "lionel@sixsq.com",
      "commit" : "Fixed a typo in MQTT_PORT"
    }, {
      "href" : "module-application/55f90635-2a63-4594-890b-e2a690494f45",
      "author" : "lionel@sixsq.com",
      "commit" : "Use main tag",
      "published" : false
    }, {
      "href" : "module-application/b900bf63-2a45-4ef4-b409-5dc561cb223d",
      "author" : "group/nuvla-admin",
      "commit" : "Require GPG and S3",
      "published" : false
    }, {
      "href" : "module-application/743420f6-7728-4b7d-b909-568cdcf71aca",
      "author" : "group/nuvla-admin",
      "commit" : "Require GPG and S3",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1Ilc67HG9PNMTNBOJOYGeR4a",
      "product-id" : "prod_JOOtbX06Zuwn47",
      "account-id" : "acct_1Hvm9aQnlRSicN2f",
      "cent-amount-daily" : 33,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  } ],
  "operations" : [ {
    "rel" : "add",
    "href" : "module"
  } ]
};

export const mockAllAppsData = {
  "count" : 44,
  "acl" : {
    "query" : [ "group/nuvla-user" ],
    "add" : [ "group/nuvla-user" ]
  },
  "resource-type" : "module-collection",
  "id" : "module",
  "resources" : [ {
    "valid" : true,
    "description" : "# Prometheus Node Exporter\n\n\nPrometheus Node Exporter is a powerful tool that helps you monitor and collect metrics from your system's hardware and operating system. \nWith this app, you can easily expose a wide range of system-level metrics, including CPU usage, memory usage, disk I/O statistics, network activity, and more.\n\nThe Prometheus Node Exporter app provides a simple and efficient way to collect and analyze system metrics at the edge. It is designed to work seamlessly with [Prometheus Monitoring Dashboard](https://nuvla.io/ui/apps/sixsq/monitoring-dashboard/?apps-tab=overview), and can be easily integrated with other monitoring tools and dashboards.\n\nNote: This version runs as a container with docker-compose",
    "path" : "sixsq/prometheus-node-exporter",
    "tags" : [ "monitoring", "prometheus" ],
    "license" : {
      "url" : "https://sixsq.com/legal/generic-apps-license.html",
      "name" : "Nuvla.io Apps 1.0",
      "description" : "Nuvla.io License for Apps 1.0"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-04-15T10:31:14.230Z",
    "name" : "Prometheus Node Exporter",
    "created" : "2023-03-01T14:49:52.124Z",
    "parent-path" : "sixsq",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "owners" : [ "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "delete" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-acl" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "manage" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-meta" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c"
    }, {
      "rel" : "delete",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/9bebfab1-632e-499c-bf4a-847ebe06c79c/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/prometheus-logo-vignette.png",
    "versions" : [ {
      "href" : "module-application/2f23edb8-1808-4684-8315-efa39f305e74",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/4f2c5a23-3186-4734-9852-9607cda5d0d1",
      "author" : "group/sixsq-vendor",
      "commit" : "adding port variable",
      "published" : false
    }, {
      "href" : "module-application/456454d0-986e-4c6a-9391-b8cd494072a6",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/4f213a8a-1c67-4f43-8fee-5a8a0425b1fb",
      "author" : "group/sixsq-vendor",
      "commit" : "Set the price and the image version",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MjehsHG9PNMTNBOHz1bNw1D",
      "product-id" : "prod_NUdz9uKADd0tyV",
      "account-id" : "acct_1Hvm9aQnlRSicN2f",
      "cent-amount-daily" : 10,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : false,
    "description" : "# Prometheus Monitoring Dashboard\n\nThe Prometheus Monitoring Dashboard app combines the power of Prometheus with the advanced visualization capabilities of Grafana.\n\nIt is designed to work with multiple node exporters, each can be deployed with the [Prometheus Node Exporter](https://nuvla.io/ui/apps/sixsq/prometheus-node-exporter/) app. This means you can monitor and analyze the performance of multiple systems from a single dashboard.\n\nThis app provides a comprehensive and powerful monitoring and analysis environment that can help you optimize the performance of your edge computing solution.\n\nFor convinience this app also integrate a Prometheus Node Exporter instance.",
    "path" : "sixsq/monitoring-dashboard",
    "tags" : [ "monitoring", "dashboard", "prometheus" ],
    "license" : {
      "url" : "https://sixsq.com/legal/sixsq-apps-license.html",
      "name" : "SixSq Apps 1.0",
      "description" : "SixSq License for Apps 1.0"
    },
    "compatibility" : "swarm",
    "updated" : "2023-03-09T14:43:39.765Z",
    "name" : "Prometheus Monitoring Dashboard",
    "created" : "2023-02-24T15:24:12.270Z",
    "parent-path" : "sixsq",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a",
    "validation-message" : "argument of type 'int' is not iterable",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "owners" : [ "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "delete" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-acl" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "manage" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-meta" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a"
    }, {
      "rel" : "delete",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/5b5b426f-a526-4d0d-809d-cd8a77bcd41a/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/prometheus%20resized.png",
    "versions" : [ {
      "href" : "module-application/0d9a78fc-3d45-435f-80a7-811a984b309a",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "removed cadvisor",
      "published" : false
    }, {
      "href" : "module-application/13188cd7-129d-4890-ab90-91f031ff2931",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding default dashboard",
      "published" : false
    }, {
      "href" : "module-application/652350b9-6eb0-495d-b46f-2ef7ce8f2de6",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fixed local-dashboards.yml",
      "published" : true
    } ],
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "Varnish Cache is the open-source reverse HTTP proxy used by millions of websites worldwide for web acceleration and content caching. It is installed it in front of any server that speaks HTTP and is configured to cache the contents, speeding up content delivery significantly, by an impressive 300 \u2013 1000%, and reducing backend server load by up to 99%.",
    "path" : "sebtesting/varnish-cache-seb-test",
    "compatibility" : "swarm",
    "updated" : "2022-11-30T16:47:11.733Z",
    "name" : "Varnish Cache Seb Test",
    "created" : "2022-11-30T16:46:25.082Z",
    "parent-path" : "sebtesting",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/e50a683e-e3a8-4c4a-ba33-b8b1a62684bf",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "owners" : [ "group/sixsq-vendor", "group/varnish-vendor" ],
      "view-acl" : [ "group/demo-summit-north", "group/nuvla-admin", "group/project-5gemerge-sf2", "group/the-edge-event", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "delete" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-meta" : [ "group/demo-summit-north", "group/nuvla-admin", "group/project-5gemerge-sf2", "group/the-edge-event", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-acl" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-data" : [ "group/demo-summit-north", "group/nuvla-admin", "group/project-5gemerge-sf2", "group/the-edge-event", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "manage" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-meta" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/e50a683e-e3a8-4c4a-ba33-b8b1a62684bf"
    }, {
      "rel" : "delete",
      "href" : "module/e50a683e-e3a8-4c4a-ba33-b8b1a62684bf"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/e50a683e-e3a8-4c4a-ba33-b8b1a62684bf/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/e50a683e-e3a8-4c4a-ba33-b8b1a62684bf/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/e50a683e-e3a8-4c4a-ba33-b8b1a62684bf/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/e50a683e-e3a8-4c4a-ba33-b8b1a62684bf/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-varnish.png",
    "versions" : [ {
      "href" : "module-application/08816a95-c6b4-4b24-bf62-e4771ef1b6d8",
      "author" : "group/varnish-vendor",
      "commit" : "Logging is possible to toggle with environment variable"
    }, {
      "href" : "module-application/9922a881-c26f-483b-8cf2-9af2ebc65068",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "no commit message"
    } ],
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# BlackBox to Save all Important Edge Data\n\nThis app allows users to trigger the creation of an airplane-style blackbox which archives data to the cloud. It is a valuable tool for investigating the cause of a significant event such as a crash, an accident or a cyber attack.\n\nThe app records all data it sees on the MQTT data bus, with a configurable rentention policy. This ensures the edge device does not run out of disk space.\n\nOnce triggered, the app creates the blackbox, encrypts and signs it. This way, the blackbox can only be read by the owner of the private GPG key corresponding to the public key assigned to the app. The app then delivers the blackbox to a remote S3 storage endpoint.\n\nFinally, it notifies the user that a blackbox was created and the reason why. The user can then start forensic activity to better understand the circumstances surounding the significant event that led to the trigger.\n\nTo trigger the creation of a new blackbox, simply send a message to the topic blackbox/record.\nFor example with the following command:\n\n```\nmosquitto_pub -h data-gateway -t 'blackbox/record' -m 'Alert'\n```\n\n![blackbox overview](https://sixsq.com/assets/img/blog/bb-overview.png)\n\nPrerequisites:\n- The S3 must be registered on Nuvla as an infrastructure service.\n- The S3 bucket must exist on the S3 service.\n- The S3 bucket must have CORS rules allowing download from _nuvla.io_.\n- A GPG public key must be registered on Nuvla.\n\n\u00A9 2021, SixSq SA",
    "path" : "sebtesting/blackboxseb",
    "tags" : [ "blackbox ready" ],
    "license" : {
      "url" : "https://sixsq.com/legal/sixsq-apps-license.html",
      "name" : "SixSq Apps 1.0",
      "description" : "SixSq License for Apps 1.0"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-02-23T07:49:07.048Z",
    "name" : "BlackBoxSeb",
    "created" : "2022-11-30T13:52:18.146Z",
    "parent-path" : "sebtesting",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/c72d8e5d-77a9-4fea-9b49-b67562da453f",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "owners" : [ "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "delete" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "view-meta" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "edit-acl" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "view-data" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "manage" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "edit-meta" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/c72d8e5d-77a9-4fea-9b49-b67562da453f"
    }, {
      "rel" : "delete",
      "href" : "module/c72d8e5d-77a9-4fea-9b49-b67562da453f"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/c72d8e5d-77a9-4fea-9b49-b67562da453f/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/c72d8e5d-77a9-4fea-9b49-b67562da453f/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/c72d8e5d-77a9-4fea-9b49-b67562da453f/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/c72d8e5d-77a9-4fea-9b49-b67562da453f/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/blackbox.png",
    "versions" : [ {
      "href" : "module-application/4e6bf740-95c3-49d5-9eac-01979e6865d0",
      "author" : "lionel@sixsq.com",
      "commit" : "Use main tag"
    }, {
      "href" : "module-application/bcffcbed-e078-4a46-adfd-7120946e759f",
      "author" : "lionel@sixsq.com",
      "commit" : "Use main tag"
    } ],
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "Varnish Cache is the open-source reverse HTTP proxy used by millions of websites worldwide for web acceleration and content caching. It is installed it in front of any server that speaks HTTP and is configured to cache the contents, speeding up content delivery significantly, by an impressive 300 \u2013 1000%, and reducing backend server load by up to 99%.",
    "path" : "varnish/varnish-cache-open-source",
    "compatibility" : "swarm",
    "updated" : "2022-11-30T08:37:28.155Z",
    "name" : "Varnish Cache Open Source",
    "created" : "2022-11-30T08:37:28.155Z",
    "parent-path" : "varnish",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/b9a0c0ce-ee98-4fe2-a016-3b13bb80f917",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "owners" : [ "group/sixsq-vendor", "group/varnish-vendor" ],
      "view-acl" : [ "group/demo-summit-north", "group/nuvla-admin", "group/project-5gemerge-sf2", "group/the-edge-event", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "delete" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-meta" : [ "group/demo-summit-north", "group/nuvla-admin", "group/project-5gemerge-sf2", "group/the-edge-event", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-acl" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "view-data" : [ "group/demo-summit-north", "group/nuvla-admin", "group/project-5gemerge-sf2", "group/the-edge-event", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "manage" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-meta" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/b9a0c0ce-ee98-4fe2-a016-3b13bb80f917"
    }, {
      "rel" : "delete",
      "href" : "module/b9a0c0ce-ee98-4fe2-a016-3b13bb80f917"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/b9a0c0ce-ee98-4fe2-a016-3b13bb80f917/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/b9a0c0ce-ee98-4fe2-a016-3b13bb80f917/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/b9a0c0ce-ee98-4fe2-a016-3b13bb80f917/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/b9a0c0ce-ee98-4fe2-a016-3b13bb80f917/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-varnish.png",
    "versions" : [ {
      "href" : "module-application/d81e1b0f-bcbb-47ac-82cb-5d80d4bc4545",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reverted"
    } ],
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "Collects, stores and performs real-time analysis on the measurement results (sent by the QoSAgent). Offers **real-time observability** using ready-to-use dashboards to view results and get insights on network and application latency. Offers open APIs to export data. Pre-packaged with InfluxDB and Grafana Open Source components. Easy to deployed as a Docker image.\n\nImportant technical notes:\n\n* For IP ports to open on the Analyzer, please refer to [Prerequisites](https://docs.latence.ca/02-prerequisites-and-assumptions/)\n* For an explanation of the Analyzer Dashboard, please refer to [Dashboard Explanations](https://docs.latence.ca/05-dashboard-explanation/)\n\nFor more details, your can also refer to our generic documentation [docs.latence.ca](https://docs.latence.ca). Note that this documentation contains certains steps that are not required in this packaging for Nuvla.io\n\nRefer to link for details in the [End User License Agreement EULA](https://www.latencetech.com/eula)\n\n&copy; LatenceTech Technologies Inc., 2022",
    "path" : "latencetech/analyzer",
    "tags" : [ "Real-time", "Dashboards", "Time-Series Database", "Latency Analytics" ],
    "license" : {
      "url" : "https://latencetech.com/eula/",
      "name" : "LatenceTech EULA",
      "description" : "LatenceTech EULA"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-01-24T21:19:30.898Z",
    "name" : "LatenceTech Analyzer",
    "created" : "2022-11-27T05:38:45.658Z",
    "parent-path" : "latencetech",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/15bf2c99-6ef8-4268-882a-c2cb2579eb17",
    "created-by" : "user/d08e3f6a-9127-4eea-bc8b-894bee4b2433",
    "id" : "module/84a0ed01-dcc3-4602-9165-f97d469cace0",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/latencetech-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://latencetech.com/wp-content/uploads/2022/12/Analyzer-icon-Ssmall2.png",
    "versions" : [ {
      "href" : "module-application/4c69ac6d-ce0b-40ea-8932-c2126536b1e5",
      "author" : "group/latencetech-vendor",
      "commit" : "first version",
      "published" : false
    }, {
      "href" : "module-application/5654bc2c-47ab-4243-ac80-16d0c20c9703",
      "author" : "group/latencetech-vendor",
      "commit" : "license"
    }, {
      "href" : "module-application/6440546f-79c7-42c2-810d-ed443311f6fd",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/63728e03-c867-4b50-a044-8ad79c12c54f",
      "author" : "group/latencetech-vendor",
      "commit" : "clean docker-compose",
      "published" : false
    }, {
      "href" : "module-application/8de2b72d-97c2-4499-af10-b19579a663e5",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/2db2e0b4-ea5b-422c-833c-912124acd2cb",
      "author" : "group/latencetech-vendor",
      "commit" : "cleaned docker-compose",
      "published" : false
    }, {
      "href" : "module-application/adfabc99-bfc7-442b-9e49-0369f42b276b",
      "author" : "group/latencetech-vendor",
      "commit" : "added registry",
      "published" : false
    }, {
      "href" : "module-application/651be362-b311-4c1d-b7f1-eeacf45bfaeb",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/80dd7949-c4a2-4a5a-bb96-256db4ae53f2",
      "author" : "group/latencetech-vendor",
      "commit" : "fixed docker-compose",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MAc3dHG9PNMTNBOaEEWLCzE",
      "product-id" : "prod_MuQv4tdyGBGE89",
      "account-id" : "acct_1MAaxHH9O7SWT6yt",
      "cent-amount-daily" : 830,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "Target or End Point for the QoS Agent, responds to requests and returns QoS and Latency measurements in near real-time. A Reflector can support multiple agents. Packaged as a Docker image.\n\nFor more details, please refer to [docs.latence.ca](https://docs.latence.ca)\n\nRefer to link for details in the [End User License Agreement EULA](https://www.latencetech.com/eula)\n\n&copy; LatenceTech Technologies Inc., 2022",
    "path" : "latencetech/reflector",
    "tags" : [ "Reflector", "Latency Measurements", "Real-time" ],
    "license" : {
      "url" : "https://latencetech.com/eula/",
      "name" : "LatenceTech EULA",
      "description" : "LatenceTech EULA"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-01-13T12:33:31.190Z",
    "name" : "LatenceTech Reflector",
    "created" : "2022-11-23T23:49:39.997Z",
    "parent-path" : "latencetech",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/d08e3f6a-9127-4eea-bc8b-894bee4b2433",
    "created-by" : "user/d08e3f6a-9127-4eea-bc8b-894bee4b2433",
    "id" : "module/7a5fa8f0-85d6-423c-bc59-6189f8033355",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/latencetech-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://latencetech.com/wp-content/uploads/2022/12/Reflector-icon-Ssmall2.png",
    "versions" : [ {
      "href" : "module-application/4afdec95-63d6-409a-9749-127a6b08d054",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/11f39b30-a5ab-4174-8231-fa8747e7e890",
      "author" : "group/latencetech-vendor",
      "commit" : "added network capability",
      "published" : true
    }, {
      "href" : "module-application/c76fbf7e-005f-4842-b9ee-c6801949f4a3",
      "author" : "group/latencetech-vendor",
      "commit" : "network mode : host",
      "published" : true
    }, {
      "href" : "module-application/04f5e838-bf9d-415b-92d5-2ea681db0d6e",
      "author" : "group/latencetech-vendor",
      "commit" : "nuvla license key",
      "published" : true
    }, {
      "href" : "module-application/ced462d9-36e4-4e06-8d3d-9b69c9bfcd10",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/d760f707-0df8-4bf8-aafe-5fb0f16da9e7",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/7157c8cf-cfdd-4a41-9d7b-d0990c03a916",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/b66766db-5e97-44dc-a4d9-5f7db3e09cf3",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/7114f653-7afc-4a24-925c-b3a0f96eced3",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/4e94aae8-c3df-476b-ad62-564e9d6ad297",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/b9334908-9734-4051-bbd5-fac64df43273",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/20c2c27c-5b88-45eb-9070-4cfc521ce232",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/f8d413a5-6f9e-4e4b-90a8-cf5b4db9b403",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/633783e3-baa5-472e-8721-f1b7211cdf09",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/87dc7620-c7a8-45f5-84c6-b8075833f0e0",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/b0326a1a-9ddc-449b-8ed7-523331498869",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/f5df96c8-10ce-4342-8c89-a1264db48745",
      "author" : "group/latencetech-vendor",
      "commit" : "updated registry",
      "published" : true
    }, {
      "href" : "module-application/45d9b5e9-90f3-41f9-bd08-a2b1e4300951",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MAc4CHG9PNMTNBObKYiDykP",
      "product-id" : "prod_MuQwo4A9H4c6wE",
      "account-id" : "acct_1MAaxHH9O7SWT6yt",
      "cent-amount-daily" : 10,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# What is nginx?\n\nNginx (pronounced \"engine-x\") is an open source reverse proxy server for HTTP, HTTPS, SMTP, POP3, and IMAP protocols, as well as a load balancer, HTTP cache, and a web server (origin server). \n\nThe nginx project started with a strong focus on high concurrency, high performance and low memory usage. \n\nIt is licensed under the 2-clause BSD-like license and it runs on Linux, BSD variants, Mac OS X, Solaris, AIX, HP-UX, as well as on other *nix flavors.",
    "path" : "examples/nginx",
    "license" : {
      "url" : "https://opensource.org/licenses/BSD-2-Clause",
      "name" : "BSD-2 Clause",
      "description" : "The 2-Clause BSD License"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-04-15T10:45:08.166Z",
    "name" : "Nginx",
    "created" : "2022-10-10T12:34:15.334Z",
    "parent-path" : "examples",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/96f09292-6aa4-49e1-a5d6-e0fb90fbf787",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "owners" : [ "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "manage" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ],
      "edit-meta" : [ "group/nuvla-admin", "group/sixsq-devs", "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/96f09292-6aa4-49e1-a5d6-e0fb90fbf787"
    }, {
      "rel" : "delete",
      "href" : "module/96f09292-6aa4-49e1-a5d6-e0fb90fbf787"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/96f09292-6aa4-49e1-a5d6-e0fb90fbf787/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/96f09292-6aa4-49e1-a5d6-e0fb90fbf787/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/96f09292-6aa4-49e1-a5d6-e0fb90fbf787/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/96f09292-6aa4-49e1-a5d6-e0fb90fbf787/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/nginx-logo-vignette.png",
    "versions" : [ {
      "href" : "module-application/2a8201dc-4db2-4700-a837-a1a2975bea4e",
      "author" : "lionel@sixsq.com",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/205e93d6-12e9-48fe-954c-64c96a761a4d",
      "author" : "lionel@sixsq.com",
      "commit" : "Switch to docker-compose"
    }, {
      "href" : "module-application/d3e91f51-abef-475e-ba23-752eddaafa2d",
      "author" : "lionel@sixsq.com",
      "commit" : "updated port definition"
    } ],
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "Collects Quality of Service (QoS) measurements in near real-time by using the **Reflector**. Then it sends the results to the **Analyzer** platform. Supports ICMP, TCP/UDP, HTTP/S, TWAMP, Traceroute and Iperf3 protocols for latency, bandwidth, network path and reliability measurements. Easy to deploye, as a Docker image, on 5G modem or connected device, or EDGE node, VM, OpenShift, etc.\n\nFor more details, please refer to [docs.latence.ca](https://docs.latence.ca)\n\nRefer to link for details in the [End User License Agreement EULA](https://www.latencetech.com/eula)\n\n&copy; LatenceTech Technologies Inc., 2022",
    "path" : "latencetech/latencetech",
    "tags" : [ "Latency Measurement", "Real-time" ],
    "license" : {
      "url" : "https://latencetech.com/eula/",
      "name" : "LatenteTech EULA",
      "description" : "LatenceTech EULA"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-01-13T12:33:59.194Z",
    "name" : "LatenceTech QoSAgent",
    "created" : "2022-09-15T13:01:12.874Z",
    "parent-path" : "latencetech",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/d08e3f6a-9127-4eea-bc8b-894bee4b2433",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/800dea65-fd4f-4e13-b44a-daca420f8225",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/latencetech-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "group/sixsq-vendor" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "group/sixsq-vendor" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-nuvlabox", "group/nuvla-user", "group/sixsq-vendor" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://latencetech.com/wp-content/uploads/2022/12/QoSAgent-icon-Ssmall2.png",
    "versions" : [ {
      "href" : "module-application/184d6a76-2622-44cc-becd-8803c5958117",
      "author" : "group/latencetech-vendor",
      "commit" : "placeholder",
      "published" : false
    }, {
      "href" : "module-application/20907854-dd31-4d80-93a0-c85e869ae6f3",
      "author" : "group/latencetech-vendor",
      "commit" : "first version",
      "published" : false
    }, {
      "href" : "module-application/34623b05-caf1-4b6c-9262-018390b06657",
      "author" : "group/latencetech-vendor",
      "commit" : "light parameters"
    }, {
      "href" : "module-application/d4218be1-58ce-4370-ab2c-06b7287bbf53",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/c98f24b9-8132-4365-880c-e671f8bf32a2",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/1fb314da-5f33-4c06-b15b-ab31e36139e7",
      "author" : "group/latencetech-vendor",
      "commit" : "1.4.0",
      "published" : false
    }, {
      "href" : "module-application/7e0c9860-a254-4d6f-afc8-f3f1a3be956b",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/66b97801-7df8-4b64-849e-fe05999a6524",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/423fcdf1-4224-4dcb-ac75-c933827481db",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/3a7c5777-2160-4e34-912b-20b39df6e7b1",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/54cc796c-a0da-4301-8245-44f176f14058",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/3a226a60-ba2e-478e-8844-29a04721fb62",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/17a24150-0ea9-41f1-a6dc-f309beb6ac37",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/c18f1209-745e-42a7-a523-b6c8c013d7e6",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/50fc5f0e-fdfd-4c57-98f3-8404efc05568",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/5efde92d-27aa-419b-8380-7b9c5534a044",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/34a3f4b4-c09d-4a10-b9e3-2746082ed3fe",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/d8d2b4e7-b6fc-4af7-a1a9-77b7f9d07a81",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/b17f5ac7-0d34-40cf-927f-556d7fadea37",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/4e5640e3-bede-4257-a3d4-88577b37d755",
      "author" : "group/latencetech-vendor",
      "commit" : "removed obsolete env variables",
      "published" : false
    }, {
      "href" : "module-application/e89fb609-3873-439f-83a1-b09144f740a9",
      "author" : "group/latencetech-vendor",
      "commit" : "removed obsolete env variables",
      "published" : false
    }, {
      "href" : "module-application/05018a1d-07fc-48b1-8c2c-5a419e8d8cd8",
      "author" : "group/latencetech-vendor",
      "commit" : "added registry",
      "published" : false
    }, {
      "href" : "module-application/b52bb6c8-eb15-4847-ba87-34d803eab987",
      "author" : "group/latencetech-vendor",
      "commit" : "no commit message",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MAc4eHG9PNMTNBO8UoijupM",
      "product-id" : "prod_MuQw2NnQzi2O38",
      "account-id" : "acct_1MAaxHH9O7SWT6yt",
      "cent-amount-daily" : 165,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "The ReliVision app from Relimetrics is hardware and image-modality agnostic and applicable across different use cases,\nenabling quality automation and smart manufacturing without writing a single line of code.\n\nMore details at [www.relimetrics.com](https://www.relimetrics.com/).",
    "path" : "relimetrics/relimetrics",
    "compatibility" : "swarm",
    "updated" : "2023-01-31T13:54:36.015Z",
    "name" : "ReliVision",
    "created" : "2022-09-14T12:52:36.666Z",
    "parent-path" : "relimetrics",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/relimetrics-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175"
    }, {
      "rel" : "delete",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/e6cd5177-9f8a-4785-8d3a-85f1ae5e4175/delete-version"
    } ],
    "logo-url" : "https://i.ytimg.com/vi/q1ZyiezByGE/maxresdefault.jpg",
    "versions" : [ {
      "href" : "module-application/eee50b44-5640-4284-9f47-2469fa1621aa",
      "author" : "group/relimetrics-vendor",
      "commit" : "placeholder",
      "published" : true
    } ],
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "Ensuring high performance of wired, Wi-Fi, and 3G/4G/LTE networks in both pre-deployment and real-world environments while enabling dynamic security intelligence to help stay one step ahead of attacks",
    "path" : "keysight/keysight",
    "compatibility" : "swarm",
    "updated" : "2022-11-11T14:42:20.301Z",
    "name" : "Keysight",
    "created" : "2022-09-14T11:33:46.422Z",
    "parent-path" : "keysight",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/4f1a139f-af0c-49a6-a472-fab4d5a2023a",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/keysight-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/4f1a139f-af0c-49a6-a472-fab4d5a2023a"
    }, {
      "rel" : "delete",
      "href" : "module/4f1a139f-af0c-49a6-a472-fab4d5a2023a"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/4f1a139f-af0c-49a6-a472-fab4d5a2023a/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/4f1a139f-af0c-49a6-a472-fab4d5a2023a/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/4f1a139f-af0c-49a6-a472-fab4d5a2023a/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/4f1a139f-af0c-49a6-a472-fab4d5a2023a/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-keysight.png",
    "versions" : [ {
      "href" : "module-application/9025fe2c-879c-4967-ae89-560ea4626f53",
      "author" : "group/keysight-vendor",
      "commit" : "placholder",
      "published" : false
    } ],
    "published" : false,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "## Net-Tracer\n\nNet-Tracer is the best way to detect, diagnose and resolve performance issues impacting your business. See what drives degradations in SaaS and web apps, user experience, hybrid networks and cloud infrastructure.\n\n### Pricing\n\nNet-Tracer pricing is based on the number of tests executed per month. This is defined by:\n* the frequency of the tests: (1, 5, 15, 20, 30 minutes)\n* the number of test origin-destination pairs (test origin/tester \u2192 application/target):\n  * Net-Tracer is the test origin (this app's location)\n  * Target applicaton(s) are configured in the Kadiska platform\n* See our [documentation](https://docs.kadiska.com) for details\n\n#### Pricing Tiers - Application Test Targets\n~~~\n    \u2264 5 Targets: \u20AC144/month - Price indicated in Nuvla.io marketplace\n( 5,10] Targets: \u20AC180/month - Contact us to enable\n(10,25] Targets: \u20AC216/month - Contact us to enable\n(10,25] Targets: \u20AC288/month - Contact us to enable\n~~~\n\n#### Volume Discounts - Deployment Locations (Net-Tracer \"sites\")\n~~~\n     \u2264 25 Sites:  0%\n( 25, 50] Sites: 20% - Contact us for coupon code\n( 50,100] Sites: 30% - Contact us for coupon code\n(100,250] Sites: 40% - Contact us for coupon code\n    > 250 Sites: __% - Contact us\n~~~\n**See below** for platform and contact information.\n\n#### Note:\n\nNet-Tracer is free to download and deploy. Billing is based on usage as described above. An account on the Kadiska platform is required to use Net-Tracer to configure it, collect data, and report results. Please contact Kadiska to setup an account. \n\n[Start a Free Trial](https://kadiska.com/start-a-free-trial/) or [Contact Kadiska](https://kadiska.com/company/contact-us/)",
    "path" : "kadiska/kadiska",
    "license" : {
      "url" : "https://learn.kadiska.com/terms-and-conditions",
      "name" : "Kadiska Terms and Conditions",
      "description" : "Kadiska Terms and Conditions for Net-Tracer App"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-03-13T11:27:21.899Z",
    "name" : "Net-Tracer",
    "created" : "2022-09-13T17:37:56.636Z",
    "parent-path" : "kadiska",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "owners" : [ "group/kadiska-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "delete" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "edit-acl" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "manage" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "edit-meta" : [ "group/nuvla-admin", "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b"
    }, {
      "rel" : "delete",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/169b20b9-f98c-4dcd-9885-25bba4acc69b/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-kadiska.png",
    "versions" : [ {
      "href" : "module-application/0e496404-a082-4835-b28a-3fb9b79e7211",
      "author" : "group/kadiska-vendor",
      "commit" : "placeholder",
      "published" : false
    }, {
      "href" : "module-application/cfe9c67f-d8da-47f6-8764-84f4881efc52",
      "author" : "group/kadiska-vendor",
      "commit" : "added kadiska compose file "
    }, {
      "href" : "module-application/ee72d7ba-bf81-4ad8-b2d6-e3f40894f314",
      "author" : "group/kadiska-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/b699e595-d1dd-486a-9645-24883ddd3a3a",
      "author" : "group/kadiska-vendor",
      "commit" : "fixed env"
    }, {
      "href" : "module-application/910dee1f-97bb-47c6-bfa6-991ba8d934eb",
      "author" : "group/kadiska-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/3e2c4d30-02a9-4ed7-ae3d-43a7c045712e",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding privileged: true",
      "published" : false
    }, {
      "href" : "module-application/21c62238-fbfc-419d-b828-dce33818b65a",
      "author" : "group/sixsq-vendor",
      "commit" : "adding watchtower param description",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MeZczHG9PNMTNBOKW27qqzr",
      "product-id" : "prod_NPOPBq2aYuFbFC",
      "account-id" : "acct_1MNLUSH7UWDhXmAZ",
      "cent-amount-daily" : 480,
      "currency" : "EUR",
      "follow-customer-trial" : true
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "### Varnish Enterprise 6\n\nA supercharged version of Varnish Cache, for accelerating content delivery while protecting web services.\n\nVarnish Enterprise is a powerful, feature-rich reverse proxy and HTTP accelerator that speeds up websites and reduces streaming latency to deliver a great web experience to all users, at all times. Varnish caching technology is trusted by millions of websites worldwide to reduce backend server load by up to 99% while delivering all types of content much faster.\n\nFrom the team behind the popular open-source Varnish Cache, Varnish Enterprise adds more features, more power and more flexibility for scaling up web services while protecting critical infrastructure. With enterprise-grade features and security at pay-as-you-go prices, it is the easy way to expand your reach and resilience while reducing the complexity of your web operations. You can even use it to build your own CDN.\n\nFull support is also available, with the Varnish team helping you deliver web services with high performance, reliability, security and scale. Visit us at [https://www.varnish-software.com/support/](https://www.varnish-software.com/support/) to activate support.\n\nFor a complete feature list, go to [https://www.varnish-software.com/softwareandvmods/](https://www.varnish-software.com/softwareandvmods/).\n\nVarnish is a registered trademark of Varnish Software AB and its affiliates\n\n[Learn more](https://www.varnish-software.com/varnish-cache/)\n\n**About Varnish Software Inc.**\n\nVarnish Software is a pioneer in high-performance content delivery. Powered by a uniquely flexible caching technology, our solutions are the indispensable common denominator among the world\u2019s most popular brands, such as Nikon, Sky, Emirates and Tesla. We are the company behind Varnish Cache.",
    "path" : "varnish/varnishcache",
    "license" : {
      "url" : "https://varnish-software-eula.s3.amazonaws.com/20210618/Varnish_Cloud_Subscription_and_Services_Agreement_20210618.pdf",
      "name" : "Varnish Cloud Subscription and Services Agreement"
    },
    "compatibility" : "swarm",
    "updated" : "2023-01-30T12:59:29.828Z",
    "name" : "Varnish Enterprise 6",
    "created" : "2022-09-05T12:27:12.437Z",
    "parent-path" : "varnish",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/sixsq-vendor", "group/varnish-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "group/project-5gemerge-sf2" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "group/project-5gemerge-sf2" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "group/project-5gemerge-sf2" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6"
    }, {
      "rel" : "delete",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/dd3ad7c3-0c1d-4b04-ad24-7f072fed5de6/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-varnish.png",
    "versions" : [ {
      "href" : "module-application/294cf8a6-fc42-47b9-8330-92100709033d",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "first version with hardcoded hostname. This should be moved to env. variable"
    }, {
      "href" : "module-application/92076716-05cd-459e-8c61-07606b225f83",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "added env var"
    }, {
      "href" : "module-application/9dd2788b-6dee-4e8b-bae0-61b6a5b19204",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fixed the compose file version"
    }, {
      "href" : "module-application/f00e1448-12f5-4bfc-8c5c-ced13d2acecf",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reused a varnish docker compose file"
    }, {
      "href" : "module-application/c4aa3eab-6652-4856-b994-da96684cd3d6",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "removed composed commands"
    }, {
      "href" : "module-application/586c2ba8-6033-4842-8a77-d03a0bdb06f5",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fixed path"
    }, {
      "href" : "module-application/dc067857-6339-4e02-a44b-796b77b97fac",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "cleanup"
    }, {
      "href" : "module-application/ebde4a10-72e9-4f0d-8f1b-bf7fcc04989e",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding default vcl"
    }, {
      "href" : "module-application/24e3aee4-a562-4251-aeb8-2a1db0303165",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding config"
    }, {
      "href" : "module-application/ce38c02f-472a-4793-b255-221db37a92f4",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "try one more time to copy the config file"
    }, {
      "href" : "module-application/15888ef2-d87f-4f0c-8c80-8d5a357ce096",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fixed the config syntax"
    }, {
      "href" : "module-application/9087e8ad-703b-4d7d-ba4b-b1014dc1a530",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "removed the size param"
    }, {
      "href" : "module-application/3fa66caf-dfd0-4683-9575-769b26e58403",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "removed a command"
    }, {
      "href" : "module-application/91ec549d-5c44-45c1-bd0e-c4df9fce946f",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding httpd service"
    }, {
      "href" : "module-application/f2da23bd-92bf-441a-bf7b-ff663c7adee5",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "changed port to avoid conflict"
    }, {
      "href" : "module-application/29bf2613-79f5-4fce-92d2-1cb553ea0c4b",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "switched to latest varnish image"
    }, {
      "href" : "module-application/e015355c-f77e-4fd4-8b6b-f5792e2adb7c",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fix config"
    }, {
      "href" : "module-application/d0ea4cbe-b22d-431e-91ed-49acf487d785",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "added host to cache as an env variable"
    }, {
      "href" : "module-application/4085043b-7157-4751-a39a-450bab14ed3f",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reverted",
      "published" : false
    }, {
      "href" : "module-application/7871291c-5975-43a4-89cf-3d0670aa86cc",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reverted"
    }, {
      "href" : "module-application/c831ec06-4edf-4642-9367-d52448067a0b",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reverted"
    }, {
      "href" : "module-application/ce1597fc-a659-4c3c-8373-52254ee2035e",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "reverted"
    }, {
      "href" : "module-application/d3c72197-d2c1-46c4-aa24-80f98ae660a0",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "added varnishlog command"
    }, {
      "href" : "module-application/732d460d-9249-43c5-8c1e-c538c52fe9b4",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "only varnishlog"
    }, {
      "href" : "module-application/abb111d7-d613-45d4-996a-514f1e5eb0c9",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "fixed the command"
    }, {
      "href" : "module-application/20ea33eb-78a8-4710-8816-322d783be708",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "removed varnishlog"
    }, {
      "href" : "module-application/d9d63ecd-285c-4419-9034-aaef88a62260",
      "author" : "sebastien.emonet@sixsq.com",
      "commit" : "adding debug flag -d"
    }, {
      "href" : "module-application/d9218b4f-6aac-4e37-8f85-53719523883f",
      "author" : "group/varnish-vendor",
      "commit" : "Change to Varnish Enterprise version"
    }, {
      "href" : "module-application/1975d849-ad53-43e9-85c9-d28c732f288a",
      "author" : "group/varnish-vendor",
      "commit" : "Add log sidecar"
    }, {
      "href" : "module-application/2b263ffa-9d1b-401f-8870-26422ce771bf",
      "author" : "group/varnish-vendor",
      "commit" : "Environment to enable logging"
    }, {
      "href" : "module-application/a52ce152-bc1e-47ce-a349-1505c1363393",
      "author" : "group/varnish-vendor",
      "commit" : "Environment for logging",
      "published" : false
    }, {
      "href" : "module-application/4b4dafde-2f89-47b4-8d76-879170e56a66",
      "author" : "group/varnish-vendor",
      "commit" : "Try to fix entrypoint of logging",
      "published" : false
    }, {
      "href" : "module-application/ce126436-867e-4053-83a8-99c97fe1f740",
      "author" : "group/varnish-vendor",
      "commit" : "Logging is possible to toggle with environment variable",
      "published" : false
    }, {
      "href" : "module-application/198ce7b2-4138-4685-b7ae-7f4ee9e47f1c",
      "author" : "group/varnish-vendor",
      "commit" : "Remove public httpd port, not needed as varnishd can access http directly on docker network."
    }, {
      "href" : "module-application/90e233d9-2f47-423d-9ee5-5306e6c27b67",
      "author" : "group/varnish-vendor",
      "commit" : "Remove environment from compose since environment configuration does not pass through into container."
    }, {
      "href" : "module-application/78f3fba0-1635-4134-8514-3c5551dfe003",
      "author" : "group/varnish-vendor",
      "commit" : "Test if this passes environment correctly",
      "published" : false
    }, {
      "href" : "module-application/39d36513-6663-40de-a9cb-7744f874d3c6",
      "author" : "group/varnish-vendor",
      "commit" : "Added some useful environment variables and cut down on vcl.",
      "published" : false
    }, {
      "href" : "module-application/75939ca2-e561-44be-8506-b0ab654daf18",
      "author" : "group/varnish-vendor",
      "commit" : "changed default logging = true and fixed varnish_ncsa restart if logging = false",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MP2VMHG9PNMTNBOIzWu4zRW",
      "product-id" : "prod_N9LBsMpndzI6VF",
      "account-id" : "acct_1MOykkHHNQK89yS9",
      "cent-amount-daily" : 1875,
      "currency" : "EUR"
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# ClearBlade Intelligent Assets \n\n#### IoT, Edge and AI made simple with ClearBlade\u2019s Intelligent Assets Application.\n\n### Configure Rapidly\n\nBrownfield or greenfield \u2013 any device Asset Types like \u201CFuel Truck\u201D or \u201CCompressor\u201D. \nRules that make sense \u201CWhen the tank is low\u201D. \nAlerts over Slack, Teams, Email or Text.\n\n_A real time view of your business assets to get maximum efficiency_\n\n### Connect any asset\nClearBlade\u2019s Intelligent Assets application enables you to connect, monitor, and control any asset in your business, all without needing a computer science degree or expensive services from a systems integrator.\n\n\n[www.clearblade.com/intelligent-assets](https://www.clearblade.com/intelligent-assets/)",
    "path" : "clearblade/clearblade-intelligent-assets",
    "compatibility" : "docker-compose",
    "updated" : "2022-12-20T16:43:10.101Z",
    "name" : "ClearBlade Intelligent Assets ",
    "created" : "2022-06-08T16:33:38.181Z",
    "parent-path" : "clearblade",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/clearblade", "group/nuvla-admin" ],
      "owners" : [ "group/clearblade-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/clearblade", "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "delete" : [ "group/clearblade", "group/nuvla-admin" ],
      "view-meta" : [ "group/clearblade", "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "edit-acl" : [ "group/clearblade", "group/nuvla-admin" ],
      "view-data" : [ "group/clearblade", "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "manage" : [ "group/clearblade", "group/nuvla-admin" ],
      "edit-meta" : [ "group/clearblade", "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da"
    }, {
      "rel" : "delete",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/3ae9c407-63f6-4695-be87-bfd3cd5871da/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-clearblade.png",
    "versions" : [ {
      "href" : "module-application/7aca0f5f-6f21-4b51-952e-62004996a2ba",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/f226de72-51b8-4707-9162-3385cc1defe1",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/918f38d1-73f6-4619-8ade-a82d053ff4af",
      "author" : "group/nuvla-admin",
      "commit" : "Initial commit"
    }, {
      "href" : "module-application/02991ea4-0e5a-4408-8675-bbbc9b5ecaaf",
      "author" : "group/nuvla-admin",
      "commit" : "adding default IP address"
    }, {
      "href" : "module-application/08c1164e-3e0a-4d72-8d8a-b250a7f37946",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/b8cc47ce-b4f1-4889-973d-48f69d3587e8",
      "author" : "group/clearblade-vendor",
      "commit" : "no commit message"
    } ],
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# AI EdgeLabs cyber security sensors\n\n### What is AI EdgeLabs?\n\nAI EdgeLabs is a powerful and autonomous cybersecurity AI platform that helps security teams respond immediately to ongoing attacks and protect Edge/IoT infrastructures against malware, DDoS, botnets, and other threats. AI EdgeLabs delivers cybersecurity measures by bringing network visibility, early threat detection, and automated incident response in the Edge and on-prem environments.\n\n### Sensor\n#### How does the AI EdgeLabs Sensor work?\n\nThe EdgeLabs Sensor is a proprietary network telemetry and monitoring agent that continuously analyzes and models network behavior of a particular Edge node. It holds an AI-powered model stack that continuously checks inbound and outbound connectivity via pre-trained AI models.\n\nWith EdgeLabs Sensor, infrastructure teams can locate hidden network threats and zero-day attacks that might cause business disruption. The sensor models normal and abnormal connectivity states and immediately reports them to Operation teams with cause and recommends remediation actions for the incidents.\n\nDuring the first deployment, the EdgeLabs Sensor runs a configurable set of security checks and topology research to collect the initial context of the environment. Collected data is then analyzed by the EdgeLabs AI Platform\u2122 (ELAP).\n\nELAP provides a set of AI-based models which are pre-trained in the existing knowledge base of threat patterns and attack signatures; this pre-training is always done centrally on ELAP. By running these collections from a fleet of well-distributed/placed EdgeLabs Sensors, the AI Security team can dramatically improve the precision with which they instrument, monitor, and maintain their application delivery infrastructure.\n\n![AI EdgeLabs](https://sos-ch-gva-2.exo.io/nuvla-images/ai_edgelabs_sensor.svg)\n\n[edgelabs.ai/platform](https://edgelabs.ai/platform/)",
    "path" : "ai-edgelabs/ai-edgelabs-sensors",
    "license" : {
      "url" : "https://edgelabs.ai/terms-and-conditions/",
      "name" : "AI EdgeLabs Terms and Conditions",
      "description" : "AI EdgeLabs Terms and Conditions"
    },
    "compatibility" : "docker-compose",
    "updated" : "2023-02-03T16:26:34.159Z",
    "name" : "AI EdgeLabs sensors",
    "created" : "2022-06-08T15:59:54.894Z",
    "parent-path" : "ai-edgelabs",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/2baaa349-9691-4c85-a1e2-d8eb9a6cfd80",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/ai-edgelabs-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://sixsq.com/assets/img/logo-ai-edgelabs.png",
    "versions" : [ {
      "href" : "module-application/195b09c4-101f-43f5-a16b-1d8d85018e5f",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/3ce3ef7f-4de5-4041-8568-df8434ff28b4",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : false
    }, {
      "href" : "module-application/48bf5bc4-242d-400f-aac1-4baa9f6d74af",
      "author" : "group/ai-edgelabs-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/955a04b7-fdaa-4bf9-8a2f-186486375fb9",
      "author" : "group/ai-edgelabs-vendor",
      "commit" : "alpha"
    }, {
      "href" : "module-application/ee285008-b706-4289-84da-c965c74643b9",
      "author" : "lionel@sixsq.com",
      "commit" : "Use multi-arch image"
    }, {
      "href" : "module-application/6cacacb7-12b5-4797-a595-377ae16abe2b",
      "author" : "lionel@sixsq.com",
      "commit" : "Rename SENSOR_KEY to API_KEY",
      "published" : true
    } ],
    "price" : {
      "price-id" : "price_1MXS5tHG9PNMTNBOHIQefZKD",
      "product-id" : "prod_NI2A8e6ievzGb6",
      "account-id" : "acct_1MRftMQc0fBTNwa0",
      "cent-amount-daily" : 330,
      "currency" : "EUR",
      "follow-customer-trial" : false
    },
    "published" : true,
    "subtype" : "application"
  }, {
    "valid" : true,
    "description" : "# Cybus Connectware\n#### The software to digitize your production in only a few weeks\n\n\n### Pave the way for digitization\n#### No more fragmented data flow and lock-ins\nThe slow pace of digitalization is caused by several barriers such as the heterogeneity of production environments, security concerns, working across data silos or missing communication between OT and IT. Factories also experience technical debts from the historically grown production infrastructure. Resulting vendor lock-ins could hinder the integration of new and more competitive technologies for future development.\n\n### A factory full of knowledge\n#### No more sunk cost or data loss\n\nInitial digital projects implemented without a central database tend to create an inconsistent and fragmented data flow between production and IT. The results are blind spots in production processes and data silos. This not only hinders deployment, but also the piloting of additional use cases. By contrast, with a common data infrastructure, you reduce hidden costs and the loss of valuable knowledge.\n\n\n### Easy digitalization with a seamless data flow\n#### The Smart Factory data infrastructure fully integrates production and IT\n\nThe modern software solution provides a shared data basis with applicable real-time data. The typical barriers are dissolved as Connectware connects your production with your IT, every application and every system. The central data source provides all assets and resources to digitize your factory \u2013 all from one software.\n\n![cybus connectware data infrastructure logo](https://www.cybus.io/wp-content/uploads/2022/04/cybus-connectware-data-infrastructure-logo.png)\n\n[www.cybus.io/en/product/cybus-connectware/](https://www.cybus.io/en/product/cybus-connectware/)",
    "path" : "cybus/cybus-connectware",
    "compatibility" : "swarm",
    "updated" : "2022-12-20T15:57:18.064Z",
    "name" : "Cybus Connectware",
    "created" : "2022-06-08T15:25:09.018Z",
    "parent-path" : "cybus",
    "data-accept-content-types" : [ ],
    "updated-by" : "group/nuvla-admin",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/536de66b-0efd-4f30-8851-40300f4b53a2",
    "validation-message" : "Docker-compose valid.",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/cybus-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/demo-summit-north", "group/nuvla-admin", "group/the-edge-event" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2"
    }, {
      "rel" : "delete",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2"
    }, {
      "rel" : "validate-docker-compose",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2/validate-docker-compose"
    }, {
      "rel" : "publish",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2/publish"
    }, {
      "rel" : "unpublish",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2/unpublish"
    }, {
      "rel" : "delete-version",
      "href" : "module/536de66b-0efd-4f30-8851-40300f4b53a2/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/logo-cybus.png",
    "versions" : [ {
      "href" : "module-application/13429f86-c58c-4ada-9241-fed10da8f370",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : true
    }, {
      "href" : "module-application/2c9432a6-18e3-41e9-8a08-893d8a880b48",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/d58042dd-a88d-4ee9-8817-4f3685e58f9a",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message"
    }, {
      "href" : "module-application/79b6e0d1-2473-43f4-8753-2b19762d4b66",
      "author" : "group/sixsq-vendor",
      "commit" : "no commit message",
      "published" : true
    } ],
    "published" : true,
    "subtype" : "application"
  } ],
  "operations" : [ {
    "rel" : "add",
    "href" : "module"
  } ]
};

export const mockNavigateAppsData = {
  "count" : 15,
  "acl" : {
    "query" : [ "group/nuvla-user" ],
    "add" : [ "group/nuvla-user" ]
  },
  "resource-type" : "module-collection",
  "id" : "module",
  "resources" : [ {
    "description" : "AI video analysis at the Edge with report to Cloud demo",
    "path" : "ai-edge-to-cloud-demo",
    "updated" : "2019-06-27T11:49:07.467Z",
    "name" : "AI Edge to Cloud demo",
    "created" : "2019-06-27T11:42:19.997Z",
    "parent-path" : "",
    "id" : "module/7beb6bcb-2622-4f82-81dc-86d77c94a501",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "user/e53f6f2e-c831-4978-b055-b4ecae38bdda" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://crosser.io/media/1365/crosser-edge-analyticsicon.svg",
    "subtype" : "project"
  }, {
    "description" : "Active objects across the network",
    "path" : "dataclay",
    "updated" : "2021-02-03T09:29:37.382Z",
    "name" : "dataClay",
    "created" : "2021-02-02T14:20:42.442Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/7fc6729a-1af3-46b2-b341-77e8470ec5d0",
    "created-by" : "user/7fc6729a-1af3-46b2-b341-77e8470ec5d0",
    "id" : "module/48301a7b-35ea-461c-a944-268f12f0572e",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "user/7fc6729a-1af3-46b2-b341-77e8470ec5d0" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-anon", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-anon", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-anon", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://www.bsc.es/sites/default/files/public/styles/bscw2_-_simple_crop_style/public/bscw2/content/software-app/logo/logo_dataclay_web_bsc.jpg",
    "subtype" : "project"
  }, {
    "description" : "# Example apps\n\nAs creators of Nuvla.io, we have created a set of example apps to show you what's possible with the platform.\n\nWe also use these apps in our traning material and the [Youtube Classroom chanel](https://www.youtube.com/watch?v=s0NQjTgmaU0&list=PLY20wTTKSDHa-bTvE-hRtAXafrNNkQYru). Feel free to reuse these apps as you feel like. They are all released under a permissive license.\n\nWe also release these apps such that you can learn from them. So please have a look and give us feedback. We're here to help and learn.   \n\n\u00A9 2021, SixSq S\u00E0rl",
    "path" : "examples",
    "updated" : "2021-05-01T07:11:20.299Z",
    "name" : "Examples",
    "created" : "2019-06-25T13:40:06.197Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
    "id" : "module/19422abe-9fbb-40ba-8656-439806253c78",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/sixsq-devs", "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/19422abe-9fbb-40ba-8656-439806253c78"
    }, {
      "rel" : "delete",
      "href" : "module/19422abe-9fbb-40ba-8656-439806253c78"
    }, {
      "rel" : "delete-version",
      "href" : "module/19422abe-9fbb-40ba-8656-439806253c78/delete-version"
    } ],
    "logo-url" : "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL3dlYi5yZXNvdXJjZS5vcmcvY2MvIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjYwMCIKICAgaGVpZ2h0PSI2MDAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ1LjEiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkV4YW1wbGUuc3ZnIgogICBpbmtzY2FwZTpvdXRwdXRfZXh0ZW5zaW9uPSJvcmcuaW5rc2NhcGUub3V0cHV0LnN2Zy5pbmtzY2FwZSIKICAgc29kaXBvZGk6ZG9jYmFzZT0iL2hvbWUvZ21heHdlbGwiCiAgIHZlcnNpb249IjEuMCI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhOSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjYyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjgxNCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwLjAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAuMCIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwLjAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBpZD0iYmFzZSIKICAgICB3aWR0aD0iNjAwcHgiCiAgICAgaGVpZ2h0PSI2MDBweCIKICAgICBpbmtzY2FwZTp6b29tPSIwLjM1OTc0MDU4IgogICAgIGlua3NjYXBlOmN4PSI1MCIKICAgICBpbmtzY2FwZTpjeT0iNTE5LjA0OTY2IgogICAgIGlua3NjYXBlOndpbmRvdy14PSI0ODMiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjEwMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiAvPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxNiIgLz4KICA8ZwogICAgIGlkPSJnMjE2MSIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg2LjM5NTEzNTQsMCwwLDYuMzk1MTM1NCwtMjIuNjI2MjQ2LC03LjEwODI1MDkpIj4KICAgIDxwYXRoCiAgICAgICBub2RldHlwZXM9ImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjYyIKICAgICAgIGlkPSJmbG93Um9vdDE4ODIiCiAgICAgICBkPSJNIDM2LjAwOTc2Niw5LjI1MDUwODMgQyAzNy43MzkyOTUsOS40MjExMjczIDM4LjMwNTg3OSwxMS40NzA2OTcgMzguMDUyNTgxLDEyLjkzNTA0OSBDIDM3LjM0NjI2NiwxNi4xNTM4OTkgMzYuMzE2ODIxLDE5LjUxNDY2IDM1LjQ0NTQwNSwyMi43MTc3MDEgQyAzNi4wOTE2NjYsMjQuODEyMjI0IDMxLjcxMjI4NCwyNC4wMDg4NzcgMzMuMjE5OTMyLDIyLjMxNTQ1OSBDIDM0LjgxNzA0MSwxOC40MTEyMDIgMzYuMDExNDA0LDEzLjQ5ODMzNiAzNi4wMDk3NjYsOS4yNTA1MDgzIHogTSAzNi4wMDk3NjYsMi45OTI2OTU4IEMgMzguMjEwMzExLDEuMjI0MjA4OCA0MC45OTYyNjgsOS4xNzI3NTcgMzMuOTExNTcxLDYuMTUzNDg0NyBDIDMzLjg4NDYxOSw1Ljc2MDMwMTkgMzYuMDk2Mjg5LDMuMzg2OTQ0NyAzNi4wMDk3NjYsMi45OTI2OTU4IHogTSA0MS4zNzEwOTQsMTUuODcxNjAxIEMgNDEuMzcxMDk0LDEzLjY2NDU3IDQxLjM3MTA5NCwxMS40NTc1MzkgNDEuMzcxMDk0LDkuMjUwNTA4IEMgNDMuMTgwNjIxLDkuNDI1NzM4NyA0My45NjMwMTQsMTEuNzA0NTU5IDQzLjI4NjEzNywxMy4yMTU1MTcgQyA0Mi44NTkwODQsMTUuMDU5NzkyIDQyLjkzOTI0MSwxNy4zOTk2IDQ0LjYwMTQ4NywxOC42MjUzMzUgQyA0Ni43MTA1NDQsMTkuNjgzNDc3IDQ5LjM4Nzc0LDE3LjM1MzExMiA0OC44MDMyNjgsMTUuMTE4NDM3IEMgNDguOTMxOTYsMTMuNDA2NTM4IDQ4LjIzNjI5MiwxMS42MTM4NDggNDguOTY4ODYyLDkuOTY5MDQxNSBDIDUxLjA1NTA5Nyw5LjY1MDAzNTcgNTEuNTAwNjc3LDEyLjQ4NzE1NSA1MC41NDQ5ODUsMTMuODQ0NzQ3IEMgNTAuMDcwMDIzLDE1LjMwOTcwOCA1MC44NTc0NTIsMTYuNzgxODk4IDUwLjY3MjM0NCwxOC4yMzk0MzIgQyA1MC4yNzk2MTUsMTkuOTQwNTYgNDguNDE4NDA0LDIwLjAwMDIzIDQ3LjAyMjUsMjAuMDcxODY4IEMgNDUuNDc4NDg5LDIwLjM4MTk0IDQzLjUxNjgzNSwyMC43OTEzNjggNDIuMzYxOTQ3LDE5LjM4ODc0IEMgNDEuNTIyNTE0LDE4LjQ0NDA4OSA0MS4yMTEyNzQsMTcuMTA3NjcxIDQxLjM3MTA5NCwxNS44NzE2MDEgeiBNIDYxLjIyNDYwOSw5LjU3Mjc3MzkgQyA2MC40MTk3OCwxMS41NTc1NTIgNTguMTAwODA0LDEwLjIzNTYxNiA1Ni42Mjc2NywxMC41NzE1NTEgQyA1My44MzY4NjIsMTQuMzkzNjExIDYwLjkyMDAzOCwxMy41MTM2NjcgNjEuODA4NSwxNy4wMTE2NDggQyA2MS44NTYxMywxOC45MzM3NDcgNjAuMDI4MzU5LDIwLjU4NzM4OSA1OC4xMjkwOTEsMjAuNDQzMzEyIEMgNTYuOTA0NDg3LDIwLjYwNzIyOSA1NC42MDkyMDQsMjAuOTgyMzkzIDU0LjQxNzg3OSwxOS4yNjc2MjIgQyA1NS4yODA2MDksMTcuNTA4MjY5IDU3LjMzNjM1OSwxOS41Mjg4MDMgNTguNjMzMTExLDE4Ljg0NjMgQyA2MC40MDMxNDEsMTcuOTkwODEgNTkuNDAyMjMyLDE1LjU1NTMyNSA1Ny43Mjg3ODEsMTUuMzIxNDc1IEMgNTYuNTUwMTE1LDE0Ljk4MTM1IDU1LjA5MTgxMywxNS4yMjU0MzkgNTQuMjU0NzQ3LDE0LjExMjc2NCBDIDUzLjAxNzY2OSwxMi44ODExNjcgNTMuMzkyMTMyLDEwLjczMzE0OCA1NC43MzY3MTksOS43NDEzMjUyIEMgNTYuNjE5MTcyLDguMzMwNzM5NiA1OS4xNzAzMjYsOC45NTM1MDY3IDYxLjIyNDYwOSw5LjU3Mjc3MzkgeiBNIDY2LjQ1ODk4NCw2LjE0NTAzOTYgQyA2NS4zNjgxMjYsNy42MzMzMzM0IDY3LjM0ODkzNiw5Ljk1MzE1NzQgNjguOTg3MjI5LDkuMDk0ODk3OSBDIDY5Ljk3ODEzMywxMS4wNDI1MDMgNjYuNTI0NjQxLDEwLjc3NzkzMSA2Ni40NzM0OTUsMTIuNDMwOTkyIEMgNjQuNDQzNjA1LDE2LjEwMTgxNCA2OC40ODI3MywxOC42MjM0MjYgNjcuNTcxNjU3LDIwLjQxNzUyOCBDIDY1LjQ0MDg1OCwyMC4yNjE1NSA2NC4zMjQzMDcsMTcuODQ0NDUyIDY0LjU3NzQzMywxNS45MTkzNTcgQyA2NC43MDg0NywxNC40MDg1ODYgNjUuMDU1MTA3LDEyLjc5MzYxIDY0LjMyMjk2MSwxMS4zNzM5NDEgQyA2My43ODY0MjIsOS41NDc1MTkyIDY0LjE1MDQxOSw3LjE0NTI2NTUgNjUuOTU0MjMzLDYuMTU1MjQ3NyBMIDY2LjIwNjA0Myw2LjEyMDMzMjMgTCA2Ni40NTg5ODQsNi4xNDUwMzk2IEwgNjYuNDU4OTg0LDYuMTQ1MDM5NiB6ICIgLz4KICAgIDxwYXRoCiAgICAgICBub2RldHlwZXM9ImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjIgogICAgICAgaWQ9ImZsb3dSb290MTg5MCIKICAgICAgIGQ9Ik0gMTAuODY3MTg4LDQ0Ljg3Nzk1MyBDIDYuMjgxMjYxOCw0Mi4xMjQ4NDkgNS4yMjA1OTE0LDUyLjM2NjI2OCAxMC40MDkyMTUsNDkuODkyNDMxIEMgMTIuMzg5Mzg1LDQ5LjI5NTU2OCAxNC45ODgwNDUsNDMuOTEyNjU4IDEwLjg2NzE4OCw0NC44Nzc5NTMgeiBNIDE1LjE2Nzk2OSw0My45ODczMjggQyAxNC45MTk4MjYsNDYuMzM3MjQgMTYuNjE3NzU2LDUyLjU1NDIwMiAxMi4yOTg3MzQsNTAuNTM2OTE4IEMgOS44MDQxMTQyLDUyLjMxMjkxNiA2LjA1ODA4NTUsNTIuOTU4Njc0IDQuNTAyMzEyMyw0OS41ODMzODYgQyAyLjYzNTA0NTQsNDUuMjU3MzIyIDcuMzAzMzEwMyw0Mi4yOTg3MTIgMTEuMDQ2NDQzLDQzLjM2MTA1OSBDIDE1LjI0NzE4NSw0MS4zMjA3ODYgOS40OTMwMjg2LDM4LjMzODI2NCA3LjEwNjg3OTIsNDAuMzIyMTM4IEMgMy40Mzc0NDIxLDQwLjAxMzg4IDcuNDA2NDA3LDM3LjIwMTQwNyA5LjM0OTUwODcsMzcuOTYyOTEyIEMgMTIuNDQyMTIsMzcuODc3Nzg4IDE1LjU1NjUzNCw0MC4zODAxMzEgMTUuMTcxNzUxLDQzLjY0ODkxMiBMIDE1LjE2OTYzOCw0My44Mzc5NyBMIDE1LjE2Nzk2OSw0My45ODczMjggeiBNIDMwLjUzMTI1LDQzLjU1MzczNCBDIDI5LjYzODc5NCw0NS45MTE1NTggMzIuNDk0NjcsNTAuNDYzODcyIDI4Ljc3OTk5OSw1MS4wNzA5NDQgQyAyNi44ODgwODgsNDcuNzAyMzA2IDMwLjkzMTYyMSw0MS4xOTAyNTcgMjUuNTgzNjUsNDAuMDQ2MTQ3IEMgMjAuNzM5MzEsNDAuMzEyNzk4IDIxLjI1MjE5NCw0NS45MTA4NzEgMjIuMDAxNDM5LDQ5LjE1NDA2NiBDIDIxLjg0MjUzLDUxLjgyODMwOSAxOC43OTA1NzcsNTEuMzkyNTYgMTkuNTg1NTg1LDQ4LjY3MzczOCBDIDE5Ljg1MTgyOSw0NS42OTM4NjQgMTguMjg1MzMyLDM5LjYzMDMwMSAyMC45ODY5ODMsMzguNzAyOTExIEMgMjMuNTA4NDYxLDQwLjgwODg5IDI1Ljc2MTg0NywzNS43MzE5MDYgMjguNDUyNDU5LDM4LjY4NjIyNiBDIDI5LjkyMTQ1NCwzOS43OTMxOTQgMzAuODI3NjE4LDQxLjcwOTk5MiAzMC41MzEyNSw0My41NTM3MzQgeiBNIDM4LjgwNyw0OS43NzAyMjMgQyA0Mi4zNjkwMzQsNTAuNzY4OTc0IDQ0LjUyMzM0NCw0Ni4zMjg2ODggNDMuNzAwNTIxLDQzLjM1ODk4MyBDIDQwLjQwMjc3NSwzNS41NDY0NTMgMzIuNDkxMTk5LDQ0LjM0NDEzMSAzOC44MDcsNDkuNzcwMjIzIHogTSAzOS45NDE0MDYsMzguMDM0MjAzIEMgNTIuMDg1ODcyLDM5LjcwNTY0MiA0My4yMDQ4NTQsNTkuMDk4MzQyIDM0LjY4ODcyMiw0OC42NDI5NjggQyAzMi41OTE4ODYsNDQuNzc4MDMxIDM0LjM4MzEwOSwzOC40NDAxMzIgMzkuMjkxMzY5LDM4LjA1MTgyNyBMIDM5Ljk0MTQwNiwzOC4wMzQyMDMgTCAzOS45NDE0MDYsMzguMDM0MjAzIHogTSA1MS42NjAxNTYsMzQuNjI0MDQ2IEMgNDkuODE1OTc4LDM3Ljg1MDU4MyA1NC43ODk0NTksMzguNjY2MjIyIDU1LjgzNDM3LDM5LjIzNTY2IEMgNTQuMTQwNzQ2LDQwLjcxNTczMyA1MC4wOTMwNjEsNDAuMTIxNTggNTEuNTYyNDYxLDQzLjc2MjEyIEMgNTEuMDA0MDk2LDQ2Ljk4MDUyMyA1Mi40ODY4NDcsNTAuMDM3NzIzIDU1LjY3MDYxNCw1MC41NDU5NSBDIDUzLjU0Nzc4OCw1My43ODI2MTYgNDguNDE3OTMsNTAuMDM1NDk1IDQ5LjM0OTk3Myw0Ni41MTk2OTIgQyA1MC4zMzk4NzcsNDMuNjg2NDcxIDQ4Ljc4MTMxLDQwLjY3MTE2NiA0OC40NjcyNTYsMzguNDgzNTcgQyA1MS4wOTk5MjYsMzcuNDEzNTk5IDQ3Ljg4NjUxMiwzMy4zMjI4MyA1MS42NjAxNTYsMzQuNjI0MDQ2IHogTSA2OS44NTkzNzUsNDMuNTUzNzM0IEMgNjguOTY2OTE4LDQ1LjkxMTU1NyA3MS44MjI3OTQsNTAuNDYzODcyIDY4LjEwODEyNCw1MS4wNzA5NDQgQyA2Ni4yMTYyMTQsNDcuNzAyMzA2IDcwLjI1OTc0Niw0MS4xOTAyNTYgNjQuOTExNzc1LDQwLjA0NjE0NSBDIDYwLjIyMjQxOCw0MC4yODU5MDQgNjAuNDM5MTk0LDQ1Ljc1NzcyOCA2MS4zNjc5NDIsNDguOTUzNjgzIEMgNjAuNzA1NDQ4LDUzLjA2NDg1NSA1Ny43ODg2MjYsNDkuOTAwMTM0IDU4LjgzODM3OSw0Ny4yODk3MzggQyA1OC45Njk3MDksNDMuMzgxMTc0IDU5LjAwNjQzNywzOS40NTUwODcgNTguNjA3NDA0LDM1LjU2NTcxNCBDIDU5LjM1NjAyNSwzMS42MzI0MTMgNjIuMzY4MjY5LDM0LjY4MDEzIDYxLjAxMzUyLDM3LjE5NDMxNiBDIDYwLjM4NDE3LDM5LjMwMjUzOCA2MS40NjkwODcsNDAuNjUzNDc2IDYyLjk5NjI0OCwzOC40NzQ4MjkgQyA2Ni4yMDIwODksMzYuODI2MTU0IDcwLjg2MzI2OSwzOS44MjY0NTEgNjkuODU5Mzc1LDQzLjU1MzczNCB6IE0gODUuNDEwMTU2LDQ0LjM3NDA0NiBDIDgzLjI0NDg0OSw0Ny45MDU1MzMgNzYuNDQ3MDg1LDQyLjQ1NjM0NCA3NS45NzYwMTMsNDcuNDQ0MDUyIEMgNzYuOTEzNTQxLDUxLjcyNDU0OCA4My4yNzUzMjQsNDguNzI2MTk2IDg0LjM5MzYzOSw1MC4xMzM3NzMgQyA4Mi4xMDk4NTUsNTMuNTI1MTIzIDc2LjQyMTMzOSw1MS44NjAxMTEgNzQuMjg1MzM1LDQ5LjAxMzM2IEMgNzEuMjU4MjQ3LDQ0LjcyOTk4NCA3NC42MTQwMTMsMzcuMTY2NTE2IDgwLjI1NDI4OSwzNy45Njc1NiBDIDgzLjI4Njk1OCwzOC4yODQ0OTUgODUuODMzOTE0LDQxLjMxMDc0NSA4NS40MTAxNTYsNDQuMzc0MDQ2IHogTSA4My4yNTM5MDYsNDMuNzQxMjM0IEMgODQuNDMxMzE5LDM5LjAzOTYxNCA3NC41OTQ4MTIsMzguNjg3MzI1IDc2LjI5MTg4Niw0My4zMzUyMjYgQyA3OC4yODQ3ODMsNDQuNzk2MDQ4IDgxLjAzMjg1Niw0My4wOTA5NDMgODMuMjUzOTA2LDQzLjc0MTIzNCB6IE0gOTYuNTU0Njg4LDQwLjM2NjIzNCBDIDkzLjI5MDYxMiwzOC42ODgyIDkwLjYyMjIxNyw0Mi41MTk2MzUgOTAuNzI4NTIyLDQ1LjQ5MjY2NSBDIDkwLjg4MTkyNSw0Ny4zMzM2NzYgOTIuMzMwMjg2LDUyLjE0NDQ2NSA4OS4wMjg3NTEsNTAuOTA1OTg4IEMgODguOTU2NzMsNDYuNzYzOTYzIDg4LjM1MzMxMiw0Mi40NDcyMDcgODkuMzE3MjEsMzguMzM2NjQzIEMgOTEuMDQwNDcxLDM4LjUwMzQzNyA5Mi4yMDc1MTQsNDAuNjY4MTgxIDkzLjQyMTQ2OCwzOC4yMDgyOTggQyA5NC45MDI0NzgsMzcuNDQ5NzMgOTcuNjkwOTQ0LDM4LjI2MzY2OCA5Ni41NTQ2ODgsNDAuMzY2MjM0IHogIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiCiAgICAgICBub2RldHlwZXM9ImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjIgogICAgICAgaWQ9ImZsb3dSb290MTg5OCIKICAgICAgIGQ9Ik0gMTcuMDI2MzI3LDYzLjc4OTg0NyBDIDAuNzUwNjM3Niw2NC4wNTg0NjkgMTMuODgyNzksNjYuMzg3MTU0IDEzLjExMzg4Myw2OS4zMjMyNTggQyA4LjA0NzI0MTcsNzAuMjg3MDkzIDMuNTkzNjI4NSw2My41NjU3MTQgNi44MDkwNDUxLDU5LjM3MDU0OCBDIDguNzU5MTU1Myw1NS43MTc3OTEgMTUuMjY5OTIyLDU1LjE5ODM2MSAxNi45MDIwNjgsNTkuMzkzMjYxIEMgMTcuNTMyNTgxLDYwLjc1ODk0NyAxNy42MjgyMzcsNjIuMzk2NTg5IDE3LjAyNjMyNyw2My43ODk4NDcgeiBNIDE1LjMwNjQ2Myw2Mi42NTYxMDkgQyAxOC44NTI1NjYsNTguNzEzNzczIDcuNjU0MzU4NCw1Ni42MDkxNDMgMTAuNzY1ODAzLDYxLjMwNDc0MiBDIDEyLjEyNDc4OSw2Mi4yMTc3MTUgMTMuOTYxMzU5LDYxLjcwNTM0MiAxNS4zMDY0NjMsNjIuNjU2MTA5IHogTSAzMS4zMDc5MzEsNjIuMzkxMzgzIEMgMjcuMTMwNTE4LDYzLjUyNDAyNiAyNC42Njk4NjMsNjguNjYzMDA0IDI3LjQ3MDcxNyw3Mi4yMjk0NzIgQyAyNS45NDY2NTcsNzQuMDUyMzE2IDI0LjI1MzY5Nyw3MS4wNzYyMzcgMjQuODU3MjgxLDY5LjYzNjkwOSBDIDIzLjczNzQ0NCw2Ny4wMzg0MjggMTcuMzk5ODYyLDcyLjI1NDI0NiAxOS4zODY2MzYsNjguODg4NjU3IEMgMjMuMTU5NzE5LDY3LjU1MTE5MyAyMi4zOTg0OTYsNjMuNzExMzAxIDIyLjA2MDY3LDYwLjg0ODY3MSBDIDI0LjA2NDA4NSw2MC4zNzUyOTQgMjQuMzcwMzc2LDY1Ljc3MjY4OSAyNy4xNjc5MTgsNjMuMzI2MDQ4IEMgMjguMzUwMTI2LDYyLjU0NjM2OSAyOS45MjczNjIsNjEuMDY3NTMxIDMxLjMwNzkzMSw2Mi4zOTEzODMgeiBNIDM3LjY2ODc1LDcwLjU5ODYyMyBDIDMzLjQ2NzMxNCw2Ni42MjI2NCAzMi41MTcwNjQsNzcuOTcyNzIzIDM3LjMwNjI2LDc0LjQ2NjYzNiBDIDM4Ljc0MjUyMyw3My44NTM2MDggNDAuNTU5MDQsNzAuMzg5MzIgMzcuNjY4NzUsNzAuNTk4NjIzIHogTSA0MS42NzczMjEsNzAuOTczMTMxIEMgNDIuMzQwNjY5LDc1LjMwODE4MiAzNi45MjYxNTcsNzguMzYxMjU3IDMzLjMzMTkyMSw3Ni4yMjMxNTUgQyAyOS40MzQzNSw3NC44OTM5ODggMzAuNjE4Njk4LDY3LjY3NzIzMiAzNS4wMDM4MDYsNjguNTY3ODg1IEMgMzcuMTM3MzkzLDcwLjU5Mjg1NCA0Mi4xNDAyNjUsNjcuMDAyMjIxIDM3LjY1NjE5Miw2Ni4yOTAwMDcgQyAzNS4yNDIyMzMsNjUuOTE0MjE0IDM1LjE2NjUwMyw2Mi42NDA3NTcgMzguMDM2OTU0LDYzLjkyNjQwNCBDIDQwLjg0NzkyMyw2NC43NDQ5MjYgNDMuMjI3ODM4LDY4LjEyNDczNSA0MS42NzczMjEsNzAuOTczMTMxIHogTSA2Mi4zNzkwOTksNzYuNjQ3MDc5IEMgNjIuMDA3NDA0LDc4LjU2MDQxNyA2MS4xNjE0MzcsODQuMDM0NTM1IDU4Ljg5MDU2NSw4Mi4wMTAwMTkgQyA1OS43Njk2NzksNzkuMDM5OTU4IDYyLjUzNjM4Miw3Mi4yMjkxMTUgNTYuOTQ3ODk5LDcyLjc2NTc4OSBDIDUzLjc5MDQxNiw3My41NzA4NjMgNTQuOTA4MjU3LDgwLjk2ODM4OCA1MS41MjkyODYsNzkuNDk2ODU5IEMgNTEuNzA3ODMxLDc2LjU1OTgxNyA1NS44NTgxMjUsNzEuODk2ODM3IDUwLjgzMjEsNzAuNjc4NTA0IEMgNDUuODk4MTEzLDY5LjkwNzgxOCA0Ny40ODU5NDQsNzUuNzM1ODI0IDQ1LjI4Njg4Myw3OC4wMzQ3MDMgQyA0Mi45MTYzOTMsNzYuMzMzMzk2IDQ1LjQ3MDgyMyw3MS42NDcxNTUgNDYuNjI0MTI0LDY5LjQxNDczNSBDIDUwLjkxOTUwNyw2Ny45MDY0ODYgNjMuNjE4NTM0LDcwLjg3ODcwNCA2Mi4zNzkwOTksNzYuNjQ3MDc5IHogTSA2Ni40MjY0NDcsODMuODQ5MDUgQyA2Ny42MTYzOTgsODUuNzc3NTkxIDYyLjExNDYyNCw5NC40OTI2OTggNjIuMzUxMTI0LDkwLjMxNzExIEMgNjMuNzkxNjg0LDg2LjU4MTk2MSA2NS43MzAzNzYsNzguMDAwNjM2IDY3LjM5MTg5MSw3NC44NTU3NSBDIDcxLjAyNzgxNSw3My43ODExNzUgNzYuMzgzMDY3LDc1LjM1MDI4OSA3Ni41OTE5NzIsNzkuNzUxODk4IEMgNzcuMDQ4NTQ1LDgzLjc5MzA0OCA3My4wNjY4MDMsODguNDI5OTQ1IDY4Ljg0MjE4Nyw4Ni43NjU5MzYgQyA2Ny42MjQzODYsODYuMjgyMDM0IDY2LjU2NzQxLDg1LjE5NTEzMiA2Ni40MjY0NDcsODMuODQ5MDUgeiBNIDc0LjA4NjU2OSw4MS44MDM0MzUgQyA3Ni44NTE4OTMsNzguMDUwNTI0IDY5LjI2NDQwMiw3NC4zMTAyNTYgNjcuNTYwNzM0LDc4LjM3ODE5MSBDIDY1Ljg5MzQwMiw4MC41OTQwOTkgNjcuMjU1NzE5LDgzLjc3NTc0NiA2OS43MDA1NTUsODQuNzE4NTU4IEMgNzIuMDI4NzA4LDg1LjkwMjIyNCA3My42ODg2MzksODMuODg4NjYyIDc0LjA4NjU2OSw4MS44MDM0MzUgeiBNIDgyLjMxODc5OSw3My4xMjQ1NzcgQyA4NC4zMDUyMyw3NS40ODcwNTkgODEuNjU1MDE1LDg4LjQ0ODA4NiA3OC4yNDcxODMsODcuMjc1NzM2IEMgNzguOTkxOTM1LDgyLjM4NzgyOCA4MS4yOTEwMjksNzcuOTQ5Mzk0IDgyLjMxODc5OSw3My4xMjQ1NzcgeiBNIDk1LjAwMTk4NSw4Ny42ODQ2OTUgQyA3OC43MjYyOTgsODcuOTUzMzE5IDkxLjg1ODQ0OSw5MC4yODE5OTkgOTEuMDg5NTQyLDkzLjIxODEwNyBDIDg2LjAyMjksOTQuMTgxOTQgODEuNTY5Mjg3LDg3LjQ2MDU2MiA4NC43ODQ3MDEsODMuMjY1Mzk0IEMgODYuNzM0ODE0LDc5LjYxMjYzNyA5My4yNDU1ODIsNzkuMDkzMjEgOTQuODc3NzI5LDgzLjI4ODExIEMgOTUuNTA4MjQ1LDg0LjY1Mzc5NiA5NS42MDM4OTIsODYuMjkxNDM4IDk1LjAwMTk4NSw4Ny42ODQ2OTUgeiBNIDkzLjI4MjEyMiw4Ni41NTA5NTcgQyA5Ni44MjgyMjMsODIuNjA4NjIxIDg1LjYzMDAxNyw4MC41MDM5OTMgODguNzQxNDYxLDg1LjE5OTU5MiBDIDkwLjEwMDQ0Nyw4Ni4xMTI1NjUgOTEuOTM3MDE4LDg1LjYwMDE5MiA5My4yODIxMjIsODYuNTUwOTU3IHogIiAvPgogIDwvZz4KPC9zdmc+Cg==",
    "subtype" : "project"
  }, {
    "description" : "# Klepsydra\n\nWhile hardware and sensors have hugely evolved for embedded systems for robotics, aerospace and space, embedded software engineering has remain the same. However, the software industry has undergone a revolution in sectors like finance and technology.\n\nKlepsydra is addressed to entrepreneurs who want to go further stand out from the vast majority. That is why Klepsydra capacitates those who want to make a difference.\n\nOur philosophy is to bring embedded software engineering up to speed in order to build advanced autonomous applications in a more efficient and reliable manner.\n\n\u00A9 2021, [Klepsydra Technologies GmbH](https://klepsydra.com)",
    "path" : "klepsydra",
    "updated" : "2021-05-10T09:55:55.705Z",
    "name" : "Klepsydra",
    "created" : "2021-05-01T15:45:16.064Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
    "created-by" : "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
    "id" : "module/17997c55-eb8a-417f-83fe-253ad1cc57eb",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/klepsydra" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://klepsydra.com/wp-content/uploads/2021/01/klepsydraNEWLOGO_PNG.png",
    "subtype" : "project"
  }, {
    "description" : "# Meet byteLAKE\n\n## Products and Services\n\nEnabling innovative, AI-powered automation and data-driven, proactive operations.\nSolutions for Fluid Dynamics, Manufacturing, Paper Mills, Chemical Industry, Industry 4.0, Restaurants, Agriculture, Logistics, Construction Industry,\nBig Data Analytics, Document Processing, and more.\n\n## Cognitive Services\n\n[Cognitive Services](https://www.bytelake.com/en/artificial-intelligence-products/cognitive-services/) AI for Industry 4.0. Visual inspection, Big Data analytics.\n(special version for Paper Mills here)\n\n\u00A9 2021, [byteLAKE](https://bytelake.com)",
    "path" : "bytelake",
    "updated" : "2021-05-10T09:55:00.523Z",
    "name" : "byteLAKE",
    "created" : "2021-05-01T09:00:06.598Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
    "created-by" : "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
    "id" : "module/8c146a34-42e4-4e83-9e37-8ab2c1f97b7c",
    "resource-type" : "module",
    "logo-url" : "https://www.bytelake.com/en/wp-content/uploads/2017/01/byteLAKE-logo.png",
    "subtype" : "project"
  }, {
    "description" : "# Example applications by SixSq\n\nAs creators of Nuvla.io, we created these example applications to help you better leverage the platform.  We also use these applications in our training material and our [Youtube Classroom channel](https://www.youtube.com/watch?v=s0NQjTgmaU0&list=PLY20wTTKSDHa-bTvE-hRtAXafrNNkQYru). We hope you will find them useful. Feel free to reuse them as you wish.\n\n\u00A9 2021, [SixSq S\u00E0rl](https://sixsq.com)",
    "path" : "sixsq",
    "updated" : "2022-04-20T15:36:29.173Z",
    "name" : "SixSq",
    "created" : "2021-04-07T12:52:00.398Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/a9a03493-bfca-4db0-8864-caa7bd8757b6",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin", "group/sixsq-devs" ],
      "owners" : [ "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "group/sixsq-devs" ],
      "delete" : [ "group/nuvla-admin", "group/sixsq-devs" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "group/sixsq-devs" ],
      "edit-acl" : [ "group/nuvla-admin", "group/sixsq-devs" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "group/sixsq-devs" ],
      "manage" : [ "group/nuvla-admin", "group/sixsq-devs" ],
      "edit-meta" : [ "group/nuvla-admin", "group/sixsq-devs" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/a9a03493-bfca-4db0-8864-caa7bd8757b6"
    }, {
      "rel" : "delete",
      "href" : "module/a9a03493-bfca-4db0-8864-caa7bd8757b6"
    }, {
      "rel" : "delete-version",
      "href" : "module/a9a03493-bfca-4db0-8864-caa7bd8757b6/delete-version"
    } ],
    "logo-url" : "https://sixsq.com/img/logo/logo_sixsq.png",
    "subtype" : "project"
  }, {
    "description" : "# C2RO\u2122\n\nC2RO\u2122 is all about helping businesses understand human behavior in the physical world. \nOur products are the cornerstone of data-driven decision-making toward operational \nefficiency, physical transformation, and the safe and immersive environments of the future. \n \nSomething that we are proud sets us apart in the industry is our commitment to biometric-\nfree solutions and our compliance with the strictest data privacy regulations, including \nEurope\u2019s GDPR and North America\u2019s PIPEDA. This gives our customers and partners the \nconfidence to use our solutions knowing they are safe and do not pose a risk to their \ncustomers. \n \nFinally, we are continuously raising the bar on data accuracy in the field of AI and traffic \nanalysis systems. Our customers know that C2RO\u2122 will always stand by its data and they \ncan trust the decisions that rely on that data every day.  \n \nFor more information, please visit \n[www.c2ro.com](www.c2ro.com)",
    "path" : "c2ro",
    "updated" : "2022-06-20T09:30:40.798Z",
    "name" : "C2RO",
    "created" : "2022-06-08T14:43:33.636Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/384bd870-2546-4a61-a430-431ce0096290",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/c2ro-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/384bd870-2546-4a61-a430-431ce0096290"
    }, {
      "rel" : "delete",
      "href" : "module/384bd870-2546-4a61-a430-431ce0096290"
    }, {
      "rel" : "delete-version",
      "href" : "module/384bd870-2546-4a61-a430-431ce0096290/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/c2ro.webp",
    "subtype" : "project"
  }, {
    "description" : "# ClearBlade\n\nClearBlade is the industry-leading Edge Computing software company that enables enterprises to rapidly engineer and run secure, real-time, scalable IoT applications. \n\nHeadquartered in Austin, Texas, ClearBlade is an award-winning, fully scalable, secure, flexible, and autonomous IoT edge platform that enables companies to ingest, analyze, \nadapt and act on any data in real-time and at extreme scale. \n\nClearBlade provides a consistent platform across the edge, cloud, and on-premise environments. \n\nFor more information, please visit [www.clearblade.com](https://www.clearblade.com)",
    "path" : "clearblade",
    "updated" : "2022-06-20T09:30:17.542Z",
    "name" : "Clearblade",
    "created" : "2022-06-08T16:19:42.282Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/7aaa77ce-1d95-4b57-b4a4-431b769cf038",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/clearblade-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/7aaa77ce-1d95-4b57-b4a4-431b769cf038"
    }, {
      "rel" : "delete",
      "href" : "module/7aaa77ce-1d95-4b57-b4a4-431b769cf038"
    }, {
      "rel" : "delete-version",
      "href" : "module/7aaa77ce-1d95-4b57-b4a4-431b769cf038/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/clearblade.webp",
    "subtype" : "project"
  }, {
    "description" : "# AI EdgeLabs\n\nSimilar to our parent company, Scalarr, our solution at its core has a straightforward vision: to ensure security to the newest technologies. \nIn the specific case of AI EdgeLabs, the solution was born out of the knowledge we earned from witnessing firsthand how clients were getting constantly attacked across their organization\u2019s Edge and IoT infrastructures, mostly due to lax security measures, outdated or unpatched systems, and a rising number of sophisticated cyber security attacks, to name a few. \n \nWith a diverse workforce based out of Ukraine, USA, Mexico, Poland, Israel, and Canada, AI EdgeLabs was founded and is run by security professionals that value humanity, safety, and favorable living conditions for every individual including social, economic, health, and any other factor that plays a part in human wellbeing. \n \nWe are the proud recipients of several acknowledgements, cementing our place as the industry\u2019s most accurate solution in the market and culminating in being named one of Forbes\u2019 Top 30 Best Ukrainian Startups in 2021.\n\n[edgelabs.ai](https://edgelabs.ai/)",
    "path" : "ai-edgelabs",
    "updated" : "2022-06-20T09:31:39.952Z",
    "name" : "AI EdgeLabs",
    "created" : "2022-06-08T15:47:06.020Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/c0eee4d5-afba-4477-ac38-c1b3d2eca79c",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/ai-edgelabs-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/c0eee4d5-afba-4477-ac38-c1b3d2eca79c"
    }, {
      "rel" : "delete",
      "href" : "module/c0eee4d5-afba-4477-ac38-c1b3d2eca79c"
    }, {
      "rel" : "delete-version",
      "href" : "module/c0eee4d5-afba-4477-ac38-c1b3d2eca79c/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/ai_edgelabs.webp",
    "subtype" : "project"
  }, {
    "description" : "# Cybus\n\nThe software company Cybus enables industrial manufacturers to efficiently connect and automate their production. \n\nIts software \u201CCybus Connectware\u201D leverages real-time data from the production environment irrespective of its vendors or applications. \n\nAs a result, factories achieve sustainable competitive advantages such as increased efficiency and quality of the production processes. \n\nAt the same time, the integrated security solution of the cloud-independent software maintains absolute data sovereignty. \n\nCybus Connectware is used as the central infrastructure component of the Smart Factory architecture by European medium-sized businesses up to the automotive industry. \n\nMore details at [www.cybus.io](https://www.cybus.io).",
    "path" : "cybus",
    "updated" : "2022-06-20T09:32:14.671Z",
    "name" : "Cybus",
    "created" : "2022-06-08T15:20:13.956Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "created-by" : "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
    "id" : "module/4edd3a6e-39a3-45a2-87c4-547adcfb91a6",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/cybus-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user", "group/the-edge-event" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/4edd3a6e-39a3-45a2-87c4-547adcfb91a6"
    }, {
      "rel" : "delete",
      "href" : "module/4edd3a6e-39a3-45a2-87c4-547adcfb91a6"
    }, {
      "rel" : "delete-version",
      "href" : "module/4edd3a6e-39a3-45a2-87c4-547adcfb91a6/delete-version"
    } ],
    "logo-url" : "https://sos-ch-gva-2.exo.io/nuvla-images/cybus.png",
    "subtype" : "project"
  }, {
    "description" : "Accelerate problem resolution and optimize network and infrastructure performance, customer and employee experience \u2013 whether onsite or remote. You\u2019re 30 minutes away from total visibility across your SaaS and web apps, hybrid cloud and connectivity.",
    "path" : "kadiska",
    "updated" : "2022-09-13T17:42:38.867Z",
    "name" : "Kadiska",
    "created" : "2022-06-24T13:13:47.936Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/cfcd12a3-c51c-4086-898e-9e1b8229804f",
    "id" : "module/383ded80-dc22-4598-99ea-5fc8dbbf002d",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/kadiska-vendor", "group/sixsq-vendor", "user/cfcd12a3-c51c-4086-898e-9e1b8229804f" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/383ded80-dc22-4598-99ea-5fc8dbbf002d"
    }, {
      "rel" : "delete",
      "href" : "module/383ded80-dc22-4598-99ea-5fc8dbbf002d"
    }, {
      "rel" : "delete-version",
      "href" : "module/383ded80-dc22-4598-99ea-5fc8dbbf002d/delete-version"
    } ],
    "logo-url" : "https://kadiska.com/wp-content/uploads/2022/05/Kadiska-Main-Logo-use-on-White-Background.png",
    "subtype" : "project"
  }, {
    "description" : "Keysight provides tomorrow\u2019s test technologies today",
    "path" : "keysight",
    "updated" : "2022-09-14T08:07:54.652Z",
    "name" : "Keysight",
    "created" : "2022-09-14T07:28:48.917Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/eb67d4ce-e018-49c7-9bc4-f37d469888d7",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/keysight-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://www.keysight.com/content/dam/keysight/en/img/gnav/keysight-logo.svg",
    "subtype" : "project"
  }, {
    "description" : "Varnish is an HTTP accelerator designed for content-heavy dynamic web sites as well as APIs.",
    "path" : "varnish",
    "updated" : "2022-11-24T09:49:14.678Z",
    "name" : "Varnish",
    "created" : "2022-09-05T12:09:27.683Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/830d977b-bf1f-416f-87fe-e3a25474c7b9",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/sixsq-vendor", "group/varnish-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/830d977b-bf1f-416f-87fe-e3a25474c7b9"
    }, {
      "rel" : "delete",
      "href" : "module/830d977b-bf1f-416f-87fe-e3a25474c7b9"
    }, {
      "rel" : "delete-version",
      "href" : "module/830d977b-bf1f-416f-87fe-e3a25474c7b9/delete-version"
    } ],
    "logo-url" : "https://www.varnish-software.com/wp-content/uploads/VS-logo-2020-140x60-1.svg",
    "subtype" : "project"
  }, {
    "description" : "Monitor and Predict network low latency in real-time. LatenceTech offers an innovative way to continuously track, predict and evaluate  latency-optimized 5G and Private LTE Networks in support of time-critical innovations.\n\nOur solution is based on three main components:\n\n- **Analyzer**: a self-contained real-time analytics platform\n- **QoS Agent**: a measurement probe based on multiple protocols\n- **Reflector**: an end-target for the QoS Agent\n\nA minumum of one QoSAgent and one Reflector is required to measure an end-to-end link between a connected application and the target server on the internet. The QoSAgent is normally positionned close to the connected application. Similarly, the Reflector is normally positioned close to the server. Several QosAgents and Reflectors can be deployed to measure different segments of the 5G or PrivateLTE network.\n\nFor more details, please refer to [docs.latence.ca](https://docs.latence.ca)\n\nRefer to link for details in the [End User License Agreement EULA](https://www.latencetech.com/eula)\n\n&copy; LatenceTech Technologies Inc., 2022",
    "path" : "latencetech",
    "updated" : "2023-01-12T13:53:25.985Z",
    "name" : "LatenceTech",
    "created" : "2022-09-15T09:25:47.256Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/8e15c48a-c488-491a-a002-652d082578f0",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/latencetech-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/8e15c48a-c488-491a-a002-652d082578f0"
    }, {
      "rel" : "delete",
      "href" : "module/8e15c48a-c488-491a-a002-652d082578f0"
    }, {
      "rel" : "delete-version",
      "href" : "module/8e15c48a-c488-491a-a002-652d082578f0/delete-version"
    } ],
    "logo-url" : "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/fktgj3vzrfxkpgsr1grt",
    "subtype" : "project"
  }, {
    "description" : "AI-based quality audit and process control made easy across use cases\n\nMore details at [www.relimetrics.com](https://www.relimetrics.com/).",
    "path" : "relimetrics",
    "updated" : "2023-01-31T13:54:47.340Z",
    "name" : "Relimetrics",
    "created" : "2022-09-14T12:50:24.877Z",
    "parent-path" : "",
    "data-accept-content-types" : [ ],
    "updated-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "created-by" : "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
    "id" : "module/93b4ae91-a452-4316-97f3-5833733e8195",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "group/relimetrics-vendor", "group/sixsq-vendor" ],
      "view-acl" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin", "group/nuvla-user" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "edit",
      "href" : "module/93b4ae91-a452-4316-97f3-5833733e8195"
    }, {
      "rel" : "delete",
      "href" : "module/93b4ae91-a452-4316-97f3-5833733e8195"
    }, {
      "rel" : "delete-version",
      "href" : "module/93b4ae91-a452-4316-97f3-5833733e8195/delete-version"
    } ],
    "logo-url" : "https://i.ytimg.com/vi/q1ZyiezByGE/maxresdefault.jpg",
    "subtype" : "project"
  } ],
  "operations" : [ {
    "rel" : "add",
    "href" : "module"
  } ]
};

export const mockInfrastructureData = {
  "count": 1,
  "acl": {
      "query": [
          "group/nuvla-user"
      ],
      "add": [
          "group/nuvla-user"
      ]
  },
  "resource-type": "infrastructure-service-collection",
  "id": "infrastructure-service",
  "resources": [
      {
          "description": "NuvlaEdge compute infrastructure on NuvlaEdge Mini Demo",
          "capabilities": [
              "NUVLA_JOB_PULL"
          ],
          "name": "NuvlaEdge Mini Demo",
          "swarm-enabled": true,
          "id": "infrastructure-service/c8d5698b-2ae0-4503-b224-7624de3dc0a5",
          "resource-type": "infrastructure-service",
          "acl": {
              "view-meta": [
                  "group/demo",
                  "group/ekinops-demo",
                  "group/sixsq-devs",
                  "group/sixsq-vendor",
                  "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
                  "nuvlabox/a780ac93-06e1-4871-8049-b6a45f752b17",
                  "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
                  "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
                  "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
                  "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
                  "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6",
                  "user/f820e91d-6dc9-404d-9a2c-fa11c372e2f1"
              ],
              "view-acl": [
                  "group/demo",
                  "group/ekinops-demo",
                  "group/sixsq-devs",
                  "group/sixsq-vendor",
                  "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
                  "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
                  "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
                  "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
                  "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
                  "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6"
              ],
              "view-data": [
                  "group/demo",
                  "group/ekinops-demo",
                  "group/sixsq-devs",
                  "group/sixsq-vendor",
                  "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
                  "nuvlabox/a780ac93-06e1-4871-8049-b6a45f752b17",
                  "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
                  "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
                  "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
                  "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
                  "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6",
                  "user/f820e91d-6dc9-404d-9a2c-fa11c372e2f1"
              ],
              "owners": [
                  "group/nuvla-admin"
              ]
          },
          "swarm-manager": true,
          "subtype": "swarm"
      }
  ],
  "operations": [
      {
          "rel": "add",
          "href": "infrastructure-service"
      }
  ]
};

export const mockCredentialsData = {
  "count": 1,
  "acl": {
      "query": [
          "group/nuvla-user",
          "group/nuvla-nuvlabox"
      ],
      "add": [
          "group/nuvla-user",
          "group/nuvla-nuvlabox"
      ]
  },
  "resource-type": "credential-collection",
  "id": "credential",
  "resources": [
      {
          "description": "NuvlaBox credential linked to NuvlaEdge Mini Demo",
          "name": "NuvlaEdge Mini Demo",
          "last-check": "2023-04-15T11:41:46.293Z",
          "created": "2023-02-05T09:41:08.655Z",
          "status": "VALID",
          "id": "credential/166a6bad-e74d-4013-b865-68c18ea431cf",
          "resource-type": "credential",
          "acl": {
              "view-meta": [
                  "group/demo",
                  "group/ekinops-demo",
                  "group/sixsq-devs",
                  "group/sixsq-vendor",
                  "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
                  "nuvlabox/a780ac93-06e1-4871-8049-b6a45f752b17",
                  "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
                  "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
                  "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
                  "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
                  "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6",
                  "user/f820e91d-6dc9-404d-9a2c-fa11c372e2f1"
              ],
              "view-acl": [
                  "group/demo",
                  "group/ekinops-demo",
                  "group/sixsq-devs",
                  "group/sixsq-vendor",
                  "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
                  "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
                  "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
                  "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
                  "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
                  "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6"
              ],
              "view-data": [
                  "group/demo",
                  "group/ekinops-demo",
                  "group/sixsq-devs",
                  "group/sixsq-vendor",
                  "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
                  "nuvlabox/a780ac93-06e1-4871-8049-b6a45f752b17",
                  "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
                  "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
                  "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
                  "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
                  "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6",
                  "user/f820e91d-6dc9-404d-9a2c-fa11c372e2f1"
              ],
              "owners": [
                  "group/nuvla-admin"
              ],
              "manage": [
                  "group/demo",
                  "group/ekinops-demo",
                  "group/sixsq-devs",
                  "group/sixsq-vendor",
                  "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
                  "nuvlabox/a780ac93-06e1-4871-8049-b6a45f752b17",
                  "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
                  "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
                  "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
                  "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
                  "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6",
                  "user/f820e91d-6dc9-404d-9a2c-fa11c372e2f1"
              ]
          },
          "operations": [
              {
                  "rel": "check",
                  "href": "credential/166a6bad-e74d-4013-b865-68c18ea431cf/check"
              }
          ],
          "subtype": "infrastructure-service-swarm"
      }
  ],
  "operations": [
      {
          "rel": "add",
          "href": "credential"
      }
  ]
};

export const mockCredentialDetail = {
    "description": "NuvlaBox credential linked to NuvlaEdge Mini Demo",
    "key": "DELETED\n",
    "parent": "infrastructure-service/c8d5698b-2ae0-4503-b224-7624de3dc0a5",
    "method": "infrastructure-service-swarm",
    "updated": "2023-04-15T13:49:15.854Z",
    "name": "NuvlaEdge Mini Demo",
    "ca": "DELETED\n",
    "cert": "DELETED\n",
    "last-check": "2023-04-15T13:49:15.852Z",
    "created": "2023-02-05T09:41:08.655Z",
    "updated-by": "group/nuvla-admin",
    "created-by": "internal",
    "status": "VALID",
    "id": "credential/166a6bad-e74d-4013-b865-68c18ea431cf",
    "resource-type": "credential",
    "acl": {
        "view-acl": [
            "group/demo",
            "group/ekinops-demo",
            "group/sixsq-devs",
            "group/sixsq-vendor",
            "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
            "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
            "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
            "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
            "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
            "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6"
        ],
        "view-meta": [
            "group/demo",
            "group/ekinops-demo",
            "group/sixsq-devs",
            "group/sixsq-vendor",
            "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
            "nuvlabox/a780ac93-06e1-4871-8049-b6a45f752b17",
            "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
            "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
            "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
            "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
            "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6",
            "user/f820e91d-6dc9-404d-9a2c-fa11c372e2f1"
        ],
        "view-data": [
            "group/demo",
            "group/ekinops-demo",
            "group/sixsq-devs",
            "group/sixsq-vendor",
            "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
            "nuvlabox/a780ac93-06e1-4871-8049-b6a45f752b17",
            "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
            "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
            "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
            "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
            "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6",
            "user/f820e91d-6dc9-404d-9a2c-fa11c372e2f1"
        ],
        "manage": [
            "group/demo",
            "group/ekinops-demo",
            "group/sixsq-devs",
            "group/sixsq-vendor",
            "infrastructure-service/eb8e09c2-8387-4f6d-86a4-ff5ddf3d07d7",
            "nuvlabox/a780ac93-06e1-4871-8049-b6a45f752b17",
            "user/7644d34d-4c59-47d5-bdde-6d4c3deedb82",
            "user/908c234e-b6b6-4ae0-9afd-654c5729a62f",
            "user/a56bfe85-44e2-4545-8e05-0d80eda4a2b0",
            "user/e53f6f2e-c831-4978-b055-b4ecae38bdda",
            "user/e5be6cc1-6942-4991-acf4-7d5cf95b9cc6",
            "user/f820e91d-6dc9-404d-9a2c-fa11c372e2f1"
        ],
        "owners": [
            "group/nuvla-admin"
        ]
    },
    "operations": [
        {
            "rel": "check",
            "href": "credential/166a6bad-e74d-4013-b865-68c18ea431cf/check"
        }
    ],
    "subtype": "infrastructure-service-swarm"
}

export const mockLaunchDialogCheck = {
  "status" : 202,
  "message" : "starting credential/166a6bad-e74d-4013-b865-68c18ea431cf with async job/347e5e65-5ec0-48c9-b589-9353aa1e24fa",
  "resource-id" : "credential/166a6bad-e74d-4013-b865-68c18ea431cf",
  "location" : "job/347e5e65-5ec0-48c9-b589-9353aa1e24fa"
};

export const mockLaunchDialogJob = {
  "started": "2023-04-15T14:02:02.186Z",
  "tags": [
      "/job/entries/entry-050-0128004464"
  ],
  "execution-mode": "push",
  "updated": "2023-04-15T14:02:02.655Z",
  "status-message": "{'ID': '5QAL:2VFV:BABC:T6J7:LHVL:J2N7:72IC:A77U:RUUY:W2HI:OFYD:GCYS', 'Containers': 36, 'ContainersRunning': 14, 'ContainersPaused': 2, 'ContainersStopped': 20, 'Images': 105, 'Driver': 'overlay2', 'DriverStatus': [['Backing Filesystem', 'xfs'], ['Supports d_type', 'true'], ['Using metacopy', 'false'], ['Native Overlay Diff', 'true'], ['userxattr', 'false']], 'Plugins': {'Volume': ['local'], 'Network': ['bridge', 'host', 'ipvlan', 'macvlan', 'null', 'overlay'], 'Authorization': None, 'Log': ['awslogs', 'fluentd', 'gcplogs', 'gelf', 'journald', 'json-file', 'local', 'logentries', 'splunk', 'syslog']}, 'MemoryLimit': True, 'SwapLimit': True, 'KernelMemory': True, 'KernelMemoryTCP': True, 'CpuCfsPeriod': True, 'CpuCfsQuota': True, 'CPUShares': True, 'CPUSet': True, 'PidsLimit': True, 'IPv4Forwarding': True, 'BridgeNfIptables': True, 'BridgeNfIp6tables': True, 'Debug': False, 'NFd': 218, 'OomKillDisable': True, 'NGoroutines': 325, 'SystemTime': '2023-04-15T16:02:02.487835132+02:00', 'LoggingDriver': 'json-file', 'CgroupDriver': 'cgroupfs', 'CgroupVersion': '1', 'NEventsListener': 2, 'KernelVersion': '3.10.0-1160.88.1.el7.x86_64', 'OperatingSystem': 'CentOS Linux 7 (Core)', 'OSVersion': '7', 'OSType': 'linux', 'Architecture': 'x86_64', 'IndexServerAddress': 'https://index.docker.io/v1/', 'RegistryConfig': {'AllowNondistributableArtifactsCIDRs': None, 'AllowNondistributableArtifactsHostnames': None, 'InsecureRegistryCIDRs': ['127.0.0.0/8'], 'IndexConfigs': {'docker.io': {'Name': 'docker.io', 'Mirrors': [], 'Secure': True, 'Official': True}}, 'Mirrors': None}, 'NCPU': 4, 'MemTotal': 8086847488, 'GenericResources': None, 'DockerRootDir': '/var/lib/docker', 'HttpProxy': '', 'HttpsProxy': '', 'NoProxy': '', 'Name': 'nuvlabox2', 'Labels': [], 'ExperimentalBuild': False, 'ServerVersion': '23.0.1', 'Runtimes': {'io.containerd.runc.v2': {'path': 'runc'}, 'runc': {'path': 'runc'}}, 'DefaultRuntime': 'runc', 'Swarm': {'NodeID': 'omnp725vt5es1qffr9sb1p85n', 'NodeAddr': '192.168.40.74', 'LocalNodeState': 'active', 'ControlAvailable': True, 'Error': '', 'RemoteManagers': [{'NodeID': 'omnp725vt5es1qffr9sb1p85n', 'Addr': '192.168.40.74:2377'}], 'Nodes': 1, 'Managers': 1, 'Cluster': {'ID': 'ke2tj5o5v07qf41k6dw4cqbl1', 'Version': {'Index': 4006389}, 'CreatedAt': '2021-10-19T12:28:11.860307476Z', 'UpdatedAt': '2023-04-15T11:50:25.832707899Z', 'Spec': {'Name': 'default', 'Labels': {}, 'Orchestration': {'TaskHistoryRetentionLimit': 5}, 'Raft': {'SnapshotInterval': 10000, 'KeepOldSnapshots': 0, 'LogEntriesForSlowFollowers': 500, 'ElectionTick': 10, 'HeartbeatTick': 1}, 'Dispatcher': {'HeartbeatPeriod': 5000000000}, 'CAConfig': {'NodeCertExpiry': 7776000000000000}, 'TaskDefaults': {}, 'EncryptionConfig': {'AutoLockManagers': False}}, 'TLSInfo': {'TrustRoot': '-----BEGIN CERTIFICATE-----\\nMIIBaTCCARCgAwIBAgIUMgPZ2/VPfPtJi6e5wPEULsLkAGgwCgYIKoZIzj0EAwIw\\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMjExMDE5MTIyMzAwWhcNNDExMDE0MTIy\\nMzAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\\nA0IABFdAMkpzcZ/CT6tXWPwSod5xmuqedzsk16n92BhRQPRueTeeN8TTsTJGjL2b\\nZcfFrnKK0Gp/4ngUmw3CjqjSgf2jQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\\nAf8EBTADAQH/MB0GA1UdDgQWBBQ0/JfWK/8Uk1zq+1AbwnrPiChTRTAKBggqhkjO\\nPQQDAgNHADBEAiA74BaVeRf0ZhL3ExabSAlIvRMogoDRN6eP2/LEv+vifgIgFXmW\\n7z1bY92Ff9Vf4Q7rB8EH8pOZe1Ye1x161iexYpU=\\n-----END CERTIFICATE-----\\n', 'CertIssuerSubject': 'MBMxETAPBgNVBAMTCHN3YXJtLWNh', 'CertIssuerPublicKey': 'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEV0AySnNxn8JPq1dY/BKh3nGa6p53OyTXqf3YGFFA9G55N543xNOxMkaMvZtlx8WucorQan/ieBSbDcKOqNKB/Q=='}, 'RootRotationInProgress': False, 'DefaultAddrPool': ['10.0.0.0/8'], 'SubnetSize': 24, 'DataPathPort': 4789}}, 'LiveRestoreEnabled': False, 'Isolation': '', 'InitBinary': 'docker-init', 'ContainerdCommit': {'ID': '2456e983eb9e37e47538f59ea18f2043c9a73640', 'Expected': '2456e983eb9e37e47538f59ea18f2043c9a73640'}, 'RuncCommit': {'ID': 'v1.1.4-0-g5fd4c4d', 'Expected': 'v1.1.4-0-g5fd4c4d'}, 'InitCommit': {'ID': 'de40ad0', 'Expected': 'de40ad0'}, 'SecurityOptions': ['name=seccomp,profile=builtin'], 'Warnings': None, 'ClientInfo': {'Debug': False, 'Context': 'default', 'Plugins': [], 'Warnings': None}}",
  "created": "2023-04-15T14:02:02.162Z",
  "duration": 0,
  "state": "SUCCESS",
  "return-code": 0,
  "updated-by": "group/nuvla-admin",
  "created-by": "internal",
  "id": "job/347e5e65-5ec0-48c9-b589-9353aa1e24fa",
  "resource-type": "job",
  "acl": {
      "view-acl": [
          "group/sixsq-vendor"
      ],
      "view-meta": [
          "group/sixsq-vendor"
      ],
      "view-data": [
          "group/sixsq-vendor"
      ],
      "owners": [
          "group/nuvla-admin"
      ]
  },
  "action": "credential_check",
  "version": 2,
  "progress": 100,
  "target-resource": {
      "href": "credential/166a6bad-e74d-4013-b865-68c18ea431cf"
  },
  "time-of-status-change": "2023-04-15T14:02:02.655Z",
  "affected-resources": [
      {
          "href": "credential/166a6bad-e74d-4013-b865-68c18ea431cf"
      }
  ]
}
