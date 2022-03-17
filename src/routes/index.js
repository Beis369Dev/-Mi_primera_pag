// My routes
const express = require('express');
const router= express.Router(); // modulo de express - para crear rotas y tenerlas en archivos separados 

router.get('/',(req,res)=>{
    res.render('index.html', {data:"putos malditos "});
   
});


router.get('/contact',(req,res)=>{
    res.render('contact.html',{title:"contact"})
})


router.post('/data',(req,res)=>{
    res.render('email_sended.html',{email:req.body.email} );
    console.log(req.body);
})

module.exports= router;