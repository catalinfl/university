import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./AdminPanel.scss"

export interface InformationType {
    firstName: string
    lastName: string
    birthDate: string
    identificationNumber: string,
    bloodGroup: string,
    lastDonation: string,
    donationsCount: number,
    bloodCoins: number,
    _id: number
}



const AdminPanel = () => {
    const [information, setInformation] = useState<InformationType[]>();

    async function getInformation() {
        try {
        const response = await axios.get('http://localhost:3000/user')
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
    <div className="adminPanel">
        <div className="container"> 
        <div className="adminPanel__firstName item">
        <p className="title"> First Name </p>
        { information?.map((inf: InformationType) => {
            return (
                <p> {inf.firstName} </p>
            )
        })}
        </div>
        <div className="adminPanel__lastName item">
        <p className="title"> Last Name </p>
        { information?.map((inf: InformationType) => {
            return (
                <p> {inf.lastName} </p>
            )
        })}
        </div>
        <div className="adminPanel__birthDate item">
        <p className="title"> Birth Date </p>
        { information?.map((inf: InformationType) => {
            return (
                <p> {inf.birthDate} </p>
            )
        })}
        </div>
        <div className="adminPanel__id item">
        <p className="title"> ID </p>
        { information?.map((inf: InformationType) => {
            return (
                <p> {inf.identificationNumber} </p>
            )
        })}
        </div>
        <div className="adminPanel__bloodGroup item">
        <p className="title"> Blood Group </p>
        { information?.map((inf: InformationType) => {
            return (
                <p> {inf.bloodGroup} </p>
            )
        })}
        </div>
        <div className="adminPanel__lastDonation item">
        <p className="title"> Last Donation </p>
        { information?.map((inf: InformationType) => {
            return (
                inf.lastDonation ?
                <p> {inf.lastDonation.slice(0, 10)} </p>
                : 
                <p> No donation yet </p>
                )
        })}
        </div>
        <div className="adminPanel__donationsCount item">
        <p className="title"> Donations Count </p>
        { information?.map((inf: InformationType) => {
            return (
                <p> {inf.donationsCount} </p>
            )
        })}
        </div>
        <div className="adminPanel__bloodCoins item">
        <p className="title"> Blood Coins </p>
        { information?.map((inf: InformationType) => {
            return (
                <p> {inf.bloodCoins} </p>
            )
        })}
        </div>
        </div>
    </div>
    )
}

export default AdminPanel