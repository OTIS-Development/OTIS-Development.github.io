"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHelper = void 0;
const rxjs_1 = require("rxjs");
class HttpHelper {
    post(url, payload, userToken) {
        return this.sessionToken$.pipe((0, rxjs_1.first)(), (0, rxjs_1.switchMap)((sessionToken) => {
            const bearerToken = userToken ? userToken : sessionToken ? sessionToken : null;
            const userRequest = fetch(url, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    Authorization: bearerToken ? `Bearer ${bearerToken}` : '',
                    'Content-Type': 'application/json',
                },
            });
            return (0, rxjs_1.from)(HttpHelper.send(userRequest));
        }));
    }
    static async send(request) {
        const response = await request;
        const responseText = await response.text();
        if (!response.ok) {
            throw new Error(`Status: ${response.status}\n Response: ${responseText}`);
        }
        return JSON.parse(responseText);
    }
}
exports.HttpHelper = HttpHelper;
//# sourceMappingURL=http-helper.class.js.map