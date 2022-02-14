// Youtube videos handle
var channelID = "UCXcPc1ZwbTCEHKbX9Q4sDWQ";
	var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
	$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
		console.log(data);
		console.log(data.items);
   		var link_1 = data.items[0].link;
   		var title_1 = data.items[0].title;
   		var id_1 = link_1.substr(link_1.indexOf("=")+1);
   		var link_2 = data.items[1].link;
   		var title_2 = data.items[1].title;
   		var id_2 = link_2.substr(link_2.indexOf("=")+1);
   		var link_3 = data.items[2].link;
   		var title_3 = data.items[2].title;
   		var id_3 = link_3.substr(link_3.indexOf("=")+1);
   		var link_4 = data.items[3].link;
   		var title_4 = data.items[3].title;
   		var id_4 = link_4.substr(link_4.indexOf("=")+1);
   		var link_5 = data.items[4].link;
   		var title_5 = data.items[4].title;
   		var id_5 = link_5.substr(link_5.indexOf("=")+1);
   		var link_6 = data.items[5].link;
   		var title_6 = data.items[5].title;
   		var id_6 = link_6.substr(link_6.indexOf("=")+1);
   		
	$("#youtube_video_1").attr("src","https://youtube.com/embed/"+id_1 + "?controls=1&showinfo=0&rel=0");
	$("#youtube_video_1").after("<p>"+title_1+"</p>");

	$("#youtube_video_2").attr("src","https://youtube.com/embed/"+id_2 + "?controls=1&showinfo=0&rel=0");
	$("#youtube_video_2").after("<p>"+title_2+"</p>");

	$("#youtube_video_3").attr("src","https://youtube.com/embed/"+id_3 + "?controls=1&showinfo=0&rel=0");
	$("#youtube_video_3").after("<p>"+title_3+"</p>");

	$("#youtube_video_4").attr("src","https://youtube.com/embed/"+id_4 + "?controls=1&showinfo=0&rel=0");
	$("#youtube_video_4").after("<p>"+title_4+"</p>");

	$("#youtube_video_5").attr("src","https://youtube.com/embed/"+id_5 + "?controls=1&showinfo=0&rel=0");
	$("#youtube_video_5").after("<p>"+title_5+"</p>");

	$("#youtube_video_6").attr("src","https://youtube.com/embed/"+id_6 + "?controls=1&showinfo=0&rel=0");
	$("#youtube_video_6").after("<p>"+title_6+"</p>");
	});
