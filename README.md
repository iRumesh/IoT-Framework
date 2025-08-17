IoT Stack Folder Structure
============================

> Folder structure

### top-level directory brief

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
    |   |    ├── Dockerfile           
    |   |    └── portainer_admin_password   # Portainer admin password
    ├── mysql 
    │   ├── dbdata
    │   ├── init.sql        
    |── .env                            # Environment Variables
    |── docker-compose.yml
    |── README.md

### Stack improvements

- [x] node-red with custom nodes, configs, credentials automatically loaded. Themes included //Checked with firebase node
- [x] mosquitto with credentials
- [x] portainer with credentials
- [ ] Influx, Grafana
- [ ] MySQL, Adminer
- [ ] reverse proxy (traefik vs nginx)
