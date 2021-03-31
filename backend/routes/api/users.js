const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const validateSignup = [
    check('emailAddress')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('fullName')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a name with at least 4 characters.'),
    check('Biography')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Biography must be 4 characters or longer.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

const router = express.Router();

// Sign up
router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { emailAddress, password, fullName, Biography } = req.body;
      const user = await User.signup({ emailAddress, fullName, password, Biography });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
);

module.exports = router;
