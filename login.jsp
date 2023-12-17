<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page import="util.ConnectionPool" %>
<%@ page import="dao.UserDao" %>

<%
request.setCharacterEncoding("utf-8");

String uid = request.getParameter("id");
String upw = request.getParameter("pw");

UserDao mydao = new UserDao();

if (mydao.exists(uid)) {
	if (mydao.authenticate(uid, upw))
	{
		%>
		<script>
		alert("로그인 완료되었습니다.");
		window.location.href = "main.html";
		</script>
		<%
	}
	else
	{
		out.print("비밀번호를 다시 확인해주세요.");
	}
}
else
	{
		out.print("아이디를 다시 확인해주세요.");
	}
%>