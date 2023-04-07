'use strict'

class Collection {
  constructor(dbModel) {
    // dbModel is a reference to a database model that has been instantiated with sequelize
    this.dbModel = dbModel;
  }

  create = async (modelData)  => {
    try {
      // .create() is a method of sequelize that combines the methods .build() and .save() into one
      return await this.dbModel.create(modelData)
    }
    catch (error) {
      console.error('Cannot Create DB Entry', error)
    }
  }

  read = async (id, findOptions) => {
    try {
      if (id) {
        return await this.dbModel.findOne({where: {id}, ...findOptions})
      }
      else {
        return await this.dbModel.findAll(findOptions)
      }
    }
    catch (error) {
      console.error('Cannot Read DB Entry', error)
    }
  }

  update = async (id, modelData) => {
    try {
      return await this.model.update(
        modelData,
        { where: {id}}
      )
    }
    catch (error) {
      console.error('Cannot Update DB Entry', error)
    }
  }

  delete  = async (id) => {
    try {
      return await this.dbModel.destroy({
        where: {id}
      })
    }
    catch (error) {
      console.error('Cannot Delete DB Entry', error)
    }
  }
}

module.exports = Collection;