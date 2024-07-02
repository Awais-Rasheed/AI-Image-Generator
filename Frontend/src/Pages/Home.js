import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Intro from '../Components/Intro'
export default function Home() {

  const first_content = "Our image generator uses state-of-the-art artificial intelligence algorithms to create stunning Images from your input. Whether you need promotional images, educational content, or anything in between, our AI is here to help.";
  const second_content = "Get started by entering your prompt and let our AI work its magic to generate beautiful images for you.";
  const heading = "Welcome to Our AI-Based Image Generator";

  const text_first_content = "Our Text generator uses state-of-the-art artificial intelligence algorithms to generate text from your input. Whether you need promotional text, educational content, or anything in between, our AI is here to help.";
  const text_second_content = "Get started by entering your prompt and let our AI work its magic to generate helpful text for you.";
  const text_heading = "Welcome to Our AI-Based Text Generator";

  return (
    <div>
        <Header/>
      <div className='body'>
        <Intro btn_text="Text Generator" link="/generator" heading={text_heading} first_content={text_first_content} second_content={text_second_content}/>    
          <div className="image">
            <img className="shape-gif m-5" src="img/giphy.gif" alt="Logo"/>
          </div>
      </div>
      <div className='body'>
          <div className="image">
            <img class="shape" src="img/shape.svg" alt="Logo"/>
          </div>
        <Intro btn_text="Image Generator" link="/image_generator" heading={heading} first_content={first_content} second_content={second_content}/>    
      </div>
      <Footer/>
    </div>
  )
}
