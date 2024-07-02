import React from 'react'
import './Intro.css'
import { Link} from 'react-router-dom'
// import Generator from '../Pages/Generator'
export default function Intro(props) {
  return (
      
    <>
        <div className="intro">
        <h1>{props.heading}</h1>
      <p>
       {props.first_content}
      </p>
      <p>
        {props.second_content}
      </p>
        
      <button className="video-btn">
          <Link to={props.link} className='text-white'>
            {props.btn_text}
          </Link>
        </button>
        </div>
    </>
    
  )
}