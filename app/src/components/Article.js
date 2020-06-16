import React, {PureComponent} from 'react';

class Article extends PureComponent {
    constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.isRemove !== nextState.isRemove
  // }

  componentWillMount() {
    console.log("------", 'mouting')
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
  //     isRemove: nextProps.defaultOpen
  //   })
  // }   

  componentWillUpdate() {
    console.log("----", 'will update')
  }
  
  

  render() {
    const {article, isRemove, onButtonClick} = this.props;
    const body = isRemove && <section>{article.text}</section>
    return (
    <div className="card mx-auto" style={{width: '50%'}}>
      <div className="card-header"> 
        <h2 onClick = {this.incrementCount}>
          {article.title}
          clicked {this.state.count}
          <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
            {isRemove ? 'open' : 'close'}
          </button>
        </h2>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle text-muted"> 
          creation date: {(new Date(article.date)).toDateString()}
        </h6>
        {body}        

      </div>
    </div>
    )
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
    
}


  


export default Article;