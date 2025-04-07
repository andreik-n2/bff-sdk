// Learn more https://docs.expo.io/guides/customizing-metro
const { wgMetroConfig } = require('@virgograph/metro-config');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = wgMetroConfig(config);
