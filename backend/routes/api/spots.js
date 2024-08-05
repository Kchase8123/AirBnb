const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking , Spot, Review, Image, User} = require('../../db/models');

const router = express.Router();

const validateSpot = []

// router.post('/api/spots', async (req, res) => {
//     const spot = await Spot.create(req.body);
//     res.json(spot);
//   });

//   router.get('/api/spots', async (req, res) => {
//     const spots = await Spot.findAll();
//     res.json(spots);
//   });

//   router.get('/api/spots/:id', async (req, res) => {
//     const spot = await Spot.findByPk(req.params.id);
//     res.json(spot);
//   });

//   router.put('/api/spots/:id', async (req, res) => {
//     const spot = await Spot.findByPk(req.params.id);
//     await spot.update(req.body);
//     res.json(spot);
//   });

//   router.delete('/api/spots/:id', async (req, res) => {
//     const spot = await Spot.findByPk(req.params.id);
//     await spot.destroy();
//     res.sendStatus(204);
//   });

module.exports = router;
