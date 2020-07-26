import styles from "./404.module.sass"

export default function Page404() {
  return (
    <main className={styles.main}>
      <h1 className={styles.errorTitle}>404</h1>
      <p className={styles.errorDesc}>An error has been occured</p>
    </main>
  )
}