const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
// const searchRouter = require('./search.js')
const classRouter = require('./classes')
const reviewRouter = require('./reviews')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// router.use('/search', searchRouter);

router.use('/classes', classRouter)

router.use('/reviews', reviewRouter)

module.exports = router;
