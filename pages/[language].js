import styles from './language.module.sass'
import { technoIdToLabel } from "../lib/functions"
import {getLanguagePathList, getSourcesByLanguageId} from "../lib/fetchData"
import Layout from "../components/layout"

export default function Language({sources, img, title}) {
  return (
    <Layout>
      <main className={styles.main}>
        <h2 className={styles.mainTitle}>
          <img className={styles.mainImg} src={img} alt=""/>
          {technoIdToLabel(title)}
        </h2>
        {sources.map(source => { 
          const key = `${source.websiteId}${source.title}`.replace(/\W/g, "").toLowerCase()
          return <Source key={key} source={source} />
        })}
      </main>
    </Layout>
  )
}

function Source({source}) {
  return (
    <div className={styles.source}>
      <a className={styles.sourceTitle} href={source.url}>
        {(source.siteImg) ? <img className={styles.sourceTitleImg} src={source.siteImg} alt=""/> : ""}
        <span className={styles.sourceTitleText}>{`${source.siteTitle} · ${source.title}`}</span>
      </a>
      <div className={styles.sourceBadges}>
        {/* <span className={styles.sourceBadge}>
          <img className={styles.sourceBadgeImg} src="/images/heart.svg" alt=""/>
          <span className={styles.sourceBadgeLabel}>{( typeof source.likes === "object") ? source.likes.length : "0" } Likes</span>
        </span> */}
        <span className={styles.sourceBadge}>
          <img className={styles.sourceBadgeImg} src="/images/levels.svg" alt="levels"/>
          <span className={styles.sourceBadgeLabel}>{(!!source.level.to) ? `From ${source.level.from} to ${source.level.to}` : source.level.from.charAt(0).toUpperCase() + source.level.from.slice(1)}</span>
        </span>
        {source.languages.map(language => (
          <span key={language.replace(/\W/g, "").toLowerCase()} className={styles.sourceBadge}>
            <img className={styles.sourceBadgeImg} src={`/images/${language}.svg`} alt={language}/>
            <span className={styles.sourceBadgeLabel}>{language.charAt(0).toUpperCase() + language.slice(1)}</span>
          </span>
        ))}
      </div>
      <p className={styles.sourceDesc}>{source.desc}</p>
    </div>
  )
}

export async function getStaticProps({params}) {
  const courses = getSourcesByLanguageId(params.language)
  return {
    props: {
      sources: courses,
      img: `/images/${params.language}.svg`,
      title: params.language
    }
  }
}

export async function getStaticPaths() {
  const paths = getLanguagePathList()
  return {
    paths, 
    fallback: false
  }
}