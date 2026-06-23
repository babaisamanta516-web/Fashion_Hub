let c=0
function signup() 
{
  const fname=document.getElementById("txt1").value;
  const lname=document.getElementById("txt2").value;
  const mail=document.getElementById("txt3").value;
  const dob=document.getElementById("txt4").value;
  const num=document.getElementById("num1").value;
  const pwd=pass_valid();
  const em=user_mail();
  const ph=ph_no();
  if( pwd!="false" && em==0 && ph==1 )
{
  const user = { F_name:fname, L_name: lname, E_mail: mail, dob:dob, Ph_no:num, pass: pwd };
  localStorage.setItem("name"+c,JSON.stringify(user));
  c=c+1;
  const con=confirm("Signup Successful. Do you want to move to Signin Page ?")
  if(con)
    window.location.href="Login.html";
  else
    window.location.href="home1.html";
  }
  else{
   alert("Signup Failed");
}
function pass_valid()
{
const pass1=document.getElementById("pass1").value;
const pass2=document.getElementById("pass2").value;
if(pass1==pass2)
  return pass1;
else
  return "false";
}
function user_mail()
{
let x=document.getElementById("txt3").value;
let b=0;
for(let i=0;i<x.length;i++)
{
if(x[i]=="@")
b++;
}
if(x[0]>='a' && x[0]<='z')
{ if(b==1 && x.substring(x.length-4)==".com")
return 0;
else
return 1;
}
}
function ph_no()
{
  let cont=document.getElementById("num1").value;
  if(cont.length==10)
    return 1;
}
}

