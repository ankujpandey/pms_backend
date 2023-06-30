const {projects} = require("../models");


const insertProjectRepo = async (data) =>{
    console.log("--------------------In Insert Project Repo--------------------");
    console.log(data);

    try {
        const insertProject = await projects.create(data);
        return insertProject;
    } catch (error) {
        console.log("Something went wrong in projects repo <insertProjectRepo> function");
        throw {error}
    }
}


module.exports = {insertProjectRepo};