import React from 'react'
import { IXp } from '../../interfaces'

type XpContextProps = {
    xp: IXp,
    setXp: (xp: IXp) => void
}

const XpContext = React.createContext<XpContextProps>({xp: {current: 0, max: 100, quantifier: "xp", level: 0}, setXp: () => {}});

export const XpProvider = XpContext.Provider;

export default XpContext