const {clients} = require("../models");

// ---------------------------------------------
//  Get Clients list
// ---------------------------------------------

const getClientsRepo = async () =>{
    console.log("----------------------In Get all Clients Repository----------------------");

    try {
        let results = {};
        const {getclients, count} = await clients.findAndCountAll();
        results.clients = getclients;
        results.count = count;
        return results;
    } catch (error) {
        console.log("Something went wrong in clients repo <getClientsRepo> function");
        throw {error}
    }
    
}


// ---------------------------------------------
//  Insert into Clients Table
// ---------------------------------------------

const insertClientsRepo = async (data) =>{
    console.log("----------------------In Insert Clients Repository----------------------");
    // console.log(data);

    try {
        const client = await clients.create(data);
        return client;
    } catch (error) {
        console.log("Something went wrong in clients repo <insertClientsRepo> function");
        throw {error}
    }
    
}

// ---------------------------------------------
//  Get one Client info
// ---------------------------------------------

const getOneClientRepo = async (id) =>{
    console.log("----------------------In Get one Client Repository----------------------");
    // console.log(data);

    try {
        const client = await clients.findByPk(id);
        return client;
    } catch (error) {
        console.log("Something went wrong in clients repo <getOneClientRepo> function");
        throw {error}
    }
    
}


// ---------------------------------------------
//  Delete one Client info
// ---------------------------------------------

const deleteClientRepo = async (id) =>{
    console.log("----------------------In delete clients Repository----------------------");
    // console.log(data);

    try {
        const client = await clients.destroy({where: {cid: id}});
        return client;
    } catch (error) {
        console.log("Something went wrong in clients repo <deleteClientRepo> function");
        throw {error}
    }
    
}


// ---------------------------------------------
//  Update Client info
// ---------------------------------------------

const updateClientRepo = async (data, id) =>{
    console.log("----------------------In update clients Repository----------------------");
    // console.log(data);

    try {
        const client = await clients.update(data, {where: {cid: id}});
        return client;
    } catch (error) {
        console.log("Something went wrong in clients repo <updateClientRepo> function");
        throw {error}
    }
    
}

module.exports = {getClientsRepo, insertClientsRepo, getOneClientRepo, deleteClientRepo, updateClientRepo};