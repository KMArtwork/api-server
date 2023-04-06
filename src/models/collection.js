'use strict'

class Collection {
  constructor(dbModel) {
    this.dbModel = dbModel;
  }

  create = async (modelData)  => {
    try {
      this.dbModel.create(modelData)
    }
    catch (error) {
      console.error('Cannot Create DB Entry', error)
    }
  }

  read = async () => {
    try {

    }
    catch (error) {
      console.error('Cannot Read DB Entry', error)
    }
  }

  update = async () => {
    try {

    }
    catch (error) {
      console.error('Cannot Update DB Entry', error)
    }
  }

  delete  = async () => {
    try {

    }
    catch (error) {
      console.error('Cannot Delete DB Entry', error)
    }
  }
}

module.exports = Collection;