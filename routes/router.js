const express = require('express');
const router = express.Router();

const contentModel = require("../model/contentModel");
const auth = require("../middlewares/checkSessionAuth");


router.get("/search", require("../controllers/search"));

const home = require("../controllers/home")
router.get("/", home.verifyError, home.verifyAuth, home.prepareData, home.catchSearch, home.get);

const account = require("../controllers/account")
router.get('/login', account.loginGet);
router.post('/login', account.loginPost);

router.get("/logout", account.logout);

const validSchema = require("../middlewares/validSchemas");
const idCount = require("../middlewares/idCount");
const create = require("../controllers/create")
router.get("/create", auth, create.get);
router.post("/create", idCount, validSchema, create.post);

router.get("/content/:route", require("../controllers/generic"));

router.get("/managment", auth, require("../controllers/managment"));

router.get("/delete/:id", auth, require("../controllers/delete"));

const edit = require("../controllers/edit");
router.get("/edit/:id", auth, edit.get);
router.post("/edit/:id", edit.post);



module.exports = router;