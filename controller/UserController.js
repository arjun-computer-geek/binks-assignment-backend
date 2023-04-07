const catchAsync = require("../middleware/catchAsync");
const User = require("../modals/userModal");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/errorHandler");

// Register a user => /api/v1/register
exports.registerUser = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  sendToken(user, 200, res);
});

//Login User => /api/v1/login
exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //check if email and pasword is entered by user
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & Password", 400));
  }

  //Finding user in database
  const user = await User.findOne({ email }).select("password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 400));
  }

  //Check if password is correct or not
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 400));
  }

  sendToken(user, 200, res);
});

//Get currently logged in user details => /api/v1/me
exports.getUserProfile = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    sucess: true,
    user,
  });
});

//Logout user => /api/v1/logout
exports.logout = catchAsync(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    sucess: true,
    message: "Loged out",
  });
});
//Update / change password => /api/v1/password/update
exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  //Check previous user password
  const isMatched = await user.comparePassword(req.body.oldPassword);

  if (!isMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  user.password = req.body.password;
  await user.save();

  sendToken(user, 200, res);
});

//Update user profile => /api/v1/me/update
exports.updateProfile = catchAsync(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});
