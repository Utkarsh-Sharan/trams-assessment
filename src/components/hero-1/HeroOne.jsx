import ImageSet from "./ImageSet.jsx";

const HeroOne = () => {
  return (
    <section className='flex flex-col justify-center items-center text-center pt-20'>
        <h1 className='text-7xl font-gerbil w-9/12'>
            The thinkers and doers were changing the status Quo with
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