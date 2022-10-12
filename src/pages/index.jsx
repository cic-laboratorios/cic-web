import Information from "@components/information/Information";
import MainLayout from "@components/layouts/MainLayout";

import styles from "@styles/pages/Home.module.scss";

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

export default function Home() {
  return (
    <MainLayout>
      <Information data={informationData}></Information>
      <Information data={informationData2}></Information>
      <Information data={informationData3}></Information>
    </MainLayout>
  );
}
