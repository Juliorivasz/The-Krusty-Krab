import { useState } from "react";

export const useSocialMedia = () => {
    const userGoogle = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(userGoogle);
    
    const getDataGoogle = () => {
        return user;
      }

      const setDataGoogle = (newDataGoogle) => {
        setUser(newDataGoogle);
      }
    
  return {getDataGoogle, setDataGoogle}
}
