const deleteSpecificMessageUser = `
DELETE FROM Messages WHERE userid = (?) AND id = (?);
`;

module.exports = { deleteSpecificMessageUser };