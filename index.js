const express= require("express");
const app=  express();
const friend =require("./database");
require("./conn");
const PORT= process.env.PORT || 8000 

app.use(express.json());

app.route("/class/friends")
.get(async(req, res)=>{
    try{
        const data= await friend.find();
        res.send(data);
    } catch (err){
        res.status(400).send(err);
    }
})
.post(async(req, res)=>{
    try {
        const newFriend= new friend(req.body);
        const friendStat= await newFriend.save();
        res.send(friendStat);
    } 
    catch (err){
        res.status(400).send(err);
    }
});

app.get("/class/friends/:id", async (req, res)=>{
    try {
        _id= req.params.id;
        const foundDoc= await friend.findById(_id);
        res.send(foundDoc);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.patch("/class/friends/:id", async (req, res)=>{
    try {
        let _id= req.params.id;
        const query= await friend.findByIdAndUpdate(_id, req.body, {new: true});
        res.send(query);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.delete("/class/friends/:id", async (req, res)=>{
    try {
        _id= req.params.id;
        const removedItem= await friend.findByIdAndDelete(_id);
        res.send(removedItem);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(PORT, ()=>{
    console.log(`server listening on the port ${PORT}`);
});