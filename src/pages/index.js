import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/Header';
import Container from '@components/Container';
import Button from '@components/Button';
import Script from 'next/script';

import s from '@styles/Home.module.scss';

// import products from '@data/products.json';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home({ products }) {
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
          <h1>Sumayya and Amin Trading Co.</h1>
          <h2>Available Products</h2>
          <ul className={s.products}>
            {products.map((pr) => {
              const { image } = pr;
              return (
                <li key={pr.slug}>
                  <Image
                    width={image.mediaDetails.width}
                    height={image.mediaDetails.height}
                    src={image.sourceUrl}
                    alt={`Card of ${image.altText}`}
                  />
                  <h3 className={s.productTitle}>{pr.title}</h3>
                  <p className={s.productPrice}>{pr.productPrice}</p>
                  <p>
                    <Button
                      className="snipcart-add-item"
                      data-item-id={pr.slug}
                      data-item-price={pr.productPrice}
                      data-item-url="/"
                      data-item-description="This product really worth buying"
                      data-item-image={image.sourceUrl}
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

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://shoezstore.local/graphql',
    cache: new InMemoryCache(),
  });
  const response = await client.query({
    query: gql`
      query AllProducts {
        products {
          edges {
            node {
              content
              featuredImage {
                node {
                  altText
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              product {
                productPrice
                slug
              }
              slug
              title
              uri
            }
          }
        }
      }
    `,
  });
  const products = response.data.products.edges.map(({ node }) => {
    const data = {
      ...node,
      ...node.product,
      image: {
        ...node.featuredImage.node,
      },
    };
    return data;
  });
  return {
    props: {
      products,
    },
  };
}
