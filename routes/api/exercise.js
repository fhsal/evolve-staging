const router = require("express").Router();
const exerciseController = require("../../controllers/exerciseController");

// Matches with "/api/exercise"
router.route("/")
  .get(exerciseController.findAll)
  .post(exerciseController.create);

// Matches with "/api/health/:id"
router
  .route("/:yearWeek")
  .get(exerciseController.findByYearWeek)
  .put(exerciseController.update)
  .delete(exerciseController.remove);

  router
  .route("/key/:key")
  .get(exerciseController.findByKey)
  .put(exerciseController.update)
  .delete(exerciseController.removeByKey);
module.exports = router;
