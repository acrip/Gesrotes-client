import React from 'react';

function CoordinadorCard() {
  return (
    <div className="flex w-80 pt-2">
      <img src="./src/assets/logo.jpg" alt={''/*name*/} className="rounded-full w-16 h-16 object-cover mr-4" />
      <div>
        <h3 className="text-xl font-bold">{/*name*/}Jorge Solano</h3>
        <p className="text-gray-600">{/*description*/}Coordinador de asignatura</p>
      </div>
    </div>
  );
};

export { CoordinadorCard };