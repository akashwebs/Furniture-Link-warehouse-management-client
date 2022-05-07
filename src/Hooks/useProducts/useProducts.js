import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = (isTrue) => {

    const [fournitures, setFournitures] = useState([]);
    useEffect(() => {

        const fethFournituers = async () => {

            const { data } = await axios.get('http://localhost:5000/furniture')
            setFournitures(data);
        }
        fethFournituers();
    }, [isTrue])
    return [fournitures, setFournitures];
    
};

export default useProducts;