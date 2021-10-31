import { FaShoppingCart } from 'react-icons/fa';
import Container from '@components/Container';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <p className={s.headerTitle}>Sumayya&apos;s Shoez Store</p>
        <p className={s.headerCart}>
          <button className="snipcart-checkout">
            <FaShoppingCart />
            <span className="snipcart-total-price">$$$</span>
          </button>
        </p>
      </Container>
    </header>
  );
};

export default Header;
