import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com" target={'_blank'}>
        <img src="/assets/Twitter.svg" alt="instagram" />
      </a>
      <a href="https://facebook.com" target={'_blank'}>
        <img src="/assets/facebook.svg" alt="facebook" />
      </a>
      <a href="https://instagram.com" target={'_blank'}>
        <img src="/assets/instagram.svg" alt="instagram" />
      </a>
      <a href="https://github.com" target={'_blank'}>
        <img src="/assets/github.svg" alt="github" />
      </a>
    </div>
  );
}
