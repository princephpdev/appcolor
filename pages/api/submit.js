import { createQuoteImage } from "./createQuoteImage";

/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  const { quote, color } = JSON.parse(req.body);
  if (quote.length > 0 && quote.length <= 100) {
    try {
      const imageUrl = await createQuoteImage(quote, color);
      res.json({
        status: "ok",
        imagesrc: imageUrl,
      });
    } catch (error) {
      res.json({
        status: "error",
        message: "Something went wrong while creating image",
      });
    }
  } else {
    res.json({
      status: "error",
      message: "Quote should be between 1 to 100 characters",
    });
  }
};
