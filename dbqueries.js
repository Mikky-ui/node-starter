const sqlite3 = require('sqlite3').verbose();
let { orderUsers } = require('./sql/orderUsers');
let { getMessagesFromFranklins } = require('./sql/getMessagesFromFranklins');
let { updateSJobs } = require('./sql/updateSJobs');
let { deleteOldMessages } = require('./sql/deleteOldMessages');
let { archiveSteve } = require('./sql/archiveSteveJobs');
let { postMessage } = require('./sql/postMessage');
let { updateTimeAny } = require('./sql/updateTime');
let { deleteSpecificMessageUser } = require('./sql/deleteSpecificMessageUser');
let { addRating } = require('./sql/addRating');
let { specMessagesRatings } = require('./sql/specMessagesRatings');

function getSpecMessagesRatings(db, req, res) {
    console.log('req',req.query);
    const messageRequest = req.query;
    console.log('value', messageRequest.id);
    db.all(specMessagesRatings, [messageRequest.id],
    (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no messages found"})
       } else {
        res.send(rows);
        }
    })
}

function getAllMessagesRatings(db, req, res) {
    db.all(`SELECT m.message AS message, u.friendlyname AS friendlyname, r.rating AS rating
    FROM Ratings AS r
    INNER JOIN Messages AS m
    ON r.messageid = m.id
    INNER JOIN Users AS u
    ON r.userid = u.userid;`, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no messages found" })
        }
        res.send(rows);
    })
}

// Task D13
function getAllMessages(db, req, res) {
    db.all(`SELECT Users.friendlyname, Messages.message, datetime(Messages.created,'unixepoch') AS date
FROM Messages 
INNER JOIN Users
ON Messages.userid = Users.userid;`, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no messages found" })
        }
        res.send(rows);
    })
}

function organiseUsers(db, req, res) {
    db.all(orderUsers, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no users found" })
        }
        res.send(rows);
    })
}
// Task D12
function createUser(db, req, res) {
    const { username, email, password } = req.body;
    db.run(`INSERT INTO Users (friendlyname, emailaddress, password) VALUES (?,?,?);`, [username, email, password],
      function(err) {
        if (err) {
          return console.log(err.message)
    }
        console.log(`${username} added to user field at position ${this.lastID}`)
        userID = this.lastID
        console.log("created new user " + userID);
        res.send({"ok":"ok"});
    })
}

function getFromFranklins(db, req, res) {
    db.all(getMessagesFromFranklins, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no messages found" })
        }
        res.send(rows);
    })
}

function updateSteveJobs(db, req, res) {
    db.run(updateSJobs, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log(`Updated the profile of Steve Jobs`);
        res.send({ "ok": "Login time for Steve Jobs has been updated" }).status(200)
    });
}

function deleteOldMess(db, req, res) {
    db.serialize(() => {
      db.run(deleteOldMessages, function(err) {
        if (err) {
          return console.log(err.message);
        }
        res.send({ "ok": "Old Messages were deleted" }).status(200)
      });
    });
}

function archiveJobs(db, req, res) {
    console.log("here");
    db.run(archiveSteve, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log(`Archived messages from Steve Jobs`);
        res.send({ "ok": "Steve Jobs's has been updated" }).status(200);
    });
}

function postAMessage(db, req, res) {
    const { userid, message } = req.body;
    db.run(postMessage, [message, userid],
      function(err) {
        if (err) {
          return console.log(err.message)
    }
        const messg = `${userid} posted this ${message}`;
        res.send({ "ok":messg }).status(200);
    });
}

function updateTime(db, req, res) {
    const{ userid } = req.body;
    db.run(updateTimeAny, [userid],
        function(err) {
            if (err) {
                return console.log(err.message)
            }
            const messg = `${userid} updated time of login`;
            res.send({"ok":messg}).status(200);
        });
}

function deleteSpecificMessage(db, req, res) {
    const{ userid, messageid } = req.body;
    db.run(deleteSpecificMessageUser, [userid, messageid],
        function(err) {
            if (err) {
                return console.log(err.message)
            }
            const messg = `${userid} deleted ${messageid}`;
            res.send({"ok":messg}).status(200);
        });
}

function addMessageRating(db, req, res) {
    const{ userid , messageid, rating } = req.body;
    db.run(addRating, [userid, messageid, rating],
        function(err) {
            if (err) {
                return console.log(err.message)
            }
            const messg = `${userid} gave rating ${rating} to ${messageid}`;
            res.send({"ok":messg}).status(200);
        });
}

/*function updateTime(db, req, res) {
    const { userid } = req.body;
    db.run(updateTimeUser, [userid],
      function(err) {
        if (err) {
          return console.log(err.message)
    }
        const messg = `${userid} updated`;
        res.send({ "ok":messg }).status(200);
    });
}*/

module.exports = { getAllMessages, organiseUsers, createUser, getFromFranklins, updateSteveJobs, deleteOldMess, archiveJobs, postAMessage, updateTime, deleteSpecificMessage, addMessageRating, getAllMessagesRatings, getSpecMessagesRatings}