import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = (isTrue) => {

    const [fournitures, setFournitures] = useState([]);
    const [loaading, setLoaading]=useState(false);

    useEffect(() => {

        const fethFournituers = async () => {
            setLoaading(true)
            const { data } = await axios.get('https://cryptic-escarpment-63139.herokuapp.com/furniture')
            setFournitures(data);
            setLoaading(false)
        }
        fethFournituers();
    }, [isTrue])
    return [fournitures, setFournitures,loaading];
    
};

export default useProducts;