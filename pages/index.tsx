import type {NextPage} from 'next'

const Home: NextPage = () => {
    return (
        <div>
            index
        </div>
    )
}

export default Home

interface MyContext {
    locale: string;
}

export async function getStaticProps({locale}: MyContext) {
    return {
        props: {
            // You can get the messages from anywhere you like. The recommended pattern
            // is to put them in JSON files separated by locale (e.g. `en.json`).
            messages: (await import(`../locales/${locale}.json`)).default
        }
    };
}
