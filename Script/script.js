function myfunc(event) {
    event.preventDefault();

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phonenumber=document.getElementById("phonenumber").value;
    var category=document.getElementById("category").value;

    // localStorage.setItem('ls_name',name);
    // localStorage.setItem('ls_email',email);
    // localStorage.setItem('ls_phonenumber',phonenumber);
    // localStorage.setItem('ls_category',category);

    var data=[];
    data.push(name);
    data.push(email);
    data.push(phonenumber);
    data.push(category);
    var data_string=JSON.stringify(data);
    var file=new Blob([data_string],{type:"text"});
    var anchor=document.createElement("a");
    anchor.href=URL.createObjectURL(file);
    anchor.download="save.txt";
    anchor.click();
    alert("details submitted")

};