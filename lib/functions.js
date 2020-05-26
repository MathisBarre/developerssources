export function technoIdToLabel(techId) {
  const idToLabel = {
    htmlcss: "HTML & CSS",
    javascript: "Javascript",
    react: "React",
    vuejs: "Vue.js",
    angular: "Angular",
    php: "PHP",
    python: "Python",
    ruby: "Ruby",
    sql: "SQL"
  }
  return idToLabel[techId]
}