import Cardboard from '../../components/unit/card'
import { SlideBanner } from '../../components/unit/banner'
import { getDictionary } from './dictionaries'
import type { Locale } from "../../../i18n-config"

import Foo from "../../../public/foo.jpg"
import type {Thumbnail} from "../../components/unit/card"
import Image from 'next/image'

let monk: Thumbnail[] = [
  {image: Foo, product_name: "Mayfair Ice", price:20000, discount:0},
  {image: Foo, product_name: "Vintage Red", price:23000, discount:11},
  {image: Foo, product_name: "Soft Wallnut", price:12000, discount:21},
  {image: Foo, product_name: "Analog Pink", price:9000, discount:15},
  {image: Foo, product_name: "Mayfair Ice", price:20000, discount:0},
  {image: Foo, product_name: "Vintage Red", price:23000, discount:11},
  {image: Foo, product_name: "Soft Wallnut", price:12000, discount:21},
  {image: Foo, product_name: "Analog Pink", price:9000, discount:15},
]

export default async function Home(
  {params}: {params: {lang:Locale}}
) {
  const dict = await getDictionary(params.lang)
  return (
    <>
      <section className={"h-fit"}>
        {
          dict.base.welcome_message.map(
            (sentence: string) => <h1>{sentence}</h1>
          )
        }
        
      </section>
      <SlideBanner />
      <Cardboard params={{data: monk, currency: dict.base.currency}} />

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

      </div>
    </>
  )
}
