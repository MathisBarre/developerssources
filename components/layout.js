import styles from "./layout.module.sass"
import Head from 'next/head'
import Link from 'next/link'
import { technoIdToLabel } from '../lib/functions'
import ReactGA from 'react-ga';
import { useState } from 'react'

export default function Layout({children}) {

  const navigation = [
    {
      "title": "Front-end web development",
      "technologies": [
        {
          "img": "/images/htmlcss.svg",
          "id": "htmlcss"
        },
        {
          "img": "/images/javascript.svg",
          "id": "javascript"
        },
        {
          "img": "/images/react.svg",
          "id": "react"
        },
        {
          "img": "/images/vuejs.svg",
          "id": "vuejs"
        },
        {
          "img": "/images/angular.svg",
          "id": "angular"
        }
      ]
    }
  ]

  let [isNavbarVisible, setNavbarVisibility] = useState(true)

  return (
    <>
      <Head>
        <title>Developers Sources</title>
        {/* {
          ReactGA.initialize('UA-000000-01')
          ReactGA.pageview(window.location.pathname + window.location.search)
        } */}
      </Head>

      <div className={styles.app}>
        <button className={styles.headerBtnToggle} onClick={() => { setNavbarVisibility(!isNavbarVisible) }} >Toggle navbar</button>
        <header className={`${styles.header} ${(!isNavbarVisible) ? styles.headerHidden : ""}`}>
          <Link href="/"><a className={styles.headerLink}>
            <h1 className={styles.headerTitle}>
              <span className={styles.headerTitleItems}>Developers</span><br />
              <span className={styles.headerTitleItems}>Sources</span>
            </h1>
          </a></Link>
          <nav className={styles.nav}>
            {navigation.map(navGroup => {
              const key = navGroup.title.replace(/\W/g, "").toLowerCase()
              return (
                <div key={key} className={styles.navGroup}>
                  <h2 className={styles.navGroupTitle}>{navGroup.title}</h2>
                  {navGroup.technologies.map(language => {
                    return <NavItem key={language.id} {...language} />
                  })}
                </div>
              )
            })}
          </nav>
        </header>
        {children}
        <div className={styles.version}>Pre-Alpha</div>
      </div>
    </>
  )
}

function NavItem({img, id}) {
  const label = technoIdToLabel(id)
  return (
    <Link href="/[technologie]" as={`/${id}`}><a className={styles.navGroupItem}>
      <img className={styles.navGroupItemImg} src={img} alt="" />
      <span className={styles.navGroupItemLabel} >{label}</span>
    </a></Link>
  )
}