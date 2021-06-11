const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const { requireAuth } = require('../../utils/auth');
const { Class, BoughtClass, Review } = require('../../db/models');


router.get('/', requireAuth, asyncHandler( async (req, res, next) => {
    const classList = await Class.findAll()
    return res.json({classList})
}))

router.get('/bought', requireAuth, asyncHandler( async (req, res, next) => {
    const userId = req.user.dataValues.id

    const BoughtClassList = await BoughtClass.findAll({
        where: {
            userId: userId
    },
    })

    const classIdArray = BoughtClassList.map((oneBoughtClass)=> {
        return oneBoughtClass.classId
    })

    const ClassList = await Class.findAll({
        where: {
            id: classIdArray
        }
    })

    const UsersBoughtClasses = ClassList.map((boughtClass) => {
        return {
          expertId: boughtClass.userId,
          classId: boughtClass.id,
          title: boughtClass.title,
          body: boughtClass.body,
          requiredTime: boughtClass.requiredTime,
          price: boughtClass.price,
          availableTimes: boughtClass.availableTimes,
          videoLink: boughtClass.videoLink
        };
    });
    return res.json(UsersBoughtClasses)
}));

router.post('/bought', requireAuth, asyncHandler( async (req, res, next) => {
    const { expertId, classId, userId } = req.body;

    const CreatedBoughtClass = await BoughtClass.create({ userId, expertId, classId })

    return res.json({CreatedBoughtClass})
}));

router.post('/', requireAuth, asyncHandler( async (req, res, next) => {
    const { title, body, userId, requiredTime, price, availableTimes, videoLink } = req.body;
    const oneClass = await Class.create({title, body, userId, requiredTime, price, availableTimes, videoLink})
    return res.json({class: oneClass})
}))

module.exports = router;
