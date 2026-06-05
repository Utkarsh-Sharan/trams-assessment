import Arrow from "../../assets/images/Arrow.png";

const Faq = () => {
  return (
    <section className='mt-[200px] flex flex-col justify-center items-center'>
        <section className='w-9/12'>
            <h2 className='font-gerbil text-6xl font-medium w-[600px]'>What we can offer you!</h2>
        
            <article className="mt-20">
                <div 
                    className="flex justify-between items-center border-t-2 border-gray-300 
                    py-4"
                >
                    <p className="text-lg">Office of multiple interest content</p>

                    <h3 className='text-4xl font-medium font-gerbil'>Collaborative and partnership</h3>

                    <img src={Arrow} alt="arrow" className="w-20" />
                </div>

                <div 
                    className="flex justify-between items-center border-t-2 border-gray-300 
                    py-4"
                >
                    <p className="text-lg">The hanger US Air force digital experimental</p>

                    <h3 className='text-4xl font-medium font-gerbil'>We talk about our weight</h3>

                    <img src={Arrow} alt="arrow" className="w-20" />
                </div>

                <div 
                    className="flex justify-between items-center border-t-2 border-b-2 border-gray-300 
                    py-4"
                >
                    <p className="text-lg">Delta faucet content, social, digital</p>

                    <h3 className='text-4xl font-medium font-gerbil'>Piloting digital confidence</h3>

                    <img src={Arrow} alt="arrow" className="w-20" />
                </div>
            </article>
        </section>
    </section>
  );
}

export default Faq