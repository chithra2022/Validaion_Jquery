function EmptyField(username)
{					
	if(username.value=='')
	{
		alert("Please enter the username!");	
		return false;				
	}	
}
function EmailValidation(email)
{
	var emailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value=='')
	{
		alert("Please enter email address!");	
		return false;				
	}
	if(email.value.match(emailformat))
	{
		return true;
	}
	else
	{
		alert("Entered email address is invalid!");
		return false;
	}
}
function PwdValidation(pwd)
{
	var pwdformat= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*-]).{8,}$/;
	if(pwd.value=='')
	{
		alert("Please enter password!");	
		return false;				
	}
	if(pwd.value.match(pwdformat))
	{
		return true;
	}
	else
	{
		alert("Entered password not strong. Please try another one!");
		return false;
	}
}
function MobValidation(mob)
{
	var phonenoformat= /^(\d){10}$/;
	if(mob.value=='')
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
} 
function AddressValidation(addr)
{
	var addressformat= /^[a-zA-Z0-9,.'-]{5,}$/; 
	if(addr.value=='')
	{
		alert("Please enter address!");	
		return false;				
	}
	if(addr.value.match(addressformat))
	{
		return true;
	}
	else
	{
		alert("Invalid address!");
		return false;
	}
}
function ValidateForm()
{
	var username=document.validform.username.value;
	var password=document.validform.pwd.value;	
	var email=document.validform.email.value;		
	var mobile=document.validform.mob.value;						
	if(username=="" || password=="" || email=="" ||mob=="")
	{
		alert("Empty field not allowed!");
		return false;
	}
}