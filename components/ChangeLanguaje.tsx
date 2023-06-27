import {useRouter} from 'next/router';
import Image from "next/image";
import {useState} from "react";


const ChangeLanguage = () => {
    const router = useRouter();
    const {locale} = router;
    const [language, setLanguage] = useState<'en' | 'es'>('es');

    const changeLanguage = () => {
        setLanguage(locale === 'en' ? 'es' : 'en');
        router.push(router.pathname, router.asPath, {locale: locale === 'en' ? 'es' : 'en'});
    };

    return (
        <Image
            className='cursor-pointer'
            src={locale === 'es' ? '/Group 28.svg' : "/bandera.svg"}
            alt="English"
            width={27}
            height={18}
            onClick={changeLanguage}
        />
    );
};

export default ChangeLanguage;
