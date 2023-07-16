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
                width={150}
                height={150}
                alt="Picture of the author"
            />
            <h3>Product Name</h3>
            <p>KRW 20,000</p>
        </div>
    )
}


export default function Cardboard() {
    return (
        <div className="w-full grid gap-13 lg:grid-cols-5 sm:grid-cols-3">

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