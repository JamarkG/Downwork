const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const { requireAuth } = require('../../utils/auth');
const { Class, BoughtClass, Review } = require('../../db/models');
// const user = require('../../db/models/user');
// const { db } = require('../../config');

router.get('/', requireAuth, asyncHandler( async (req, res, next) => {
    const classList = await Class.findAll()
    return res.json({classList})
}))
// console.log('hello');

router.get('/bought', requireAuth, asyncHandler( async (req, res, next) => {
    const userId = req.user.dataValues.id
    // console.log('shit!:', userId);
    // console.log('CLASSES API LINE 18')


    const BoughtClassList = await BoughtClass.findAll({
        where: {
            userId: userId
    },
    })
    // console.log('CONSOLE LOG ON 33 IN CLASSES STORE..', BoughtClassList)

    const classIdArray = BoughtClassList.map((oneBoughtClass)=> {
        return oneBoughtClass.classId
    })

    // console.log(classIdArray)

    const ClassList = await Class.findAll({
        where: {
            id: classIdArray
        }
    })

    const UsersBoughtClasses = ClassList.map((boughtClass) => {
        // console.log('THIS IS ON 58==', boughtClass)
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

// router.get('/:searchQ', requireAuth, asyncHandler( async (req, res, next) => {
//     console.log(req)
//     searchTerm=req.query
//     const classList = await Class.findAll({
//         where: { [Op.or]: {
//             title:
//             {[Op.or]: {
//                 [Op.iLike]: `%${searchTerm}%`,
//                 [Op.substring]: searchTerm,
//             }},
//             description : {
//                 [Op.or]: {
//                     [Op.iLike]: `%${searchTerm}%`,
//                     [Op.substring]: searchTerm,
//                 }
//             }
//         }}
//     })
//     return res.json({classList})
// }))



router.post('/bought', requireAuth, asyncHandler( async (req, res, next) => {
    const { expertId, classId, userId } = req.body;
    // const { expertId, classId } = req.body;
    // console.log('THIS IS EXPERTID CLASS IF USERID', expertId, classId, userId)

    const CreatedBoughtClass = await BoughtClass.create({ userId, expertId, classId })

    return res.json({CreatedBoughtClass})
}));

router.post('/', requireAuth, asyncHandler( async (req, res, next) => {
    const { title, body, userId, requiredTime, price, availableTimes, videoLink } = req.body;
    const oneClass = await Class.create({title, body, userId, requiredTime, price, availableTimes, videoLink})
    return res.json({class: oneClass})
}))

module.exports = router;
