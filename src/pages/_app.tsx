import type { AppProps } from 'next/app';
import "bootstrap/dist/css/bootstrap.css";
import "../assets/plugins/slick/slick.css";
import "../assets/plugins/slick/slick-theme.css";
import "../assets/css/style.scss";
import Layout from './_layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
      require("jquery");
      require("../assets/js/main");
    }
  }, [router.events]);

  return <div className={poppins.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
}
