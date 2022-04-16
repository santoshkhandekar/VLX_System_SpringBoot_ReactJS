<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
		<form action="login" method="post" id="flogin">
 
<div class="border-box">
<h2>Login Form</h2>
<label for="uname" id="un">Username:</label>
<input type="text" name="user" placeholder="Enter Username" id="uname"><br/>
 
<label for="upass" id="ps">Password:</label>
<input type="password" name="pass" placeholder="Enter Password" id="upass"><br/>
 
<button type="submit" value="Login"  id="submit" onClick="alert('Login Successfully')">Login</button>
 
<a href="register.html">Create New Account</a>
</div>
 
</form>
</body>
</html>