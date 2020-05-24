import { getNavData } from "../lib/fetchData.js"

export default function error404(props) {
  return (
    <main>
      <h2>Error 404</h2>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      navigation: getNavData(),
    }
  }
}