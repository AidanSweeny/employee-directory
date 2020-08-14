import React, { useState, useEffect } from "react";
function Directory() {
    const [directory, setDirectory] = useState([])
    const [clicked, setClicked] = useState(false)
    function handleClick(event){
        event.preventDefault();
        if(event.target.textContent === "Name"){

            organizeByName();
        }
        else if(event.target.textContent === "Phone"){
            console.log("yes")
        }
        else if(event.target.textContent === "Email"){
            console.log("yes")
        }
        else if(event.target.textContent === "DOB"){
            console.log("yes")
        }
    }

    function organizeByName() {
        var newArray = [];
        for(var i=0; i<directory.length; i++){
            newArray.push(directory[i].name)
        }
        newArray = newArray.sort();
        var newerArray = [];
        for(var i=0; i<newArray.length; i++){
            for(var j=0; j<directory.length; j++){
                if(newArray[i] === directory[j].name){
                    newerArray.push(directory[j])
                }
            }
        }
        
        if(clicked){
            setDirectory(newerArray.reverse());
            setClicked(false);
        }
        else{
            setDirectory(newerArray);
            setClicked(true);
        }

    }

    function loadPeople() {
        var array = []
        array.push({ image: "ash.jpg", name: "Ash Ketchum", phone: 4152007568, email: "ash@pokemon.com", dob: 19990702 })
        array.push({ image: "pikachu.jpg", name: "Pikachu", phone: 2323423423, email: "pikachu@pokemon.com", dob: 20010901 })
        array.push({ image: "brock.jpg", name: "Brock", phone: 1729304957, email: "brock@pokemon.com", dob: 20001020 })
        array.push({ image: "misty.jpg", name: "Misty", phone: 2839475618, email: "misty@pokemon.com", dob: 19981224 })
        array.push({ image: "charizard.jpg", name: "Charizard", phone: 2098567438, email: "charizard@pokemon.com", dob: 20020304 })
        array.push({ image: "squirtle.jpg", name: "Squirtle", phone: 1758475639, email: "squirtle@pokemon.com", dob: 20030405 })
        array.push({ image: "bulbasaur.jpg", name: "Bulbasaur", phone: 3948576879, email: "bulbasaur@pokemon.com", dob: 20030504 })
        array.push({ image: "butterfree.jpg", name: "Butterfree", phone: 9192837465, email: "butterfree@pokemon.com", dob: 20030710 })
        array.push({ image: "jesse.jpg", name: "Jesse", phone: 2938456478, email: "jesse@pokemon.com", dob: 19651114 })
        array.push({ image: "james.jpg", name: "James", phone: 1232343454, email: "james@pokemon.com", dob: 19601202 })
        array.push({ image: "arbok.jpg", name: "Arbok", phone: 1111111111, email: "arboc@pokemon.com", dob: 20000202 })
        array.push({ image: "weezing.jpg", name: "Weezing", phone: 9999999999, email: "weezing@pokemon.com", dob: 20000303 })
        setDirectory(array)
    }

    useEffect(() => {
        loadPeople();
    }, []);

    return (
        <div>
            <h1>Directory</h1>

            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th onClick = {handleClick} scope="col">Picture</th>
                        <th onClick = {handleClick} scope="col">Name</th>
                        <th onClick = {handleClick} scope="col">Phone</th>
                        <th onClick = {handleClick} scope="col">Email</th>
                        <th onClick = {handleClick} scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {directory.map(person => {
                        return (
                            <tr key = {person.name}>
                                <td><img src = {require('../images/' + person.image)} style = {{height: "150px", width:  "150px"}}></img></td>
                                <td>{person.name}</td>
                                <td>{person.phone}</td>
                                <td>{person.email}</td>
                                <td>{person.dob}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default Directory;
