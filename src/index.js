export { default as Button } from "./components/Button";
export { default as Text } from "./components/Text";
export { default as Image } from "./components/Image";

function render(locals, callback) {
  callback(null, "<html>Home</html>");
}
export default render;
