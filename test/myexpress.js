'use strict';
let expect = require('chai').expect;
let assert = require('chai').assert;

let mex = require('../lib/myexpress');

describe('Myexpress', () => {

    it('should return a function upon instantiating', () => {
        assert.isFunction(mex);
    });
});
    