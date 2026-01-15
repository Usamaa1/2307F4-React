import Category from "../models/Category.mjs";




export const AddCategory = async (req,res)=>{
    try {
        const {name} = req.body;

        await Category.create({name});
        res.send({message: "Category added Successfully!"})




    } catch (err) {
         if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).send({ error: messages });
    }
    if (err.code === 11000) {
      return res.status(400).send({ error: "Duplicate value exists" });
    }
    res.status(500).send({ error: "Server error" });
    }
}
