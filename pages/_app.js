import "../styles/global.sass"
import "../styles/normalize.css"

import styles from "./_app.module.sass"
import Head from 'next/head'
import Link from 'next/link'
import { technoIdToLabel } from '../lib/functions'
import { useState } from 'react'

export default function App({Component, pageProps, router}) {

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
      </Head>

      <button className={styles.btnToggleMenu} onClick={() => { setNavbarVisibility(!isNavbarVisible) }} >
        <div className={styles.btnToggleMenuIcon}>
          <hr className={styles.btnToggleMenuInnerlines}></hr>
          <hr className={styles.btnToggleMenuInnerlines}></hr>
          <hr className={styles.btnToggleMenuInnerlines}></hr>
        </div>
        Menu
      </button>

      <div className={styles.app}>
        <header className={`${styles.header} ${(!isNavbarVisible) ? styles.headerHidden : ""}`}>
          <Link href="/"><a className={styles.headerLink} onClick={() => { setNavbarVisibility(false) }} >
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
                    return <NavItem key={language.id} {...language} setNavbarVisibility={setNavbarVisibility} />
                  })}
                </div>
              )
            })}
          </nav>
        </header>
        <Component {...pageProps} {...{isNavbarVisible, setNavbarVisibility}} />
        <div className={styles.version}>Pre-Alpha</div>
      </div>
    </>
  )
}

function NavItem({img, id, setNavbarVisibility}) {
  const label = technoIdToLabel(id)
  return (
    <Link href="/[technologie]" as={`/${id}`} ><a onClick={() => { setNavbarVisibility(false) }} className={styles.navGroupItem}>
      <img className={styles.navGroupItemImg} src={img} alt="" />
      <span className={styles.navGroupItemLabel} >{label}</span>
    </a></Link>
  )
}