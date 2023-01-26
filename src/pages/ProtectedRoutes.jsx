import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const ProtectedRoutes = () => {
  const name = useSelector (state => state.username) 


    if( name !== "" ){
        
        return <Outlet />
    }else{
        return <Navigate to="/"/> 
    }

}