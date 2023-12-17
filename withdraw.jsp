<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page import="util.ConnectionPool" %>
<%@ page import="dao.UserDao" %>

<%
request.setCharacterEncoding("utf-8");

String uid = request.getParameter("id");
String upw = request.getParameter("pw");
String uname = request.getParameter("name");

UserDao mydao = new UserDao();
if(mydao.exists(uid)==false)
{
	out.print("회원 정보를 찾을 수 없습니다.");
	return;
}
if(mydao.delete(uid, upw, uname))
{
	%>
    <script>
        alert("회원탈퇴가 완료되었습니다.");
        window.location.href = "login.html";
    </script>
    <%
}
else
{
	out.print("회원탈퇴 중 오류가 발생했습니다.");
}
%>