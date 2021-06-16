const webpackConfig = require("./webpack.config");
const glob = require("glob");
const path = require("path");

function loadComponent() {
  const componentPaths = glob.sync(
    path.resolve(__dirname, "src/components/*/index.{ts,tsx}")
  );
  const allComponents = componentPaths.reduce((acc, componentPath) => {
    const componentName = componentPath.replace(
      /^([\s\S]+)\/([a-zA-Z0-9]+)\/index.(tsx?)$/,
      "$2"
    );
    return Object.assign(acc, { [componentName]: componentPath });
  }, {});

  return allComponents;
}

function getExampleFilename(componentPath) {
  const result = componentPath.replace(/index.(js|jsx|ts|tsx)?$/, "README.md");
  return result;
}

module.exports = {
  serverPort: 8888,
  title: "Lib Component",
  moduleAliases: {
    "phat-ui/components": path.resolve(__dirname, "src/components"),
  },
  context: loadComponent(),
  getExampleFilename,
  webpackConfig,
};
