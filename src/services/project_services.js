const {project_repo} = require("../repository");

const insertProjectService = async (data) =>{
    console.log("--------------------In Insert Project Service--------------------");
    // console.log(data);

    try {
        const insertProject = await project_repo.insertProjectRepo(data);
        return insertProject;
    } catch (error) {
        console.log("Something went wrong in projects services <insertProjectService> function");
        throw {error}
    }
}


module.exports = {insertProjectService};