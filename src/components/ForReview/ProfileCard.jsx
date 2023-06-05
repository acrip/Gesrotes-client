import React from 'react'
import hombre from '../../assets/profiles/hombre.png'

function ProfileCard() {
  return (
    <div className="flex flex-col items-center ">
      <img className="rounded-full border border-gray-soft w-30 h-30 mb-2" src={hombre}/>
      <div className="text-center">Juan David Marin</div>
    </div>
  );
};

export {ProfileCard}