const express=require('express');
const router=express.Router();
const contact=require('../models/uContacts');

//Retrieving contacts
router.get('/rContacts',function(req,res,next){
    //res.send('Retrieving contacts');
    contact.find(function(err,contacts){
        res.json(contacts);
    })
});


//Insert Contacts

router.post('/pContacts',function(req,res,next){
    //res.send('Inserting contacts');
    var newContact=new contact({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone
    });
    newContact.save(function(err,contact){
        if(err){
            res.json({success:false,msg:'Failed to add contact'})
        }
        else{
            res.json({success:true,msg:'Contact added successfully'});
        }
    })

})

//Delete contacts

router.delete('/dContacts/:id',function(req,res,next){
    //res.send('Deleting Contacts');
    contact.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json({success:false,msg:err});
        }
        else{
            res.json(result);
        }
    })

})

module.exports=router;