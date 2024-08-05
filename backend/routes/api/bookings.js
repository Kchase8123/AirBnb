const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking , Spot, Review, Image, User} = require('../../db/models');

const router = express.Router();

// router.post('/api/spots/:spotId/bookings', async (req, res) => {
//     const booking = await Booking.create({
//       ...req.body,
//       spotId: req.params.spotId
//     });
//     res.json(booking);
//   });

//   router.get('/api/spots/:spotId/bookings', async (req, res) => {
//     const bookings = await Booking.findAll({
//       where: { spotId: req.params.spotId }
//     });
//     res.json(bookings);
//   });

//   router.get('/api/bookings/:id', async (req, res) => {
//     const booking = await Booking.findByPk(req.params.id);
//     res.json(booking);
//   });

//   router.put('/api/bookings/:id', async (req, res) => {
//     const booking = await Booking.findByPk(req.params.id);
//     await booking.update(req.body);
//     res.json(booking);
//   });

//   router.delete('/api/bookings/:id', async (req, res) => {
//     const booking = await Booking.findByPk(req.params.id);
//     await booking.destroy();
//     res.sendStatus(204);
//   });
module.exports = router;
