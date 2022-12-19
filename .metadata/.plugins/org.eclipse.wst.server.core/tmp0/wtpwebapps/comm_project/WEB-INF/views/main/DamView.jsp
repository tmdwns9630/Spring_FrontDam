<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/DamStyle.css?after" />
    <link rel="stylesheet" type="text/css" href="css/siderbar.css?after" />
	<meta charset="UTF-8">
	
	<!-- JavaScript ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->
	<script type="text/javascript" src="/js/lib/jquery-1.11.1.min.js"></script> 
	<script type="text/javascript" src="/js/main/main.js"></script>
    
	
<script type="text/javascript">
var str='${data}'
var damObj = JSON.parse(str);


console.log(damObj);

//home.js에 함수화함.
/* 
var damInfo = damObj.map((ele)=>{
	return '<li class="has-subnav"><a href="#" class="dam"><i class="fa fa-laptop fa-2x"></i><span class="nav-text" id="'+ele.damId+'">'+ ele.damId +'</span></a></li>';
})
//console.log(damInfo);

document.addEventListener('DOMContentLoaded',()=>{   
for(var i=0;i<damInfo.length;i++){
   console.log(i);
   $('#DamList').append(damInfo[i]);
   $('.dam').attr("href","/DetailView?damid="+damObj[i].damId);
}
})
*/
</script>
<script type="text/javascript" src="js/main/home.js"></script>
	<!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■JavaScript -->
<%@ page import="java.util.*"%>
	
	 <title>Dam Project</title>
    <header>
      <nav class="navbar">
        <h3>Dam Dashboard (JSP)</h3>
      </nav>
    </header>
</head>


 <body>
    <!--  ■■■좌측 사이드바 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->
    <nav class="main-menu">
      <img
        class="icon_sun"
        src="https://blog.kakaocdn.net/dn/61zMy/btrh7wm0fCv/IgGApTNnNkY2Y9UVKKWjbK/img.png"
        alt="icon_sun"
        style="width: 60%; max-width: 100px"
      />
      <ul id="DamList">
        <!-- 
        <li>
          <a href="#">
            <i class="fa fa-laptop fa-2x"></i>
            <span class="nav-text" > Dam 1 </span>
          </a>
        </li>
         -->
      </ul>
    </nav>
    <!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■좌측 사이드바 ■■■ -->
    <!--  원래 좌 중 우로 구역을 나눴으나 좌, 우를 지움 -->
    <div class="TotalPage border_red_power_dot">
      <!-- 중앙 구역 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->
     
      <div class="middle_page border_blue_dot">
      <!--  js 코드로 반복해서 들어감
 			<div class="sensor_area border_yellow_dot">
	          <div class="sensor_block externalCard_black" >
	            <div class="sensor_name">댐 이름</div>
	            <div class="sensor_data" id="DAM_NAME"></div>
	          </div>
	          <div class="sensor_block externalCard_black">
	            <div class="sensor_name">현재 근무자</div>
	            <div class="sensor_data" id="WORK_NMPR">1972 명</div>
	          </div>
	          <div class="sensor_block externalCard">
	            <div class="sensor_name">수위 센서</div>
	            <div class="sensor_data" id="WATER_LEVEL">12345</div>
	          </div>
	
	          <div class="sensor_block externalCard">
	            <div class="sensor_name">조도 센서</div>
	            <div class="sensor_data" id="LIGHT">67890</div>
	          </div>
        	</div>
	 -->	
      </div>
      <!--  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 중앙 구역-->
      
    </div>

  </body>
</html>