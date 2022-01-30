const detail = {}
const model = require("../models/models_detail")
const response = require("../helpers/response")

detail.getAll = async (req, res) => {
    try {
        const result = await model.getAll()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

module.exports = detail