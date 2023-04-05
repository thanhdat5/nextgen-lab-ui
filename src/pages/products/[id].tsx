import { AppSettings } from '@/constants/app'
import { PRODUCTS } from '@/constants/products'
import { Product } from '@/types/product'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProductBanner from './components/banner'
import ProductContent from './components/content'
import ProductFeatures from './components/features'
import ProductSummary from './components/summary'

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const product = PRODUCTS.find(x => x.id.toString() === id);
      if (!product) {
        router.push('/');
      } else {
        setData(product);
      }
    }
  }, [router, id])

  return (
    <>
      <Head>
        <title>{data?.name} - {AppSettings.title}</title>
        <meta name="description" content={`${data?.name} - ${data?.shortDescription}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductBanner />
      {data ? <div className='ngl-product-detail'>
        <span className='decor decor1'></span>
        <span className='decor decor2'></span>
        <span className='decor decor3'></span>
        <ProductSummary data={data} />
        <ProductFeatures data={data} />
        {data.content ? <ProductContent data={data} /> : <></>}
      </div> : <></>
      }
    </>
  )
}
