import {
  carouselData,
  customerRights,
  footerData,
  headerData,
  ourTestPage,
  moreThanResults,
  ourAllies,
  ourPriority,
  ourServices,
  resultsOnLine,
  slideDownData
} from "./../../content/home-content";

export default function handler(req, res) {
  res.status(200).json({
    carouselData,
    customerRights,
    footerData,
    headerData,
    ourTestPage,
    moreThanResults,
    ourAllies,
    ourPriority,
    ourServices,
    resultsOnLine,
    slideDownData
  });
}
