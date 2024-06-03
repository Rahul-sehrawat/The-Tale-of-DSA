import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { Solutions } from '@/mockProblems/solutions';
import { useParams } from 'next/navigation';



const TabButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const  id  = useParams(); 
  const sol = Solutions.find(sol => sol.id === id.pid);
  // console.log(sol)


  const openNewTab = () => {
    setIsOpen(true);
  };

  const closeNewTab = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        className="bg-dark-layer-1 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={openNewTab}
        
      >
        Solution
      </button>
      {isOpen && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center w-2/4  ">
          <div className="bg-dark-layer-1 w-4/6  p-6 rounded-3xl  shadow-md">
            <div className="flex justify-end ">
              <button
                className="text-gray-600 hover:text-yellow-300 focus:outline-none"
                onClick={closeNewTab}
              >
              <IoMdCloseCircle size={30} />
              </button>
            </div>
            <h2 className="text-2xl text-center font-bold  text-white">Solution </h2>
            {/* <h3>Approch :</h3> */}
              {/* <h1>
                  {sol ? <h1>{sol.title}</h1> : <h1>Topic not found</h1>}
              </h1> */}
            <br />
            <code className=' text-base '><div className='border-2 rounded-3xl  bg-slate-900 border-white-500 px-4'> {sol ? <h1>{sol.code}</h1> : <pre>Topic not found</pre>}</div></code>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default TabButton;
