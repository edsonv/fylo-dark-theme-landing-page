import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer>
      <Logo />
      <dl>
        <dt>
          <i className='icon-map'></i>
        </dt>
        <dd>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </dd>

        <dt>
          <i className='icon-phone'></i>
        </dt>
        <dd>
          <a href='tel:+15431234567'>+1-543-123-4567</a>
        </dd>

        <dt>
          <i className='icon-mail'></i>
        </dt>
        <dd>
          <a href='mailto:example@fylo.com'>example@fylo.com</a>
        </dd>
      </dl>

      <ul>
        <li>
          <a href='#aboutUs'>About us</a>
        </li>
        <li>
          <a href='#jobs'>Jobs</a>
        </li>
        <li>
          <a href='#press'>Press</a>
        </li>
        <li>
          <a href='#blog'>Blog</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href='contactUs'>Contact us</a>
        </li>
        <li>
          <a href='#terms'>Terms</a>
        </li>
        <li>
          <a href='#privacy'>Privacy</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href='#facebook'>
            <i className='icon-'></i>
          </a>
        </li>
        <li>
          <a href='#twitter'>
            <i className='icon-'></i>
          </a>
        </li>
        <li>
          <a href='#instagram'>
            <i className='icon-'></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
