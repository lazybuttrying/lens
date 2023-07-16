'use client';
import Image from "next/image"
import FirstImg from "../../../public/banner/main/first.jpg"
import SecondImg from "../../../public/banner/main/second.jpg"
import ThirdImg from "../../../public/banner/main/third.jpg"
import Slider, { Settings as SlickSettings } from "react-slick"

const slideSetting: SlickSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
}

const cardStyle = "rounded w-full object-cover";

function SlideBanner() {
    return (
        <Slider {...slideSetting} className={"flex flex-row flex-wrap justify-around w-full"}>
            <Image
                className={cardStyle}
                src={FirstImg}
                alt={"banner 1"}
                height={270}
                quality={75}
            />
            <Image
                className={cardStyle}
                src={SecondImg}
                alt={"banner 2"}
                height={270}
                quality={50}
            />
            <Image
                className={cardStyle}
                src={ThirdImg}
                alt={"banner 3"}
                height={270}
                quality={50}
            />
        </Slider>

    );
}

export { SlideBanner }