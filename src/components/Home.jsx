import Sliderr from "./Sliderr";
import Swiperr from "./Swiperr";
import { TypeAnimation } from 'react-type-animation';
import './Yes.css';
import Card from "./Card";


const Home = () => {
    return (
        
    <div className="h-[770px]" style={{ backgroundImage: "url('https://i.ibb.co/vZckgtf/Untitled-design-2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex "> 
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[40px] w-[40px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <img className="w-[200px] ml-[600px]" src="https://i.ibb.co/GJD3tRX/Coming-So-On.png"></img>
        </div>
    <div className="flex justify-center items-center">
        <div>
        <Card></Card>
            <div className="mb-[100px] ">
                
             <Sliderr></Sliderr>
            </div>
            <div className='my-[50px]'>
             <TypeAnimation
             sequence={[
             'Villa Of Summer Firsatlari',
              1000,     
             ]}
             wrapper="span"
             speed={50}
             style={{ fontSize: '22px', fontWeight: 'bold' , display: 'inline-block' }}
             repeat={Infinity}
            />
            </div>
            <Swiperr></Swiperr>
        </div>
        <div>
            <div className="earth-container">
               <img src="https://i.ibb.co/7tfZzwq/earth2-removebg-preview.png" alt="Rotating Earth" className="earth"></img>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Home;