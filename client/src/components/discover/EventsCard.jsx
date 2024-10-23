import React from 'react'
import CardImage from '../ui/CardImage'
import CardInfo from "../ui/CardInfo";

const EventsCard = () => {
  return (
      <div className="w-full h-[500px] rounded mb-3">
          <div className=''>
              <CardImage />
          </div>
          <div className="h-1/2">
              <CardInfo
                  name="Brew Scouts Yearly Brew Out Competition"
                  date="Fri, Nov 1 - 6:00 PM"
                  location="Cape Town"
              />
          </div>
      </div>
  );
}

export default EventsCard