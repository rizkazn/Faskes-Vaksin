const orm = require('../configs/db')
const {DataTypes, where, Op, Sequelize} = require("sequelize")
const detail = require('./models_detail')

class Vaccine {   
    constructor() {
        this.table = orm.define("vaccines", {
            id: {
                type : DataTypes.INTEGER,
                allowNull : false,
                autoIncrement: true,
                primaryKey: true,
            },
            kode: {
                type : DataTypes.STRING,
                allowNull : false,
            },
            nama: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            kota: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            provinsi: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            alamat: {
                type : DataTypes.TEXT,
                allowNull : false
            },
            latitude: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            longitude: {
                type : DataTypes.STRING(255),
                allowNull : false
            },
            telp: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            jenis_faskes: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            kelas_rs: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            status: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            detail_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                onDelete: 'CASCADE',
                references: {
                    model: 'details',
                    key: 'id',
                },
            },
        },{
            timestamps: false
        })
        this.table.belongsTo(detail.table, {
            foreignKey: 'detail_id',
            as: 'detail',
            onDelete: 'CASCADE',
        })
    }


    getAll() {
        return new Promise((resolve, reject) => {
            this.table.findAll({
                order: [["id", "ASC"]],
                include: [
                    {
                        model: detail.table,
                        as: 'detail'
                    },
                ],
            })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    getByProvince(provinsi) {
        return new Promise((resolve, reject) => {
            this.table.findAll({
                order: [["id", "DESC"]],
                include: [
                    {
                        model: detail.table,
                        as: 'detail'
                    },
                ],
                where: {
                    provinsi,
                },
            })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    getByCity(kota) {
        return new Promise((resolve, reject) => {
            this.table.findAll({
                order: [["id", "DESC"]],
                include: [
                    {
                        model: detail.table,
                        as: 'detail'
                    },
                ],
                where: {
                    kota,
                },
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

module.exports = new Vaccine()