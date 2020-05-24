import { getNavData, getLanguagePathList } from "../lib/fetchData.js"
import styles from "./index.module.sass"

export default function Home(props) {
  return (
    <main className={styles.main}>
      <h2 className={styles.mainTitle}>Welcome !</h2>
      <h3>Website aim</h3>
      <p>This website aims to help developers find good learning sources.</p>
      <h3>Website contributions</h3>
      <h4>Contributor list : </h4>
      <ul>
        <li>Nothing here ! Maybe you will be the first !</li>
      </ul>
      <p>You want to contribute ? Please considered do a pull request <a href="https://github.com/MathisBarre/next-learningdev">on the github repository</a> !</p>
      <h3>The author's contact informations : </h3>
      <ul>
        <li> <strong>Website : </strong><a href="https://mathisbarre.com">mathisbarre.com</a></li>
        <li> <strong>E-Mail : </strong><a href="mailto:contact@mathisbarre.com">contact@mathisbarre.com</a></li>
        <li> <strong>Github : </strong><a href="https://github.com/MathisBarre">MathisBarre</a></li>
        <li> <strong>Twitter : </strong><a href="https://twitter.com/LeMathisBarre">@LeMathisBarre</a></li>
      </ul>
      <p>This website was made with Nextjs and Host with Vercel</p>
    </main>
  )
}

export async function getStaticProps() {
  getLanguagePathList()
  return {
    props: {
      navigation: getNavData(),
    }
  }
}