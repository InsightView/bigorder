'use strict'
let config = require('./config.json');
let remoteHost = config.remote_host;
let remoteDbName = config.remote_db_name;
let tmpCollection = config.tmp_collection;

let url = 'mongodb://' + remoteHost + "/" + remoteDbName;


let mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(remoteDbName, "connected.");
    let Schema = mongoose.Schema;
    let userSchema = new Schema({
        id: String,
        name: String,
        pass: String,
        email: String,
        createTime: Date,
        isDelete: Boolean,
        loginHistory: [{ type: Date }]
    }, { collection: tmpCollection });
    let schemaModel = mongoose.model(tmpCollection, userSchema);
    let test = new schemaModel({ 'name': 'test_name' });
    console.log(test);
});




