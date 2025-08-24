import expess from 'express'
import { loginUser, registerUser } from '../controller/userController.js'

const userRouter = expess.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

export default userRouter
