import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function ContactInformation() {
  return (
    <section>
      <h2>CONTACT INFORMATION</h2>
      <ul className="contact-info">
        <li>
          <FaEnvelope />{" "}
          <a href="mailto:josephmukama67@gmail.com" aria-label="Send an email">
            josephmukama67@gmail.com
          </a>
        </li>
        <li>
          <FaLinkedin />{" "}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            My LinkedIn Platform
          </a>
        </li>
        <li>
          <FaGithub />{" "}
          <a
            href="https://github.com/MukamaJ-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            My GitHub Account
          </a>
        </li>
      </ul>
    </section>
  );
}

export default ContactInformation;
