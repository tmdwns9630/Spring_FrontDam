$(document).ready(function() {
	
	$("#btnGet").click(function(e){
		var url = "http://61.103.243.89:8080/deviceAPI/deviceGet";
		//var param = new Object();
		//param.noticeSj = $("#noticeSj").val();
		
		console.log(url);
		
		$.ajax({
			url: url,
			type: 'GET',
			contentType: 'application/json',
			dataType: 'json',
		})
		.done(function(result) {
			
			console.log(result);
			/*
			if(result){
				$.each(result.mainResult, function(idx, item){
					var tr = $('<tr>');
					
					var td1= $('<td>').text(item.noticeId);
					var td2= $('<td>').text(item.noticeSj);
					
					tr.append(td1).append(td2);
					
					$('#listbody').append(tr);
				});
			}*/
			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});	
	});
	
});
