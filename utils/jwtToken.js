// create and send token and save in cookies
const sendToken = (user, statusCode, res) => {
  // create jwt token and send
  const token = user.getJwtToken();

  // option for cookies
  const option = {
    httpOnly: true,
    secure: true,
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
  };
  res.cookie("token", token, option).status(statusCode).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
