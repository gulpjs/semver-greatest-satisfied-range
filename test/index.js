'use strict';

var lab = exports.lab = require('lab').script();
var code = require('code');

var findRange = require('../');

lab.experiment('findRange', function(){

  lab.test('works with different ranges', function(done){
    var range = findRange('1.0.0', ['^0.9.0', '^1.0.0', '^2.0.0']);
    code.expect(range).to.equal('^1.0.0');
    done();
  });

  lab.test('works with multiple matching ranges', function(done){
    var range = findRange('1.2.0', ['^1.0.0', '^1.1.0', '^1.2.0']);
    code.expect(range).to.equal('^1.2.0');
    done();
  });

  lab.test('returns null with no matching ranges', function(done){
    var range = findRange('1.2.0', ['~1.0.0', '~1.1.0']);
    code.expect(range).to.equal(null);
    done();
  });

  lab.test('prerelease ranges', function(done){
    var range = findRange('1.0.0-alpha.1', ['^1.0.0-alpha.1', '^1.0.0-beta.1']);
    code.expect(range).to.equal('^1.0.0-alpha.1');
    done();
  });

  lab.test('prerelease ranges against release version', function(done){
    var range = findRange('1.0.0', ['^1.0.0-alpha.1', '^1.0.0-beta.1']);
    code.expect(range).to.equal('^1.0.0-beta.1');
    done();
  });

  lab.test('prerelease and release ranges', function(done){
    var range = findRange('1.2.0', ['^1.0.0', '^1.0.0-alpha.1', '^1.0.0-beta.1']);
    code.expect(range).to.equal('^1.0.0');
    done();
  });

  lab.test('prerelease and release ranges against prerelease version', function(done){
    var range = findRange('1.0.0-beta.1', ['^1.0.0', '^1.0.0-alpha.1', '^1.0.0-alpha.2']);
    code.expect(range).to.equal('^1.0.0-alpha.2');
    done();
  });
});
