'use strict'
let url = 'mongodb://localhost/bigorder_db';
let mongoose = require('mongoose'); mongoose.connect(url);

let Schema = mongoose.Schema;
let userSchema = new Schema({
    id: String,
    name: String,
    pass: String,
    email: String,
    createTime: Date,
    isDelete: Boolean,    
    loginHistory: [{type: Date}]       
}, {collection: 'bigorder_user'});

let bigorder_user = mongoose.model('bigorder_user', userSchema);
