import React, {useContext, useState} from 'react';


export const stateContext = React.createContext();

export function useStateContext(){
    return useContext(stateContext)
}

export function EMProvider({children}){
    const openModalAction = () => {
        setNewState
        ({
            ...setNewState, 
            modalOpen: true 
        })
    }
    const closeModalAction = () => {
        setNewState
        ({
            ...setNewState, 
            modalOpen: false 
        })
    }
    const [newstate, setNewState] = useState({
        modalOpen: false, 
        openModalAction,
        closeModalAction
    })

    return(
        <stateContext.Provider value={newstate}>
            {children}
        </stateContext.Provider>
    )
}