import React, { Component } from 'react'

const NewsItem = (props) => {
  console.log('newsitem is ', props.Mode)
  let { title, description, imageURL, newsURL, author, date, source } = props;
  return (
    <div style={{ color: props.Mode === 'dark' ? 'white' : 'black' }} >
      <div style={{ height: '600px', border: '1px solid #2d3148', color: 'white' }} className="card my-4">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger"
          >{source}
          </span>
        </div>
        <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body" style={{ backgroundColor: props.Mode === 'dark' ? '#111827' : '#ffffff' }}>
          <h5 className="card-title" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}> {title ? title.slice(0,60) : title}...</h5>
          <p className="card-text" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }} ><small className="tex-body-secondary" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>By {author} on {date}</small></p>
          <p className="card-text" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}> {description ? description.slice(20) : description}...</p>
          <a href={newsURL} style={{ position: 'absolute', bottom: '10px' }} target='_blank' className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div >
  )
}

export default NewsItem