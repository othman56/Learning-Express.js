const { response } = require('express');
const express = require('express')
const router = express.Router()
const members = require('../../Members')

// get all members
router.get('/', (req, res) => res.json(members));

// get single member
router.get('/:id', (req,res) => {

// handling our response in a much effecient way using the some method (this checks to see if the member with the id is found or not) 
    const found = members.some((member) => member.id === parseInt(req.params.id));
  
    if(found) {
      res.json(members.filter((member) => member.id === parseInt(req.params.id)))
    } else{
      res.status(400).json({msg : `no member with the id ${req.params.id} found`})
    }
  })
  
  // to create a member we use the post 
  router.post('/', (req, res )=> {
    res.send(req.body);
  })

module.exports = router;