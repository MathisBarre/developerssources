import sourcesJson from "../data/sources.json"
import navJson from '../data/navigation.json'

export function getNavData() {
  return navJson
}

export function getLanguagePathList() {
  const result = navJson
    .map(languageGroup => {
      return languageGroup.languages.map(language => (
        {
          params: {
            language: language.label.replace(/\W/g, "").toLowerCase()
          }
        }
      ))
    })
    .reduce(function(accumulator, currentValue) {
      return accumulator.concat(currentValue)
    }, [])
  return result
}

export function getSourcesByLanguageId(languageId) {
  return sourcesJson.filter(source => {
    return source.technologies.some(technologie => technologie === languageId )
  })
}