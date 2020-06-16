import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent {
  state = {
    openArticleId: null
  }

  render() {
    const articleElements = this.props.articles.map((article, index) => 
      <li key = {article.id} className="article-list__li">
        <Article article = {article} 
          isRemove = {this.state.openArticleId === article.id}
          onButtonClick = {this.hendleClick.bind(this, article.id)}
          />
      </li> )
    return (

      <ul className="">
        {articleElements}
      </ul>
    )
  }

  hendleClick = openArticleId => this.setState({
    openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId 
  })
}