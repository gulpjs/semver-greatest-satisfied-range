'use strict';

var expect = require('expect');

var findRange = require('../');

describe('findRange', function() {

  it('works with different ranges', function(done) {
    var range = findRange('1.0.0', ['^0.9.0', '^1.0.0', '^2.0.0']);
    expect(range).toEqual('^1.0.0');
    done();
  });

  it('works with multiple matching ranges', function(done) {
    var range = findRange('1.2.0', ['^1.0.0', '^1.1.0', '^1.2.0']);
    expect(range).toEqual('^1.2.0');
    done();
  });

  it('returns null with no matching ranges', function(done) {
    var range = findRange('1.2.0', ['~1.0.0', '~1.1.0']);
    expect(range).toBe(null);
    done();
  });

  it('returns null when given no ranges', function(done) {
    var range = findRange('1.2.0');
    expect(range).toBe(null);
    done();
  });

  it('prerelease ranges', function(done) {
    var range = findRange('1.0.0-alpha.1', ['^1.0.0-alpha.1', '^1.0.0-beta.1']);
    expect(range).toEqual('^1.0.0-alpha.1');
    done();
  });

  it('prerelease ranges against release version', function(done) {
    var range = findRange('1.0.0', ['^1.0.0-alpha.1', '^1.0.0-beta.1']);
    expect(range).toEqual('^1.0.0-beta.1');
    done();
  });

  it('prerelease and release ranges', function(done) {
    var range = findRange('1.2.0', ['^1.0.0', '^1.0.0-alpha.1', '^1.0.0-beta.1']);
    expect(range).toEqual('^1.0.0');
    done();
  });

  it('prerelease and release ranges against prerelease version', function(done) {
    var range = findRange('1.0.0-beta.1', ['^1.0.0', '^1.0.0-alpha.1', '^1.0.0-alpha.2']);
    expect(range).toEqual('^1.0.0-alpha.2');
    done();
  });
});
