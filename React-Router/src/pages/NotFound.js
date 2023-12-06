import React, { useEffect } from 'react'
import { useParams , useNavigate, useLocation } from 'react-router-dom'


export default function NotFound() {
  const Location = useLocation();
    const navigate = useNavigate();
    const params=useParams() ; 
    useEffect(
        ()=>{
            params.id==Location.state.data.id ? console.log(params) : navigate("/") ;
        }
    )
  return (
    <div>NotFound {console.log(Location)}</div>
  )
}
