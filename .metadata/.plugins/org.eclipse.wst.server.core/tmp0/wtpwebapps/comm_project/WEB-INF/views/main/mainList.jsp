<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	
	<style>
	  table {
	    width: 100%;
	    border: 1px solid #444444;
	    border-collapse: collapse;
	  }
	  th, td {
	    border: 1px solid #444444;
	    padding: 10px;
	  }
	</style>

	<script type="text/javascript" src="/js/lib/jquery-1.11.1.min.js"></script> 
	<script type="text/javascript" src="/js/main/main.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			
			
		});
	</script>
</head>
<body>
<%--버 튼 누르면 post 보냄 --%>
	<input type="text" id="noticeSj" name="noticeSj" value="" />
	<input type="button"id="btnSearch" value="조회" style="margin-bottom: 40px;" />
	<input type="button"id="btnGet" value="get사용" style="margin-bottom: 40px;" />
	<div id="listDiv">
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>제목</th>
				</tr>
			</thead>
			<tbody id="listbody">
				
			</tbody>
		</table>
	</div>
</body>
</html>