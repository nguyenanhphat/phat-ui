import React, { useEffect } from "react";
import imgWebpack from "./default.png";

const Image = () => {
  const createImgElement = () => {
    const imgElement = document.createElement("img");
    imgElement.src = imgWebpack;
    imgElement.alt = "webpack từ A đến Á cùng kentrung";
    return imgElement;
  };

  useEffect(() => {
    document.getElementById("root").appendChild(createImgElement());
  }, []);

  return (
    <div id="root">
      <div>Image</div>
    </div>
  );
};

export default Image;
