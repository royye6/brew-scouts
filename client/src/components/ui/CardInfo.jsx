import React from 'react'

const CardInfo = ({ name, date, location= "Hopps 'n All Square", promotion= "free"}) => {
  return (
      <div className="w-full p-3">
          <ul className="space-y-4">
              <li className="text-2xl text-slate-800 font-bold">
                  <h4>{name}</h4>
              </li>
              <li className="font-semibold">
                  <p>{date}</p>
              </li>
              <li className="">
                  <p>{location}</p>
              </li>
              <li className="font-bold">
                  <p>{promotion}</p>
              </li>
              <li className="font-serif">
                  <p>by Brew Scouts</p>
              </li>
          </ul>
      </div>
  );
}

export default CardInfo