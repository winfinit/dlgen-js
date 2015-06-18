var should = require('chai').should(),
 	expect = require('chai').expect,
    dlgen = require('../index');



describe('id', function() {
    it('should be formatted', function(){
    	var id = dlgen.bake({
			lastName: "JOHN",
			firstName: "DOE",
			middleName: "",
			gender: "male",
			dob: new Date(1984,10,26)
		}, true);
    	expect(id).to.equal("J500-160-84-426-0");
    });
    it('should be not formatted', function(){
    	var id = dlgen.bake({
			lastName: "JOHN",
			firstName: "DOE",
			middleName: "",
			gender: "male",
			dob: new Date(1984,10,26)
		});
    	expect(id).to.equal("J500160844260");
    });
});

