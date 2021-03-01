import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import HttpError from '../utils/httpError.js'

const authUser = async (req, res, next) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    next(new HttpError('invalide email or password', 401))
  }
}

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body

  const userExist = await User.findOne({ email })

  if (userExist) {
    next(new HttpError('User already exists', 400))
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    next(new HttpError('invalide user data', 400))
  }
}

const getUserProfile = async (req, res, next) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    next(new HttpError('user Not found', 404))
  }
}

const updateUserProfile = async (req, res, next) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    next(new HttpError('user Not found', 404))
  }
}

// admin routes

const getUsers = async (req, res) => {
  const users = await User.find({})
  res.json(users)
}

const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id)
  if (user) {
    await user.remove()
    res.json({ message: 'user remved' })
  } else {
    next(new HttpError('user Not found', 404))
  }
}

const getUserById = async (req, res, next) => {
  const user = await User.findById(req.params.id).select('-password')
  if (user) {
    res.json(user)
  } else {
    next(new HttpError('user Not found', 404))
  }
}

const updateUser = async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    next(new HttpError('user Not found', 404))
  }
}

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  updateUser,
  getUsers,
  getUserById,
  deleteUser,
}
