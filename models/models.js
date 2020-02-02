'use strict'

class DataModel {
    constructor(schema) {
        this.schema = schema;

    }

    get(_id) {
        let queryObject = _id ? { _id } : {}
        return this.schema.find(queryObject);
      }
    
      create(data) {
        let newData = new this.schema(data);
        return newData.save();
      }
    
      update(_id, data) {
        return this.schema.findByIdAndUpdate(_id, data, { new: true });
      }
    
      delete(_id) {
        return this.schema.findByIdAndDelete(_id);
      }
    
}


module.exports = DataModel;