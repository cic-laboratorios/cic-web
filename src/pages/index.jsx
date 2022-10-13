import Information from "@components/information/Information";
import MainLayout from "@components/layouts/MainLayout";
import OurServices from "@components/our-services/OurServices";
import OurLocations from "@components/our-locations/OurLocations";

const informationData = {
  title: 'Resultados en línea',
  copy: 'Ingresa con tu documento de identidad para conocer todo sobre tus exámenes.',
  link: {
    label: 'Consultar Ahora',
    href: 'ConsultNow'
  },
  isMainInformation: true,
  layout: 'normal',
  img: {
    src: '/img/results-online.png',
    alt: 'Señor sonriente en el consultorio',
    width: '580',
    height: '440'
  }
};

const informationData2 = {
  title: 'Eres nuestra prioridad',
  copy: 'Nuestro trabajo se fundamenta en la confianza y cercanía para obtener alianzas duraderas entregando noticias que pueden cambiar la vida.',
  layout: 'reverse',
  img: {
    src: '/img/our-priority.png',
    alt: 'Señor realizando estudios en un microscopio',
    width: '528',
    height: '399'
  }
};

const informationData3 = {
  title: 'Más que resultados',
  copy: 'Somos tu mano aliada, un equipo humano y especializado que genera resultados de exámenes de laboratorio clínico confiables y efectivos.',
  layout: 'normal',
  img: {
    src: '/img/more-than-results.png',
    alt: 'Señora haciendo estudios en el laboratorio',
    width: '528',
    height: '399'
  }
};

const ourServices = [
  {
    img: '/img/tube-icon.png',
    alt: '',
    heading: 'Resultados en línea',
    copy: 'Consulta y descarga los resultados de tus exámenes por la página.'
  },
  {
    img: '/img/virus-icon.png',
    alt: '',
    heading: 'Toma de muestras Covid',
    copy: 'Realizamos pruebas PCR con entrega de resultados en 24 horas.'
  },
  {
    img: '/img/ambulance-icon.png',
    alt: '',
    heading: 'Pruebas a domicilio',
    copy: 'Realizamos toma de muestras a domicilio para todos nuestros exámenes.'
  },
  {
    img: '/img/medical-symbol-icon.png',
    alt: '',
    heading: 'Convenios y servicios',
    copy: 'Consulta sobre los descuentos para los afiliados a EPS y cooperativas.'
  }
]

const ourLocations = [
  {
    img: '/img/pin.png',
    alt: '',
    heading: 'CIC Ansermanuevo',
    copy: 'calle 17 1-03 Esquina',
    phoneNumber: '555 555 5555'
  },
  {
    img: '/img/pin.png',
    alt: '',
    heading: 'CIC Ansermanuevo',
    copy: 'calle 17 1-03 Esquina',
    phoneNumber: '555 555 5555'
  },
  {
    img: '/img/pin.png',
    alt: '',
    heading: 'CIC Ansermanuevo',
    copy: 'calle 17 1-03 Esquina',
    phoneNumber: '555 555 5555'
  },
  {
    img: '/img/pin.png',
    alt: '',
    heading: 'CIC Ansermanuevo',
    copy: 'calle 17 1-03 Esquina',
    phoneNumber: '555 555 5555'
  },
  {
    img: '/img/pin.png',
    alt: '',
    heading: 'CIC Ansermanuevo',
    copy: 'calle 17 1-03 Esquina',
    phoneNumber: '555 555 5555'
  },
  {
    img: '/img/pin.png',
    alt: '',
    heading: 'CIC Ansermanuevo',
    copy: 'calle 17 1-03 Esquina',
    phoneNumber: '555 555 5555'
  }
]

export default function Home() {
  return (
    <MainLayout>
      <Information data={informationData}></Information>
      <OurServices ourServices={ourServices}></OurServices>
      <Information data={informationData2}></Information>
      <Information data={informationData3}></Information>
      <OurLocations ourLocations={ourLocations}></OurLocations>
    </MainLayout>
  );
}
