IoT Stack
============================
>This project is aimed to build minimal production ready IoT Framework to deployed on cloud. 

>MQTT payload will be sent from devices to Mosquitto broker, processed and pass to relevant database (MySQL/Influx), Grafana will be used as visualization tool. Portainer used for docker management.


## 🧩 Microservices 

|                       |                                                                  |
| --------------------- | ---------------------------------------------------------------- |
| **Node-RED** | 1880
| **Mosquitto** | 1883, 9001             |
| **Adminer**   | 8080     |
| **MySQL**     | 3306  |                |
| **InfluxDB**     | 8086  |                |
| **Portainer**     | 9000  |                |
---




### Top-level directory brief

    .               
    ├── node-red                        # Main folder include all the files related to node-red
    │   ├── node-red-data               
    |   |       ├── flows.json          # All the node-red flows
    |   │       ├── flows_cred.son      # Encrypted hash of flow credentials
    |   │       ├── package.json        # All nodes to be installed to palette
    |   │       ├── settings.json       # node-red settings     
    │   └── README.md                   # Doc     
    ├── mosquitto                        
    │   ├── config               
    |   |    └─ mosquitto.conf         
    │   ├── data               
    |   |    └── mosquitto.db
    │   ├── log               
    |   |    └── mosquitto.log
    |   │── docker-entrypoint.sh      
    |   │── Dockerfile                      
    │   └── README.md  
    ├── portainer                       
    │   ├── portainer   
    |   |    ├── portainer_data             # Docker Volume               
    |   |    ├── Dockerfile           
    |   |    └── portainer_admin_password   # Portainer admin password
    ├── mysql 
    │   ├── dbdata
    │   ├── init.sql     
    ├── influxdb 
    │   ├── influxdb-config                 # Docker Volume
    │   ├── influxdb-data                   # Docker Volume 
    │   ├── .env          
    |── .env                            # Environment Variables
    |── docker-compose.yml
    |── README.md

## 🚀 Quick Start

```bash
# Clone and Run
$ git clone https://github.com/iRumesh/IoT-Framework.git
$ cd IoT-Framework
$ docker-compose up --build

```
### Stack improvements

- [x] node-red with custom nodes, configs, credentials automatically loaded. Themes included //Checked with firebase node
- [x] mosquitto with credentials
- [x] portainer with credentials
- [x] Influx 2.7.12
- [x] MySQL, Adminer
- [ ] Grafana
- [ ] reverse proxy (traefik vs nginx)

### References
https://docs.influxdata.com/influxdb/v2/reference/config-options/
https://docs.influxdata.com/influxdb/v2/install/use-docker-compose/

