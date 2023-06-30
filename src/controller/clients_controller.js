const {client_services} = require("../services")


// ---------------------------------------------
//  Get Clients Table
// ---------------------------------------------

const getClients = async (req, res) =>{
    console.log("in get controller");

    try {
        const result = await client_services.getClientsServices();

    return res.status(200).json({
        data: result,
        success: true,
        message: "successfully got clients data.",
        error: {},
    })
    } catch (error) {
        console.log("Something went wrong in clients controller <getClients> function");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get clients data.",
            err: error,
          });
    }
    
}


// ---------------------------------------------
//  Insert into Clients Table
// ---------------------------------------------

const insertClients = async (req, res) =>{
    console.log("in insert controller");

    try {
        const result = await client_services.insertClientsServices(req.body);

    return res.status(200).json({
        data: result,
        success: true,
        message: "successfully inserted clients data.",
        error: {},
    })
    } catch (error) {
        console.log("Something went wrong in clients controller <insertClients> function");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to insert clients data.",
            err: error,
          });
    }
    
}

// ---------------------------------------------
//  Get one Client's info
// ---------------------------------------------

const getOneClient = async (req, res) =>{
    console.log("in get one controller");
    // console.log(req.params);
    try {
        const result = await client_services.getOneClientServices(req.params.id);

    return res.status(200).json({
        data: result,
        success: true,
        message: "successfully got client data.",
        error: {},
    })
    } catch (error) {
        console.log("Something went wrong in clients controller <getOneClient> function");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get one client data.",
            err: error,
          });
    }
    
}

// ---------------------------------------------
//  delete Client's info
// ---------------------------------------------

const deleteClients = async (req, res) =>{
    console.log("in delete controller");
    console.log(req.params.id);

    try {
        const result = await client_services.deleteClientsServices(req.params.id);

    return res.status(200).json({
        data: result,
        success: true,
        message: "successfully deleted clients data.",
        error: {},
    })
    } catch (error) {
        console.log("Something went wrong in clients controller <deleteClients> function");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete clients data.",
            err: error,
          });
    }
    
}


// ---------------------------------------------
//  Update Client info
// ---------------------------------------------

const updateClients = async (req, res) =>{
    console.log("in delete controller");
    console.log(req.params.id);

    try {
        const result = await client_services.updateClientsServices(req.body, req.params.id);

    return res.status(200).json({
        data: result,
        success: true,
        message: "successfully updated clients data.",
        error: {},
    })
    } catch (error) {
        console.log("Something went wrong in clients controller <updateClients> function");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update clients data.",
            err: error,
          });
    }
    
}

module.exports = {getClients, insertClients, getOneClient, deleteClients, updateClients};


