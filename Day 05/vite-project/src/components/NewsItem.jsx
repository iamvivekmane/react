import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-4">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}
          >{source}
          </span>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p class="card-text"><small class="text-body-secondary">By {author} on {date}</small></p>
            <p className="card-text">{description}...</p>
            <a href={newsURL} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem