const express = require('express')
const router = express()
const port = 5000
const bodyParser = require('body-parser')
const client = require('./conect')
const fs = require('node:fs')   

router.use(bodyParser.json());

client.connect(err =>{
  if(err){
    console.log(err.message)
  }else{  
    console.log('connected')
  }
})

router.get('/portofolio_aris', (req, res)=>{
  client.query(`select * from portofolio_aris`, (err, result)=>{
   if(!err){
    const response = {status: 'Getting Data Success', code: '200', data:result.rows}
    res.send(response)
   }else{
    res.send('something Wrong')
   }
  })
})

router.post('/portofolio_aris', (req, res)=>{
  const { id, title, description, image, description_footer} = req.body
  client.query((`insert into portofolio_aris(id, title, description, image, description_footer) values('${id}', '${title}', '${description}', '${image}', '${description_footer}')`), (err, result)=>{
  if(!err){
    res.send('insert succes')
  } else{
    res.send(err.message)
  }
  })
})    
  
router.delete('/portofolio_aris/:id', (req, res)=>{
  client.query(`delete from portofolio_aris where id = 'P1'`, (err, result)=>{
    if(!err){
      res.send('Delete Success')
    }else{
      res.send(err.message)
    }
  })
})

router.delete('/portofolio_aris', (req, res)=>{
  client.query(`drop table portofolio_aris`, (err, result)=>{
    if(!err){
      res.send('Drop Success')
    }else{
      res.send(err.message)
    }
  })
})

router.put('/portofolio_aris', (req, res)=>{
  const { id, title, description, image, description_footer} = req.body
  client.query((`ubdate portofolio_aris set id = '${id}', title = '${title}', description = '${description}', image = '${image}', description_footer = '${description_footer}'`)), (err, result)=>{
    if(!err){
      res.send('Ubdate Success')
    }else{
      res.send(err.message)
    }
  }
})

router.patch('/portofolio_aris/:id', (req, res) => {
  const query = `UPDATE portofolio_aris SET id = ?, title = ?, description = ?, image = ? description_footer = ?`;d
  const params = [req.params.id, req.body.title, req.body.description, req.body.image, req.body.description_footer];
  connection.query(query, params, (err, result) => {
    if(!err){
      res.send('Patch Success')
    }else{
      res.send.status(400);
    }
  });
}); 

router.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
