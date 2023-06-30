const {project_services} = require("../services")

const insertProjectController = async (req, res) =>{
    console.log("--------------------In Insert Project controller--------------------");

    try {
        const result = await project_services.insertProjectService(req.body);

        return res.status(200).json({
            data: result,
            success: true,
            message: "successfully inserted project data.",
            error: {},
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able insert project data.",
            err: error,
        });
    }
}


module.exports = {insertProjectController}