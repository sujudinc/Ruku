// To parse this data:
//
//   import { Convert, Event } from "./file";
//
//   const event = Convert.toEvent(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Event {
    arguments: Arguments;
    identity:  Identity;
    source:    null;
    request:   Request;
    prev:      null;
    info:      Info;
    stash:     Stash;
}

export interface Arguments {
    input: Input;
}

export interface Input {
    objectId:    string;
    fileName:    string;
    contentType: string;
    uploadType:  string;
}

export interface Identity {
    claims:              Claims;
    defaultAuthStrategy: string;
    groups:              null;
    issuer:              string;
    sourceIp:            string[];
    sub:                 string;
    username:            string;
}

export interface Claims {
    sub:                   string;
    email_verified:        boolean;
    iss:                   string;
    phone_number_verified: boolean;
    "cognito:username":    string;
    aud:                   string;
    event_id:              string;
    token_use:             string;
    auth_time:             number;
    phone_number:          string;
    exp:                   number;
    iat:                   number;
    email:                 string;
}

export interface Info {
    selectionSetList:    string[];
    selectionSetGraphQL: string;
    parentTypeName:      string;
    fieldName:           string;
    variables:           Stash;
}

export interface Stash {
}

export interface Request {
    headers: Headers;
}

export interface Headers {
    "x-forwarded-for":              string;
    "cloudfront-viewer-country":    string;
    "cloudfront-is-tablet-viewer":  string;
    via:                            string;
    "cloudfront-forwarded-proto":   string;
    origin:                         string;
    "content-length":               string;
    "accept-language":              string;
    host:                           string;
    "x-forwarded-proto":            string;
    "user-agent":                   string;
    accept:                         string;
    "cloudfront-is-mobile-viewer":  string;
    "cloudfront-is-smarttv-viewer": string;
    "accept-encoding":              string;
    referer:                        string;
    "content-type":                 string;
    "sec-fetch-mode":               string;
    "x-amz-cf-id":                  string;
    "x-amzn-trace-id":              string;
    authorization:                  string;
    "sec-fetch-dest":               string;
    "x-amz-user-agent":             string;
    "cloudfront-is-desktop-viewer": string;
    "sec-fetch-site":               string;
    "x-forwarded-port":             string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toEvent(json: string): Event {
        return cast(JSON.parse(json), r("Event"));
    }

    public static eventToJson(value: Event): string {
        return JSON.stringify(uncast(value, r("Event")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Event": o([
        { json: "arguments", js: "arguments", typ: r("Arguments") },
        { json: "identity", js: "identity", typ: r("Identity") },
        { json: "source", js: "source", typ: null },
        { json: "request", js: "request", typ: r("Request") },
        { json: "prev", js: "prev", typ: null },
        { json: "info", js: "info", typ: r("Info") },
        { json: "stash", js: "stash", typ: r("Stash") },
    ], false),
    "Arguments": o([
        { json: "input", js: "input", typ: r("Input") },
    ], false),
    "Input": o([
        { json: "objectId", js: "objectId", typ: "" },
        { json: "fileName", js: "fileName", typ: "" },
        { json: "contentType", js: "contentType", typ: "" },
        { json: "uploadType", js: "uploadType", typ: "" },
    ], false),
    "Identity": o([
        { json: "claims", js: "claims", typ: r("Claims") },
        { json: "defaultAuthStrategy", js: "defaultAuthStrategy", typ: "" },
        { json: "groups", js: "groups", typ: null },
        { json: "issuer", js: "issuer", typ: "" },
        { json: "sourceIp", js: "sourceIp", typ: a("") },
        { json: "sub", js: "sub", typ: "" },
        { json: "username", js: "username", typ: "" },
    ], false),
    "Claims": o([
        { json: "sub", js: "sub", typ: "" },
        { json: "email_verified", js: "email_verified", typ: true },
        { json: "iss", js: "iss", typ: "" },
        { json: "phone_number_verified", js: "phone_number_verified", typ: true },
        { json: "cognito:username", js: "cognito:username", typ: "" },
        { json: "aud", js: "aud", typ: "" },
        { json: "event_id", js: "event_id", typ: "" },
        { json: "token_use", js: "token_use", typ: "" },
        { json: "auth_time", js: "auth_time", typ: 0 },
        { json: "phone_number", js: "phone_number", typ: "" },
        { json: "exp", js: "exp", typ: 0 },
        { json: "iat", js: "iat", typ: 0 },
        { json: "email", js: "email", typ: "" },
    ], false),
    "Info": o([
        { json: "selectionSetList", js: "selectionSetList", typ: a("") },
        { json: "selectionSetGraphQL", js: "selectionSetGraphQL", typ: "" },
        { json: "parentTypeName", js: "parentTypeName", typ: "" },
        { json: "fieldName", js: "fieldName", typ: "" },
        { json: "variables", js: "variables", typ: r("Stash") },
    ], false),
    "Stash": o([
    ], false),
    "Request": o([
        { json: "headers", js: "headers", typ: r("Headers") },
    ], false),
    "Headers": o([
        { json: "x-forwarded-for", js: "x-forwarded-for", typ: "" },
        { json: "cloudfront-viewer-country", js: "cloudfront-viewer-country", typ: "" },
        { json: "cloudfront-is-tablet-viewer", js: "cloudfront-is-tablet-viewer", typ: "" },
        { json: "via", js: "via", typ: "" },
        { json: "cloudfront-forwarded-proto", js: "cloudfront-forwarded-proto", typ: "" },
        { json: "origin", js: "origin", typ: "" },
        { json: "content-length", js: "content-length", typ: "" },
        { json: "accept-language", js: "accept-language", typ: "" },
        { json: "host", js: "host", typ: "" },
        { json: "x-forwarded-proto", js: "x-forwarded-proto", typ: "" },
        { json: "user-agent", js: "user-agent", typ: "" },
        { json: "accept", js: "accept", typ: "" },
        { json: "cloudfront-is-mobile-viewer", js: "cloudfront-is-mobile-viewer", typ: "" },
        { json: "cloudfront-is-smarttv-viewer", js: "cloudfront-is-smarttv-viewer", typ: "" },
        { json: "accept-encoding", js: "accept-encoding", typ: "" },
        { json: "referer", js: "referer", typ: "" },
        { json: "content-type", js: "content-type", typ: "" },
        { json: "sec-fetch-mode", js: "sec-fetch-mode", typ: "" },
        { json: "x-amz-cf-id", js: "x-amz-cf-id", typ: "" },
        { json: "x-amzn-trace-id", js: "x-amzn-trace-id", typ: "" },
        { json: "authorization", js: "authorization", typ: "" },
        { json: "sec-fetch-dest", js: "sec-fetch-dest", typ: "" },
        { json: "x-amz-user-agent", js: "x-amz-user-agent", typ: "" },
        { json: "cloudfront-is-desktop-viewer", js: "cloudfront-is-desktop-viewer", typ: "" },
        { json: "sec-fetch-site", js: "sec-fetch-site", typ: "" },
        { json: "x-forwarded-port", js: "x-forwarded-port", typ: "" },
    ], false),
};
