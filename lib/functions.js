export function technoIdToLabel(techId) {
  const idToLabel = {
    htmlcss: "HTML & CSS",
    javascript: "Javascript",
    react: "React",
    vuejs: "Vue.js",
    angular: "Angular"
  }
  return idToLabel[techId]
}