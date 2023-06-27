import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout";
import {NextIntlProvider} from "next-intl";
import {useRouter} from 'next/router';
import enMessages from '../locales/en.json';
import esMessages from '../locales/es.json';

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();
    const {locale} = router;
    const messages = locale === 'es' ? esMessages : enMessages;
    return <NextIntlProvider locale={locale} messages={messages}> <Layout>
        <div className='p-40'>
            <Component {...pageProps} />
        </div>
    </Layout></NextIntlProvider>
}

export default MyApp


