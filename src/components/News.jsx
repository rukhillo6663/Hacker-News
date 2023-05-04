import React from 'react'

function News({title, author, url}) {
  return (
    <li className='card'>
        <a  className='title' href={url} target='blank'>
        <h3>{title ||'Title not found'}</h3>
        </a>
        <p>{author||'Author not found'}</p>
        <hr></hr>
       
    </li>

  )
}

export default News