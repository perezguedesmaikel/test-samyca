import Link from "next/link";
import {useRouter} from "next/router";
import classNames from 'classnames';
import Image from 'next/image';

export default function SessionOne() {
    const router = useRouter();
    return (
        <header className="bg-[#001853] h-[722px] pt-[34px] px-[56px]">
            <nav className="flex items-center justify-between bg-[#FFFFFF] h-[86px] rounded-[8px] px-10">
                <ul className="flex w-[80%] px-10">
                    <li className={classNames('flex-grow leading-6 ', {
                        'text-[#2E53A3] font-bold': router.pathname === '/',
                    })}>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li className={classNames('flex-grow leading-6 ', {
                        'text-[#2E53A3] font-bold': router.pathname === '/servicios',
                    })}>
                        <Link href="/servicios">Servicios</Link>
                    </li>
                    <li className={classNames('flex-grow leading-6 ', {
                        'text-[#2E53A3] font-bold': router.pathname === '/nosotros',
                    })}>
                        <Link href="/nosotros">Nosotros</Link>
                    </li>
                    <li className={classNames('flex-grow leading-6 ', {
                        'text-[#2E53A3] font-bold': router.pathname === '/herramientas',
                    })}>
                        <Link href="/herramientas">Herramientas</Link>
                    </li>
                    <li className={classNames('flex-grow leading-6 ', {
                        'text-[#2E53A3] font-bold': router.pathname === '/socios',
                    })}>
                        <Link href="/socios">Socios</Link>
                    </li>
                </ul>
                <div className='flex justify-around w-[20%]'>
                    <Link href="/contactenos"
                          className="flex justify-center items-center bg-[#2D509E] text-white py-2 px-4 rounded-[56px] w-[175px] h-[49px] shadow-md shadow-[#709DDA] text-lg font-semibold leading-6 tracking-wide hover:bg-[#001853]">
                        Contactar
                    </Link>
                    <Image
                        className='cursor-pointer'
                        src="/bandera.svg"
                        alt="English"
                        width={27}
                        height={18}
                    />
                </div>

            </nav>

        </header>
    );
}
