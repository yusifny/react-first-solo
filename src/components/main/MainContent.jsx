import Interests from './interests/Interests';
import About from './about/About';
import './main-content.css';

export default function Main() {
  return (
    <div className="main-content">
      <About />
      <Interests />
    </div>
  );
}
