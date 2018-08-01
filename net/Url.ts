/**
 * Url类
 * 
 */

export class Url {
    private ip: string = null;
    private route: string = null;
    private parames: {[key: string]: any} = null;

    public constructor(ip: string, route: string, params: {[key: string]: any} = {}) {
        this.ip     = ip;
        this.route  = route;
        this.parames = params;
    }

    // 添加参数
    public addParams(key: string, value: string) {
        this.parames[key] = value;
    }

    public toString(): string {
        let url = this.ip;
        if (this.route) {
            url += this.route;
        }
        if (this.parames) {
            url += "?" + this.parseParams(this.parames);
        }
        return url;
    }

    private parseParams(params: {[key: string]: string}) {
        const arr: string[] = [];
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const value = encodeURIComponent(params[key]);
                arr.push(`${key}=${value}`);
            }
        }
        const parse = arr.join("&");
        return parse;
    }
}
//http://puzzle.mafiagameglobal.com/tools/api/subscribed_image_packs/?startDate=2018-07-23%20%2B0800&endDate=2018-08-01%20%2B0800
