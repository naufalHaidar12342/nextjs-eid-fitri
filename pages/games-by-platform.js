import axios from "axios";
import {useState, useEffect} from 'react'

export default function GamesPlatform() {
    const[platformOfGames, setPlatformOfGames]= useState([])

    useEffect(() => {
        axios.get('/api/games').then(response =>{
            const gameResult=response.data
            setPlatformOfGames(gameResult)
            //debugging
            console.log(gameResult);
        })
    }, [])

    const getIcon = (platform) => {
        switch(platform){
            case "PC (Windows)": 
                return <AiFillWindows/>;
            case "Web Browser":
                return <FaFirefoxBrowser/>;
            default:
                return "Test"
        }
    }

    return(
        <div className="bg-slate-500">
            <div className="container"></div>
        </div>
    )
}