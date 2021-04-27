import express from 'express'
const router =express.Router();
import path from 'path'

router.get("/",(req,res) => {
    res.sendFile(path.resolve("public/index.html"))
})

export default router