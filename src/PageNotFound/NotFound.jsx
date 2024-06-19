import React from 'react';

const NotFound = ({ errorMessage }) => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!errorMessage && <p>Sorry, the page you are looking for doesnot exist</p>}
    </div>
  );
};

export default NotFound;