const jwt = require("jsonwebtoken");
const User = require("../modals/userModal");
const ErrorHandler = require("../utils/errorHandler");
const catchAsync = require("./catchAsync");

//Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsync(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login first to access this resource", 400));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);

  next();
});
