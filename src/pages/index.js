import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/Header';
import Container from '@components/Container';
import Button from '@components/Button';
import Script from 'next/script';

import s from '@styles/Home.module.scss';

import products from '@data/products.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shoez Store</title>
        <meta name="description" content="Cheap and quality meet without compromise in our store" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>

      <Header />
      <main>
        <Container>
          <h1>Hyper Bros Trading Cards</h1>
          <h2>Available Products</h2>
          <ul className={s.products}>
            {products.map((pr) => {
              return (
                <li key={pr.id}>
                  <Image width={864} height={1200} src={pr.image} alt={`Card of ${pr.title}`} />
                  <h3 className={s.productTitle}>{pr.title}</h3>
                  <p className={s.productPrice}>{pr.price}</p>
                  <p>
                    <Button
                      className="snipcart-add-item"
                      data-item-id={pr.id}
                      data-item-price={pr.price}
                      data-item-url="/"
                      data-item-description=""
                      data-item-image={pr.image}
                      data-item-name={pr.title}>
                      Add to Cart
                    </Button>
                  </p>
                </li>
              );
            })}
          </ul>
        </Container>
      </main>

      <footer className={s.footer}>
        &copy; Sumayya&apos;s Shoez Store {new Date().getFullYear()}
      </footer>

      <Script src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} />
    </div>
  );
}
