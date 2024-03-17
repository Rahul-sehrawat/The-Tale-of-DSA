import Topbar from '@/components/Topbar/Topbar';
import CircularProgressBar from '@/components/CircularProgressBar/CircularProgressBar';
import { problems } from '@/mockProblems/problems';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { app } from '@/firebase/firebase';


const auth = getAuth();
const db = getFirestore(app);


const Profile = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userCollectionRef = collection(db, 'users');
          const q = query(userCollectionRef, where('uid', '==', user.uid));
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
            setUserData(doc.data());
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const registerdate  = new Date(userData?.createdAt);
  // console.log(registerdate);
 
  return ( 
    <div >
    
    <div className= 'bg-black  min-h-screen overflow-hidden'  >
    <Topbar/> 
    <div className="container  mx-auto py-8">
      <main>
        {userData ? (
           <>
          <div className='flex space-x-3 px-3'>
          <div className=" h-2/3 bg-dark-fill-2 p-1 w-1/4 shadow-md rounded-lg ">
            <div className="p-6">
              <h1 className='text-3xl font-bold text-center text-white'>User Profile</h1>
              <br></br>
              <h4 className="text-xl text-white m-3  font-semibold"> User Name : {userData.displayName}</h4>  
              
              <p className="text-white m-3 text-l">Solved Problems : <code> {userData.solvedProblems.length} </code></p>
              <p className="text-white m-3 text-l">Liked Problems : <code>{userData.likedProblems.length} </code></p>
              <p className="text-white m-3 text-l"> Disliked Problems : <code>{userData.dislikedProblems.length}</code></p>
              <p className="text-white m-3 text-l">Favorite Problem : <code>{userData.starredProblems.length}</code></p>
              <p className="text-white text-l m-3">Account CreatedAt : <b>{registerdate.toString().substring(3,16)}</b></p>
              <hr></hr>
              <h2 className="text-2xl text-dark-green-s m-3  font-semibold">Community Stats</h2>
              
              <h4 className="text-white m-3 text-l">👁️ Views: 0</h4>
              <h4 className="text-white m-3 text-l">⭐ Reputation: 0</h4>
              <h4 className="text-white m-3 text-l">📑 Solutions: 0</h4>              
              <hr />
              <h2 className="text-2xl text-dark-green-s m-3  font-semibold">Skills</h2>
              <h4 className="text-white mx-2 text-l">Advanced</h4>
              <ul className = " m-1 flex flex-wrap space-x-1" >
                <li className ="py-1"><code>Dynamic Programming</code></li>
                <li className = "py-1"><code>Backtracking</code></li>
                <li className = "py-1"><code>Divide and Conquer</code></li>
                <li className = "py-1"><code>Graph Algo</code></li>
              </ul>
              <br />
              <h4 className="text-white text-l mx-2">Intermediate</h4>
              <ul className = " m-2 flex flex-wrap space-x-1" >
                <li className ="py-1"><code>Binary Search</code></li>
                <li className = "py-1"><code>Linked List</code></li>
                <li className = "py-1"><code>Divide and Conquer</code></li>
              </ul>
              <br />
              <h4 className="text-white text-l mx-2">Easy</h4>
              <ul className = " m-2 flex flex-wrap space-x-1" >
                <li className ="py-1"><code>Array</code></li>
                <li className = "py-1"><code>Stack</code></li>
                <li className = "py-1"><code>Hash Map</code></li>
                <li className = "py-1"><code>Bit Manupilation</code></li>
                <li className = "py-1"><code>Maths</code></li>
                <li className = "py-1"><code>Heap Queue</code></li>
              </ul>        
              
            </div>
          </div>
          <div>
            <div className='flex flex-col items-start'>
              <div className='flex space-x-6 w-full  ' >
                <div className='bg-dark-fill-2 w-1/2 rounded-2xl py-1 px-20' >
                  <p className=' text-dark-yellow py-3 text-xl'>Solved Problems :</p>
                <CircularProgressBar completed={userData.solvedProblems.length} total={problems.length} radius={60} strokeWidth={8} />
                </div>
                    <img src="/badge.png" alt="badge  " /> 
              </div >
              <div className='my-2  '>
                <img src="/calender.png" alt="calneder"  />
              </div>
            </div>
            <div className=" w-3/3 bg-dark-fill-2 p-2 py-4  px-5 h-2/3  shadow-md rounded-lg ">
              <span className='h-10 w-40 border-4 border-gray-600 rounded-lg  text-lg text-white px-3 p-1 mx-1 bg-dark-fill-2 cursor-pointer '>📑 Recant AC</span>
                <span className='  h-10 w-40 border-4 border-gray-600 rounded-lg text-lg text-white px-3 p-1 bg-dark-fill-1 cursor-pointer '>📖 Submission</span>
                <br />
                <br />
                <h4 className='bg-dark-fill-2 h-12 w-full p-2 px-3 text-xl text-white '>{userData.solvedProblems.at(0)}</h4>
                <h4 className='bg-dark-fill-1 h-12 w-full p-2 px-3 text-xl text-white '>{userData.solvedProblems.at(1)}</h4>
                <h4 className='bg-dark-fill-2 h-12 w-full p-2 px-3 text-xl text-white '>{userData.solvedProblems.at(2)}</h4>
                <h4 className='bg-dark-fill-1 h-12 w-full p-2 px-3 text-xl text-white '>{userData.solvedProblems.at(3)}</h4>
                <h4 className='bg-dark-fill-2 h-12 w-full p-2 px-3 text-xl text-white '>{userData.solvedProblems.at(4)}</h4>
                <h4 className='bg-dark-fill-1 h-12 w-full p-2 px-3 text-xl text-white '>{userData.solvedProblems.at(5)}</h4>
                <h4 className='bg-dark-fill-2 h-12 w-full p-2 px-3 text-xl text-white '>{userData.solvedProblems.at(6)}</h4>
                <h4 className='bg-dark-fill-1 h-12 w-full p-2 px-3 text-xl text-white '>{userData.solvedProblems.at(7)}</h4>
                <h4 className='bg-dark-fill-2 h-12 w-full p-2 px-3 text-xl text-white '>{userData.solvedProblems.at(8)}</h4>
                   
            </div>
          </div>
          </div>
         </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
    </div>
    </div>
  );
};

export default Profile;





