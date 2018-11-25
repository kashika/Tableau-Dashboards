const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

// Define collection and schema for Sensor
let Sensor = new Schema(
  {
    clusterId: String,
    smartNodeId: String,
    sensorNodeId: String,
    sensorType: String,
    sensorName: String,
    sensorValue: String
  },
  {
    timestamps: true
  },
  {
    collection: "sensor"
  }
);

Sensor.index({
  clusterId: 1
});
Sensor.index({
  smartNodeId: 1
});

Sensor.plugin(mongoosePaginate);
module.exports = mongoose.model("Sensor", Sensor);
