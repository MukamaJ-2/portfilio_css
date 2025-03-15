import { FaGithub, FaUniversity } from "react-icons/fa";

function LinkNavigation() {
  return (
    <nav>
      <h2>LINKS AND NAVIGATION</h2>
      <ul>
        <li>
          <FaGithub />{" "}
          <a href="https://github.com/MukamaJ-2" target="_blank" rel="noopener noreferrer">
            My GitHub Profile
          </a>
        </li>
        <li>
          <FaUniversity />{" "}
          <a href="https://ucu.ac.ug/post-engineering-design-technology/" target="_blank" rel="noopener noreferrer">
            University-related webpage
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LinkNavigation;
