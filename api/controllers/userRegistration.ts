import { Request, Response } from "express";
import mongoose from "mongoose"
import UserCollection from "../models/UserCollection";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const getUsers = await UserCollection.find();
        res.json(getUsers).status(200)
    }
    catch(err) {
        res.json(err)
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const getUser = await UserCollection.findById({ _id: req.params.id });
        res.json(getUser).status(200)
    }
    catch(err) {
        res.json(err)
    }
}

export const postUser = async (req: Request, res: Response) => {
    try {
        const user = new UserCollection({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            identificationNumber: req.body.identificationNumber,
            bloodGroup: req.body.bloodGroup,
            lastDonation: req.body.lastDonation,
            donationsCount: req.body.donationsCount,
            bloodCoins: req.body.bloodCoins
          });
          await user.save();
          res.status(200).json("User created")
    }
    catch(err) {
        res.status(500).json({
            message: "error"
        })
    }
}
