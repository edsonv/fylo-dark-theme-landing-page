import LogoSVG from '../assets/images/logo.svg';

export const Logo = () => {
  return (
    <picture className='c-logo-container'>
      <img src={LogoSVG} alt='Fylo Brand Logo' />
    </picture>
  );
};
