
const { Sequelize,DataTypes, Model } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('test_db', 'test_user', 'GrPdWNRikPn4WWsS', {
  host: '101.132.112.154',
  dialect: 'mysql',
});

const User = sequelize.define("hahaha", {
  name: DataTypes.TEXT,
  age: DataTypes.INTEGER,
},{tableName: 'user'});


(async () => {
  await sequelize.sync({ force: true });
  const jane = User.build({ name: "Jane" ,age:18});
  const jack= User.build({ name: "Jack" ,age:28});
  await jane.save();
  await jack.save();
  console.log(jane.toJSON()); // This is good!
})();


//
// (async () => {
//   await User.destroy({
//     where: {
//       name: "Jane"
//     }
//   });
//   const users = await User.findAll();
//   console.log("All users:", JSON.stringify(users, null, 2));
//   sequelize.close().then()
// })();
//
