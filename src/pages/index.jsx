import MainLayout from "@components/layouts/MainLayout";
import styles from "@styles/pages/Home.module.scss";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <main>
          <h1>Home page works</h1>
        </main>
      </div>
    </MainLayout>
  );
}
