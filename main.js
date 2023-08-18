const express= require('express');
const app=express();
const rutas=require('./routes/routes')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
console.log('Servidor en el puerto 3000')
app.use(rutas)
app.listen(3000)