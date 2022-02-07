export class MenuItem {
    _name: string;
    _route: string;

    constructor(name: string, route: string) {
        this._name = name;
        this._route = route;
    }

    get name() {
        return this._name;    
    }

    get route() {
        return this._route;    
    }
}