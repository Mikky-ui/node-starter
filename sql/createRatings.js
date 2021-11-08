/* D17 Task
    - Create a table containing Ratings that users have given
    - Define id, the user id/message id as foreign keys, composite key of user id + message id
    - On delete of message or user cascade */

const createRatings = `
CREATE TABLE IF NOT EXISTS Ratings (
    userid INTEGER NOT NULL,
    messageid INTEGER NOT NULL,
    rating INTEGER NOT NULL DEFAULT 0 CHECK(rating <= 5),
    FOREIGN KEY (userid) REFERENCES Users(userid) ON DELETE CASCADE,
    FOREIGN KEY (messageid) REFERENCES Messages(id) ON DELETE CASCADE,
    PRIMARY KEY (userid, messageid)
);
`

module.exports = { createRatings };

