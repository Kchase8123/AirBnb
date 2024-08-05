const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
    '/', validateSignup, async (req, res) => {
      const { email, password, username } = req.body;
      if(!password.length) throw new Error('Password must be between 4 and 60 characters')
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({ email, username, hashedPassword });

      const safeUser = {
        id: user.id,
        email: user.email,
        username: user.username,
      };

      await setTokenCookie(res, safeUser);

      return res.json({
        user: safeUser
      });
    }
  );
  // router.get('/api/users/:id', requireAuth, async (req, res) => {
  //   const user = await User.findByPk(req.params.id);
  //   console.log(user)
  //   res.json(user);
  // });

  // router.put('/api/users/:id', async (req, res) => {
  //   const user = await User.findByPk(req.params.id);
  //   await user.update(req.body);
  //   res.json(user);
  // });

  // router.delete('/api/users/:id', async (req, res) => {
  //   const user = await User.findByPk(req.params.id);
  //   await user.destroy();
  //   res.sendStatus(204);
  // });


module.exports = router;
