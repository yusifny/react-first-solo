import './contacts.css';

export default function Contacts() {
  return (
    <div className="contacts">
      <a className="email" href="#">
        <img src="assets/mail.svg" alt="Email" />
        Email
      </a>
      <a className="linkedin" href="#">
        <img src="assets/linkedin.svg" alt="LinkedIn" />
        LinkedIn
      </a>
    </div>
  );
}
