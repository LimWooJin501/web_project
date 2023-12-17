<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page import="util.ConnectionPool" %>
<%@ page import="dao.UserDao" %>

<%
request.setCharacterEncoding("utf-8");

String uid = request.getParameter("id");
String upw = request.getParameter("pw");
String upw2 = request.getParameter("pw2");
String uname = request.getParameter("name");

UserDao mydao = new UserDao();

if(!upw.equals(upw2))
{
	out.print("비밀번호를 다시 확인해주세요");
}
else
{
	if(mydao.exists(uid))
	{
		out.print("이미 가입한 회원입니다");
		return;
	}

	if(mydao.insert(uid, upw, uname))
	{
	%>
        <script>
            alert("회원가입 완료되었습니다");
            window.location.href = "login.html";
        </script>
        <%
	}
	else
	{
		out.print("회원가입 처리 중 오류가 발생했습니다.");
	}
}
%>