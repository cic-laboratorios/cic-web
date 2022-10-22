import {
  carouselData,
  informationData,
  informationData2,
  informationData3,
  mobileNavLinks,
  navLinks,
  ourAllies,
  ourServices,
} from "./../../content/home-content";

export default function handler(req, res) {
  res.status(200).json({
    carouselData,
    informationData,
    informationData2,
    informationData3,
    mobileNavLinks,
    navLinks,
    ourAllies,
    ourServices,
  });
}
