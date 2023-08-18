const {Router}=require('express');
const {ejercicio1,ejercicio2,ejercicio3,ejercicio4,ejercicio5,ejercicio6,ejercicio7}=require('../controllers/controllers')
const router =Router();

router.get('/api',ejercicio1)
//acceso por querys get
// http://127.0.0.1:3000/api/suma?num1=3&num2=4
router.get('/api/suma',ejercicio2)
//acceso por parametros
//http://127.0.0.1:3000/usuario/fabian
router.get('/api/usuario/:usuario',ejercicio3)
//acceso usando fetch
//http://127.0.0.1:3000/api/swapi/6
router.get('/api/swapi/:character',ejercicio4)
router.put('/api/body',ejercicio5)
// http://127.0.0.1:3000/api/suma2
router.post('/api/suma2',ejercicio6)
router.delete('/api/user/:id',ejercicio7)
module.exports=router;
