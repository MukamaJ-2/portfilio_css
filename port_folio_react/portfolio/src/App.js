import { useState, useEffect } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Force light mode by default
    localStorage.setItem('theme', 'light');
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <>
      <div className="theme-toggle">
        <button id="theme-switch" onClick={toggleTheme}>
          <span className="mode-icon">{isDarkMode ? '☀️' : '🌙'}</span>
          <span className="mode-text">{isDarkMode ? 'Light' : 'Dark'}</span>
        </button>
      </div>
      <div className="container">
        <h1>MUKAMA JOSEPH</h1>

        <hr />

        <p>
          I am a student at Uganda Christian University pursuing a Bachelor Degree in
          Computer Science. Web programming has been among my
          courses of interest cause before joining I had a dream of becoming a web developer
          and with this, I think it will contribute much to my success
        </p>

        <hr />

        <h2>PERSONAL DETAILS</h2>
        <ul>
          <li><strong>Full Name:</strong> Joseph Mukama</li>
          <li><strong>Registration No:</strong> S23B23/036</li>
          <li><strong>Access No:</strong> B24267</li>
          <li><strong>Course:</strong> Bachelor of Science in Computer Science</li>
          <li><strong>Year:</strong> Second year</li>
          <li><strong>Hobbies:</strong> Watching movies, and Playing Badminton</li>
        </ul>
        
        <hr />

        <h2>PROFILE PICTURE</h2>
        <img src="mukama.jpeg" alt="This is my profile pic" className="profile-image" />

        <hr />

        <h2>THE HOBBY VIDEO</h2>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/jGWDZIoIDTc" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>

        <hr />

        <h2>YEAR ONE SEMESTER ONE RESULTS</h2>
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grade</th>
              <th>Credit Units</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ICT1102</td>
              <td>Essential Hardware and Software Concepts</td>
              <td>A</td>
              <td>4</td>
            </tr>
            <tr>
              <td>ICT1103</td>
              <td>Fundamentals of Computing</td>
              <td>C+</td>
              <td>4</td>
            </tr>
            <tr>
              <td>CSC1101</td>
              <td>Structured Programming</td>
              <td>B</td>
              <td>4</td>
            </tr>
            <tr>
              <td>MTH1102</td>
              <td>Discrete Mathematics</td>
              <td>B-</td>
              <td>3</td>
            </tr>
            <tr>
              <td>LNG1101</td>
              <td>Writing and Study Skills</td>
              <td>A</td>
              <td>3</td>
            </tr>
            <tr>
              <td>TBS1103</td>
              <td>Understanding the Old Testament</td>
              <td>A</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <h2>LINKS AND NAVIGATION</h2> 
        <ul>
          <li>🔗 <a href="https://github.com/MukamaJ-2" target="_blank" rel="noopener noreferrer">My GitHub Profile</a></li>
          <li>📚 <a href="https://ucu.ac.ug/post-engineering-design-technology/" target="_blank" rel="noopener noreferrer">University-related webpage</a></li>
        </ul>

        <hr />

        <h2>CONTACT INFORMATION</h2>
        <ul className="contact-info">
          <li>📧 Email: <a href="mailto:josephmukama67@gmail.com">josephmukama67@gmail.com</a></li>
          <li>💼 LinkedIn: <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">My LinkedIn Platform</a></li>
          <li>💻 GitHub: <a href="https://github.com/MukamaJ-2" target="_blank" rel="noopener noreferrer">My GitHub Account</a></li>
        </ul>

        <hr />

        <h2>CAREER GOALS</h2>
        <div className="career-goals">
          <p>
            I want that at least by the end of this semester, I should be well equipped with
            full-stack skills.
          </p>
          <p>
            Next after obtaining all the required skills in full-stack development,
            I would then like to add on Web3 skills that works with blockchains.
          </p>
        </div>
      </div>
    </>
  )
}

export default App