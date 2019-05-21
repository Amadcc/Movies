import React, { createContext, useState } from 'react';

export const MovieContext = createContext({
    favorites: [],
    addToFavorites: () => {},
});

export const MovieProvider = ({children}) => {
    const [favorites, addToFavorites] = useState([]);
    return (
        <MovieContext.Provider value={[favorites, addToFavorites]}>
            {children}
        </MovieContext.Provider>
    );
    
}
