/*Updated Timestamp: Front-End (REQUEST) -> API Service (UPDATE) -> RESPONSE

Design, update and test a new API service so that a specified user’s last login details are updated with the system’s current timestamp via the AdaBoard’s front-end. */

const updateTimeUser = `
  UPDATE Users
  SET lastlogin = strftime('%s','now')
  WHERE userid = (?);
`;

module.exports = { updateTimeUser };