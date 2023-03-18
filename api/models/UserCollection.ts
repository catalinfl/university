import mongoose from "mongoose"

interface UserSchema {
    firstName: string,
    lastName: string,
    birthDate: string,
    identificationNumber: number,
    bloodGroup: string,
    lastDonation?: Date,
    donationsCount: number,
    bloodCoins: number
}

const UserCollection = new mongoose.Schema<UserSchema>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: String, required: true },
    identificationNumber: { type: Number, required: true },
    bloodGroup: { type: String, required: true },
    lastDonation: { type: Date, default: null, required: false },
    donationsCount: { type: Number, default: 0 },
    bloodCoins: { type: Number, default: 0 }
})

export default mongoose.model("UserCollection", UserCollection)