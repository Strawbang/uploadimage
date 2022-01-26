const imageService = require('./imageService');

const upload = async (req, res) => {
    try {
        const response = await imageService.upload(req);
        await res.status(response.status).send(response.data);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
}

const optimize = async (req, res) => {
    try {
        const response = await imageService.optimize(req.file, req.body);
        await res.status(response.status).send(response.data);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
}

const getImage = async (req,res) => {
    try {
        console.log(req.body)
        const response = await imageService.getImage(req.body);
        await res.status(response.status).end(response.img);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
}

module.exports = {
    upload,
    optimize,
    getImage
}