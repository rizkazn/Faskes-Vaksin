const orm = require('../configs/db')
const {DataTypes, where, Op, Sequelize} = require("sequelize")

class Detail {   
    constructor() {
        this.table = orm.define("details", {
            id: {
                type : DataTypes.INTEGER,
                allowNull : true,
                autoIncrement: true,
                primaryKey: true,
            },
            kode: {
                type : DataTypes.STRING,
                allowNull : true
                
            },
            batch: {
                type : DataTypes.STRING(100),
                allowNull : true
            },
            divaksin: {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            divaksin_1: {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            divaksin_2: {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            batal_vaksin: {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            batal_vaksin_1: {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            batal_vaksin_2: {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            pending_vaksin: {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            pending_vaksin_1: {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            pending_vaksin_2: {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            tanggal: {
                type : DataTypes.STRING(100),
                allowNull : true
            },
        },{
            timestamps: false
        })
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.table.findAll({
                order: [["id", "DESC"]],
            })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
}

module.exports = new Detail()