import Head from 'next/head'
import styles from './index.module.sass'

export default function Home({navigation, sources}) {
  return (
    <>
      <Head>
        <title>Developers Learning Depository</title>
      </Head>
      <div className={styles.app}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>
            <span className={styles.headerTitleItems}>Developers</span><br />
            <span className={styles.headerTitleItems}>Learning</span><br />
            <span className={styles.headerTitleItems}>Depository</span>
          </h1>
          <nav className={styles.nav}>
            {navigation.map(navGroup => (
              <div className={styles.navGroup}>
                <h2 className={styles.navGroupTitle}>{navGroup.title}</h2>
                {navGroup.languages.map(language => (
                  <NavItem {...language} />
                ))}
              </div>
            ))}
          </nav>
        </header>

        <main className={styles.main}>
          <h2 className={styles.mainTitle}>
            <img className={styles.mainImg} src="/images/javascript.svg" alt=""/>
            Javascript
          </h2>
          {sources.map(source => (
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
                  <span className={styles.sourceBadge}>
                    <img className={styles.sourceBadgeImg} src={`/images/${language}.svg`} alt={language}/>
                    <span className={styles.sourceBadgeLabel}>{language}</span>
                  </span>
                ))}
              </div>
              <p className={styles.sourceDesc}>{source.desc}</p>
            </div>
          ))}
        </main>
      </div>
    </>
  )
}

function NavItem({img, label}) {
  return (
    <div className={styles.navGroupItem}>
      <img className={styles.navGroupItemImg} src={img} alt="" />
      <h3 className={styles.navGroupItemLabel} >{label}</h3>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      navigation: [
        {
          "title": "Frontend web development",
          "languages": [
            {
              "img": "/images/htmlcss.svg",
              "label": "HTML & CSS"
            },
            {
              "img": "/images/javascript.svg",
              "label": "Javascript"
            },
            {
              "img": "/images/react.svg",
              "label": "React"
            },
            {
              "img": "/images/vuejs.svg",
              "label": "Vue.js"
            },
            {
              "img": "/images/angular.svg",
              "label": "Angular"
            }
          ]
        },
        {
          "title": "Backend web development",
          "languages": [
            {
              "img": "/images/htmlcss.svg",
              "label": "HTML & CSS"
            },
            {
              "img": "/images/javascript.svg",
              "label": "Javascript"
            },
            {
              "img": "/images/react.svg",
              "label": "React"
            },
            {
              "img": "/images/vuejs.svg",
              "label": "Vue.js"
            },
            {
              "img": "/images/angular.svg",
              "label": "Angular"
            }
          ]
        }
      ],
      "sources": [
        {
          title: "FreeCodeCamp",
          url: "https://freecodecamp.org",
          img: "/images/freecodecamp.svg",
          desc: "Learn to code at home. Build projects. Earn certifications.",
          languages: [
            "french",
            "english"
          ],
          likes: [
            "2020-04-23"
          ],
          level: {
            from: "easy",
            to: "advanced"
          },
          technologies: [
            "javascript", "html", "css", "react"
          ],
          type: [
            "interactive", "guides", "tutorials"
          ],
          payment: {
            price: false,
            label: "Only donations"
          }
        },
        {
          title: "Grafikart",
          url: "https://grafikart.fr",
          img: false,
          desc: "Video courses and written summary about javascript and plenty of others languages",
          languages: [
            "french",
          ],
          likes: [],
          level: {
            from: "easy",
            to: "advanced"
          },
          technologies: [
            "javascript", "html", "css", "react"
          ],
          type: [
            "interactive", "guides", "tutorials"
          ],
          payment: {
            price: false,
            label: "Only donations"
          }
        }
      ]
    }
  }
}