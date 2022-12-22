
console.log("디테일aa페이지 로딩됨");

//url 파라미터에서 damId값 읽어서 배열 인덱스값을 찾아냄.
const urlParams = new URL(location.href).searchParams;
const urlid = urlParams.get('damid');
const jsonNum = damObj.findIndex(ele => ele.damId == urlid);
//console.log("현재 페이지 : "+jsonNum)


//--테이블용 함수----------------------------------------------

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


const detailTablePrint = () => {
  $(".sensor_row").remove(); //기본으로 있던 데이터를 지워주고 작성.
  const cardList = document.querySelector(".sensor_table");
  var cardTotable = tableinfo(damObj[jsonNum]);
  //console.log(cardTotable); 
  cardList.innerHTML += cardTotable
};
//---------------------------------------테이블용 함수-----------


//home.js와 동일
//사이드바의 댐 리스트 출력

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
	//$('.sensor_area').remove();
	$('#DamList > li').remove();
}


/*
document.addEventListener("DOMContentLoaded", () => {
  damListPrint();
  damCard(jsonNum);

	setInterval(() => {
		dataReset();
		dataGet();
  		damListPrint();
  	    damCard(jsonNum);
  	    console.log(waterObj)
  
  	console.log("set! 4000 Interval Activated");
}, 1000);
});
*/



