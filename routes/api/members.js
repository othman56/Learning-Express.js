const { response } = require('express');
const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const members = require('../../Members')

// get all members
router.get('/', (req, res) => res.json(members));

// get single member using the http Get method
router.get('/:id', (req,res) => {

// handling our response in a much effecient way using the some method (this checks to see if the member with the id is found or not) 
    const found = members.some((member) => member.id === parseInt(req.params.id));
  
    if(found) {
      res.json(members.filter((member) => member.id === parseInt(req.params.id)))
    } else{
      res.status(400).json({msg : `no member with the id ${req.params.id} found`})
    }
  })
  
  // to create a member we use the http post method
  router.post('/', (req, res )=> {
    const newMember = {
      id: uuid.v4(),
      name: req.body.name,
      email: req.body.email,
      status: 'active'
    }

    if(!newMember.name || !newMember.email) {
      return res.status(400).json({msg: 'please include a name and email'})
    }
    members.push(newMember)
    res.json(members) 
    // to redirect to our homepage and see new member
    // res.redirect('/')
   })

// update a member we use the put method
 
router.put('/:id', (req,res) => {

  // handling our response in a much effecient way using the some method (this checks to see if the member with the id is found or not) 
      const found = members.some((member) => member.id === parseInt(req.params.id));
    
      if(found) {
        const updMember = req.body
        members.forEach(member => {
          if (member.id === parseInt(req.params.id)) {
            member.name = updMember.name ? updMember.name: member.name
            member.email = updMember.email ? updMember.email: member.email
            
            res.json({msg: 'member updated', member})
          }
        })
      } else{
        res.status(400).json({msg : `no member with the id ${req.params.id} found`})
      }
    })

    // to delete a member using the http delete method
    router.delete('/:id', (req,res) => {

      // handling our response in a much effecient way using the some method (this checks to see if the member with the id is found or not) 
          const found = members.some((member) => member.id === parseInt(req.params.id));
        
          if(found) {
            res.json({ msg: 'member deleted', members:members.filter((member) => member.id !== parseInt(req.params.id))})
          } else{
            res.status(400).json({msg : `no member with the id ${req.params.id} found`})
          }
        })
module.exports = router;