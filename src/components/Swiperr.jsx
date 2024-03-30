
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const Swiperr = () => {
    return (
        <div>
             <div className=' w-[800px] mx-auto'>
             <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[350px] flex justify-around items-center"
      >
        
        <SwiperSlide> <div className=" w-[250px] h-[300px]  shadow-xl hero">
              <img  className=" w-[250px] h-[300px]" src="https://i.ibb.co/Sf7ZBwG/images-1.jpg"></img>
              <div className="  mb-[-225px] flex justify-between items-center">
                  <button className='bg-white w-[60px] h-[75px]'>15$ Dolar</button>
                  <div className='hero-overlay bg-opacity-60 w-[190px] h-[75px] text-white p-[10px]'>
                  <h2 className="text-[15px] font-bold">Azure Sands Resort</h2>
                  <p className="text-[12px] ">Oceanfront luxury, beachfront</p>
                  <p className="text-[12px] ">1,000 $</p>
                  </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className=" w-[250px] h-[300px] shadow-xl hero">
              <img className=" w-[250px] h-[300px]" src="https://i.ibb.co/2Fx65ng/images.jpg"></img>
              <div className="  mb-[-225px] flex justify-between items-center">
                  <button className='bg-white w-[60px] h-[75px]'>18$ Dolar</button>
                  <div className='hero-overlay bg-opacity-60 w-[190px] h-[75px] text-white p-[10px]'>
                  <h2 className="text-[15px] font-bold">Pinecrest Lodge</h2>
                  <p className="text-[12px] ">Rustic cabins, tranquil retreat</p>
                  <p className="text-[12px] ">1,333 $</p>
                  </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className=" w-[250px] h-[300px] shadow-xl hero">
              <img className="w-[250px] h-[300px]" src="https://i.ibb.co/x33tqHq/Lagos-Continental-Hotel.jpg"></img>
              <div className="  mb-[-225px] flex justify-between items-center">
                  <button className='bg-white w-[60px] h-[75px]'>17$ Dolar</button>
                  <div className='hero-overlay bg-opacity-60 w-[190px] h-[75px] text-white p-[10px]'>
                  <h2 className="text-[15px] font-bold">Metropolitan Palace</h2>
                  <p className="text-[12px] ">Urban elegance, lavish suites</p>
                  <p className="text-[12px] ">1,503 $</p>
                  </div>
                </div>
            </div></SwiperSlide>
       
        <SwiperSlide><div className=" w-[250px] h-[300px] shadow-xl hero">
              <img className="w-[250px] h-[300px]" src="https://i.ibb.co/JKpTzQq/images-2.jpg"></img>
                <div className="  mb-[-225px] flex justify-between items-center">
                  <button className='bg-white w-[60px] h-[75px]'>12$ Dolar</button>
                  <div className='hero-overlay bg-opacity-60 w-[190px] h-[75px] text-white p-[10px]'>
                  <h2 className="text-[15px] font-bold">Cliffside Retreat</h2>
                  <p className="text-[12px] ">Scenic views, romantic </p>
                  <p className="text-[12px] ">1,983 $</p>
                  </div>
                </div>
            </div></SwiperSlide>
  
      </Swiper>
        </div>
  </div>
       
    );
};

export default Swiperr;