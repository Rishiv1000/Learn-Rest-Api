const getProducts = async (req,res)=>{
    res.status(200).json(
        {msg : "I am Get"}
        )
};

const getNewProducts = async (req,res)=>{
    res.send("NEW")
};



module.exports = {getProducts,getNewProducts};