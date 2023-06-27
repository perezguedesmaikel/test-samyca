import type {NextPage} from 'next'

const Home: NextPage = () => {
    return (
        <div>
            Inicio
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
            messages: (await import(`../locales/${locale}.json`)).default
        }
    };
}
