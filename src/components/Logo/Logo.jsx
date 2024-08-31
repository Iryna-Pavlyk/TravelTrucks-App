import css from './Logo.module.css';

const Logo = () => {
  return (
    <a className={css.navLogoLink} href="/">
      <svg className={css.iconLogo} width="136" height="16">
        <use href="/src/assets/logo.svg#TravelTrucks"></use>
      </svg>
    </a>
  );
};

export default Logo;
