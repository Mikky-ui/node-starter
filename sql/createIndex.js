// Task A03
// Design a suitable, single SQL ‘CREATE INDEX instruction that results
// in the creation (IF NOT EXISTS) of an index on the ‘Users’ table
// referencing ‘friendlyname’ called ‘friendlyname_idx’. 

const createIndex = `
CREATE INDEX friendlyname_idx
ON Users(friendlyname);
`;

module.exports = { createIndex };