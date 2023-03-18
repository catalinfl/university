import React, { useEffect, useState } from 'react'
import "./Card.scss"
import Coin from "../assets/Coin.svg"
import Blood from "../assets/Blood.svg"
import axios from 'axios'
import { InformationType } from './AdminPanel'

const Card = () => {
    
    const [information, setInformation] = useState<InformationType>();

    async function getInformation() {
        try {
        const response = await axios.get('http://localhost:3000/user/6415d7121444d0c3e876172c')
        setInformation(response.data)
        }
        catch(err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getInformation()
    }, [])


    

    return (
    <div className="cardContainer">
        <div className="card">
            <div className="cardHeader">
                <div className="cardTitle">
                    <p> Hello, {information?.firstName}! </p>
                </div>
                <div className="cardInfo">
                    <p> Last donation: { information?.lastDonation.slice(0, 10) }
                    </p>
                    <p> Number of donations: { information?.donationsCount }
                    </p>
                    <p> BloodCoins: <b>  { 
                    information?.bloodCoins }
                    </b>
                    </p>
                    <img src={Coin} />
                </div>
            </div>
            <div className="cardInformation">
                <img src={Blood}/>
                <img src={Blood} style={{margin: '-10rem 19rem'}}/>

                <div className="cardOptions">
                    <button> Pay with bloodcoin </button>
                    <button> Schedule a blood donation </button>
                    <button> More information </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card