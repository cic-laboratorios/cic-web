import {
  informationData,
  informationData2,
  informationData3,
  ourServices,
  ourAllies,
  carouselData,
} from "./../../content/home-content";

export default function handler(req, res) {
  res.status(200).json({
    informationData,
    ourServices,
    informationData2,
    informationData3,
    carouselData,
    ourAllies,
  });
}
