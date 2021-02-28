import axios from 'axios';
import { FC, useContext, useEffect } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import UserContext from '../../../context/user'


const ProtectedRoute: FC<RouteProps> = ({children, ...params}) => {
    
    
    const { user, setUser } = useContext(UserContext)!;
    
    
    useEffect(() => {
    
        axios.get("/api/ping").then(data => {
          setUser({
            logged: true,
            name: data.data.name,
            id: data.data.id
          })
    
    
    
        }).catch(err => setUser({logged: false}))
    
      }, [setUser])
    
    return (

        


        <Route {...params} render={({ location }) => user.logged ? ( children ) : (
            <Redirect to={{
                pathname: "/signin",
            }}/>
        )}/>
    );
}

export default ProtectedRoute;