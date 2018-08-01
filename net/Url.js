"use strict";
/**
 * Url类
 *
 */
exports.__esModule = true;
var Url = /** @class */ (function () {
    function Url(ip, route, params) {
        if (params === void 0) { params = {}; }
        this.ip = null;
        this.route = null;
        this.parames = null;
        this.ip = ip;
        this.route = route;
        this.parames = params;
    }
    // 添加参数
    Url.prototype.addParams = function (key, value) {
        this.parames[key] = value;
    };
    Url.prototype.toString = function () {
        var url = this.ip;
        if (this.route) {
            url += this.route;
        }
        if (this.parames) {
            url += "?" + this.parseParams(this.parames);
        }
        return url;
    };
    Url.prototype.parseParams = function (params) {
        var arr = [];
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var value = encodeURIComponent(params[key]);
                arr.push(key + "=" + value);
            }
        }
        var str = arr.join("&");
        console.log(arr);
        console.log(str);
        return str;
    };
    return Url;
}());
exports.Url = Url;
//http://puzzle.mafiagameglobal.com/tools/api/subscribed_image_packs/?startDate=2018-07-23%20%2B0800&endDate=2018-08-01%20%2B0800
