"use strict";

var assert = require("node:assert");
var { describe, it } = require("node:test");

var findRange = require("../");

describe("findRange", function () {
  it("works with different ranges", function () {
    var range = findRange("1.0.0", ["^0.9.0", "^1.0.0", "^2.0.0"]);
    assert.deepStrictEqual(range, "^1.0.0");
  });

  it("works with multiple matching ranges", function () {
    var range = findRange("1.2.0", ["^1.0.0", "^1.1.0", "^1.2.0"]);
    assert.deepStrictEqual(range, "^1.2.0");
  });

  it("returns null with no matching ranges", function () {
    var range = findRange("1.2.0", ["~1.0.0", "~1.1.0"]);
    assert.deepStrictEqual(range, null);
  });

  it("returns null when given no ranges", function () {
    var range = findRange("1.2.0");
    assert.deepStrictEqual(range, null);
  });

  it("prerelease ranges", function () {
    var range = findRange("1.0.0-alpha.1", ["^1.0.0-alpha.1", "^1.0.0-beta.1"]);
    assert.deepStrictEqual(range, "^1.0.0-alpha.1");
  });

  it("prerelease ranges against release version", function () {
    var range = findRange("1.0.0", ["^1.0.0-alpha.1", "^1.0.0-beta.1"]);
    assert.deepStrictEqual(range, "^1.0.0-beta.1");
  });

  it("prerelease and release ranges", function () {
    var range = findRange("1.2.0", [
      "^1.0.0",
      "^1.0.0-alpha.1",
      "^1.0.0-beta.1",
    ]);
    assert.deepStrictEqual(range, "^1.0.0");
  });

  it("prerelease and release ranges against prerelease version", function () {
    var range = findRange("1.0.0-beta.1", [
      "^1.0.0",
      "^1.0.0-alpha.1",
      "^1.0.0-alpha.2",
    ]);
    assert.deepStrictEqual(range, "^1.0.0-alpha.2");
  });

  it("newer prerelease versions should not be satisfied by a previous stable range", function () {
    var range = findRange("1.0.1-alpha.1", [
      "^1.0.0",
      "^1.0.0-alpha.1",
      "^1.0.0-alpha.2",
    ]);
    assert.deepStrictEqual(range, null);
  });
});
