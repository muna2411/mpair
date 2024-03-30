import  { useState } from 'react';
import { FaSearchLocation, FaSearch, FaUser } from 'react-icons/fa';


const Sliderr = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSearch = () => {
      setIsActive(!isActive);
    };
  
    return (


    <div className="w-[850px] h-[51px] rounded-full" style={{ border: '1px solid black' }}>
    <div className="grid grid-cols-2 gap-2 w-[850px] h-[50px]">
       
        <div >
            <div onClick={toggleSearch} className="w-[380px] ml-[10px]" >
                {isActive ? (
                    <div>
                        <label className="input rounded-full  flex items-center gap-2  w-[400px] bg-blue-800 text-white">
                            <FaSearch className="ml-2" />
                            <input type="text" placeholder="Search" className="grow bg-blue-800 text-white" />
                        </label>
                    </div>
                ) : (
                    <label className="input rounded-full flex items-center gap-2 w-[100%]">
                        <div className="bg-blue-800 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                            <FaSearchLocation className="text-white" />
                        </div>
                        <input type="text" placeholder="What is your location?" className="grow bg-blue-800 text-white" />
                    </label>
                )}
            </div>
        </div>
        <div className='grid grid-cols-3'>
        <div >
            <input type="date" className="grow  text-black" />
            <p>Check-In</p>
        </div>
        <div >
           <input type="date" className="grow  text-black" />
           <p>Check-Out</p>
        </div>
        <div className='flex justify-center items-center'>
        <FaUser />
           <p>User Name</p>
        </div>
        </div>
    </div>
</div>
    );
};

export default Sliderr;