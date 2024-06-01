import Topbar from '@/components/Topbar/Topbar';
import React from 'react';
import Card from '@/components/Card/Card';

type DiscussProps = {};

const Discuss:React.FC<DiscussProps> = () => {
    
    return <body className=' overflow-auto bg-gray-700'>
        <Topbar/>
        <h1 className='  text-orange-500  text-center text-3xl p-4 m-6 flex w-60  rounded-lg  bg-amber-100 border-red-400 border-4 '><b>📑IMP Topics</b>  
        </h1>
        
        <div className=" bg-gray-700 h-screen w-screen p-2 ">
            <div className=' grid grid-flow-row grid-cols-4 grid-rows-3 gap-y-96  gap-x-40 shadow-md rounded-3xl h-2/3 w-4/5 mx-10 p-4 '>
            <Card thumbnail = {'/graph.jpeg' } title ={"Graph"}  />
            <Card thumbnail=  '/tree1.png' title= {'Tree'}/>
            <Card thumbnail='/array.webp' title= {'Array'}/>
            <Card thumbnail='/window.png' title= {'Sliding Window'}/>
            <Card thumbnail= {"/linked.png"} title= {'Linked List'}/>
            <Card thumbnail='/stack.webp' title ="Stack"/>
            <Card thumbnail='/sorting.png' title='Sorting-Algo' />
            <Card thumbnail='/maze.svg' title='BackTracking' />
            <Card thumbnail='/bit.jpg' title='Bit Manipulation' />
            <Card thumbnail='/recursion.png' title='Recursion' />
            </div>
        </div>
    </body>
}
export default Discuss;