import React from 'react';

const MyCustomContext = React.createContext(null);

export const Provider = (props) => {
    return <MyCustomContext.Provider value={props.store}>
        {props.children}
    </MyCustomContext.Provider>
}

export default MyCustomContext;