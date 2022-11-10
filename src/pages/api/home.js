import {
  carouselData,
  footerData,
  headerData,
  i18n,
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
    footerData,
    headerData,
    i18n,
    moreThanResults,
    ourAllies,
    ourPriority,
    ourServices,
    resultsOnLine,
    slideDownData
  });
}
