const {client_repo} = require("../repository")

// ---------------------------------------------
//  Get Clients Table
// ---------------------------------------------

const getClientsServices = async () =>{
    console.log("----------------in get client services-----------------");

    try {
        const result = await client_repo.getClientsRepo();
        return result;
    } catch (error) {
        console.log("Something went wrong in clients services <getClientsServices> function");
        throw {error}
    }
    
}

// ---------------------------------------------
//  Insert into Clients Table
// ---------------------------------------------

const insertClientsServices = async (data) =>{
    console.log("----------------in insert client services-----------------");

    try {
        const result = await client_repo.insertClientsRepo(data);
        return result;
    } catch (error) {
        console.log("Something went wrong in clients services <insertClientsServices> function");
        throw {error}
    }
    
}


// ---------------------------------------------
//  Get One Client's Info
// ---------------------------------------------

const getOneClientServices = async (id) =>{
    console.log("----------------in get one client services-----------------");

    try {
        const result = await client_repo.getOneClientRepo(id);
        return result;
    } catch (error) {
        console.log("Something went wrong in clients services <getOneClientServices> function");
        throw {error}
    }
    
}


// ---------------------------------------------
//  Delete Client;s info
// ---------------------------------------------

const deleteClientsServices = async (id) =>{
    console.log("----------------in delete client services-----------------");

    try {
        const result = await client_repo.deleteClientRepo(id);
        return result;
    } catch (error) {
        console.log("Something went wrong in clients services <deleteClientsServices> function");
        throw {error}
    }
    
}


// ---------------------------------------------
//  Update Client info
// ---------------------------------------------

const updateClientsServices = async (data, id) =>{
    console.log("----------------in update client services-----------------");

    try {
        const result = await client_repo.updateClientRepo(data, id);
        return result;
    } catch (error) {
        console.log("Something went wrong in clients services <updateClientsServices> function");
        throw {error}
    }
}

module.exports = {getClientsServices, insertClientsServices, getOneClientServices, deleteClientsServices,updateClientsServices}