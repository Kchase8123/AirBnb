const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');

const router = express.Router();

// router.post('/api/images', async (req, res) => {
//     const image = await Image.create(req.body);
//     res.json(image);
//   });

//   router.get('/api/spots/:spotId/images', async (req, res) => {
//     const images = await Image.findAll({
//       where: {
//         imageableId: req.params.spotId,
//         imageableType: 'spot'
//       }
//     });
//     res.json(images);
//   });

//   router.get('/api/reviews/:reviewId/images', async (req, res) => {
//     const images = await Image.findAll({
//       where: {
//         imageableId: req.params.reviewId,
//         imageableType: 'review'
//       }
//     });
//     res.json(images);
//   });

//   router.get('/api/images/:id', async (req, res) => {
//     const image = await Image.findByPk(req.params.id);
//     res.json(image);
//   });
router
//   router.put('/api/images/:id', async (req, res) => {
//     const image = await Image.findByPk(req.params.id);
//     await image.update(req.body);
//     res.json(image);
//   });

//   router.delete('/api/images/:id', async (req, res) => {
//     const image = await Image.findByPk(req.params.id);
//     await image.destroy();
//     res.sendStatus(204);
//   });

module.exports = router;
