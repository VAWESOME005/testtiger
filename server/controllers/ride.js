import Ride from "../models/ride";
import User from "../models/user";

export const createRide = async (req, res) => {
  try {
    const { passengerId, startLocation, endLocation, age } = req.body;

    let driver = await User.findOne({ _id: driverId }).exec();
    let passenger = await User.findOne({ _id: passengerId }).exec();

    const ride = new Ride({
      driverId: driverId,
      passengerId: passengerId,
      passengerAge: age,
      passengerName: passenger.name,
      passengerStartingAddress: startLocation,
      passengerEndingAddress: endLocation,
    });
    await ride.save();

    return res.json({ done: true });
  } catch (err) {
    console.log("CREATE_RIDE ERROR", err);
    res.status(400).send("Failed to assign driver role");
  }
};


export const requestRide = async (req, res) => {
  
}