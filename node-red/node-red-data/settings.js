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

    // editorTheme: {
    //     // theme: "tokyo-night-storm",
    //     theme: "tokyo-night-light",
    //     tours: false,
    // },

};
