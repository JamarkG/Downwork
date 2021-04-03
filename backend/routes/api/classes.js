const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Class, boughtClass } = require('../../db/models');
// const user = require('../../db/models/user');
// const { db } = require('../../config');

router.get('/', requireAuth, asyncHandler( async (req, res, next) => {
    const classList = await Class.findAll()
    return res.json({classList})
}))
// console.log('hello');

router.get('/bought', requireAuth, asyncHandler( async (req, res, next) => {
    const userId = req.user.dataValues.id
    // console.log('shit!:', req.user.dataValues.id);
    const BoughtClassList = await boughtClass.findAll({where: {
        userId: userId
    }, include: [
        {model: Class,
            where: {
            userId: userId
        },
        },
    ]})
    console.log(BoughtClassList[0].Class)

    const UsersBoughtClasses = BoughtClassList.map((boughtClass) => {

        return {
          expertId: boughtClass.Class.userId,
        //   userId: boughtClass.userId,
          title: boughtClass.Class.title,
          body: boughtClass.Class.body,
          requiredTime: boughtClass.Class.requiredTime,
          price: boughtClass.Class.price,
          availableTimes: boughtClass.Class.availableTimes,
          videoLink: boughtClass.Class.videoLink
        };
    });

    // console.log(req.body)
    return res.json(UsersBoughtClasses)
}));

router.post('/bought', requireAuth, asyncHandler( async (req, res, next) => {
    const { expertId, classId, userId } = req.body;
    // const { expertId, classId } = req.body;
    console.log('THIS IS EXPERTID CLASS IF USERID', expertId, classId, userId)

    const BoughtClassList = await boughtClass.create({ userId, expertId, classId })

    return res.json({BoughtClassList})
}));

router.post('/', requireAuth, asyncHandler( async (req, res, next) => {
    const { title, body, userId, requiredTime, price, availableTimes, videoLink } = req.body;
    const oneClass = await Class.create({title, body, userId, requiredTime, price, availableTimes, videoLink})
    return res.json({class: oneClass})
}))

module.exports = router;
