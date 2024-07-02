const logger = require('../utils/logger');
const config = require('../utils/config.js');
const mongoose = require('mongoose');

logger.info('Connecting to Database')
mongoose.set('strictQuery',false)
mongoose.connect(config.MONGODB_URL).then(()=>{
   logger.info("mongodb is connected!")
}).catch(err=>{
  logger.error('error connecting to db', err.message)
})

module.exports