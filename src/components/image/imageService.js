const Image = require('./imageModel');           
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');


const upload = async data => {
    try {
        return {
            status: 200,
            data : {
                message : `L'image ${data.file.filename} à bien était upload`,
                successful: true,
            }
        }
    } catch (e) {
        return {
            data: {
                status: 400,
                message: "Une erreur est survenue lors de l'upload de l'image . Veuillez réessayer.",
                error: e.message,
                successful: false
            }
        };
    }
}

const optimize = async (file, body) => {
    try {
        const { filename: image } = file
        const optimize = await sharp(`${req.file.destination}/${req.file.filename}`).resize(body).toFile(path.resolve(file.destination,'resized',image));
        console.log('test');
        console.log(optimize);
        console.log('test');
        return {
            status: 200,
            data : {
                message : `L'image ${image} à bien était optimisé`,
                successful: true,
            }
        }
    } catch (e) {
        return {
            data: {
                status: 400,
                message: "Une erreur est survenue lors de l'optimisation de l'image . Veuillez réessayer.",
                error: e.message,
                successful: false
            }
        };
    }
}

const getImage = async data => {
    var img = fs.readFileSync(`./src/images/${data.name}`);
    try {
        return {
            status: 200,
            img
        }
    } catch (e) {
        return {
            data: {
                status: 400,
                message: "Une erreur est survenue lors de la recherche d'image . Veuillez réessayer.",
                error: e.message,
                successful: false
            }
        };
    }
}

module.exports = {
    upload,
    optimize,
    getImage
}