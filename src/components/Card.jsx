


const Card = () => {
  return (
    <div className="flex">
     <div className="w-[130px] h-[70px] shadow-2xl flex justify-center items-center rounded-2xl">
        <img className="w-[70px]" src="https://i.ibb.co/FBCDrpN/35bdfcab8e210c95f2ce15238e5f29ba-removebg-preview.png"></img> 
        <p>Villa</p>
    </div>
    <div className="w-[150px] h-[70px] shadow-2xl flex justify-center items-center bg-slate-200 rounded-2xl">
        <img className="w-[70px]" src="https://i.ibb.co/n0k5SMt/5057d226b08313687fbb0bebe007f87a-removebg-preview.png"></img>
        <img className="w-[70px]" src="https://i.ibb.co/chJqYwy/aa6c8c1ac0cfd0dfff052ab8c54018b3-removebg-preview.png"></img> 
    </div>

    </div>
  );
};

export default Card;
