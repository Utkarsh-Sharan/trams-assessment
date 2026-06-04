import Img1 from "../../assets/images/img1.png";
import Img2 from "../../assets/images/img2.png";
import Img3 from "../../assets/images/img3.png";
import Img4 from "../../assets/images/img4.png";
import Img5 from "../../assets/images/img5.png";
import Img6 from "../../assets/images/img6.png";
import Img7 from "../../assets/images/img7.png";
import Img8 from "../../assets/images/img8.png";

const ImageSet = () => {
  return (
    <section className='h-32 w-full lg:max-w-7xl relative'>
        <img 
            src={Img1} 
            alt="image-1"
            className="rounded-full w-40 border-2 border-white absolute top-32 left-5" />
        <img 
            src={Img2} 
            alt="image-2"
            className="rounded-full w-40 border-2 border-white absolute top-20 left-32" />
        <img 
            src={Img3} 
            alt="image-3"
            className="rounded-full w-40 border-2 border-white absolute top-5 left-96" />
        <img 
            src={Img4} 
            alt="image-4"
            className="rounded-full w-40 border-2 border-white absolute top-44 left-100" />
        <img 
            src={Img5} 
            alt="image-5"
            className="rounded-full w-40 border-2 border-white absolute top-10 right-104" />
        <img 
            src={Img6} 
            alt="image-6"
            className="rounded-full w-40 border-2 border-white absolute top-28 right-96" />
        <img 
            src={Img7} 
            alt="image-7"
            className="rounded-full w-40 border-2 border-white absolute top-5 right-48" />
        <img 
            src={Img8} 
            alt="image-8"
            className="rounded-full w-40 border-2 border-white absolute top-32 right-5" />
    </section>
  )
}

export default ImageSet