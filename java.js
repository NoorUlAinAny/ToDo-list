const obj = [
    {
        name : "alia", 
        age :"21"
    },
    {
        name : "batool", 
        age : "23"
    }
    ,
    {
        name : "noor", 
        age :"25"
    }
];
function populateTable(data){
    const tbody = document.getElementById("table-id");
    tbody.innerHTML= "";
    data.map((data) => {
        const row = document.createElement("tr");

        const name = document.createElement("td");
        const age = document.createElement("td");


        name.innerHTML = data.name;
        age.innerHTML = data.age;

        row.appendChild(name);
        row.appendChild(age);
        tbody.appendChild(row);

    })
}
populateTable(obj);

function search(){
    const inpVAlue = document.getElementById("inputflied");
    const svalue = inpVAlue.value.toLowerCase();

    const  searchvalue = obj.filter((d) => d.name.toLocaleLowerCase() == svalue || d.age == svalue );
    populateTable(searchvalue);

}


function dynamicSearch() {
    const intp= document.getElementById("inputflied").value.toLowerCase();
    const filteredData = obj.filter(item => 
        item.name.toLowerCase().includes(query) || item.age.includes(query)
    );
    populateTable(filteredData);
    
}

document.getElementById("inputflied").addEventListener("input" , dynamicSearch);







 
