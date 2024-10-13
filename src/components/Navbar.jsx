import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <nav className='c-menu-navbar u-d-flex'>
      <Logo />
      <ul
        className='c-navbar-list u-d-flex u-ff-accent'
        style={{ '--gap': '24px' }}
      >
        <li className='listItem'>
          <a href='#features' className='itemLink'>
            Features
          </a>
        </li>
        <li className='listItem'>
          <a href='#team' className='itemLink'>
            Team
          </a>
        </li>
        <li className='listItem'>
          <a href='#signin' className='itemLink'>
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};
