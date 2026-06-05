import Links from "./Links";
import Vector1 from "../../assets/images/footer-vector1.png";
import Vector2 from "../../assets/images/footer-vector2.png";
import Ellipse from "../../assets/images/footer-ellipse.png";

const Footer = () => {
  return (
    <section className='mt-[200px] flex flex-col gap-12 justify-center items-center 
    bg-brand-primary pt-24 pb-12 relative'>
        <img 
        src={Vector1} 
        alt="vecotr-1"
        className="absolute top-0 left-[615px] w-20" />

        <img 
        src={Vector2} 
        alt="vecotr-2"
        className="absolute top-0 left-[670px] w-20" />

        <img 
        src={Ellipse} 
        alt="ellipse"
        className="absolute top-44 right-44 w-20" />

        <article className="flex flex-col gap-7 justify-center items-center">
            <h2 className="font-gerbil text-5xl font-medium text-center w-[450px]">
                Subscribe to our newsletter
            </h2>
            <p className="font-satoshi">To make your stay special and even more memorable</p>
            <button className="bg-black text-white py-2 px-6 rounded-full font-satoshi">
                Subscribe Now
            </button>
        </article>

        <div className="border border-black h-[1px] rounded-full w-10/12" />

        <Links />

        <p className="font-satoshi mt-20">©2023 Elementum. All rights reserved</p>
    </section>
  )
}

export default Footer