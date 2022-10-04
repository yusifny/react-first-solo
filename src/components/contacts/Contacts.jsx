import './contacts.css';

export default function Contacts() {
  return (
    <div className="contacts">
      <a className="email" href="#">
        <img src="src/assets/Mail.svg" alt="Email icon" />
        Email
      </a>
      <a className="linkedin" href="#">
        <img src="src/assets/linkedin.svg" alt="" />
        LinkedIn
      </a>
    </div>
  );
}
