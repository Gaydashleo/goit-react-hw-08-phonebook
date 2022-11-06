import { NavLink } from 'react-router-dom';

export default function NotFound({data, status }) {
  return (
    <>
      <h2> Sorry {data} {status} </h2>
      <p>We have mistake</p>
      <NavLink to="/">Go back</NavLink>
    </>
  )
}