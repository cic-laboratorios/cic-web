import { APP_CONSTANTS } from "@constants/index";
import Carousel from "@components/carousel/Carousel";
import CustomerRights from "@components/customer-rights/CustomerRights";
import Information from "@components/information/Information";
import Hero from "@components/hero/Hero";
import MainLayout from "@components/layouts/MainLayout";
import OurAllies from "@components/our-allies/OurAllies";
import OurServices from "@components/our-services/OurServices";
import SlideDown from "@components/slide-down/SlideDown";

export default function Home(props) {
  return (
    <MainLayout headerData={props.headerData} footerData={props.footerData}>
      <Hero heroData={props.heroData}></Hero>
      <SlideDown slideDownData={props.slideDownData}></SlideDown>
      <OurServices ourServices={props.ourServices}></OurServices>
      <Information informationData={props.ourPriority}></Information>
      <Information informationData={props.moreThanResults}></Information>
      <CustomerRights customerRights={props.customerRights}></CustomerRights>
      <Carousel carouselData={props.carouselData}></Carousel>
      <OurAllies ourAllies={props.ourAllies}></OurAllies>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const apiPath = process?.env?.API_PATH;
  const res = await fetch(`${apiPath}${APP_CONSTANTS.API.DATA_INFORMATION}`);
  const data = await res.json();

  return {
    props: {
      ...data,
    },
  };
}
