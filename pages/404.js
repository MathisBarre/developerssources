import Layout from "../components/layout"
import styles from "./404.module.sass"

export default function Page404() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.errorTitle}>404</h1>
        <p className={styles.errorDesc}>An error has been occured</p>
      </main>
    </Layout>
  )
}