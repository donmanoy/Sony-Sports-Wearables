$(window).bind("load", function() {
	set_product_url();
	
	//Start setting attributes for the Omniture Scitpt
	$('.bx-controls-direction .bx-prev').attr('onclick', "trackMs_link('ms:unboundalllimits:exploreEssentials:leftArrow', '', 'unboundalllimits:exploreEssentials:leftArrow', 'microsite|unboundalllimits|exploreEssentials|leftArrow');");				
	$('.bx-controls-direction .bx-next').attr('onclick', "trackMs_link('ms:unboundalllimits:exploreEssentials:rightArrow', '', 'unboundalllimits:exploreEssentials:rightArrow', 'microsite|unboundalllimits|exploreEssentials|rightArrow');");
	//End setting attributes for the Omniture Scitpt	
});


function set_product_url(){	
	//SETTING DEFAULT URL AS Other Countries
	$('.slide #SWR50').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR50:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('.slide #BLT-UHM1').attr('href', 'http://www.sony-asia.com/electronics/actioncam-mounting-accessories/blt-uhm1?cid=BLT-UHM1:pdp:unboundalllimits:ms:ap:exploreEssentials');	
	$('.slide #VCT-AMP1').attr('href', 'http://www.sony-asia.com/electronics/actioncam-mounting-accessories/vct-amp1?cid=VCT-AMP1:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('.slide #RM-LVR2').attr('href', 'http://www.sony-asia.com/electronics/actioncam-live-view-remote/rm-lvr2?cid=RM-LVR2:pdp:unboundalllimits:ms:ap:exploreEssentials');	
	$('.slide #AS200').attr('href', 'http://www.sony-asia.com/electronics/headphones/t/in-ear-headphones?cid=AS200:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('.slide #AS400EX').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as400ex-400ip?cid=AS400EX/400IP:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('.slide #AS600BT').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as600bt?cid=AS600BT:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('.slide #AS800BT').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as800bt?cid=AS800BT:pdp:unboundalllimits:ms:ap:exploreEssentials');	
	
	$('#everyday-training-SWR50').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR-50:pdp:unboundalllimits:ms:ap:TrainingGear');
	
	$('.slide #SWR10').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('#everyday-training-SWR10').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:ap:TrainingGear');
	$('#moving-essentials-SWR10').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:ap:MovingGear');
	
	$('.slide #SSE-BTR1').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('#everyday-training-SSE-BTR1').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ap:TrainingGear');
	
	$('.slide #FDR-X1000V').attr('href', 'http://www.sony-asia.com/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('#moving-essentials-FDR-X1000V').attr('href', 'http://www.sony-asia.com/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ap:MovingGear');
	$('#start-embarking-FDR-X1000V').attr('href', 'http://www.sony-asia.com/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ap:EmbarkingGear');
	$('#water-ready-FDR-X1000V').attr('href', 'http://www.sony-asia.com/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ap:WaterGear');
	$('#adventure-seekers-FDR-X1000V').attr('href', 'http://www.sony-asia.com/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ap:AdventureGear');
	
	
	$('.slide #VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories?cid=VCT-HM1:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('#moving-essentials-VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories?cid=VCT-HM1:pdp:unboundalllimits:ms:ap:MovingGear');
	$('#adventure-seekers-VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories?cid=VCT-HM1:pdp:unboundalllimits:ms:ap:AdventureGear');
	
	$('.slide #Xperia-X').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaXperia-X:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('#moving-essentials-XPERIA-X').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaXperia-X:pdp:unboundalllimits:ms:ap:MovingGear');
	$('#adventure-seekers-XPERIA-X').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaXperia-X:pdp:unboundalllimits:ms:ap:AdventureGear');
	
	$('.slide #Z5Premium').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('#moving-essentials-Z5Premium').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ap:MovingGear');
	$('#start-embarking-Z5Premium').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ap:EmbarkingGear');
	$('#everyday-training-Z5Premium').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ap:TrainingGear');
	$('#water-ready-Z5Premium').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ap:WaterGear');
		
	$('.slide #NW-WS413').attr('href', 'http://www.sony-asia.com/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('#moving-essentials-NW-WS413').attr('href', 'http://www.sony-asia.com/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:ap:MovingGear');
	$('#start-embarking-NW-WS413').attr('href', 'http://www.sony-asia.com/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:ap:EmbarkingGear');
	
	$('.slide #FDR-AX100').attr('href', 'http://www.sony-asia.com/electronics/handycam-camcorders/fdr-ax100e?cid=FDR-AX100:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('#start-embarking-FDR-AX100').attr('href', 'http://www.sony-asia.com/electronics/handycam-camcorders/fdr-ax100e?cid=FDR-AX100:pdp:unboundalllimits:ms:ap:EmbarkingGear');
	
	$('.slide #SWR30').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:ap:exploreEssentials');	
	$('#start-embarking-SWR30').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:ap:EmbarkingGear');	
	$/* ('#adventure-seekers-SWR30').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:ap:AdventureGear');	 */
	
	$('.slide #NWZ-WS610').attr('href', 'http://www.sony-asia.com/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:ap:exploreEssentials');
	$('#water-ready-NWZ-WS610').attr('href', 'http://www.sony-asia.com/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:ap:WaterGear');
	
	$('.slide #SWR12').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:ap:exploreEssentials');	
	$('#water-ready-SWR12').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:ap:WaterGear');
		
	//Athlete Bio Products
	$('#jiajie-SSE-BTR1').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ap:jiajie');
	$('#jiajie-SWR12').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:ap:jiajie');
	$('#jiajie-Z5Premium').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ap:jiajie');
	$('#jiajie-FDR-X1000V').attr('href', 'http://www.sony-asia.com/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ap:jiajie');
	$('#waimun-SSE-BTR1').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ap:waimun');
	$('#waimun-SWR12').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:ap:waimun');
	$('#waimun-Z5Premium').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ap:waimun');
	$('#waimun-FDR-X1000V').attr('href', 'http://www.sony-asia.com/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ap:waimun');
	$('#elvia-SSE-BTR1').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ap:elvia');
	$('#elvia-SWR12').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:ap:elvia');
	$('#elvia-Z5Premium').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ap:elvia');
	/* $('#danny-SSE-BTR1').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ap:danny'); */
	$('#danny-SWR10').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR10:pdp:unboundalllimits:ms:ap:danny');
	$('#danny-SWR50').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR50:pdp:unboundalllimits:ms:ap:danny');
	$('#danny-XPERIA-X').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=XPERIA-X:pdp:unboundalllimits:ms:ap:danny');
	$('#danny-FDR-X1000V').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=FDR-X1000V:pdp:unboundalllimits:ms:ap:danny');
	$('#thanthip-SSE-BTR1').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ap:thanthip');
	$('#thanthip-SWR12').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SWR12:pdp:unboundalllimits:ms:ap:thanthip');
	$('#thanthip-SWR10').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SWR10:pdp:unboundalllimits:ms:ap:thanthip');
	$('#thanthip-XPERIA-X').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=XPERIA-X:pdp:unboundalllimits:ms:ap:thanthip');
	$('#danny-FDR-X1000V').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=FDR-X1000V:pdp:unboundalllimits:ms:ap:danny');
	$('#toto-SSE-BTR1').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ap:toto');
	$('#toto-SWR50').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=SWR50:pdp:unboundalllimits:ms:ap:toto');
	$('#toto-XPERIA-X').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=XPERIA-X:pdp:unboundalllimits:ms:ap:toto');
	$('#toto-FDR-X1000V').attr('href', 'http://www.sony-asia.com/electronics/mobile-tablets?cid=FDR-X1000V:pdp:unboundalllimits:ms:ap:toto');
	$('#toto-SWR10').attr('href', 'http://www.sony-asia.com/electronics/smart-devices/sse-btr1?cid=SWR10:pdp:unboundalllimits:ms:ap:toto');
	
	switch(geoplugin_countryName()) { 
	case 'Singapore' :		
		$('.slide #FDR-X1000V').attr('href', 'http://www.sony.com.sg/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('#start-cycling-FDR-X1000V').attr('href', 'http://www.sony.com.sg/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:sg:CyclingGear');
		$('#start-embarking-FDR-X1000V').attr('href', 'http://www.sony.com.sg/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:sg:EmbarkingGear');
		$('#start-swimming-FDR-X1000V').attr('href', 'http://www.sony.com.sg/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:sg:SwimmingGear');
		
		$('.slide #SWR50').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR50:pdp:unboundalllimits:ms:sg:exploreEssentials');
		
		$('.slide #SWR30').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('#start-embarking-SWR30').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:sg:EmbarkingGear');
		
		$('.slide #SWR10').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('#everyday-training-SWR10').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:sg:TrainingGear');
		$('#start-cycling-SWR10').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:sg:CyclingGear');
		
		$('.slide #SWR12').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('#start-swimming-SWR12').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:sg:SwimmingGear');
		
		$('.slide #Z5Premium').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('#start-cycling-Z5Premium').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:sg:CyclingGear');
		$('#start-embarking-Z5Premium').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:sg:EmbarkingGear');
		$('#everyday-training-Z5Premium').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:sg:TrainingGear');
		$('#start-swimming-Z5Premium').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:sg:SwimmingGear');
				
		$('.slide #BLT-UHM1').attr('href', 'http://www.sony.com.sg/electronics/actioncam-mounting-accessories/blt-uhm1?cid=BLT-UHM1:pdp:unboundalllimits:ms:sg:exploreEssentials');
		
		$('.slide #VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories?cid=VCT-HM1:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('#start-cycling-VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories?cid=VCT-HM1:pdp:unboundalllimits:ms:sg:CyclingGear');
		
		$('.slide #VCT-AMP1').attr('href', 'http://www.sony.com.sg/electronics/actioncam-mounting-accessories/vct-amp1?cid=VCT-AMP1:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('.slide #RM-LVR2').attr('href', 'http://www.sony.com.sg/electronics/actioncam-live-view-remote/rm-lvr2?cid=RM-LVR2:pdp:unboundalllimits:ms:sg:exploreEssentials');
		
		$('.slide #FDR-AX100').attr('href', 'http://www.sony.com.sg/electronics/handycam-camcorders/fdr-ax100e?cid=FDR-AX100:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('#start-embarking-FDR-AX100').attr('href', 'http://www.sony.com.sg/electronics/handycam-camcorders/fdr-ax100e?cid=FDR-AX100:pdp:unboundalllimits:ms:sg:EmbarkingGear');
		
		$('.slide #NW-WS413').attr('href', 'http://www.sony.com.sg/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('#start-cycling-NW-WS413').attr('href', 'http://www.sony.com.sg/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:sg:CyclingGear');
		$('#start-embarking-NW-WS413').attr('href', 'http://www.sony.com.sg/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:sg:EmbarkingGear');
		
		$('.slide #AS200').attr('href', 'http://www.sony.com.sg/electronics/headphones/t/in-ear-headphones?cid=AS200:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('.slide #AS400EX').attr('href', 'http://www.sony.com.sg/electronics/in-ear-headphones/mdr-as400ex-400ip?cid=AS400EX/400IP:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('.slide #AS600BT').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as600bt?cid=AS600BT:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('.slide #AS800BT').attr('href', 'http://www.sony.com.sg/electronics/in-ear-headphones/mdr-as800bt?cid=AS800BT:pdp:unboundalllimits:ms:sg:exploreEssentials');
		
		$('.slide #NWZ-WS610').attr('href', 'http://www.sony.com.sg/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('#start-swimming-NWZ-WS610').attr('href', 'http://www.sony.com.sg/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:sg:SwimmingGear');
		
		$('.slide #SSE-BTR1').attr('href', 'http://www.sony.com.sg/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:sg:exploreEssentials');
		$('#everyday-training-SSE-BTR1').attr('href', 'http://www.sony.com.sg/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:sg:TrainingGear');
		
		//Athlete Bio Products
		$('#jiajie-SSE-BTR1').attr('href', 'http://www.sony.com.sg/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:sg:jiajie');
		$('#jiajie-SWR12').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:sg:jiajie');
		$('#jiajie-Z5Premium').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:sg:jiajie');
		$('#jiajie-FDR-X1000V').attr('href', 'http://www.sony.com.sg/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:sg:jiajie');
		$('#waimun-SSE-BTR1').attr('href', 'http://www.sony.com.sg/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:sg:waimun');
		$('#waimun-SWR12').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:sg:waimun');
		$('#waimun-Z5Premium').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:sg:waimun');
		$('#waimun-FDR-X1000V').attr('href', 'http://www.sony.com.sg/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:sg:waimun');
		$('#elvia-SSE-BTR1').attr('href', 'http://www.sony.com.sg/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:sg:elvia');
		$('#elvia-SWR12').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:sg:elvia');
		$('#elvia-Z5Premium').attr('href', 'http://www.sony.com.sg/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:sg:elvia');
		break;
	
	case 'Malaysia' :		
		$('.slide #FDR-X1000V').attr('href', 'http://www.sony.com.my/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('#start-cycling-FDR-X1000V').attr('href', 'http://www.sony.com.my/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:my:CyclingGear');
		$('#start-embarking-FDR-X1000V').attr('href', 'http://www.sony.com.my/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:my:EmbarkingGear');
		$('#start-swimming-FDR-X1000V').attr('href', 'http://www.sony.com.my/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:my:SwimmingGear');
		
		$('.slide #SWR50').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR50:pdp:unboundalllimits:ms:my:exploreEssentials');
		
		$('.slide #SWR30').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('#start-embarking-SWR30').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:my:EmbarkingGear');
		
		$('.slide #SWR10').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('#everyday-training-SWR10').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:my:TrainingGear');
		$('#start-cycling-SWR10').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:my:CyclingGear');
		
		$('.slide #SWR12').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('#start-swimming-SWR12').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:my:SwimmingGear');
		
		$('.slide #Z5Premium').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('#start-cycling-Z5Premium').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:my:CyclingGear');
		$('#start-embarking-Z5Premium').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:my:EmbarkingGear');
		$('#everyday-training-Z5Premium').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:my:TrainingGear');
		$('#start-swimming-Z5Premium').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:my:SwimmingGear');
		
		$('.slide #BLT-UHM1').attr('href', 'http://www.sony.com.my/electronics/actioncam-mounting-accessories/blt-uhm1?cid=BLT-UHM1:pdp:unboundalllimits:ms:my:exploreEssentials');
		
		$('.slide #VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories?cid=VCT-HM1:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('#start-cycling-VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories ?cid=VCT-HM1:pdp:unboundalllimits:ms:my:CyclingGear');
		
		$('.slide #VCT-AMP1').attr('href', 'http://www.sony.com.my/electronics/actioncam-mounting-accessories/vct-amp1?cid=VCT-AMP1:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('.slide #RM-LVR2').attr('href', 'http://www.sony.com.my/electronics/actioncam-live-view-remote/rm-lvr2?cid=RM-LVR2:pdp:unboundalllimits:ms:my:exploreEssentials');
		
		$('.slide #FDR-AX100').attr('href', 'http://www.sony.com.my/electronics/handycam-camcorders/fdr-ax100e?cid=FDR-AX100:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('#start-embarking-FDR-AX100').attr('href', 'http://www.sony.com.my/electronics/handycam-camcorders/fdr-ax100e?cid=FDR-AX100:pdp:unboundalllimits:ms:my:EmbarkingGear');
		
		$('.slide #NW-WS413').attr('href', 'http://www.sony.com.my/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('#start-cycling-NW-WS413').attr('href', 'http://www.sony.com.my/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:my:CyclingGear');
		$('#start-embarking-NW-WS413').attr('href', 'http://www.sony.com.my/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:my:EmbarkingGear');
		
		$('.slide #AS200').attr('href', 'http://www.sony.com.my/electronics/headphones/t/in-ear-headphones?cid=AS200:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('.slide #AS400EX').attr('href', 'http://www.sony.com.my/electronics/in-ear-headphones/mdr-as400ex-400ip?cid=AS400EX/400IP:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('.slide #AS600BT').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as600bt?cid=AS600BT:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('.slide #AS800BT').attr('href', 'http://www.sony.com.my/electronics/in-ear-headphones/mdr-as800bt?cid=AS800BT:pdp:unboundalllimits:ms:my:exploreEssentials');
		
		$('.slide #NWZ-WS610').attr('href', 'http://www.sony.com.my/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:my:exploreEssentials');
		$('#start-swimming-NWZ-WS610').attr('href', 'http://www.sony.com.my/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:my:SwimmingGear');
		
		$('.slide #SSE-BTR1').attr('href', 'http://www.sony.com.my/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:my:exploreEssentials');	
		$('#everyday-training-SSE-BTR1').attr('href', 'http://www.sony.com.my/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:my:TrainingGear');
		
		//Athlete Bio Products
		$('#jiajie-SSE-BTR1').attr('href', 'http://www.sony.com.my/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:my:jiajie');
		$('#jiajie-SWR12').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:my:jiajie');
		$('#jiajie-Z5Premium').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:my:jiajie');
		$('#jiajie-FDR-X1000V').attr('href', 'http://www.sony.com.my/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:my:jiajie');
		$('#waimun-SSE-BTR1').attr('href', 'http://www.sony.com.my/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:my:waimun');
		$('#waimun-SWR12').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:my:waimun');
		$('#waimun-Z5Premium').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:my:waimun');
		$('#waimun-FDR-X1000V').attr('href', 'http://www.sony.com.my/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:my:waimun');
		$('#elvia-SSE-BTR1').attr('href', 'http://www.sony.com.my/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:my:elvia');
		$('#elvia-SWR12').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:my:elvia');
		$('#elvia-Z5Premium').attr('href', 'http://www.sony.com.my/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:my:elvia');
		break;
	
	case 'Thailand' :
		//Checking the Language Selection
		if(window.location.href.indexOf("/th") == "-1")
			th_language_mode = "en";
		else
			th_language_mode = "th";
		
		$('.slide #FDR-X1000V').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('#start-cycling-FDR-X1000V').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:th:'+th_language_mode+':CyclingGear');
		$('#start-embarking-FDR-X1000V').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:th:'+th_language_mode+':EmbarkingGear');
		$('#start-swimming-FDR-X1000V').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:th:'+th_language_mode+':SwimmingGear');
		
		$('.slide #SWR50').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR50:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		
		$('.slide #SWR30').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('#start-embarking-SWR30').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:th:'+th_language_mode+':EmbarkingGear');
		
		$('.slide #SWR10').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('#everyday-training-SWR10').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:th:'+th_language_mode+':TrainingGear');
		$('#start-cycling-SWR10').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:th:'+th_language_mode+':CyclingGear');
		
		$('.slide #SWR12').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('#start-swimming-SWR12').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:th:'+th_language_mode+':SwimmingGear');
		
		$('.slide #Z5Premium').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('#start-cycling-Z5Premium').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:th:'+th_language_mode+':CyclingGear');
		$('#start-embarking-Z5Premium').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:th:'+th_language_mode+':EmbarkingGear');
		$('#everyday-training-Z5Premium').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:th:'+th_language_mode+':TrainingGear');
		$('#start-swimming-Z5Premium').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:th:'+th_language_mode+':SwimmingGear');
		
		$('.slide #BLT-UHM1').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/actioncam-mounting-accessories/blt-uhm1?cid=BLT-UHM1:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		
		$('.slide #VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories?cid=VCT-HM1:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('#start-cycling-VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories?cid=VCT-HM1:pdp:unboundalllimits:ms:th:'+th_language_mode+':CyclingGear');
		
		$('.slide #VCT-AMP1').attr('href', 'http://www.sony-asia.com/electronics/actioncam-mounting-accessories/vct-amp1?cid=VCT-AMP1:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('.slide #RM-LVR2').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/actioncam-live-view-remote/rm-lvr2?cid=RM-LVR2:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		
		$('.slide #FDR-AX100').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/handycam-camcorders/fdr-ax100e?cid=FDR-AX100:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('#start-embarking-FDR-AX100').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/handycam-camcorders/fdr-ax100e?cid=FDR-AX100:pdp:unboundalllimits:ms:th:'+th_language_mode+':EmbarkingGear');
		
		$('.slide #NW-WS413').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('#start-cycling-NW-WS413').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:th:'+th_language_mode+':CyclingGear');
		$('#start-embarking-NW-WS413').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:th:'+th_language_mode+':EmbarkingGear');
		
		$('.slide #AS200').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/headphones/t/in-ear-headphones?cid=AS200:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('.slide #AS400EX').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as400ex-400ip?cid=AS400EX/400IP:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('.slide #AS600BT').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as600bt?cid=AS600BT:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('.slide #AS800BT').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/in-ear-headphones/mdr-as800bt?cid=AS800BT:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		
		$('.slide #NWZ-WS610').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('#start-swimming-NWZ-WS610').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:th:'+th_language_mode+':SwimmingGear');
		
		$('.slide #SSE-BTR1').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:th:'+th_language_mode+':exploreEssentials');
		$('#everyday-training-SSE-BTR1').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:th:'+th_language_mode+':TrainingGear');
		
		//Athlete Bio Products
		$('#jiajie-SSE-BTR1').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:th:'+th_language_mode+':jiajie');
		$('#jiajie-SWR12').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:th:'+th_language_mode+':jiajie');
		$('#jiajie-Z5Premium').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:th:'+th_language_mode+':jiajie');
		$('#jiajie-FDR-X1000V').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:th:'+th_language_mode+':jiajie');
		$('#waimun-SSE-BTR1').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:th:'+th_language_mode+':waimun');
		$('#waimun-SWR12').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:th:'+th_language_mode+':waimun');
		$('#waimun-Z5Premium').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:th:'+th_language_mode+':waimun');
		$('#waimun-FDR-X1000V').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:th:'+th_language_mode+':waimun');
		$('#elvia-SSE-BTR1').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:th:'+th_language_mode+':elvia');
		$('#elvia-SWR12').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:th:'+th_language_mode+':elvia');
		$('#elvia-Z5Premium').attr('href', 'http://www.sony.co.th/'+th_language_mode+'/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:th:'+th_language_mode+':elvia');
		break;
	
	case 'Vietnam' :
		$('.slide #FDR-X1000V').attr('href', 'http://www.sony.com.vn/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('#start-cycling-FDR-X1000V').attr('href', 'http://www.sony.com.vn/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:vn:CyclingGear');
		$('#start-embarking-FDR-X1000V').attr('href', 'http://www.sony.com.vn/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:vn:EmbarkingGear');
		$('#start-swimming-FDR-X1000V').attr('href', 'http://www.sony.com.vn/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:vn:SwimmingGear');
		
		$('.slide #SWR50').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR50:pdp:unboundalllimits:ms:vn:exploreEssentials');
		
		$('.slide #SWR30').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR30:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('#start-embarking-SWR30').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR30:pdp:unboundalllimits:ms:vn:EmbarkingGear');
		
		$('.slide #SWR10').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR-10:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('#everyday-training-SWR10').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR-10:pdp:unboundalllimits:ms:vn:TrainingGear');
		$('#start-cycling-SWR10').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR-10:pdp:unboundalllimits:ms:vn:CyclingGear');
		
		$('.slide #SWR12').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR12:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('#start-swimming-SWR12').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR12:pdp:unboundalllimits:ms:vn:SwimmingGear');
		
		$('.slide #Z5Premium').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('#start-cycling-Z5Premium').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:vn:CyclingGear');
		$('#start-embarking-Z5Premium').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:vn:EmbarkingGear');
		$('#everyday-training-Z5Premium').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:vn:TrainingGear');
		$('#start-swimming-Z5Premium').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:vn:SwimmingGear');
		
		$('.slide #BLT-UHM1').attr('href', 'http://www.sony.com.vn/electronics/phu-kien-lap-ghep-actioncam/blt-uhm1?cid=BLT-UHM1:pdp:unboundalllimits:ms:vn:exploreEssentials');
		
		$('.slide #VCT-HM1').attr('href', 'http://www.sony.com.vn/electronics/action-cam/t/gia-gan-action-camera?cid=VCT-HM1:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('#start-cycling-VCT-HM1').attr('href', 'http://www.sony.com.vn/electronics/action-cam/t/gia-gan-action-camera?cid=VCT-HM1:pdp:unboundalllimits:ms:vn:CyclingGear');
		
		$('.slide #VCT-AMP1').attr('href', 'http://www.sony.com.vn/electronics/phu-kien-lap-ghep-actioncam/vct-amp1?cid=VCT-AMP1:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('.slide #RM-LVR2').attr('href', 'http://www.sony.com.vn/electronics/dieu-khien-tu-xa-dang-xem-truc-tiep-actioncam/rm-lvr2?cid=RM-LVR2:pdp:unboundalllimits:ms:vn:exploreEssentials');
		
		$('.slide #FDR-AX100').attr('href', 'http://www.sony-asia.com/electronics/handycam-camcorders/fdr-ax100e?cid=FDR-AX100:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('#start-embarking-FDR-AX100').attr('href', 'http://www.sony-asia.com/electronics/handycam-camcorders/fdr-ax100e?cid=FDR-AX100:pdp:unboundalllimits:ms:vn:EmbarkingGear');
		
		$('.slide #NW-WS413').attr('href', 'http://www.sony.com.vn/electronics/may-nghe-nhac-ky-thuat-so-walkman/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('#start-cycling-NW-WS413').attr('href', 'http://www.sony.com.vn/electronics/may-nghe-nhac-ky-thuat-so-walkman/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:vn:CyclingGear');
		$('#start-embarking-NW-WS413').attr('href', 'http://www.sony.com.vn/electronics/may-nghe-nhac-ky-thuat-so-walkman/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:vn:EmbarkingGear');
		
		$('.slide #AS200').attr('href', 'http://www.sony.com.vn/electronics/tai-nghe/t/tai-nghe-in-ear?cid=AS200:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('.slide #AS400EX').attr('href', 'http://www.sony.com.vn/electronics/tai-nghe-in-ear/mdr-as400ex-400ip?cid=AS400EX/400IP:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('.slide #AS600BT').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as600bt?cid=AS600BT:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('.slide #AS800BT').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as800bt?cid=AS800BT:pdp:unboundalllimits:ms:vn:exploreEssentials');
		
		$('.slide #NWZ-WS610').attr('href', 'http://www.sony-asia.com/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:vn:exploreEssentials');
		$('#start-swimming-NWZ-WS610').attr('href', 'http://www.sony-asia.com/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:vn:SwimmingGear');
		
		$('.slide #SSE-BTR1').attr('href', 'http://www.sony.com.vn/electronics/thiet-bi-thong-minh/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:vn:exploreEssentials');		
		$('#everyday-training-SSE-BTR1').attr('href', 'http://www.sony.com.vn/electronics/thiet-bi-thong-minh/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:vn:TrainingGear');
		
		//Athlete Bio Products
		$('#jiajie-SSE-BTR1').attr('href', 'http://www.sony.com.vn/electronics/thiet-bi-thong-minh/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:vn:jiajie');
		$('#jiajie-SWR12').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR12:pdp:unboundalllimits:ms:vn:jiajie');
		$('#jiajie-Z5Premium').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:vn:jiajie');
		$('#jiajie-FDR-X1000V').attr('href', 'http://www.sony.com.vn/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:vn:jiajie');
		$('#waimun-SSE-BTR1').attr('href', 'http://www.sony.com.vn/electronics/thiet-bi-thong-minh/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:vn:waimun');
		$('#waimun-SWR12').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR12:pdp:unboundalllimits:ms:vn:waimun');
		$('#waimun-Z5Premium').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:vn:waimun');
		$('#waimun-FDR-X1000V').attr('href', 'http://www.sony.com.vn/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:vn:waimun');
		$('#elvia-SSE-BTR1').attr('href', 'http://www.sony.com.vn/electronics/thiet-bi-thong-minh/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:vn:elvia');
		$('#elvia-SWR12').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=SWR12:pdp:unboundalllimits:ms:vn:elvia');
		$('#elvia-Z5Premium').attr('href', 'http://www.sony.com.vn/electronics/di-dong-va-may-tinh-bang?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:vn:elvia');
		break;
	
	case 'Indonesia' :		
		$('.slide #FDR-X1000V').attr('href', 'http://www.sony.co.id/en/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('#start-cycling-FDR-X1000V').attr('href', 'http://www.sony.co.id/en/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:id:CyclingGear');
		$('#start-embarking-FDR-X1000V').attr('href', 'http://www.sony.co.id/en/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:id:EmbarkingGear');
		$('#start-swimming-FDR-X1000V').attr('href', 'http://www.sony.co.id/en/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:id:SwimmingGear');
		
		$('.slide #SWR50').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR50:pdp:unboundalllimits:ms:id:exploreEssentials');
		
		$('.slide #SWR30').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('#start-embarking-SWR30').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR30:pdp:unboundalllimits:ms:id:EmbarkingGear');
		
		$('.slide #SWR10').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('#everyday-training-SWR10').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:id:TrainingGear');
		$('#start-cycling-SWR10').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR-10:pdp:unboundalllimits:ms:id:CyclingGear');
		
		$('.slide #SWR12').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('#start-swimming-SWR12').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:id:SwimmingGear');
		
		$('.slide #Z5Premium').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('#start-cycling-Z5Premium').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:id:CyclingGear');
		$('#start-embarking-Z5Premium').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:id:EmbarkingGear');
		$('#everyday-training-Z5Premium').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:id:TrainingGear');
		$('#start-swimming-Z5Premium').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:id:SwimmingGear');
		
		$('.slide #BLT-UHM1').attr('href', 'http://www.sony-asia.com/electronics/actioncam-mounting-accessories/blt-uhm1?cid=BLT-UHM1:pdp:unboundalllimits:ms:id:exploreEssentials');
		
		$('.slide #VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories ?cid=VCT-HM1:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('#start-cycling-VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories ?cid=VCT-HM1:pdp:unboundalllimits:ms:id:CyclingGear');
		
		$('.slide #VCT-AMP1').attr('href', 'http://www.sony-asia.com/electronics/actioncam-mounting-accessories/vct-amp1?cid=VCT-AMP1:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('.slide #RM-LVR2').attr('href', 'http://www.sony.co.id/en/electronics/actioncam-live-view-remote/rm-lvr2?cid=RM-LVR2:pdp:unboundalllimits:ms:id:exploreEssentials');
		
		$('.slide #FDR-AX100').attr('href', 'http://www.sony.co.id/en/electronics/handycam-camcorders/fdr-ax100?cid=FDR-AX100:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('#start-embarking-FDR-AX100').attr('href', 'http://www.sony.co.id/en/electronics/handycam-camcorders/fdr-ax100?cid=FDR-AX100:pdp:unboundalllimits:ms:id:EmbarkingGear');
		
		$('.slide #NW-WS413').attr('href', 'http://www.sony.co.id/id/electronics/pemutar-musik-digital-walkman/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('#start-cycling-NW-WS413').attr('href', 'http://www.sony.co.id/id/electronics/pemutar-musik-digital-walkman/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:id:CyclingGear');
		$('#start-embarking-NW-WS413').attr('href', 'http://www.sony.co.id/id/electronics/pemutar-musik-digital-walkman/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:id:EmbarkingGear');
		
		$('.slide #AS200').attr('href', 'http://www.sony.co.id/en/electronics/headphones/t/in-ear-headphones?cid=AS200:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('.slide #AS400EX').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as400ex-400ip?cid=AS400EX/400IP:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('.slide #AS600BT').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as600bt?cid=AS600BT:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('.slide #AS800BT').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as800bt?cid=AS800BT:pdp:unboundalllimits:ms:id:exploreEssentials');
		
		$('.slide #NWZ-WS610').attr('href', 'http://www.sony.co.id/en/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:id:exploreEssentials');
		$('#start-swimming-NWZ-WS610').attr('href', 'http://www.sony.co.id/en/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:id:SwimmingGear');
		
		$('.slide #SSE-BTR1').attr('href', 'http://www.sony.co.id/en/electronics/smart-watch-products/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:id:exploreEssentials');		
		$('#everyday-training-SSE-BTR1').attr('href', 'http://www.sony.co.id/en/electronics/smart-watch-products/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:id:TrainingGear');
		
		//Athlete Bio Products
		$('#jiajie-SSE-BTR1').attr('href', 'http://www.sony.co.id/en/electronics/smart-watch-products/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:id:jiajie');
		$('#jiajie-SWR12').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:id:jiajie');
		$('#jiajie-Z5Premium').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:id:jiajie');
		$('#jiajie-FDR-X1000V').attr('href', 'http://www.sony.co.id/en/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:id:jiajie');
		$('#waimun-SSE-BTR1').attr('href', 'http://www.sony.co.id/en/electronics/smart-watch-products/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:id:waimun');
		$('#waimun-SWR12').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:id:waimun');
		$('#waimun-Z5Premium').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:id:waimun');
		$('#waimun-FDR-X1000V').attr('href', 'http://www.sony.co.id/en/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:id:waimun');
		$('#elvia-SSE-BTR1').attr('href', 'http://www.sony.co.id/en/electronics/smart-watch-products/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:id:elvia');
		$('#elvia-SWR12').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=SWR12:pdp:unboundalllimits:ms:id:elvia');
		$('#elvia-Z5Premium').attr('href', 'http://www.sony.co.id/en/electronics/mobile-tablets?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:id:elvia');
		break;
		
	case 'Philippines' :		
		$('.slide #FDR-X1000V').attr('href', 'http://www.sony.com.ph/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('#start-cycling-FDR-X1000V').attr('href', 'http://www.sony.com.ph/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ph:CyclingGear');
		$('#start-embarking-FDR-X1000V').attr('href', 'http://www.sony.com.ph/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ph:EmbarkingGear');
		$('#start-swimming-FDR-X1000V').attr('href', 'http://www.sony.com.ph/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ph:SwimmingGear');
		
		$('.slide #SWR50').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR50:pdp:unboundalllimits:ms:ph:exploreEssentials');
		
		$('.slide #SWR30').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR30:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('#start-embarking-SWR30').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR30:pdp:unboundalllimits:ms:ph:EmbarkingGear');
		
		$('.slide #SWR10').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR-10:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('#everyday-training-SWR10').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR-10:pdp:unboundalllimits:ms:ph:TrainingGear');
		$('#start-cycling-SWR10').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR-10:pdp:unboundalllimits:ms:ph:CyclingGear');
		
		$('.slide #SWR12').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR12:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('#start-swimming-SWR12').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR12:pdp:unboundalllimits:ms:ph:SwimmingGear');
		
		$('.slide #Z5Premium').attr('href', 'https://www.sony.com.ph/microsite/xperiamobile/index.html?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('#start-cycling-Z5Premium').attr('href', 'https://www.sony.com.ph/microsite/xperiamobile/index.html?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ph:CyclingGear');
		$('#start-embarking-Z5Premium').attr('href', 'https://www.sony.com.ph/microsite/xperiamobile/index.html?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ph:EmbarkingGear');
		$('#everyday-training-Z5Premium').attr('href', 'https://www.sony.com.ph/microsite/xperiamobile/index.html?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ph:TrainingGear');
		$('#start-swimming-Z5Premium').attr('href', 'https://www.sony.com.ph/microsite/xperiamobile/index.html?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ph:SwimmingGear');
		
		$('.slide #BLT-UHM1').attr('href', 'http://www.sony.com.ph/electronics/actioncam-mounting-accessories/blt-uhm1?cid=BLT-UHM1:pdp:unboundalllimits:ms:ph:exploreEssentials');
		
		$('.slide #VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories?cid=VCT-HM1:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('#start-cycling-VCT-HM1').attr('href', 'http://www.sony.com.sg/electronics/action-cam/t/action-camera-mounts-accessories?cid=VCT-HM1:pdp:unboundalllimits:ms:ph:CyclingGear');
		
		$('.slide #VCT-AMP1').attr('href', 'http://www.sony.com.ph/electronics/actioncam-mounting-accessories/vct-amp1?cid=VCT-AMP1:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('.slide #RM-LVR2').attr('href', 'http://www.sony.com.ph/electronics/actioncam-live-view-remote/rm-lvr2?cid=RM-LVR2:pdp:unboundalllimits:ms:ph:exploreEssentials');
		
		$('.slide #FDR-AX100').attr('href', 'http://www.sony.com.ph/electronics/handycam-camcorders/fdr-ax100?cid=FDR-AX100:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('#start-embarking-FDR-AX100').attr('href', 'http://www.sony.com.ph/electronics/handycam-camcorders/fdr-ax100?cid=FDR-AX100:pdp:unboundalllimits:ms:ph:EmbarkingGear');
		
		$('.slide #NW-WS413').attr('href', 'http://www.sony.com.ph/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('#start-cycling-NW-WS413').attr('href', 'http://www.sony.com.ph/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:ph:CyclingGear');
		$('#start-embarking-NW-WS413').attr('href', 'http://www.sony.com.ph/electronics/walkman-digital-music-players/t/walkman?cid=NW-WS413:pdp:unboundalllimits:ms:ph:EmbarkingGear');
		
		$('.slide #AS200').attr('href', 'http://www.sony.com.ph/electronics/headphones/t/in-ear-headphones?cid=AS200:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('.slide #AS400EX').attr('href', 'http://www.sony.com.ph/electronics/in-ear-headphones/mdr-as400ex-400ip?cid=AS400EX/400IP:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('.slide #AS600BT').attr('href', 'http://www.sony-asia.com/electronics/in-ear-headphones/mdr-as600bt?cid=AS600BT:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('.slide #AS800BT').attr('href', 'http://www.sony.com.ph/electronics/in-ear-headphones/mdr-as800bt?cid=AS800BT:pdp:unboundalllimits:ms:ph:exploreEssentials');
		
		$('.slide #NWZ-WS610').attr('href', 'http://www.sony.com.ph/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:ph:exploreEssentials');
		$('#start-swimming-NWZ-WS610').attr('href', 'http://www.sony.com.ph/electronics/walkman/nwz-ws610-series?cid=NWZ-WS610:pdp:unboundalllimits:ms:ph:SwimmingGear');
		
		$('.slide #SSE-BTR1').attr('href', 'http://www.sony.com.ph/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ph:exploreEssentials');		
		$('#everyday-training-SSE-BTR1').attr('href', 'http://www.sony.com.ph/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ph:TrainingGear');
		
		//Athlete Bio Products
		$('#jiajie-SSE-BTR1').attr('href', 'http://www.sony.com.ph/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ph:jiajie');
		$('#jiajie-SWR12').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR12:pdp:unboundalllimits:ms:ph:jiajie');
		$('#jiajie-Z5Premium').attr('href', 'https://www.sony.com.ph/microsite/xperiamobile/index.html?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ph:jiajie');
		$('#jiajie-FDR-X1000V').attr('href', 'http://www.sony.com.ph/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ph:jiajie');
		$('#waimun-SSE-BTR1').attr('href', 'http://www.sony.com.ph/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ph:waimun');
		$('#waimun-SWR12').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR12:pdp:unboundalllimits:ms:ph:waimun');
		$('#waimun-Z5Premium').attr('href', 'https://www.sony.com.ph/microsite/xperiamobile/index.html?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ph:waimun');
		$('#waimun-FDR-X1000V').attr('href', 'http://www.sony.com.ph/electronics/actioncam/fdr-x1000v-body-kit?cid=FDR-X1000V:pdp:unboundalllimits:ms:ph:waimun');
		$('#elvia-SSE-BTR1').attr('href', 'http://www.sony.com.ph/electronics/smart-devices/sse-btr1?cid=SSE-BTR1:pdp:unboundalllimits:ms:ph:elvia');
		$('#elvia-SWR12').attr('href', 'https://www.sony.com.ph/microsite/xperiasmartwear/index.html?cid=SWR12:pdp:unboundalllimits:ms:ph:elvia');
		$('#elvia-Z5Premium').attr('href', 'https://www.sony.com.ph/microsite/xperiamobile/index.html?cid=XperiaZ5Premium:pdp:unboundalllimits:ms:ph:elvia');
		break;
	}		
}