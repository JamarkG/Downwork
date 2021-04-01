const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Class } = require('../../db/models');
const { db } = require('../../config');

router.get('/', requireAuth, asyncHandler( async (req, res, next) => {
    const classList = await Class.findAll()
    return res.json({classList})
}))

router.post('/', requireAuth, asyncHandler( async (req, res, next) => {
    const { title, body, userId, requiredTime, price, availableTimes, videoLink } = req.body;
    const oneClass = await Class.create({title, body, userId, requiredTime, price, availableTimes, videoLink})
    return res.json({class: oneClass})
}))

module.exports = router;
