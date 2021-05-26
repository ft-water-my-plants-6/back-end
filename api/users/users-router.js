const express = require("express");
const router = express.Router();
const helpers = require("./users-model");

router.get("/", async (req, res, next) => {
  await helpers
    .getUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next());
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const data = await helpers.getBy({ id });

    if (data) {
      return res.status(200).json(data);
    } else {
      res.status(400).json(`The user with id ${id} could not be found`);
    }
  } catch {
    next();
  }
});

// router.post("/", (req, res, next) => {
//   helpers
//     .createUser(req.body)
//     .then((user) => {
//       res.status(201).json(user);
//     })
//     .catch(next());
// });

module.exports = router;
