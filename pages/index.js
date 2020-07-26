import styles from "./index.module.sass"

export default function Home(props) {
  return (
    <main className={styles.main}>
      <h2 className={styles.mainTitle}>Welcome to developers sources !</h2>
      <p className={styles.mainDesc}>This website aims to help developers find good learning sources.</p>
      <h3>Contributions</h3>
      {/* <h4>Contributor list : </h4>
      <ul>
        <li>Nothing here ! Maybe you will be the first !</li>
      </ul> */}
      <p>You want to contribute ? Please considered do a pull request <a href="https://github.com/MathisBarre/next-learningdev">on the github repository</a> or send me your sources here at my email adress!</p>
      <h3>Roadmap</h3>
      <ul>
        <li>Add authentification to implement :</li>
        <ul>
          <li>likes to rank sources</li>
          <li>sort options (by likes, likes/month, language, difficulty...)</li>
          <li>contribute directly on the website (add & modify sources) </li>
        </ul>
        <li>Responsive design</li>
        <li>PWA ready</li>
      </ul>
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

// export async function getStaticProps() {
//   return {
//     props: {
//     }
//   }
// }