'use strict';

const relay = require('./relay.config');

/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    relay,
  },
};
