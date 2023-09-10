const express = require('express');
const router = express.Router();

const { getAllLikes,
    likeGetById,
    createLike,
    updateLike,
    deleteLike } = require('../db/helpers/likes')

router.get('/', async (req, res, next) => {
    try {
        const likes = await getAllLikes();
        res.send(likes);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await likeGetById(req.params.id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const userLike = await createLike(req.body);
        res.send(userLike);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const user = await updateLike(req.params.id, req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const user = await deleteLike(req.params.id);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router
