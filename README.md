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
    └── mosquitto

### Stack improvements

- [ ] node-red with custom nodes, configs, credentials automatically loaded. Themes included //Checked with firebase node
- [ ] mosquitto with credentials
- [ ] Influx, Grafana
- [ ] MySQL, Adminer

