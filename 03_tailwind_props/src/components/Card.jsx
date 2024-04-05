import React from "react";

function Card({name}){
    // console.log(props);
    
    return(
        <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">{name}</h1>
            <h6 className="text-base text-white">Frontend Developer</h6>
          </div>
        </div>
      </div>
    )
}

export default Card;