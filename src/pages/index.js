import Head from 'next/head';
// import Image from 'next/image';
import Header from '@components/Header';
import Container from '@components/Container';

import s from '@styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shoez Store</title>
        <meta name="description" content="Cheap and quality meet without compromise in our store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Container>
          <h1>Hyper Bros Trading Cards</h1>
          <h2>Available Products</h2>
          <ul className={s.products}>
            <li>
              <img src="/images/bowser-holo.jpg" alt="product_image" />
              <h3>Bowser Holographic</h3>
              <p>$99.99</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </li>

            <li>
              <img src="/images/hammer.jpg" alt="product_image" />
              <h3>Hammer</h3>
              <p>$79.99</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </li>

            <li>
              <img src="/images/luigi.jpg" alt="product_image" />
              <h3>Luigi</h3>
              <p>$69.99</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </li>

            <li>
              <img src="/images/mario.jpg" alt="product_image" />
              <h3>Mario</h3>
              <p>$49.99</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </li>
          </ul>
        </Container>
      </main>

      <footer className={s.footer}>&copy; Sumayya's Shoez Store {new Date().getFullYear()}</footer>
    </div>
  );
}
