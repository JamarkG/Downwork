const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
// const searchRouter = require('./search.js')
const classRouter = require('./classes')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// router.use('/search', searchRouter);

router.use('/classes', classRouter)

module.exports = router;
