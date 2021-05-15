const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Class, boughtClass, Review } = require('../../db/models');
// const user = require('../../db/models/user');

// router.get('/', requireAuth, asyncHandler( async (req, res, next) => {
//     // const userId = req.user.dataValues.id;
//     const boughtClassList = await boughtClass.findAll({
//         where: { userId }
//     });
//     // console.log('THIS IS 14 ON REVIEW API--',boughtClassList)
//     const reviewList = await Review.findAll({
//         where: { reviewedId: userId }
//     });
//     return res.json({reviewList});
// }));

router.get('/', requireAuth, asyncHandler( async (req, res, next) => {

    const reviewList = await Review.findAll()

    return res.json({reviewList})
}));

router.post('/', requireAuth, asyncHandler( async (req, res, next) => {
    // const userId = req.user.dataValues.id;
    // const { review, oneClass } = req.body;
    // const reviewerId = oneClass
    console.log('reqbody on 25 in review api', req.body)
    const reviewFull = req.body;

    // const classId = await Class.findOne({
    //     where: { userId }
    // });
    // console.log('THIS IS 14--', review, oneClass)
    const postedReview = await Review.create({
        ...reviewFull
    });
    return res.json({postedReview});
}))


module.exports = router;
