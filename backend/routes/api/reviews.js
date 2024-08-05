const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking , Spot, Review, Image, User} = require('../../db/models');
const router = express.Router();

const validateReview = []

// router.post('/api/spots/:spotId/reviews', async (req, res) => {
//     const review = await Review.create({
//       ...req.body,
//       spotId: req.params.spotId
//     });
//     res.json(review);
//   });

//   router.get('/api/spots/:spotId/reviews', async (req, res) => {
//     const reviews = await Review.findAll({
//       where: { spotId: req.params.spotId }
//     });
//     res.json(reviews);
//   });

//   router.get('/api/reviews/:id', async (req, res) => {
//     const review = await Review.findByPk(req.params.id);
//     res.json(review);
//   });

//   router.put('/api/reviews/:id', async (req, res) => {
//     const review = await Review.findByPk(req.params.id);
//     await review.update(req.body);
//     res.json(review);
//   });

//   router.delete('/api/reviews/:id', async (req, res) => {
//     const review = await Review.findByPk(req.params.id);
//     await review.destroy();
//     res.sendStatus(204);
//   });
module.exports = router;
