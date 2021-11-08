const specMessagesRatings = `
SELECT m.message AS message, u.friendlyname AS friendlyname, r.rating AS rating
    FROM Ratings AS r
    INNER JOIN Messages AS m
    ON r.messageid = m.id
    INNER JOIN Users AS u
    ON r.userid = u.userid
    WHERE r.messageid = (?);
`;

module.exports = { specMessagesRatings };