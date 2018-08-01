import { Url } from "../net/Url";


const ip = "http://wwww.baidu.com";
const route = "/tool/";
const params = {date: "2018-08-01 +800", time: "20:26"};
const url = new Url(ip, route, params);

console.log(url.toString());