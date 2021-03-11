const mongoose = require('mongoose');
const express = require('express');
const app = express();
const data = require('./routes/data');

const MONGODB_URI = 'mongodb+srv://thunderpi:Test@123@thunderpi.rmgof.mongodb.net/thunderpi?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI,{
  auto_reconnect: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log('connected'))
  .catch((error) => console.log('mongo connectionn failed', console.log(error)))

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/data',data)

/** local server running on port 3000 */
app.listen(process.env.PORT || 5000, () => console.log('listening to port 3000'))
module.exports = app;