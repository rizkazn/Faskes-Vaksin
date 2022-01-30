const province = {}
const model = require("../models/models_prov")
const response = require("../helpers/response")

province.getAll = async (req, res) => {
    try {
        const result = await model.getAll()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

module.exports = province