// import {useTranslations} from 'next-intl'
import Image from "next/image"
import LogoImage from "../../../public/logo/3.png"
import Nav from "./nav"
export default function Header() {
    // const t = useTranslations('base');

    return (
        <header className={"flex justify-between flex-row m-5"}>
            <section className={"flex flex-row text-center"}>
                <Image 
                    src={LogoImage}
                    width={75}
                    height={75}
                    alt="logo"
                />
                {/* <h2>Lense</h2> */}
            </section>
            <section>
                <Nav></Nav>
            </section>
        </header>
    )
  }