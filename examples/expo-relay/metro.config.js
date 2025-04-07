const { getDefaultConfig } = require('expo/metro-config');
const { wgMetroConfig } = require('@virgograph/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = wgMetroConfig(defaultConfig);
