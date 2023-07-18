import Image from 'next/image'
import Foo from "../../../public/foo.jpg"

function Card() {
    return (
        <div>
            <Image
                className={"rounded"}
                src={Foo}
                style={{
                    objectFit: "contain"
                }}
                width={200}
                height={200}
                alt="Picture of the author"
                quality={50}
            />
            <h3>Product Name</h3>
            <p>KRW 20,000</p>
        </div>
    )
}


export default function Cardboard() {
    return (
        <div className="w-full lg:w-5/6 grid gap-5 xl:grid-cols-5 md:grid-cols-3 ">

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

    )
}