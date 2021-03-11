const {tableData } = require('../service/user.services');

module.exports.getData = async (req,res) => {
    try{
        const tableResponse = await tableData()
        res.status(200).send(tableResponse);
      }catch(error){
          console.log(error)
      }
    }