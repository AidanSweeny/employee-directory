import React, { useState, useEffect, useRef } from "react";
function Directory() {
    const [directory, setDirectory] = useState([])
    const [clicked, setClicked] = useState({ name: false, phone: false, email: false, dob: false })
    const inputRef = useRef();

    function handleClick(event) {
        console.log("yes")
        event.preventDefault();
        if (event.target.textContent === "Name") {
            organizeByName();
        }
        else if (event.target.textContent === "Phone") {
            organizeByPhone();
        }
        else if (event.target.textContent === "Email") {
            organizeByEmail();
        }
        else if (event.target.textContent === "DOB") {
            organizeByDOB();
        }
    }

    function organizeByName() {
        var newArray = [];
        for (var i = 0; i < directory.length; i++) {
            newArray.push(directory[i].name)
        }
        newArray = newArray.sort();
        var newerArray = [];
        for (var i = 0; i < newArray.length; i++) {
            for (var j = 0; j < directory.length; j++) {
                if (newArray[i] === directory[j].name) {
                    newerArray.push(directory[j])
                }
            }
        }

        if (clicked.name) {
            setDirectory(newerArray.reverse());
            setClicked({ ...clicked, name: false });
        }
        else {
            setDirectory(newerArray);
            setClicked({ ...clicked, name: true });
        }
    }

    function organizeByEmail() {
        var newArray = [];
        for (var i = 0; i < directory.length; i++) {
            newArray.push(directory[i].email)
        }
        newArray = newArray.sort();
        var newerArray = [];
        for (var i = 0; i < newArray.length; i++) {
            for (var j = 0; j < directory.length; j++) {
                if (newArray[i] === directory[j].email) {
                    newerArray.push(directory[j])
                }
            }
        }

        if (clicked.email) {
            setDirectory(newerArray.reverse());
            setClicked({ ...clicked, email: false });
        }
        else {
            setDirectory(newerArray);
            setClicked({ ...clicked, email: true });
        }
    }

    function organizeByDOB() {
        var newArray = [];
        for (var i = 0; i < directory.length; i++) {
            newArray.push(directory[i].dob)
        }
        newArray = newArray.sort();
        var newerArray = [];
        for (var i = 0; i < newArray.length; i++) {
            for (var j = 0; j < directory.length; j++) {
                if (newArray[i] === directory[j].dob) {
                    newerArray.push(directory[j])
                }
            }
        }

        if (clicked.dob) {
            setDirectory(newerArray.reverse());
            setClicked({ ...clicked, dob: false });
        }
        else {
            setDirectory(newerArray);
            setClicked({ ...clicked, dob: true });
        }
    }

    function organizeByPhone() {
        var newArray = [];
        for (var i = 0; i < directory.length; i++) {
            newArray.push(directory[i].phone)
        }
        newArray = newArray.sort();
        var newerArray = [];
        for (var i = 0; i < newArray.length; i++) {
            for (var j = 0; j < directory.length; j++) {
                if (newArray[i] === directory[j].phone) {
                    newerArray.push(directory[j])
                }
            }
        }

        if (clicked.phone) {
            setDirectory(newerArray.reverse());
            setClicked({ ...clicked, phone: false });
        }
        else {
            setDirectory(newerArray);
            setClicked({ ...clicked, phone: true });
        }
    }

    function handleChange() {
        var search = [];
        for (var i = 0; i < directory.length; i++) {
            var searchName = directory[i].name.toLowerCase();
            if (searchName.includes(inputRef.current.value.toLowerCase())) {
                search.push(directory[i]);
            }
        }
        setDirectory(search);
    }

    function handleClear() {
        loadPeople();
        inputRef.current.value = "";
    }

    function formatDate(date) {
        var string = "";
        date = JSON.stringify(date)
        for(var i=0; i<date.length; i++){
            if(i === 4){
                string += "-";
            }
            if(i === 6){
                string += "-";
            }
            string += date[i];
        }
        return string;
    }

    function formatPhone(phone) {
        var string = "";
        phone = JSON.stringify(phone)
        for(var i=0; i<phone.length; i++){
            if(i === 0){
                string += "(";
            }
            if(i === 3){
                string += ")-";
            }
            if(i === 6){
                string += "-"
            }
            string += phone[i];
        }
        return string;
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
            <div className ="jumbotron bg-info">
                <div className ="container">
                    <h1>Employee Directory</h1>
                </div>
            </div>
            <div className = "input-group mb-3">
                <input onChange = {handleChange} type = "text" className = "form-control"placeholder="Search by Name" ref={inputRef}></input><button className = "btn btn-outline-secondary" onClick={handleClear}>clear</button>
            </div>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th onClick={handleClick} scope="col">Picture</th>
                        <th style =  {{cursor: "pointer"}} onClick={handleClick} scope="col">Name</th>
                        <th style =  {{cursor: "pointer"}}  onClick={handleClick} scope="col">Phone</th>
                        <th style =  {{cursor: "pointer"}} onClick={handleClick} scope="col">Email</th>
                        <th style =  {{cursor: "pointer"}} onClick={handleClick} scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {directory.map(person => {
                        return (
                            <tr key={person.name}>
                                <td><img src={require('../images/' + person.image)} style={{ height: "150px", width: "150px" }}></img></td>
                                <td>{person.name}</td>
                                <td>{formatPhone(person.phone)}</td>
                                <td>{person.email}</td>
                                <td>{formatDate(person.dob)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Directory;
