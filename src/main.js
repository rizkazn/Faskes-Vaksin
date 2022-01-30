const express = require("express")
const router = express.Router()
const province = require("./routes/routes_prov")
const city = require("./routes/routes_city")
const vaccine = require("./routes/routes_vacc")
const detail = require("./routes/routes_detail")
const { cloudConfig } = require("./configs/cloudinary")

router.use("*", cloudConfig)
router.use("/province", province)
router.use("/city", city)
router.use("/vaccine", vaccine)
router.use("/detail", detail)

router.use("*", (req, res) => {
    res.status(404).json("Endpoint Wrong!!")
})

module.exports = router