import Link from "next/link";
import {useRouter} from "next/router";
import classNames from 'classnames';
import Image from 'next/image';
import {useTranslations} from "use-intl";
import ChangeLanguage from "./ChangeLanguaje";

export default function SessionOne() {
    const router = useRouter();
    const t = useTranslations('nav');
    return (
        <>
            <header className="bg-[#001853] h-[722px] pt-[34px] px-[56px]">

                <nav className="flex items-center justify-between bg-[#FFFFFF] h-[86px] rounded-[8px] px-10">
                    <ul className="flex w-[80%] px-10">
                        <li className={classNames('flex-grow leading-6 ', {
                            'text-[#2E53A3] font-bold': router.pathname === '/',
                        })}>
                            <Link href="/">{t('start')}</Link>
                        </li>
                        <li className={classNames('flex-grow leading-6 ', {
                            'text-[#2E53A3] font-bold': router.pathname === '/servicios',
                        })}>
                            <Link href="/servicios">{t('services')}</Link>
                        </li>
                        <li className={classNames('flex-grow leading-6 ', {
                            'text-[#2E53A3] font-bold': router.pathname === '/nosotros',
                        })}>
                            <Link href="/nosotros">{t('us')}</Link>
                        </li>
                        <li className={classNames('flex-grow leading-6 ', {
                            'text-[#2E53A3] font-bold': router.pathname === '/herramientas',
                        })}>
                            <Link href="/herramientas">{t('tools')}</Link>
                        </li>
                        <li className={classNames('flex-grow leading-6 ', {
                            'text-[#2E53A3] font-bold': router.pathname === '/socios',
                        })}>
                            <Link href="/socios">{t('partners')}</Link>
                        </li>
                    </ul>
                    <div className='flex justify-around w-[20%]'>
                        <Link href="/contactenos"
                              className="flex justify-center items-center bg-[#2D509E] text-white py-2 px-4 rounded-[56px] w-[175px] h-[49px] shadow-md shadow-[#709DDA] text-lg font-semibold leading-6 tracking-wide hover:bg-[#001853]">
                            Contactar
                        </Link>
                        <ChangeLanguage/>
                    </div>

                </nav>


            </header>
            <div className='flex fixed top-[170px] right-0 z-10'>
                {/*<div className='w-[50%] h-[500px]'>hola!!!</div>*/}
                <Image src={'/Group 26 (1) 1.svg'} alt={'office'} width={809} height={658}/>
            </div>
            <div className='flex fixed top-[665px] left-[20%] w-809 h-658 z-10'>
                {/*<div className='w-[50%] h-[500px]'>hola!!!</div>*/}
                <Image src={'/Polygon 1.svg'} alt={'office'} width={165} height={122}/>
            </div>
        </>
    );
}
