import { FaChevronDown } from "react-icons/fa";

function MainHeader() {
  return (
    <div className='new-header'>
					<img src="/12.jpeg" width='200px'></img>
					<div className="logo-holder">
						<div className="bg"></div>
						<div className="bar"></div>
						<div className="bar fill1"></div>
						<div className="bar fill2"></div>
						<div className="bar fill3"></div>
						<div className="bar fill4"></div>
						<div className="bar fill1"></div>
						<div className="bar fill5"></div>
						<div className="bar fill6"></div>
						<div className="bar"></div>
					</div>
					<div className="project-heading">
                        <div className=" flex p-1 justify-between" >
                        <div className=" flex gap-1" >
                            <img src="/favicon.png" width='20px' alt="profilepic" />
                            <p>DSA Arena</p>
                        </div>     
                        <FaChevronDown />
                        </div>
                        <h1
                        className='text-2xl text-center text-white dark:text-gray-400 font-medium
                        uppercase '>
                        TOP D.S.A PROBLEMS 
                        </h1>
                    </div>
					<div className="firstchild">
					<div style={{display:"flex", padding:'6px', justifyContent:"space-between"}}>
                        <div style={{display:'flex', gap:"4px"}}>
                            <img src="/javascript.png" width='20px' alt="" />
                            <p>Two-Sum.js</p>
                        </div>                
                        <FaChevronDown />
                    </div>
                    <div style={{ display: "flex", gap: "2px" }}>
                        <p style={{ color: "#FF79C6" }}>{`function`}</p>
                        <p style={{ color: "#8BE9FD" }}>{` twoSum`}</p>
                        <p>{`(`}</p>
                        <p style={{ color: "#FF79C6" }}>{`nums`}</p>
                        <p>{`,`}</p>
                        <p style={{ color: "#FF79C6" }}>{`target`}</p>
                        <p>{`) {`}</p>
                    </div>
                    <div style={{ display: "flex", gap: "2px", paddingLeft: "20px" }}>
                        <p style={{ color: "#FF79C6" }}>{`map`}</p>
                        <p>{` = {}`}</p>
                        <p>{`;`}</p>
                    </div>
                    <div style={{ display: "flex", gap: "2px", paddingLeft: "20px" }}>
                        <p style={{ color: "#FF79C6" }}>{`for`}</p>
                        <p>{`(`}</p>
                        <p style={{ color: "#FF79C6" }}>{`let`}</p>
                        <p>{` i = 0; i < nums.length; i++) {`}</p>
                    </div>
                    <div style={{ display: "flex", gap: "2px", paddingLeft: "40px" }}>
                        <p style={{ color: "#FF79C6" }}>{`let`}</p>
                        <p style={{ color: "#50FA7B" }}>{` diff`}</p>
                        <p>{` = target - nums[i];`}</p>
                    </div>
                    <div style={{ display: "flex", gap: "2px", paddingLeft: "40px" }}>
                        <p style={{ color: "#FF79C6" }}>{`if`}</p>
                        <p>{` (`}</p>
                        <p style={{ color: "#50FA7B" }}>{`diff in map`}</p>
                        <p>{`) {`}</p>
                    </div>
                </div>
			</div>
  )
}
export default MainHeader