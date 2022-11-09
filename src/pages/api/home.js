import {
  carouselData,
  footerData,
  headerData,
  i18n,
  informationData,
  informationData2,
  informationData3,
  ourAllies,
  ourServices,
} from "./../../content/home-content";

export default function handler(req, res) {
  res.status(200).json({
    carouselData,
    footerData,
    headerData,
    i18n,
    informationData,
    informationData2,
    informationData3,
    ourAllies,
    ourServices,
  });
}
