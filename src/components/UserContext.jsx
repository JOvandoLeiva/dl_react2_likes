import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [favoriteImages, setFavoriteImages] = useState([]);

    const addToFavorites = (image) => {
        setFavoriteImages((prevImages) => [...prevImages, image]);
    };

    const removeFromFavorites = (image) => {
        const updatedFavorites = favoriteImages.filter(
            (favImage) => favImage.imageUrl !== image.imageUrl
        );
        setFavoriteImages(updatedFavorites);
    };

    return (
        <UserContext.Provider value={{ favoriteImages, addToFavorites, removeFromFavorites }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
