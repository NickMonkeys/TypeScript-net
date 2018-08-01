"use strict";
exports.__esModule = true;
var Url_1 = require("../net/Url");
var ip = "http://wwww.baidu.com";
var route = "/tool/";
var params = { date: "2018-08-01 +800", time: "20:26" };
var url = new Url_1.Url(ip, route, params);
console.log(url.toString());
