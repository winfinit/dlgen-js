var expect = require('chai').expect;
let {DLGenerator, DLPerson} = require('../built/dlgen');

describe('DLGenerator ID', function() {
    it('should be formatted', function(){
    	let dlGenerator = new DLGenerator(new DLPerson({
    		firstName: "DOE", 
    		lastName: "JOHN", 
    		middleName: "", 
    		dob: new Date(1984,10,26), 
    		gender: "Male"
    	}));
    	expect(dlGenerator.toFormattedString()).to.equal("J500-160-84-426-0");
    });
    it('should be not formatted', function(){
		let dlGenerator = new DLGenerator(new DLPerson({
    		firstName: "DOE", 
    		lastName: "JOHN", 
    		middleName: "", 
    		dob: new Date(1984,10,26), 
    		gender: "Male"
    	}));    	
		expect(dlGenerator.toString()).to.equal("J500160844260")
    });
});
