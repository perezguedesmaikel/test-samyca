import {useRouter} from 'next/router';
import Image from "next/image";
import {useState} from "react";


const ChangeLanguage = () => {
    const router = useRouter();
    const [language, setLanguage] = useState<'en' | 'es'>('es');

    const changeLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
        router.push(router.pathname, router.asPath, {locale: language});
    };

    return (
        <Image
            className='cursor-pointer'
            src={language === 'es' ? '/Group 28.svg' : "/bandera.svg"}
            alt="English"
            width={27}
            height={18}
            onClick={changeLanguage}
        />
    );
};

export default ChangeLanguage;
