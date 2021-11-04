// Task C06
// Create a SQL query that selects all users and arranges them
// in order of administration status and then alphabetically
// in descending order by their friendly name.

const orderUsers = `
SELECT * 
FROM Users
ORDER BY admin, friendlyname DESC;
`;
//is admin sorted so 1 or 0 is first
module.exports = { orderUsers };