import styles from './technologie.module.sass'
import { technoIdToLabel } from "../lib/functions"
import {getTechnoPathList, getSourcesByLanguageId} from "../lib/fetchData"
import Layout from "../components/layout"
import {useEffect, useState} from 'react'

export default function Techno({sources, img: technoImg, title}) {
  const completeListOfSources = sources
  const [filteredListOfSources, setFilteredListOfSources] = useState(sources)
  const [languages, setLanguages] = useState({ "english":true, "french":true })

  async function toggleLanguage(language) {
    // Change toggle language
    await setLanguages(() => {
      languages[language] = !languages[language]
      return languages
    })

    // Create an array of selected languages
    const arrayOfLanguagesWithTrueFalse = Object.entries(languages)
    const arrayOfLanguages = arrayOfLanguagesWithTrueFalse.map(language => {
      if(language[1]) return language[0]
      else return null
    })

    // filter listOfSources according to selected languages
    const filteredListOfSources = completeListOfSources.filter((source) => {
      return source.languages.some((sourceLanguage) => {
        return arrayOfLanguages.some((language) => {
          return language === sourceLanguage
        })
      })
    })

    await setFilteredListOfSources(filteredListOfSources)
  }

  return (
    <Layout>
      <main className={styles.main}>
        <SourcesHeader {...{title, technoImg, languages}} btnOnClick={toggleLanguage} />
        {filteredListOfSources.map(source => { 
          const key = `${source.websiteId}${source.title}`.replace(/\W/g, "").toLowerCase()
          return <Source key={key} source={source} />
        })}
      </main>
    </Layout>
  )
}

function SourcesHeader({technoImg, title, languages, btnOnClick}) {
  return (
    <div className={styles.sourceHeader}>
      <h2 className={styles.sourceHeaderTitle}>
        <img className={styles.sourceHeaderImg} src={technoImg} alt=""/>
        {technoIdToLabel(title)}
      </h2>
      <div className={styles.sourceHeaderButtons}>
        {Object.entries(languages).map((language) => (
        <button 
          key={language}
          onClick={() => {btnOnClick(language[0])}}
          className={`${styles.sourceHeaderButton} ${(languages[language[0]]) ? styles.sourceHeaderButtonEnabled : styles.sourceHeaderButtonDisabled}`}
        >
          {language}
        </button>
        ))}
      </div>
    </div>
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
  const Sources = getSourcesByLanguageId(params.technologie)
  return {
    props: {
      sources: Sources,
      img: `/images/${params.technologie}.svg`,
      title: params.technologie
    }
  }
}

export async function getStaticPaths() {
  const paths = getTechnoPathList()
  return {
    paths, 
    fallback: false
  }
}