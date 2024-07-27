require('dotenv').config()

const db = process.env.DB_URL;
const pwd = process.env.DB_PWD;
module.exports = {
    port : process.env.port,
    db : db,
    pwd : pwd,
    url : db.replace('<password>',pwd),
    key : process.env.SECRET_KEY

}

