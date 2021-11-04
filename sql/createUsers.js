// Task A01
// Design a suitable, single SQL ‘CREATE TABLE’ instruction that results
// in the creation (IF NOT EXISTS) of the ‘Users’ table as illustrated in
// the AdaBoard schema; don’t forget to include the Primary Key and unique constraints.
// Use “strftime('%s','now')” rather than “CURRENT_TIMESTAMP”.
const createUsers =`
CREATE TABLE IF NOT EXISTS Users(
    userid INTEGER PRIMARY KEY NOT NULL,
    friendlyname VARCHAR(50),
    emailaddress VARCHAR(320) UNIQUE NOT NULL,
    password VARCHAR(256) DEFAULT ('--blank--'),
    admin INTEGER(1) NOT NULL DEFAULT 0 CHECK(admin = 0 OR admin = 1),
    lastlogin INTEGER(4) DEFAULT (strftime('%s','now'))
);
`
module.exports = { createUsers };
