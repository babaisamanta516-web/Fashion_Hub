let c=0
function login() 
{
  const savedUser = JSON.parse(localStorage.getItem('name0'));
  const e1=savedUser.E_mail;
  const p1=savedUser.pass;
  const email=document.getElementById("txt1").value;
  const pass=document.getElementById("pass1").value;
  if(e1==email && p1==pass)
  { 
    const con=confirm("Login Successful")
   if(con)
    window.location.href="index.html";
  }
  else
    alert("Login Failed");
  
}
