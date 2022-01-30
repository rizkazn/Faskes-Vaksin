const orm = require('../configs/db')
const {DataTypes, where, Op, Sequelize} = require("sequelize")

class Province {   
    constructor() {
        this.table = orm.define("provinces", {
            id: {
                type : DataTypes.INTEGER,
                allowNull : false,
                autoIncrement: true,
                primaryKey: true,
            },
            key: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            value: {
                type : DataTypes.STRING(100),
                allowNull : false
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

module.exports = new Province()