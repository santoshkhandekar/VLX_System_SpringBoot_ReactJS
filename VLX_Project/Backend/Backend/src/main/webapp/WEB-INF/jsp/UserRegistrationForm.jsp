<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
		<form name="regi" action="UserRegistrationForm.jsp" method="post">
		<h2>User Registration Form</h2>
		 
		 
		<label  for="r3" id="un">Username :</label>
		<input type="text" name="uname" id="r3"><br/>
		 
		<label  for="r4" id="pwd">Password :</label>
		<input type="password" name="pass" id="r4"><br/>
		
		<label  for="r4" id="pwd">ReEnter Password :</label>
		<input type="password" name="pass" id="r4"><br/>
		 
		<label  for="r5" id="em">Email :</label>
		<input type="text" name="email" id="r5"><br/>
		 
		<label  for="r6" id="mn">Mobile No :</label>
		<input type="text" name="mno" id="r6"><br/>
		 
		<label for="r8" id="cy">Address:</label>
		 <input type="text" name="address" id="r8"><br/>
		
		 
		<button type="submit" value="Submit" id="button">Register</button>
		<a href="login.jsp">Back to Home</a>
		 
</form>
</body>
</html>