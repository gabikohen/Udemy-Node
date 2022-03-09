const { Router } = require("express");
const router = Router();

const usersControllers = require("../controllers/usersControllers");

router.get("/", usersControllers.getAll);
router.post("/", usersControllers.createAll);
router.put("/:id", usersControllers.editAll);

router.patch("/", usersControllers.editFew);

router.delete("/", usersControllers.deleteAll);

module.exports = router;
