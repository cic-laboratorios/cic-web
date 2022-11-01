import MainLayout from "@components/layouts/MainLayout";

export default function Procedures(props) {
  return (
    <MainLayout navLinks={props.navLinks} mobileNavLinks={props.mobileNavLinks} isFixedHeaderAndFooter></MainLayout>
  );
}

export async function getServerSideProps() {
  const api = process?.env?.API_PATH;
  const res = await fetch(`${api}api/home`);
  const data = await res.json();

  return {
    props: {
      ...data,
    },
  };
}
