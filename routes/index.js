const express = require('express');

const router= express.Router();
const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);

router.get('/create-todo',homeController.create);

router.get('/delete-todo',homeController.delete);

module.exports = router;
