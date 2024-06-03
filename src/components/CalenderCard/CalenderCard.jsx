import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../../utils/calender/calender";
import cn from '../../utils/calender/cn'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { problems } from "@/mockProblems/problems";
import { FaAnglesRight } from "react-icons/fa6";
import Image from 'next/image';


export default function CalendarCard() {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	const [showCalendarCard, setShowCalendarCard] = useState(false);
	  
	const handleToggleChatbot = () => {
		  setShowCalendarCard(!showCalendarCard);
		};


	return (
	<div className="fixed bottom-5 right-5 flex flex-col items-center ">
    <div onClick={handleToggleChatbot} className="cursor-pointer ml-2 mb-2 mt-10 ">
      <Image className="hover:scale-95" src="/calendericon.png" alt="Chatbot" width={80} height={80} />
    </div>
    {showCalendarCard && (
		<div className=" gap-10 sm:divide-x justify-center mx-auto w-2/2 h-max  p-3 items-baseline sm:flex-row flex-row bg-yellow-100  rounded-3xl  ">
			<div className="w-96   ">
				<div className="flex justify-between items-center ">
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className=" cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-gray-700 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-14 grid place-content-center text-sm border-t"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-gray-500",
											today
												? "bg-green-600 text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-black text-white"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
			<div className="  p-2 text-center text-xl sm:px-5">
				<p className="text-red-600  p-2">Your Question for the Day :</p>
				<div className="flex justify-center">
				<FaAnglesRight className="m-1"/>
                <h2> {problems[Math.ceil(Math.random()*12)].title}</h2>
				</div>
			</div>
			
		</div>
    )}
  </div>


























	);
}