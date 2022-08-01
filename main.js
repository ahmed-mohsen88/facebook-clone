var monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

function populatedropdown(dayfield, monthfield, yearfield){
	var today=new Date()
	var dayfield=document.getElementById(dayfield);
	var monthfield=document.getElementById(monthfield);
	var yearfield=document.getElementById(yearfield);

	for (var i=0; i<31; i++)
		dayfield.options[i]=new Option(i+1, i+1)
	dayfield.options[today.getDate()-1].selected=true;

	for (var m=0; m<12; m++)
		monthfield.options[m]=new Option(monthtext[m], monthtext[m])
	monthfield.options[today.getMonth()].selected=true;
	var thisyear=today.getFullYear()
	for (var y=0; y<20; y++){
		yearfield.options[y]=new Option(thisyear, thisyear)
		thisyear+=1
	}
yearfield.options[0]=new Option(today.getFullYear(), today.getFullYear(), true, true) //select today's year
}

onload=function(){
	 populatedropdown('d', 'm', 'y')
};


function formValidate() {
	let fName = document.getElementById("fName").value;
	let emaill = document.getElementById("email").value;
	let user_error = document.getElementById("user_err");
	let email_error = document.getElementById("email_err");
	let text_user  = "";
	let text_email  = "";
	let password = document.getElementById("pass").value;
	let password_error = document.getElementById("password_err");
	let text_pass = ""


	if (fName.length < 5){
		text_user = "first name must be more than 5 ";
		user_error.style.color = "red";
		user_error.innerHTML = text_user;
		return false;
	}
	else if (emaill.length < 5 || emaill.indexOf("@") == -1)  {
		text_email ="email must contain @"
		 email_error.style.color = "red";
		 email_error.innerHTML = text_email;
		return false;
	}
	else if (password.length < 6 || emaill.indexOf("@") == -1)  {
		text_pass ="pasword must be more than 6 digits"
		 password_error.style.color = "red";
		 password_error.innerHTML = text_pass;
		return false;
	}
	else{
		text_pass ,text_email , text_user= "";
		alert("done");
		window.location.href="login.html";
		return true;
	}
}

function logInvalidate(){
	let emaill = document.getElementById("email_login").value;
	let email_error = document.getElementById("email_err_login");
	let text_email  = "";
	let password = document.getElementById("pass_login").value;
	let password_error = document.getElementById("password_err_login");
	let text_pass = ""
	
	 if (emaill.length < 5 || emaill.indexOf("@") == -1)  {
		text_email ="email must contain @"
		 email_error.style.color = "red";
		 email_error.innerHTML = text_email;
		return false;
	}
	else if (password.length < 6 || emaill.indexOf("@") == -1)  {
		text_pass ="pasword must be more than 6 digits"
		 password_error.style.color = "red";
		 password_error.innerHTML = text_pass;
		return false;
	}
	else{
		text_pass ,text_email = "";
		alert("done");
		return true;
	}
	
}