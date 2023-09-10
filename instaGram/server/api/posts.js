const express = require('express');
const router = express.Router();

const { postGetAll, postGetById, createPost} = require('../db/helpers/posts')

router.get('/', async (req, res, next) => {
    try {
        const posts = await postGetAll();
        res.send(posts);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const post = await postGetById(req.params.id);
        res.send(post);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const postCreate = await createPost(req.body);
        res.send(postCreate);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const user = await updatePost(req.params.id, req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const user = await deletePost(req.params.id);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router
