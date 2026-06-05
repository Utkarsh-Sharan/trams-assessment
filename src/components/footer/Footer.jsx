import Links from "./Links"

const Footer = () => {
  return (
    <section className='mt-[200px] flex flex-col gap-12 justify-center items-center mb-32'>
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

        <p className="font-satoshi">©2023 Elementum. All rights reserved</p>
    </section>
  )
}

export default Footer