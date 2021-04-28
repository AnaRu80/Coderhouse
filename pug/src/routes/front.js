
import express from 'express'
const router =express.Router();
import path from 'path'

router.get("/", (req, res) => {
  res.render("content");
});

export default router
