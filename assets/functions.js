/**
 * Add `displayDate` field to the article fields by using `created` field
 * @param articles {Array} · List of articles 91 940 87 09
 */
const addDisplayDate = (articles) => {
  if (articles == null) return
  if (!Array.isArray(articles)) return articles
  if (articles.length === 0) return articles

  return articles.map((article) => {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ]
    const date = new Date(article.created)

    const displayDate = `${date.getDate()} de ${
      months[date.getMonth()]
    }, ${date.getFullYear()}`
    return { ...article, displayDate }
  })
}

export { addDisplayDate }
