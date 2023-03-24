const { sequelize, Sequelize } = require("./db.config");

module.exports = (sequelize, Sequelize) => {
  const customers = sequelize.define("customer", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    age: {
      type: Sequelize.STRING,
    },
  });
  return customers;
};
