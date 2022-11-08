import { NavLink } from 'react-router-dom';

function NotFound({ data, status }) {
  return (
    
      <div>
        <h1>
          Sorry {status} {data} 
        </h1>
        <p>Something went wrong.</p>
        <NavLink to="/">Go back to the main page</NavLink>
      </div>
  
  );
}


export default NotFound;