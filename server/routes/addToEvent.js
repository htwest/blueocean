const express = require("express");
const signUpRouter = express.Router();
const queries = require("../../database/queries");

signUpRouter.use(express.json());

signUpRouter.put("/", (req, res) => {
  const user_id = req.body.user_id;
  const event_id = req.body.event_id;

  queries.makeUserAnAttendee(user_id, event_id, (err, results) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(results);
    }
  })

  res.sendStatus(200);
});

module.exports = signUpRouter;
