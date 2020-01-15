const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {

  res.render('login', { title: 'Sistema de Inventario'});

});

router.post('/index',(req, res)=>{
   res.render('index',{title: 'Sistema de Inventario'});
});

router.get('/registrar_productos',(req, res)=>{
  res.render('registrar_productos', { title: 'Sistema de Inventario'});
})

router.get('/registrar_servicios',(req, res)=>{
  res.render('registrar_servicios', { title: 'Sistema de Inventario'});
})
    

module.exports = router;