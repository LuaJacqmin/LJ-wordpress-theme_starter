module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: [
        "defaults",
        "last 2 versions",
        " ie > 8"
      ],
    }),
  ],
};