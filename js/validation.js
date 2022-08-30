$(document).on("blur","#username",function(){
	var username=$("#username").val();	
	if((username.trim()).length==0)
	{
		alert("Please enter the username!");	
		return false;				
	}	
});
$(document).on("blur","#email",function(){
	var mail=$("#email").val();
	var emailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if((mail.trim()).length==0)
	{
		alert("Please enter email address!");	
		return false;				
	}
	if(mail.match(emailformat))
	{
		return true;
	}
	else
	{
		alert("Entered email address is invalid!");
		return false;
	}
});
$(document).on("blur","#pwd",function(){
	var password=$("#pwd").val();
	var pwdformat= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*-]).{8,}$/;
	if((password.trim()).length==0)
	{
		alert("Please enter password!");	
		return false;				
	}
	else if(!password.match(pwdformat))
	{
		alert("Entered password not strong. Please try another one!");
		return false;
	}
	else
	{
		return true;
	}
});
$(document).on("blur","#mobile",function(){
	var mob=$("#mobile").val();
	var phonenoformat= /^(\d){10}$/;
	if((mob.trim()).length==0)
	{
		alert("Please enter mobile number!");	
		return false;				
	}
	if(mob.value.match(phonenoformat))
	{
		return true;
	}
	else
	{
		alert("Invalid mobile number!");
		return false;
	}
});
$(document).on("blur","#addr",function(){
	var address=$("#addr").val();
	var addressformat= /^[a-zA-Z0-9,.'-]{5,}$/; 
	if((address.trim()).length==0)
	{
		alert("Please enter address!");	
		return false;				
	}
	if(address.match(addressformat))
	{
		return true;
	}
	else
	{
		alert("Invalid address!");
		return false;
	}
});
$(document).on("click","#submit",function(){
	var username=$("#username").val();
	var password=$("#pwd").val();	
	var mail=$("#email").val();		
	var mob=$("#mobile").val();						
	if((username.trim()).length==0 || (password.trim()).length==0 || (email.trim()).length==0||(mob.trim()).length==0)
	{
		alert("Empty field not allowed!");
		return false;
	}
	else{
		return true;
	}
});