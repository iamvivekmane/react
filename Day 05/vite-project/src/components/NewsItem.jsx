import React, { Component } from 'react'

const NewsItem = (props) => {
  let { title, description, imageURL, newsURL, author, date, source } = props;
  return (
    <div  >
      <div style={{ height: '600px', backgroundColor: '#1a1d27', border: '1px solid #2d3148', color: 'white' }} className="card my-4">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger"
          >{source}
          </span>
        </div>
        <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(10) : title}...</h5>
          <p className="card-text" style={{ color: 'white' }} ><small className="tex-body-secondary">By {author} on {date}</small></p>
          <p className="card-text">{description ? description.slice(20) : description}...</p>
          <a href={newsURL} style={{ position: 'absolute', bottom: '10px' }} target='_blank' className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem