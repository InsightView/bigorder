'use strict'
let Mock = require('mockjs');
let Random = Mock.Random;


exports.getUser = function () {
    let user = {
        id: Random.guid(),
        name: Random.name(3, 6),
        pass: Random.word(18),
        email: Random.email(),
        isDelete: Random.boolean(),
        createTime: Random.datetime('yyyy-MM-dd HH:mm'),
        loginHistory: []
    }
    let length = ~~(Math.random() * 4) + 2;
    for (var i = 0; i < length; i++) {
        // user.loginHistory.push(Mock.mock({
        //     data: Random.datetime('yyyy-MM-dd HH:mm')
        // }))
        user.loginHistory.push(Random.datetime('yyyy-MM-dd HH:mm'));
    }
    return user;
}

