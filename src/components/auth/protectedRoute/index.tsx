import { FC, useContext } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import UserContext from '../../../context/user'


const ProtectedRoute: FC<RouteProps> = ({children, ...params}) => {
    
    
    const { user } = useContext(UserContext)!;
    
    
    return (
        <Route {...params} render={({ location }) => user.logged ? ( children ) : (
            <Redirect to={{
                pathname: "/login",
            }}/>
        )}/>
    );
}

export default ProtectedRoute;