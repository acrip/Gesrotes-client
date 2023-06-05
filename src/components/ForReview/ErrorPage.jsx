import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">Oops!</h1>
      <p className="text-xl text-gray-600">Sorry, an unexpected error has occurred.</p>
      <p> <i>{error.statusText || error.message}</i> </p>
      <Link to="/" className="mt-4 px-6 py-3 bg-blue text-white rounded-lg shadow-lg">
        Go back to home
      </Link>
    </div>
  );
};

export { ErrorPage };