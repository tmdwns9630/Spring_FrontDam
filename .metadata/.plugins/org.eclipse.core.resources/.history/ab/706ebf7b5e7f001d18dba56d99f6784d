console.log("디테일페이지 로딩됨");

//기존의 댐 데이터 카드 데이터를 덮어쓰는 함수.
const damCard = (damNum) => {
  const name = document.querySelector("#DAM_NAME");
  const worknum = document.querySelector("#WORK_NMPR");
  const waterSensor = document.querySelector("#WATER_LEVEL");
  const lightSensor = document.querySelector("#LIGHT");

  name.textContent = damObj[damNum].damName;
  worknum.textContent = damObj[damNum].workNmpr;
  waterSensor.textContent = damObj[damNum].waterLevel;
  lightSensor.textContent = damObj[damNum].light;
};


//home.js와 동일
//사이드바의 댐 리스트 출력
const damListPrint = () => {
  const damList = document.querySelector("#DamList");
  var damInfo = damObj.map((ele) => {
    return (
      '<li class="has-subnav"><a href="#" class="dam"><i class="fa fa-laptop fa-2x"></i><span class="nav-text" id="' +
      ele.damId +
      '">' +
      ele.damId +
      "</span></a></li>"
    );
  });

  for (var i = 0; i < damInfo.length; i++) {
   // console.log(i);
    $("#DamList").append(damInfo[i]);
    $(".dam").attr("href", "/DetailView?damid=" + damObj[i].damId);
  }
  
};

const dataReset=()=>{
	$('.sensor_area').remove();
	
}

document.addEventListener("DOMContentLoaded", () => {
  damListPrint();
  //cardPrint();
  damCard(0);
});
/*
setInterval(() => {
	dataReset();
	$('#DamList>li').remove();
  	damListPrint();
  	cardPrint();
  	console.log("setInterval Activated");
}, 1000);
*/