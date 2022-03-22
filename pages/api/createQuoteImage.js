const { createCanvas, registerFont } = require("canvas");
const fs = require("fs");
registerFont("./pages/api/fonts/Lato-BoldItalic.ttf", {
  family: "Lato",
  weight: "bold",
});

const createQuoteImage = async function (quote, color) {
  /**
   * Create canvas given width, height and bgcolor
   */
  const width = 1000;
  const height = 500;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.fillStyle = "#000";
  context.fillRect(0, 0, width, height);
  const hslaColor = `hsla(${color.hue},${color.brightness * 100}%,${
    color.saturation * 100
  }%,${color.alpha})`;

  console.log(hslaColor);

  // 'hsl('+ 360*Math.random() +',100%,50%)'

  /**
   * Add text to the canvas
   * Set font size, style
   */
  try {
    let text = quote;
    let textSize = "";
    const textLength = text.length;

    if (textLength <= 25) {
      textSize = '4rem "Lato"';
    } else if (textLength > 25 && textLength <= 50) {
      textSize = '2.5rem "Lato"';
    } else if (textLength > 50 && textLength <= 75) {
      textSize = '1.5rem "Lato"';
    } else {
      textSize = '1rem "Lato"';
    }
    context.font = textSize;
    context.textAlign = "center";
    context.fillStyle = hslaColor; //This needs to change
    context.fillText(text, 500, 250, width);

    // const folder = "./public";
    // if (!fs.existsSync(folder)) {
    //   fs.mkdirSync(folder);
    //   console.log("Folder Created Successfully.");
    // }
    canvas.toBuffer((err, buf) => {
      if (err) throw err; // encoding failed
      // fs.writeFileSync(folder + "/test.png", buf);
      // console.log("The PNG file was created.");
    });
    return canvas.toDataURL();
    // return "/public/test.png";
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createQuoteImage,
};
