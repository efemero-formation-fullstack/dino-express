import dinoService from "../services/dinosaures.service";
const dinosauresController ={
    create : async (req,res) => {
        const newDino = await dinoService.create(req.data);
        res.status(201).json(newDino)
    }
};
export default {dinosauresController}