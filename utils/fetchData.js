import soursesJson from "../data/sourses.json"
import websitesJson from "../data/websites.json"

export function getTechnoPathList() {
  return [
    {
      params: {
        technologie: "htmlcss"
      }
    },
    {
      params: {
        technologie: "javascript"
      }
    },
    {
      params: {
        technologie: "react"
      }
    },
    {
      params: {
        technologie: "vuejs"
      }
    },
    {
      params: {
        technologie: "angular"
      }
    }
  ]
}

export function getSourcesByLanguageId(givenTechnologieId) {
  
  const filteredSources = soursesJson.filter(course => {
    return course.technologiesId.some(technologieId => technologieId === givenTechnologieId )
  })

  const completeSourcesData = filteredSources.map(course => {
    const websiteData = websitesJson.find((website) => website.id === course.websiteId)
    return {
      ...course,
      siteImg: websiteData.img || null,
      siteTitle: websiteData.title,
    }
  })

  return completeSourcesData
}