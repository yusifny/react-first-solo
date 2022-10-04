import './header.css';

export default function Header() {
  return (
    <header className="header">
      <img src="src/assets/zprofile.png" alt="profile-picture" />
      <h1 className="name">Laura Smith</h1>
      <h4 className="position">Frontend Developer</h4>
      <h6 className="website">laurasmith.website</h6>
    </header>
  );
}
