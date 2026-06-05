import ImageSet from "./ImageSet.jsx";
import Underline from "../../assets/images/underline-yellow.png";

const HeroOne = () => {
  return (
    <section className='mt-40 h-52 flex flex-col justify-center items-center text-center pt-20'>
      <h1 className='text-7xl font-gerbil w-9/12 leading-tight'>
        The {" "} 
        <span className="relative">
          thinkers
          <img src={Underline} alt="underline" className="absolute left-0" />
        </span> {" "}
        and doers were changing the {" "}
        <span className="bg-brand-primary rounded-full px-5">status</span> Quo with
      </h1>

      <p className='font-satoshi pt-10 text-lg w-1/2'>
        We are a team of strategists, designers communicators, researchers.
        Togeather,we belive that progress only hghappens when you refuse to play
        things safe.
      </p>

      <ImageSet />
    </section>
  )
}

export default HeroOne