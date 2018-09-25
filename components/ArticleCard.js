const ArticleCard = ({ title, photoUrl, photoTitle, articleId }) => {
  return (
    <div className="article-card">
      <img src={photoUrl} alt={photoTitle} />
      <Link as={`/a/${articleId}`} href={`/articles/show?id=${articleId}`}>
        <a className="emphasis">{title}</a>
      </Link>
    </div>
  )
}

export default ArticleCard
