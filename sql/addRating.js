/* Task D17
    - SQL Query for to insert values of userid, messageid and the rating given */

const addRating =`
INSERT INTO Ratings (userid, messageid, rating) 
VALUES (?,?,?);
`;

module.exports = { addRating };