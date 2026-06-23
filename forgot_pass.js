function forgot() 
{
  const savedUser = JSON.parse(localStorage.getItem('name0'));
  const em1=savedUser.E_mail;
  const email=document.getElementById("txt1").value;
  if(em1==email)
  {
    const con=confirm("Password is:  "+savedUser.pass)
    if(con)
    window.location.href="login.html";
  }    
  else
    alert("Enter valid E-mail");
}
