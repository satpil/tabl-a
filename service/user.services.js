const mongoose = require('mongoose');

module.exports.tableData = async () => {
  try{
    const table = await mongoose.connection.db.collection('data').find().limit(10).toArray()
    return table
  }catch(error){
    console.log(error)
  }
}