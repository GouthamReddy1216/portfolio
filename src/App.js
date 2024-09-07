import React from 'react';
import './App.css';
import Certificate from "./codevita_certificate.pdf";
import cv from "./CV.pdf";
function App() {
  return (
    <div className='App'>
      <div className='title'>
        <h1>Somu Goutham Reddy</h1>
      </div>

      <div className='links'>
      <div className='link'>
          <a href={cv} download='Goutham_CV' target="_blank" rel="noopener noreferrer">Save this CV</a>
        </div>
        <div className='link'>
          <a href='https://github.com/GouthamReddy1216/' target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div className='link'>
          <a href='https://www.linkedin.com/in/goutham-reddy-839245228/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className='link'>
          <a href='mailto:somugouthamreddy@gmail.com' target="_blank" rel="noopener noreferrer">somugouthamreddy@gmail.com</a>
        </div>
        <div className='link'>
          <a href='https://leetcode.com/u/tonystark16/' target="_blank" rel="noopener noreferrer">Leetcode</a>
        </div>
      </div>

      <div className='section education'>
        <h2>EDUCATION</h2>

        <div className='item'>
          <p><strong>2020 - 2024</strong> &emsp; Bachelor's Degree at <em>LNM Institute of Information Technology, Jaipur</em><br />
          Communication and Computer Engineering<span>(GPA: 6.26)</span></p>
        </div>

        <div className='item'>
          <p><strong>2019 - 2020</strong> &emsp; Class 12th at <em>Sri Chaitanya Junior collage, Vijayawada. BIE,AP</em> <span>(922/1000)</span></p>
        </div>
        <div className='item'>
          <p><strong>2018</strong> &emsp; Class 10th at <em>KKR Gowtham School, Guntur. BSE AP</em> <span>(GPA: 10/10)</span></p>
        </div>
      </div>

      <div className='section skills'>
        <h2>SKILLS</h2>
        <ul>
          <li><strong>Languages:</strong> C++, JavaScript, Python</li>
          <li><strong>Technologies:</strong> React, MySQL, Node, AWS, MongoDB</li>
          <li><strong>Soft Skills:</strong> Problem-Solving, Communication, Adaptability, Teamwork</li>
        </ul>
      </div>

      <div className='section projects'>
        <h2>PROJECTS</h2>

        <div className='project'>
          <h3>My portfolio website</h3>
          <p><strong>Key Skills:</strong> React.JS, HTML, CSS.&emsp; <strong>Deployed project Link:</strong> <a href="https://practice-production-468d.up.railway.app/" target="_blank" rel="noopener noreferrer">Live</a>&ensp;<a href="https://github.com/GouthamReddy1216/prortfolio" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p><strong>Objective:</strong>Develop a portfolio website from scratch using HTML, CSS, React</p>
          <div className='project-end'></div>
        </div>
        
        <div className='project'>
          <h3>Movie Search webapp</h3>
          <p><strong>Key Skills:</strong> MySQL, Express, React.JS, Node.&emsp; <strong>Deployed project Link:</strong> <a href="https://practice-production-468d.up.railway.app/" target="_blank" rel="noopener noreferrer">Live</a>&ensp;<a href="https://github.com/GouthamReddy1216/practice" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p><strong>Objective:</strong> The main objective of the project is to develop.deploy a robust web app that utilizes the async nature of Javascript.</p>
          <p>A simple web app developed using react,MySQL stack that used IMBD API to extract data about movies then display the related movies along with their respective links,  also MySQL is used to store the search data.</p>
          <div className='project-end'></div>
        </div>

        <div className='project'>
          <h3>Fake Fingerprints Detection System(Contactless)</h3>
          <p><strong>Key Skills:</strong> Deep Learning, Computer Vision. <strong>Project Link:</strong> <a href="https://github.com/GouthamReddy1216/Fake-Fingerprint-Detection-System-Contactless" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p><strong>Objective:</strong> Detect attempts to deceive fingerprint recognition systems through the use of fake or synthetic fingerprints.</p>
          <p><strong>Methodology:</strong> Analyze unique characteristics of contactless fingerprint images and employ sophisticated algorithms.</p>
          <p><strong>Technology Focus:</strong> Specifically designed for identifying presentation attacks involving artificial means, such as printed or molded replicas.</p>
          <p><strong>Benefits:</strong> Enhances the security of bio metric authentication systems by ensuring the authenticity of fingerprint samples.</p>
          <p><strong>Accomplishment:</strong> Successfully achieved a high <strong>Accuracy of 97%</strong> in detecting various types of fingerprint-based attacks.</p>
        </div>

      </div>

      <div className='section achievements'>
        <h2>ACHIEVEMENTS</h2>
        <ul>
          <li>Achieved a global rank of 547 in <strong>TCS Codevita</strong> Season 11, showcasing strong problem-solving skills and competitive programming prowess. &ensp; <a href={Certificate}>Certificate</a> &ensp;
          <a href={Certificate} target="_blank" rel="noopener noreferrer" download='Goutham_codevita_Certificate' >Save</a>
          </li>
          <li>Rated 1692 on Leetcode with over 600 problems solved. &ensp; <a href='https://leetcode.com/u/tonystark16/ ' target="_blank" rel="noopener noreferrer">Profile</a></li>
        </ul>
      </div>

      <footer className='footer'>
        <p> <strong><s> &lt;/&gt; with ❤️ by Goutham</s></strong> </p>
        <p><strong> &lt;/&gt; with React by Goutham </strong></p>
        <p>Last updated on Aug 2024 </p>
        <p>© 2024</p>
      </footer>

    </div>
  );
}

export default App;