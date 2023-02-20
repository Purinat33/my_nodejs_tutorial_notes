//Controller for people
const {people} = require('./../data');

//for GET 
const getPeople = (req,res) =>{
    res.status(200).json({success:true, data:people});
}

//POST
const postPeople = (req, res) =>{
    const { name, id } = req.body;
    if(!name || !id){
        return res.status(401).json({success:false});
    }

    res.status(201).json({success:true, data: [...people, {"id":id,"name":name}]});
}

//PUT
const addPerson = (req, res) =>{
    const {id} = req.params; //Use to look for the specific item
    const {name} = req.body; //To update when we found the ID
    console.log(id, name);

    const person = people.find((person)=>
        person.id === Number(id)
    )

    if(!person){
        return res
        .status(401)
        .json({success:false, msg:`No person with id ${id}`});
    }

    const newPeople= people.map(
        (person)=>{
            if(person.id===Number(id)){
                person.name = name;
            }
            return person;
        }
    );
    res.status(200).json({success:true, data: newPeople})
}

//DELETE

const delPerson =(req, res)=>{
//Look for the person 
    const person = people.find((person)=>
        person.id === Number(req.params.id)
    )

    if(!person){
        return res
        .status(404)
        .json({success:false, msg:`No person with id ${req.params.id}`});
    }

    const newPeople = people.filter(
        (person)=> person.id !== Number(req.params.id)
    )
    return res.status(200).json({success:true, data:newPeople})
}

module.exports = {
    getPeople,
    postPeople,
    addPerson,
    delPerson
};