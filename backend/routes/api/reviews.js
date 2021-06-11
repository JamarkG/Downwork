const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Review } = require('../../db/models');


router.get('/', requireAuth, asyncHandler( async (req, res, next) => {

    const reviewList = await Review.findAll()

    return res.json({reviewList})
}));

router.post('/', requireAuth, asyncHandler( async (req, res, next) => {

    const {reviewFull} = req.body;

    const postedReview = await Review.create(
        reviewFull
    );
    return res.json(postedReview);
}))


module.exports = router;
