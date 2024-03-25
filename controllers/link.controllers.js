const Link = require('../models/link.models')

exports.InsertLink = async(req,res)=>{
    try {
        const {iconName,link}=req.body
        const linkdata = await Link.create({
            iconName,
            link
        })
        res.status(200).json({message:'Link is created successfully...',data:linkdata})
    } catch (error) {
        res.status(500).json({message:'Internal server Error',data:error})   
    }
}

exports.ViewLink = async(req,res)=>{
    try {
        const viewData = await Link.find()
        res.status(200).json({message:'View Data',view:viewData})
    } catch (error) {
        res.status(500).json({message:'Internal server Error',data:error})   
    }
}