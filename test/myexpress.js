'use strict';
let expect = require('chai').expect;

let mex = require('../lib/myexpress');

describe('Myexpress', () => {

    it('should be a function', () => {
        expect(mex).to.be.a('function');
    });
    
    
    it('should return a function upon instantiating', () => {
        let app = mex();
        expect(app).to.be.a('function');
    });
    
    
    it('should have a property called listen that is a function', () => {
        let app = mex();
        expect(app).to.have.property('listen');
    });
        
});
    