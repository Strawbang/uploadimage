const controller = require('./imageController');
const middleware = require('./imageMiddleware');

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept',
        );
        next();
    });

    app.route('/api/upload')
        .post(middleware.upload.single('upload'), controller.upload);
    
    app.route('/api/optimize')
        .post(middleware.upload.single('upload'), controller.optimize);
    
    app.route('/api/image')
        .post(controller.getImage, controller.upload)
};