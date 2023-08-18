function ejercicio1(req, res) {

        res.status(200).json({ 'mensaje':'hola mundo' })
}

//acceso por querys get
function ejercicio2(req, res) {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
/*
/articles/:articleId/comments?authorId=####&createdAt=#### para enviar parametros es con /xXXX/ y para hacer querys con ?xx=&xx=...
app.get('/search', (req, res) => {
    const articleId = req.params.articleId;
    const authorId = req.query.authorId;*/ 
    res.status(200).json({ 'resultado': num1+num2})        
}
//acceso por params get
function ejercicio3(req, res) {    
    const {usuario} = req.params
    res.status(200).json({'usuario': `${usuario}`})        
}
async function ejercicio4(req, res) {    
    const {character} = req.params
    const response = await fetch(`https://swapi.dev/api/people/${character}`)
    const result = await response.json()    
    res.status(200).json({"personaje":result})        
}
function ejercicio5(req, res) {    
    res.status(200).json(req.body);
}

function ejercicio6(req, res) {    
    let {num1}=req.body
    let {num2}=req.body
    res.status(200).json({"resultado ":num1+num2});
}

function ejercicio7(req, res) {    
    const {id}=req.params  
    
    if (id==='3') {        
        res.status(200).json("Se ha eliminado el objeto con ID 3");    
    } else {
        res.status(404).json("No se encontró el objeto con el ID especificado");    
    }
    
}
module.exports = {
ejercicio1,ejercicio2,ejercicio3,ejercicio4,ejercicio5,ejercicio6,ejercicio7}
