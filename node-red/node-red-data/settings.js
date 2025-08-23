// https://nodered.org/docs/user-guide/runtime/securing-node-red#editor--admin-api-security

module.exports = {

    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME,
            password: require("bcryptjs").hashSync(process.env.NODE_RED_PASSWORD, 8),
            permissions: "*"
        },
        {
            username: "rumesh",
            password: "$2b$08$o05uNc6qaDPgBELXFWCsre2EVjRluzBaR6bj7lSEHu.iwMcHjpdza",
            permissions: "read"
        }]
    },

    
    credentialSecret: "Rumesh",


    editorTheme: {
        login: {
            image: "/data/node-red.svg" // a 256x256 image
        },
        logout: {
            redirect: "https://rumesh.is-a.dev/findme/"
        },
        page: {
        title: "Rumesh-RED",
        },
        header: {
            title: "RumeshH-RED",
            url: "https://rumesh.is-a.dev/findme/" // optional url to make the header text/image a link to this url
        },
        // deployButton: {
        //     type:"simple",
        //     label:"Save",
        //     icon: "/data/node-red.svg" // or null to remove image
            
        },
        tours: false,
        // theme: "tokyo-night-light",
        // theme: "tokyo-night-storm",

    },

};
