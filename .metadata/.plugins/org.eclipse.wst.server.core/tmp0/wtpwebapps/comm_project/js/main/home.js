//console.log("카드리스트 로딩됨");
//바 차트용으로 개조함. 혹시 몰라서 개인 폴더에 js 폴더 백업해둠

//데이터 카드 html 코드 만드는 함수
//로 테이블의 row 만드는 코드로 개조한 함수
const tableinfo = (ele) => {

  return `
  <tr class="sensor_row">
    <td class="sensor_td" id="DAM_NAME ">
      ${ele.damName}
    </td>
    <td class="sensor_td" id="WATER_LEVEL">
      ${ele.waterLevel/10} %
    </td>
    <td class="sensor_td" id="LIGHT">
      ${ele.light} Lx
    </td>
    <td class="sensor_td" id="WORK_NMPR">
      ${ele.workNmpr} 명
    </td>
  </tr>
  `;
};

//홈 화면에 댐 테이블 row를 출력하는 함수.
const tablePrint = () => {
  $(".sensor_row").remove(); //기본으로 있던 데이터를 지워주고 작성.
  const cardList = document.querySelector(".sensor_table");
  var card = damObj.map((ele) => {
    return tableinfo(ele);
  });
  card.forEach((value) => {
    cardList.innerHTML += value;
  });
};

// 사이드바 댐 리스트 실시간 갱신.
const dataGet=()=>{
	   $.ajax({
         url: "http://61.103.243.188:8080/main/damGet",
         type: 'GET',
         contentType: 'application/json',
         dataType: 'json',
  	    })
    	  .done(function(result) {
      
        	damObj = result.dam;
         	//console.log(damObj);
         	damInfo = damObj.map((ele)=>{
            return '<li class="has-subnav"><a href="#" class="dam" id="'+ele.damId+'"><i class="fa fa-laptop fa-2x"></i><span class="nav-text">'+ ele.damId +'</span></a></li>';
         })
      })
}

//사이드바의 댐 리스트 출력 함수
const damListPrint = () => {
	$('#DamList > li').remove();
  for (var i = 0; i < damInfo.length; i++) {
   // console.log(i);
    $("#DamList").append(damInfo[i]);
    $("#"+damObj[i].damId).attr("href", "/DetailView?damid=" + damObj[i].damId);
    
  }
  
};

//console.log("호출1")
//데이터 비워주는 함수를 지우고, 각각 함수 맨처음에 데이터 지우는 메서드를 추가.
document.addEventListener("DOMContentLoaded", () => {
  damListPrint();
  tablePrint();

});
setInterval(() => {
	
	dataGet();
  	damListPrint();
  	tablePrint();
  	
  	console.log("set! Fever! Interval Activated");
}, 1000);

