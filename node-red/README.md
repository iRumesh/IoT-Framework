node-red Folder Structure
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
    └── 

### node-red improvements

- [ ] node-red with custom nodes, configs, credentials automatically loaded. Themes included //Checked with firebase node
- [ ] cronjob, save flows automatically to volume
- [ ] Encrypt, Decrypt
- [ ] Hiding flows, running headless mode
- [ ] HTTPS 


<!-- TABLE OF CONTENTS -->
<details>
  <summary>node-red</summary>
To enable themes, uncomment settings.js> editorTheme & In dockerfile uncomment node-red-themes
</details>
