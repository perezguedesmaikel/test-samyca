import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout";
import {NextIntlProvider} from "next-intl";

function MyApp({Component, pageProps}: AppProps) {
    return <NextIntlProvider messages={pageProps.messages}> <Layout>
        <div className='p-40'>
            <Component {...pageProps} />
        </div>
    </Layout></NextIntlProvider>
}

export default MyApp
