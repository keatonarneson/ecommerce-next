import type { InferGetStaticPropsType } from 'next';
import { getAllProducts } from '@framework/product/';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product/';
import { Grid, Hero, Marquee } from '@components/ui';

export async function getStaticProps() {
  const config = getConfig();

  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookies, ice cream, and muffin"
        description="Pie pie biscuit soufflé chupa chups cake pudding lemon drops. Cupcake sweet roll jelly marshmallow cake macaroon soufflé. Pie carrot cake danish fruitcake marshmallow sweet roll carrot cake caramels. Topping apple pie chocolate bar wafer jelly cake lemon drops tootsie roll jelly beans. Powder cupcake caramels jelly beans chocolate bar cake chupa chups. Bear claw marzipan croissant dragée cotton candy jelly-o sweet roll jelly-o chupa chups. Pie danish gummi bears sesame snaps dessert gummi bears donut apple pie. Dessert tart liquorice chocolate cake donut fruitcake. Gummi bears ice cream chocolate bar marzipan cookie. Marzipan cupcake cake sugar plum jelly lollipop dragée gingerbread brownie."
      />
      <Marquee>
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} variant="slim" product={product} />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} variant="slim" product={product} />
        ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;
