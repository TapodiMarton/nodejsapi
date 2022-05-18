
function sendPost(){
  const data = document.getElementById("name1").value+";"+document.getElementById("name2").value+";"+document.getElementById("email").value+";"+document.getElementById("class").value+";"+document.getElementById("birthyear").value;
  console.log(data);
    navigator.sendBeacon('http:localhost:3000/savedetails/'+ data);
    console.log(data);
  }
