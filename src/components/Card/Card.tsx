import React from 'react';

type CardProps = {
    title:string
    thumbnail: string
};

const Card:React.FC<CardProps> = (props) => {
    
    return (
        <div className=' h-fit '>
            <div className='bg-red-400 flex flex-col  relative h-60 w-60 rounded-2xl overflow-hidden  border-red-400 border-4 shadow-md  '>
                <img src={props.thumbnail} alt="pic" className='absolute inset-0 h-3/4 w-full object-cover' />
                <div className=' h-max absolute  bottom-1 bg-yellow-200 border-yellow-600 text-center  w-full'>
                    <h2 className=' text-black text-2xl m-1'><b>{props.title}</b></h2>  
                    <button className=' w-40 h-10 text-white rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 ...'><b>Study</b> </button>    
                </div>
            </div>    
        </div>
    );
};

export default Card;