/* global window */

var lodash;

if (typeof require === "function") {
  try {
    lodash = {};

    lodash.has = require('lodash/has');
    lodash.each = require('lodash/each');
    lodash.constant = require('lodash/constant');
    lodash.isUndefined = require('lodash/isUndefined');
    lodash.filter = require('lodash/filter');
    lodash.isFunction = require('lodash/isFunction');
    lodash.keys = require('lodash/keys');
    lodash.values = require('lodash/values');
    lodash.bind = require('lodash/bind');
    lodash.isEmpty = require('lodash/isEmpty');
    lodash.union = require('lodash/union');
    lodash.isArray = require('lodash/isArray');

    // lodash = require("lodash");
  } catch (e) {}
}

if (!lodash) {
  lodash = window._;
}

module.exports = lodash;
