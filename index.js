
let form = document.querySelector("form");
form.addEventListener('submit',formData)
function formData(){
    let name = document.getElementById("user-name").value;
    let age = document.getElementById("user-age").value;
    localStorage.setItem('name',JSON.stringify(name));
    localStorage.setItem('age',JSON.stringify(age));
    name = document.getElementById("user-name").value="";
     age = document.getElementById("user-age").value="";
}

function retrieveData(){
    let retrieve = document.getElementById("retrieve");
    retrieve.addEventListener('click',()=>{
        let Name = document.getElementById("dName");
        let age = document.getElementById("dAge");
        let tabel = document.querySelector("#tabel");
        tabel.style.display="block";
        tabel.style.width="50%"
        tabel.style.border="none"
        let getName = JSON.parse(localStorage.getItem("name"));
        let getAge = JSON.parse(localStorage.getItem("age"));
        // console.log(getName,getAge,"-->");
        Name.textContent=getName;
        age.textContent=getAge;
    })
}
retrieveData()