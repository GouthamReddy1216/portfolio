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

      <div className='section experience'>
        <h2>WORK EXPERIENCE</h2>
        <div className='item'>
          <h3>Hakkōda (An IBM Company)</h3>
          <p><strong>Nov 2024 - Present</strong> &emsp; <em>Associate Consultant Data Engineer</em></p>
          <ul>
            <li>Designed and implemented scalable data pipelines to migrate high-volume SAP data into Snowflake, optimizing data reliability, integrity, and query performance.</li>
            <li>Built and optimized transformation workflows using advanced SQL and Snowflake architecture best practices to support downstream analytics and reporting use cases.</li>
            <li>Implemented Slowly Changing Dimension (SCD) models for accurate historical tracking and dimensional data management within enterprise data warehouses.</li>
            <li>Collaborated with cross-functional stakeholders, analysts, and business teams (clients supported) to validate data quality, ensure transformation accuracy, and improve data trustworthiness.</li>
            <li>Developed interactive and business-focused dashboards in Sigma, enabling near real-time reporting and data-driven decision-making for stakeholders.</li>
            <li>Improved analytics efficiency and reduced data processing costs by 30% through cloud-native optimization strategies and performance-focused data engineering practices.</li>
          </ul>
        </div>
      </div>

      <div className='section education'>
        <h2>EDUCATION</h2>
        <div className='item'>
          <p><strong>2020 - 2024</strong> &emsp; Bachelor's Degree at <em>LNM Institute of Information Technology, Jaipur</em><br />
          Communication and Computer Engineering <span>(GPA: 6.26)</span></p>
        </div>
        <div className='item'>
          <p><strong>2019 - 2020</strong> &emsp; Class 12th at <em>Sri Chaitanya Junior College, Vijayawada. BIE, AP</em> <span>(922/1000)</span></p>
        </div>
        <div className='item'>
          <p><strong>2018</strong> &emsp; Class 10th at <em>KKR Gowtham School, Guntur. BSE AP</em> <span>(GPA: 10/10)</span></p>
        </div>
      </div>

      <div className='section skills'>
        <h2>SKILLS</h2>
        <ul>
          <li><strong>Languages:</strong> Python, SQL, C++, JavaScript</li>
          <li><strong>Technologies:</strong> Apache Kafka, Apache Spark, ClickHouse, Docker, MySQL, AWS (S3, EC2, Lambda), Snowflake, DBT (Core & Cloud), Coalesce, Sigma, React, Node, MongoDB</li>
          <li><strong>Data Engineering & Soft Skills:</strong> Big Data Processing, ETL Pipelines, DSA, Problem-Solving, Communication, Adaptability, Teamwork</li>
        </ul>
      </div>

      <div className='section projects'>
        <h2>PROJECTS</h2>

        <div className='project'>
          <h3>Real-Time Big Data Pipeline using Kafka, Spark, ClickHouse & Grafana</h3>
          <p><strong>Key Skills:</strong> Python, Apache Kafka, Apache Spark, ClickHouse, Docker, AWS EC2</p>
          <p><strong>Objective:</strong> Developed a real-time big data pipeline to stream, process, store, and visualize large-scale event data using Kafka for messaging, Spark for distributed data processing, ClickHouse for analytical storage, and Grafana for monitoring dashboards.</p>
          <ul>
            <li>Built a multi-container architecture using Docker Compose.</li>
            <li>Implemented Kafka producers for real-time event streaming.</li>
            <li>Configured Spark Master and Worker nodes for distributed processing.</li>
            <li>Stored processed analytics data in ClickHouse for high-performance querying.</li>
            <li>Visualized live metrics and dashboards using Grafana.</li>
          </ul>
          <div className='project-end'></div>
        </div>

        <div className='project'>
          <h3>Twitter ETL pipeline</h3>
          <p><strong>Key Skills:</strong> Python, SQL, AWS S3, EC2</p>
          <p><strong>Objective:</strong> Developed an ETL pipeline to extract Twitter data, transform it, and store it in AWS S3 storage for further analytics and processing.</p>
          <div className='project-end'></div>
        </div>

        <div className='project'>
          <h3>Fake Fingerprints Detection System (Contactless)</h3>
          <p><strong>Key Skills:</strong> Deep Learning, Computer Vision. <strong>Project Link:</strong> <a href="https://github.com/GouthamReddy1216/Fake-Fingerprint-Detection-System-Contactless" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p><strong>Objective:</strong> Detect attempts to deceive fingerprint recognition systems through the use of fake or synthetic fingerprints.</p>
          <p><strong>Accomplishment:</strong> Successfully achieved a high <strong>Accuracy of 97%</strong> in detecting various types of fingerprint-based attacks.</p>
          <div className='project-end'></div>
        </div>

        <div className='project'>
          <h3>Movie Search webapp</h3>
          <p><strong>Key Skills:</strong> MySQL, Express, React.JS, Node.&emsp; <strong>Deployed project Link:</strong> <a href="https://practice-production-468d.up.railway.app/" target="_blank" rel="noopener noreferrer">Live</a>&ensp;<a href="https://github.com/GouthamReddy1216/practice" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p><strong>Objective:</strong> Develop a robust web app that utilizes the async nature of JavaScript, featuring a React/MySQL stack and the IMDb API.</p>
          <div className='project-end'></div>
        </div> 

        <div className='project'>
          <h3>My portfolio website</h3>
          <p><strong>Key Skills:</strong> React.JS, HTML, CSS.&emsp; <strong>Deployed project Link:</strong> <a href="https://portfolio-k4bw.onrender.com//" target="_blank" rel="noopener noreferrer">Live</a>&ensp;<a href="https://github.com/GouthamReddy1216/prortfolio" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p><strong>Objective:</strong> Develop a portfolio website from scratch using HTML, CSS, React.</p>
        </div>
      </div>

      <div className='section achievements'>
        <h2>ACHIEVEMENTS & CERTIFICATIONS</h2>
        
        <h3>Professional Certifications</h3>
        <ul>
          <li>Databricks Data Engineer Professional Certificate</li>
          <li>Databricks Data Engineer Certificate</li>
          <li>Snowflake Advanced Data Engineer Certification Certificate</li>
          <li>Snowflake Certified Certificate</li>
        </ul>

        <h3>Competitive Programming & Honors</h3>
        <ul>
          <li>Achieved a global rank of 547 in <strong>TCS Codevita</strong> Season 11, showcasing strong problem-solving skills. &ensp; 
            <a href={Certificate} target="_blank" rel="noopener noreferrer">View Certificate</a> &ensp;
            <a href={Certificate} download='Goutham_codevita_Certificate'>Save</a>
          </li>
          <li>Rated 1692 on LeetCode with over 600 problems solved. &ensp; <a href='https://leetcode.com/u/tonystark16/' target="_blank" rel="noopener noreferrer">Profile</a></li>
        </ul>
      </div>

      <footer className='footer'>
        <p><strong> &lt;/&gt; with React by Goutham </strong></p>
        <p>Last updated on June 2026 </p>
        <p>© 2026</p>
      </footer>

    </div>
  );
}

export default App;
