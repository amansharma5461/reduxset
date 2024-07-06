module.exports = {
  // presets: ['module:@react-native/babel-preset'],
  presets: ['module:@react-native/babel-preset'],
  // presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@images': './src/assets/images',
           '@common': './src/components/common' 
        },
      },
    ],
  ],
};
