import { FaShoppingCart } from 'react-icons/fa';
import Container from '@components/Container';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <p className={s.headerTitle}>Sumayya's Shoez Store</p>
        <p className={s.headerCart}>
          <FaShoppingCart />
          $0.00
        </p>
      </Container>
    </header>
  );
};

export default Header;
