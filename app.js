'use strict';

class DataManager {
    constructor() {
        this.data = {};
        this.state = {};
    }

    addData(key, value) {
        this.data[key] = value;
    }

    getData(key) {
        return this.data[key];
    }

    updateState(key, value) {
        this.state[key] = value;
    }

    getState(key) {
        return this.state[key];
    }

    clearData() {
        this.data = {};
    }

    clearState() {
        this.state = {};
    }
}

module.exports = DataManager;