const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { Class } = require('../../db/models');
// import useParams from "react-router-dom";

router.get(
    '/:searchTerm',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const searchTerm = req.params.searchTerm;

        const users = await User.findAll({
            where: { [Op.or]: {
                fullName:
                {[Op.or]: {
                    [Op.iLike]: `%${searchTerm}%`,
                    [Op.substring]: searchTerm,
                }},
                Biography:
                {[Op.or]: {
                    [Op.iLike]: `%${searchTerm}%`,
                    [Op.substring]: searchTerm,
                }}
            }}
        });

        const classes = await Class.findAll({
            where: { [Op.or]: {
                title:
                {[Op.or]: {
                    [Op.iLike]: `%${searchTerm}%`,
                    [Op.substring]: searchTerm,
                }},
                body : {
                    [Op.or]: {
                        [Op.iLike]: `%${searchTerm}%`,
                        [Op.substring]: searchTerm,
                    }
                }
            }}
        });

        return res.json({
          users, classes
        });
      }),
);


module.exports = router;
