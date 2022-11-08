import {
  carouselData,
  i18n,
  informationData,
  informationData2,
  informationData3,
  navLinks,
  ourAllies,
  ourServices,
} from "./../../content/home-content";

export default function handler(req, res) {
  res.status(200).json({
    carouselData,
    i18n,
    informationData,
    informationData2,
    informationData3,
    navLinks,
    ourAllies,
    ourServices,
  });
}
