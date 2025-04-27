import Plate from '../models/Name.js'

const postPlate = async (req, res) => {
    const {
      plateNumber,
      Make,
      SR,
      MVA,
      HV,
      LV,
      Impedance,
      Year,
      Oil,
      CurrentHV,
      CurrentLV,
      TempRiseWinding,
      TempRiseOil,
      TransportWeight,
      NoOfRadiators,
      WeightCore,
      TotalWeight
    } = req.body;
  
    if (
      !plateNumber || !Make || !SR || !MVA || !HV || !LV || !Impedance || !Year ||
      !Oil || !CurrentHV || !CurrentLV || !TempRiseWinding || !TempRiseOil ||
      !TransportWeight || !NoOfRadiators || !WeightCore || !TotalWeight
    ) {
      return res.status(400).json({
        status: "false",
        message: "Please fill all the fields"
      });
    }
  
    try {
      const newPlate = new Plate({
        plateNumber,
        Make,
        SR,
        MVA,
        HV,
        LV,
        Impedance,
        Year,
        Oil,
        CurrentHV,
        CurrentLV,
        TempRiseWinding,
        TempRiseOil,
        TransportWeight,
        NoOfRadiators,
        WeightCore,
        TotalWeight
      });
  
      const savedPlate = await newPlate.save();
  
      return res.json({
        status: "true",
        data: savedPlate,
        message: "Plate Created Successfully"
      });
  
    } catch (error) {
      return res.status(500).json({
        status: "false",
        message: error.message
      });
    }
  };
  

const getPlate = async (req,res)=>{
    try {
        const plate = await Plate.find({});
        return res.json({
            status: "true",
            data: plate,
            message: "Plate fetched successfully",
        });
    } catch (error) {
        return res.json({
            status: "false",
            message: error.message
        });
    }
}
export {postPlate,getPlate};