import Ellipse from "../../assets/images/hero-2-img1.png";
import Img2 from "../../assets/images/hero-2-img2.png";
import Img3 from "../../assets/images/hero-2-img3.png";
import Arrow from "../../assets/images/Arrow.png";

const HeroTwo = () => {
  return (
    <section className="mt-[600px] relative flex flex-col items-center justify-center">
        <section className='w-9/12'>
            <img src={Ellipse} alt="ellipse" className="absolute -z-10 -top-40 left-72" />

            <article className="flex flex-col gap-20">
                <article className="flex justify-between items-center gap-36">
                    <div className="flex flex-col gap-5">
                        <h3 className="font-gerbil text-4xl font-medium">
                            Tomorrow should be better than today
                        </h3>
                        <p>
                            We are a team of strategists, designers communicators, researchers.
                            Togeather, we belive that progress only happens when you refuse
                            to play things safe.
                        </p>
                        <div className="flex justify-start items-center gap-5">
                            <p>Read more</p>
                            <img src={Arrow} alt="arrow" />
                        </div>
                    </div>
                    <img src={Img2} alt="meeting-image" className="rounded-full w-96 h-96" />
                </article>
                <article className="flex justify-between items-center gap-36">
                    <img src={Img3} alt="meeting-image-2" className="rounded-full w-96 h-96" />
                    <div className="flex flex-col gap-5">
                        <h3 className="font-gerbil text-4xl font-medium">
                            See how we can help you progress
                        </h3>
                        <p>
                            We add a layer of fearless insights and action that allows change
                            makers to accelerate their progress in areas such as brand, design
                            digital, comms and social research.
                        </p>
                        <div className="flex justify-start items-center gap-5">
                            <p>Read more</p>
                            <img src={Arrow} alt="arrow" />
                        </div>
                    </div>
                </article>
            </article>
        </section>
    </section>
  )
}

export default HeroTwo