const vaccine = {}
const model = require("../models/models_vacc")
const response = require("../helpers/response")

vaccine.getAll = async (req, res) => {
    try {
        const result = await model.getAll()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

vaccine.getByProvince = async (req, res) => {
    try {
        const result = await model.getByProvince(req.params.provinsi)
        return response(res, 200, result)
    } catch (error) {
        Logger.error(error)
        console.log(error)
        return response(res, 500, error, true)
    }
}

vaccine.getByCity = async (req, res) => {
    try {
        const result = await model.getByCity(req.params.kota)
        return response(res, 200, result)
    } catch (error) {
        Logger.error(error)
        console.log(error)
        return response(res, 500, error, true)
    }
}

module.exports = vaccine