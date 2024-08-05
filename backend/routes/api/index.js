// backend/routes/api/index.js
const router = require("express").Router();
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User, Spot, Image, Booking, Review } = require('../../db/models');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const reviewsRouter = require('./reviews.js');
const imagesRouter = require('./reviews.js');
const bookingsRouter = require('./bookings.js');

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotsRouter);

router.use('/reviews', reviewsRouter);

router.use('/images', imagesRouter);

router.use('/bookings', bookingsRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
