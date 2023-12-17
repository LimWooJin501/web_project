<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.ArrayList, java.util.List"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학점 계산기</title>
<link rel="stylesheet" href="gpa.css">
</head>
<body>

<hr>
<div class="page-hdr"> 학점 계산기 </div> <br>

<%
	int i = 1;
	List<String> subjectList = new ArrayList<>();
	List<String> majorList = new ArrayList<>();
	List<String> creditList = new ArrayList<>();
	List<String> gradeList = new ArrayList<>();
	String j = String.valueOf(i);
	while (true) {
		var subject = request.getParameter("subject"+j);
		var major = request.getParameter("major"+j);
		var credit = request.getParameter("credit"+j);
		var grade = request.getParameter("grade"+j);
		
		if (subject == null)
			break;

		subjectList.add(subject);
		majorList.add(major);
		creditList.add(credit);
		gradeList.add(grade);
		i = i + 1;
		j = String.valueOf(i);
	}
	
	List<String> stringMajorList = new ArrayList<>();
	for (String data : majorList) {
		String k = data;
		if (k == null)
			stringMajorList.add("nonmajor");
		else
			stringMajorList.add(k);
	}
	
	List<Integer> intCreditList = new ArrayList<>();
	for (String data : creditList) {
		String k = data;
		intCreditList.add(Integer.parseInt(k));
	}
	List<Double> doubleGradeList = new ArrayList<>();
	for (String data : gradeList) {
		String k = data;
		if (k.equals("A+"))
			doubleGradeList.add(4.5);
		else if (k.equals("A"))
			doubleGradeList.add(4.0);
		else if (k.equals("B+"))
			doubleGradeList.add(3.5);
		else if (k.equals("B"))
			doubleGradeList.add(3.0);
		else if (k.equals("C+"))
			doubleGradeList.add(2.5);
		else if (k.equals("C"))
			doubleGradeList.add(2.0);
		else if (k.equals("D+"))
			doubleGradeList.add(1.5);
		else if (k.equals("D"))
			doubleGradeList.add(1.0);
		else if (k.equals("F"))
			doubleGradeList.add(0.0);
		else
			doubleGradeList.add(5.0);
	}
	
	double result = 0.0;
	double majorResult = 0.0;
	int credit = 0;
	int majorCredit = 0;
	int totalCredit = 0;
	for (int a = 0; a < intCreditList.size(); a++) {
		int intData = intCreditList.get(a);
		double doubleData = doubleGradeList.get(a);
		String majorData = stringMajorList.get(a);
		if (majorData.equals("major")) {
			majorResult += intData * doubleData;
			majorCredit += intData;
		}
		if (doubleData == 5.0) {
			totalCredit = totalCredit + intData;
			continue;
		}
		result += intData * doubleData;
		credit += intData;
		totalCredit += intData;
		}
	double finalGrade = result / credit;
	double finalMajorGrade = majorResult / majorCredit;
	String formattedFinalGrade = String.format("%.3f", finalGrade);
	String formattedFinalMajorGrade = String.format("%.3f", finalMajorGrade);
%>
<p style="font-size: 24px; font-weight: bold; color: black;">전체 평점: <%= formattedFinalGrade %> / 4.500</p>
<p style="font-size: 24px; font-weight: bold; color: black;">전공 평점: <%= formattedFinalMajorGrade %> / 4.500</p>
<p style="font-size: 24px; font-weight: bold; color: black;">취득 학점: <%= totalCredit %></p>

</body>
</html>