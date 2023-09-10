const express = require('express');
const router = express.Router();

const { userGetAll, userGetById} = require('../db/helpers/users')

router.get('/', async (req, res, next) => {
    try {
        const users = await userGetAll();
        res.send(users);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await userGetById(req.params.id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const userPost = await createUser(req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const user = await deleteUser(req.params.id);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router
