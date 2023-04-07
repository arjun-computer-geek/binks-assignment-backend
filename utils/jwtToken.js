// create and send token and save in cookies
const sendToken = (user, statusCode, res) => {
  // create jwt token and send
  const token = user.getJwtToken();

  // option for cookies
  const option = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
  };
  res.status(statusCode).cookie("token", token, option).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
