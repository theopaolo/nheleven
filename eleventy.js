module.exports = (config) => {

  // watching styles folder to gen sass
  config.addWatchTarget("./assets/styles/")

  // Passthrough for images & Assets
  config.addPassthroughCopy('./assets/**/*')

  // Series Collection
  config.addCollection("series", (collectionApi) => {
    const series = collectionApi.getFilteredByGlob("./src/content/series/**")
      .sort((a, b) => a.data.order - b.data.order);
    return series;
  });

  return {
    dir: {
      output: "dist",
      input: "src"
    }
  };

};