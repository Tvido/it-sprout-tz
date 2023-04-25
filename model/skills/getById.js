const all = require("./all");

const getById = async (contactId) => {
  try {
    const contacts = await all();
    const selectContact = contacts.find(
      (item) => String(item.id) === String(contactId)
    );
    if (!selectContact) {
      return null;
    }
    return selectContact;
  } catch (error) {
    throw error;
  }
};

module.exports = getById;
