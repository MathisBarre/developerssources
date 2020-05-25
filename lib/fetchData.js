import sourcesJson from "../data/sources.json"
import coursesJson from "../data/courses.json"
import websitesJson from "../data/websites.json"

export function getLanguagePathList() {
  return [
    {
      params: {
        language: "htmlcss"
      }
    },
    {
      params: {
        language: "javascript"
      }
    },
    {
      params: {
        language: "react"
      }
    },
    {
      params: {
        language: "vuejs"
      }
    },
    {
      params: {
        language: "angular"
      }
    }
  ]
}

export function getSourcesByLanguageId(givenTechnologieId) {
  const filteredCourses = coursesJson.filter(course => {
    return course.technologiesId.some(technologieId => technologieId === givenTechnologieId )
  })
  const completeCoursesData = filteredCourses.map(course => {
    const websiteData = websitesJson.find((website) => website.id === course.websiteId)
    return {
      ...course,
      siteImg: websiteData.img,
      siteTitle: websiteData.title,

    }
  })
  return completeCoursesData
}