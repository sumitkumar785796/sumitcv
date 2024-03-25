const uploadMiddleware = require('../middleware/FileUploadMiddleware')
const Project = require('../models/projects.models')
const cloudinary = require('../config/Cloudinary')
exports.InsertProject = async (req, res) => {
    try {
        uploadMiddleware(req, res, async (err) => {
            if (err) {
                console.error('Error during file upload:', err)
                return res.status(500).json({ message: 'Error uploading file. Please try again later.' })
            }
            // Check if file exists and has valid image MIME type
            if (!req.file || !req.file.path || !['image/jpeg', 'image/jpg', 'image/avif', 'image/gif', 'image/png'].includes(req.file.mimetype)) {
                return res.status(400).json({ message: 'Invalid file type: Only JPEG, JPG, AVIF, GIF, and PNG files are allowed.' });
            }
            const { projectname, desc, url } = req.body;
            try {
                const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
                    public_id: req.file.filename,
                    resource_type: 'auto', // Use Cloudinary's automatic resource type detection
                    secure: true, // Ensure uploaded files are secured by default
                })
                const dataSend = await Project.create({
                    image: cloudinaryResult.secure_url,
                    projectname,
                    desc,
                    url
                })
                return res.status(201).json({ message: 'Project is successfully created...', data: dataSend })
            } catch (error) {
                console.log(error)
                return res.status(400).json({ message: 'Not created something problem...', data: error })
            }
        })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
}
exports.ViewProject = async (req, res) => {
    try {
        const viewData = await Project.find().sort({ _id: -1})
        res.status(200).json({ message: 'View Data', view: viewData })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', view: error })

    }
}
exports.SingleViewProject = async (req, res) => {
    try {
        const {id}=req.params
        const viewData = await Project.findById(id)
        res.status(200).json({ message: 'View Data', view: viewData })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', view: error })

    }
}