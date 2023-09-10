const express = require('express');
const router = express.Router();

const { getAllComments, commentGetById, createComment, updateComment, deleteComment} = require('../db/helpers/comments')

router.get('/', async (req, res, next) => {
    try {
        const users = await getAllComments();
        res.send(users);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await commentGetById(req.params.id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const userPost = await createComment(req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const user = await updateComment(req.params.id, req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const user = await deleteComment(req.params.id);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router
