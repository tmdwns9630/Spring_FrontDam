//console.log("카드리스트 로딩됨");

//데이터 카드 html 코드 만드는 함수.
const cardinfo = (ele) => {
  return `<div class="sensor_area">
        <div class="sensor_block externalCard_black">
          <div class="sensor_name">댐 이름</div>
          <div class="sensor_data" id="DAM_NAME">
            ${ele.damName}
          </div>
        </div>
        <div class="sensor_block externalCard_black">
          <div class="sensor_name">현재 근무자</div>
          <div class="sensor_data" id="WORK_NMPR">
            ${ele.workNmpr} 명
          </div>
        </div>
        <div class="sensor_block externalCard">
          <div class="sensor_name">수위 센서</div>
          <div class="sensor_data" id="WATER_LEVEL">
            ${ele.waterLevel}
          </div>
        </div>

        <div class="sensor_block externalCard">
          <div class="sensor_name">조도 센서</div>
          <div class="sensor_data" id="LIGHT">
            ${ele.light}
          </div>
        </div>
       </div>
      `;
};

//홈 화면에 댐 데이터 카드 목록을 출력하는 함수.
const cardPrint = () => {
  const cardList = document.querySelector(".middle_page");
  var card = damObj.map((ele) => {
    return cardinfo(ele);
  });
  card.forEach((value) => {
    cardList.innerHTML += value;
  });
};


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
  //const damList = document.querySelector("#DamList");

  for (var i = 0; i < damInfo.length; i++) {
   // console.log(i);
    $("#DamList").append(damInfo[i]);
    $("#"+damObj[i].damId).attr("href", "/DetailView?damid=" + damObj[i].damId);
    
  }
  
};

const dataReset=()=>{
	$('.sensor_area').remove();
	$('#DamList > li').remove();
}
console.log("호출1")

document.addEventListener("DOMContentLoaded", () => {
	console.log("호출3");

	//dataGet();
  damListPrint();
 
  cardPrint();

setInterval(() => {
	dataReset();
	dataGet();
  	damListPrint();
  	      
  	cardPrint();
  	
  	console.log("set! 2000 Interval Activated");
}, 1000);
});


