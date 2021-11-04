// Task C08
// Create a suitable single SQL instruction that returns in descending order
// of their creation date all non-archived messages from all users with (and/or containing)
// the name “Franklin”; your results should include the name of the message’s owner,
// the message and the message’s date in the format of “YYYY-MM-DD HH:MM:SS.


const getMessagesFromFranklins = `
SELECT Users.friendlyname AS friendlyname, Messages.message AS message, datetime(Messages.created,'unixepoch') AS created
FROM Messages 
INNER JOIN Users
ON Messages.userid = Users.userid
WHERE Messages.archive = 0 AND Users.friendlyname LIKE '%Franklin%'
ORDER BY created DESC;
`;

module.exports = { getMessagesFromFranklins };
