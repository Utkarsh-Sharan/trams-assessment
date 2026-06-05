import Img1 from "../../assets/images/Review-img/Ellipse263.png";
import Img2 from "../../assets/images/Review-img/Ellipse264.png";
import Img3 from "../../assets/images/Review-img/Ellipse265.png";
import Img4 from "../../assets/images/Review-img/Ellipse266.png";
import Img5 from "../../assets/images/Review-img/Ellipse267.png";
import Img6 from "../../assets/images/Review-img/Ellipse268.png";
import Img7 from "../../assets/images/Review-img/Ellipse269.png";
import Img8 from "../../assets/images/Review-img/Ellipse270.png";
import Inverted1 from "../../assets/images/Review-img/invertedcomma1.png";
import Inverted2 from "../../assets/images/Review-img/invertedcomma2.png";

const Reviews = () => {
    return (
        <section className='mt-40 flex flex-col justify-center items-center gap-20 relative'>
            <h3 className='w-[500px] font-gerbil text-4xl font-medium text-center'>What our customer says about us</h3>

            <div className="relative">
                <p className='w-[400px] text-center font-satoshi text-lg'>
                    Elementum  delivered the site with inthe timeline
                    as they requested. Inthe end, the client found a 50%
                    increase in traffic with in days since its launch. They
                    also had an impressive ability to use technologies that
                    the company hasn`t used, which have also proved to
                    be easy to use and reliable
                </p>

                <img
                    src={Inverted1}
                    alt="inverted-comma-1"
                    className="absolute -top-3 -left-8 w-5" />
                <img
                    src={Inverted1}
                    alt="inverted-comma-2"
                    className="absolute -top-3 -left-14 w-5" />
                <img
                    src={Inverted2}
                    alt="inverted-comma-3"
                    className="absolute -bottom-1 -right-3 w-5" />
                <img
                    src={Inverted2}
                    alt="inverted-comma-4"
                    className="absolute -bottom-1 -right-9 w-5" />
            </div>

            <div>
                <img
                    src={Img1}
                    alt="image-1"
                    className="absolute top-0 left-36 w-20" />
                <img
                    src={Img2}
                    alt="image-2"
                    className="absolute top-20 right-96 w-10" />
                <img
                    src={Img3}
                    alt="image-3"
                    className="absolute top-40 right-80 w-14" />
                <img
                    src={Img4}
                    alt="image-4"
                    className="absolute top-36 left-10 w-10" />
                <img
                    src={Img5}
                    alt="image-5"
                    className="absolute top-72 left-5 w-14" />
                <img
                    src={Img6}
                    alt="image-6"
                    className="absolute top-40 left-40 w-32" />
                <img
                    src={Img7}
                    alt="image-7"
                    className="absolute top-64 right-44 w-40" />
                <img
                    src={Img8}
                    alt="image-8"
                    className="absolute top-0 right-44 w-24" />
            </div>
        </section>
    )
}

export default Reviews