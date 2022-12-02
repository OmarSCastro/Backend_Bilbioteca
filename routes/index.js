const express = require('express');

const librosRouter = require( './libros.router' );
const autoresRouter = require( './autores.router' );
const editorialesRouter = require( './editoriales.router' );
const usuariosRouter = require( './usuarios.router' );
const usuariosLibrosRouter = require( './usuarios_libros.router' );

function routerApi( app ){
    const router = express.Router();
    app.use('/api', router);

    router.use('/libros', librosRouter);
    router.use('/autores', autoresRouter);
    router.use('/editoriales', editorialesRouter);
    router.use('/usuarios', usuariosRouter);
    router.use('/relaciones', usuariosLibrosRouter);

}

module.exports = routerApi;