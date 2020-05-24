import styles from './language.module.sass'
import {getLanguagePathList, getSourcesByLanguageId, getNavData} from "../lib/fetchData"

export default function Language({sources, img, title}) {
  return (
    <main className={styles.main}>
      <h2 className={styles.mainTitle}>
        <img className={styles.mainImg} src={img} alt=""/>
        {title}
      </h2>
      {sources.map(source => { 
        const key = source.title.replace(/\W/g, "").toLowerCase()
        return <Source key={key} source={source} />
      })}
    </main>
  )
}

function Source({source}) {
  return (
    <div className={styles.source}>
      <a className={styles.sourceTitle} href={source.url}>
        {(source.img) ? <img className={styles.sourceTitleImg} src={source.img} alt=""/> : ""}
        <span className={styles.sourceTitleText}>{source.title}</span>
      </a>
      <div className={styles.sourceBadges}>
        <span className={styles.sourceBadge}>
          <img className={styles.sourceBadgeImg} src="/images/heart.svg" alt=""/>
          <span className={styles.sourceBadgeLabel}>{( typeof source.likes === "object") ? source.likes.length : "0" } Likes</span>
        </span>
        <span className={styles.sourceBadge}>
          <img className={styles.sourceBadgeImg} src="/images/levels.svg" alt="levels"/>
          <span className={styles.sourceBadgeLabel}>From {source.level.from} to {source.level.to}</span>
        </span>
        {source.languages.map(language => (
          <span key={language.replace(/\W/g, "").toLowerCase()} className={styles.sourceBadge}>
            <img className={styles.sourceBadgeImg} src={`/images/${language}.svg`} alt={language}/>
            <span className={styles.sourceBadgeLabel}>{language}</span>
          </span>
        ))}
      </div>
      <p className={styles.sourceDesc}>{source.desc}</p>
    </div>
  )
}

export async function getStaticProps({params}) {
  const askedLanguage = params.language
  const sources = getSourcesByLanguageId(askedLanguage)
  return {
    props: {
      navigation: getNavData(),
      sources: sources,
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