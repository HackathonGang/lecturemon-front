import React from 'react'
import { IUser } from '../../interfaces'

type ContextProps = {
    user: IUser,
    setUser: (user: IUser) => void
}

const UserContext = React.createContext<ContextProps>({user: { logged: false }, setUser: () => {}});

export const UserProvider = UserContext.Provider;

export default UserContext