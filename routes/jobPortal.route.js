const  Router = require("express").Router()
// const { request } = require("express");
const {jopPortalSearch} = require("../models/jobPortal.model");


Router.get('/',async(req,res)=>{
    const jobPortal = await jopPortalSearch.find({});

    res.json({data:jobPortal});
});

Router.get('/:id',async(req,res)=>{
    const jobPortal = await jopPortalSearch.findById(req.params.id);

    res.json({data:jobPortal});
});



Router.post('/',async (req,res)=>{


    const {jobName,jobDesc,JobLocation,jobSalary}=req.body;

    const jPortal = await jopPortalSearch.create({
        jobName,
        jobDesc,
        JobLocation,
        jobSalary,
    });

    res.json({ data:jPortal})

});
Router.put("/:id", async(req,res)=>{
    const{jobName,jobDesc,JobLocation,jobSalary}=req.body;
    const jPortal = await jopPortalSearch.findByIdAndUpdate(
        req.params.id,
        {
            jobName,
            jobDesc,
            JobLocation,
            jobSalary,
        },
        {
            new:true,
        }
        );

        if( !jPortal) return res.status(404).send("Data is not found");

         
        res.json({data:jPortal});
});

Router.delete("/:id", async(req, res)=>{
    const jPortal = await jopPortalSearch.findOneAndRemove(req.params.id);


    if(!jPortal) return res.status(404).send("In Valid ID");

    res.send({data:jPortal});
})


module.exports = Router