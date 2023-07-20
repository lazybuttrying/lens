import Image, { StaticImageData } from 'next/image'

export type Thumbnail = {
    image: StaticImageData
    product_name: string
    price: number
    discount: number
}

function Card(
    {params}: {params: {datum:Thumbnail, currency:string}}
) {
    return (
        <div>
            <Image
                className={"rounded"}
                src={params.datum.image}
                style={{
                    objectFit: "contain"
                }}
                width={200}
                height={200}
                alt="Picture of the author"
                quality={50}
            />
            <h3>{params.datum.product_name}</h3>
            <p>{params.currency} {params.datum.price}</p>
            {params.datum.discount ? params.datum.discount : null}
        </div>
    )
}


export default function Cardboard(
    {params}: {params: {data:Thumbnail[], currency:string}}
) {
    return (
        <div className="w-full lg:w-5/6 grid gap-5 xl:grid-cols-5 md:grid-cols-3 ">
            {
                params.data.map(
                    (datum) => (<Card params={{datum:datum, currency:params.currency}} />)
                )
            }

        </div>

    )
}