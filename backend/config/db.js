import mongoose from "mongoose"

export const connectDB = async () => {
	await mongoose
		.connect(
			"mongodb+srv://trieuduc2407:smai2Vqpn8FDw7Av@cluster0.1x2zsxs.mongodb.net/FOOD_ORDERING"
		)
		.then(() => {
			console.log("DB connected")
		})
}
