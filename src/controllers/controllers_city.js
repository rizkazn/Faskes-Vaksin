const city = {}
const model = require("../models/models_city")
const response = require("../helpers/response")

city.getAll = async (req, res) => {
    try {
        const result = await model.getAll()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

module.exports = city