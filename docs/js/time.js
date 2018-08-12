var markinga = [];
var markingb = [];
var markingc= [];

var time = (function() {
	var Gminute = 0;

	var nms = [];
		 nms[0] = L.icon({
			iconUrl: 'mark/01.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[1] = L.icon({
			iconUrl: 'mark/02.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[2] = L.icon({
			iconUrl: 'mark/03.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[3] = L.icon({
			iconUrl: 'mark/04.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[4] = L.icon({
			iconUrl: 'mark/05.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[5] = L.icon({
			iconUrl: 'mark/06.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[6] = L.icon({
			iconUrl: 'mark/07.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[7] = L.icon({
			iconUrl: 'mark/08.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[8] = L.icon({
			iconUrl: 'mark/09.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[9] = L.icon({
			iconUrl: 'mark/10.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[10] = L.icon({
			iconUrl: 'mark/11.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[11] = L.icon({
			iconUrl: 'mark/12.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[12] = L.icon({
			iconUrl: 'mark/13.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[13] = L.icon({
			iconUrl: 'mark/14.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[14] = L.icon({
			iconUrl: 'mark/15.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[15] = L.icon({
			iconUrl: 'mark/16.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[16] = L.icon({
			iconUrl: 'mark/17.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[17] = L.icon({
			iconUrl: 'mark/18.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[18] = L.icon({
			iconUrl: 'mark/19.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nms[19] = L.icon({
			iconUrl: 'mark/20.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
			
		
	var anm = [];
		 anm[0] = L.icon({
			iconUrl: 'mark/101.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[1] = L.icon({
			iconUrl: 'mark/102.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[2] = L.icon({
			iconUrl: 'mark/103.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[3] = L.icon({
			iconUrl: 'mark/104.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[4] = L.icon({
			iconUrl: 'mark/105.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[5] = L.icon({
			iconUrl: 'mark/106.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[6] = L.icon({
			iconUrl: 'mark/107.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[7] = L.icon({
			iconUrl: 'mark/108.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[8] = L.icon({
			iconUrl: 'mark/109.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[9] = L.icon({
			iconUrl: 'mark/110.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[10] = L.icon({
			iconUrl: 'mark/111.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[11] = L.icon({
			iconUrl: 'mark/112.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[12] = L.icon({
			iconUrl: 'mark/113.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[13] = L.icon({
			iconUrl: 'mark/114.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[14] = L.icon({
			iconUrl: 'mark/115.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[15] = L.icon({
			iconUrl: 'mark/116.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[16] = L.icon({
			iconUrl: 'mark/117.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[17] = L.icon({
			iconUrl: 'mark/118.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[18] = L.icon({
			iconUrl: 'mark/119.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 anm[19] = L.icon({
			iconUrl: 'mark/120.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});	

	var nmy = [];
		 nmy[0] = L.icon({
			iconUrl: 'mark/201.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[1] = L.icon({
			iconUrl: 'mark/202.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[2] = L.icon({
			iconUrl: 'mark/203.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[3] = L.icon({
			iconUrl: 'mark/204.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[4] = L.icon({
			iconUrl: 'mark/205.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[5] = L.icon({
			iconUrl: 'mark/206.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[6] = L.icon({
			iconUrl: 'mark/207.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[7] = L.icon({
			iconUrl: 'mark/208.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[8] = L.icon({
			iconUrl: 'mark/209.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[9] = L.icon({
			iconUrl: 'mark/210.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[10] = L.icon({
			iconUrl: 'mark/211.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[11] = L.icon({
			iconUrl: 'mark/212.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[12] = L.icon({
			iconUrl: 'mark/213.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[13] = L.icon({
			iconUrl: 'mark/214.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[14] = L.icon({
			iconUrl: 'mark/215.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[15] = L.icon({
			iconUrl: 'mark/216.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[16] = L.icon({
			iconUrl: 'mark/217.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[17] = L.icon({
			iconUrl: 'mark/218.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[18] = L.icon({
			iconUrl: 'mark/219.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});
		 nmy[19] = L.icon({
			iconUrl: 'mark/220.png',
		
			iconSize: [32, 32],
			iconAnchor: [16,16],
			popupAnchor: [0, -8],
		});

	var localToEorzea = function(){
		var MONTHS_PER_YEAR = 12;
		var DATES_PER_MONTH = 32;
		var HOURS_PER_DATE = 24;
		var MINUTES_PER_HOUR = 60;
		var SECONDS_PER_MINUTE = 60;
		var MILLISECONDS_PER_SECONDS = 1000;
		var EORZEA_PER_LOCAL = 1440 / 70;
		var EORZEA_MILLISECONDS = 0;

		var MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECONDS * SECONDS_PER_MINUTE;
		var MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * MINUTES_PER_HOUR;
		var MILLISECONDS_PER_DATE = MILLISECONDS_PER_HOUR * HOURS_PER_DATE;
		var MILLISECONDS_PER_MONTH = MILLISECONDS_PER_DATE * DATES_PER_MONTH;

		return {
			setTime : function(time){
				var UNIX = time;
				EORZEA_MILLISECONDS = UNIX * EORZEA_PER_LOCAL;
			},
			setEtTime : function(time) {
				EORZEA_MILLISECONDS = time;
			},
			getMonth : function() {
				return Math.floor(EORZEA_MILLISECONDS / MILLISECONDS_PER_MONTH) % MONTHS_PER_YEAR;
			},
			getDate : function() {
				return Math.floor(EORZEA_MILLISECONDS / MILLISECONDS_PER_DATE) % DATES_PER_MONTH;
			},
			getHours : function() {
				return Math.floor(EORZEA_MILLISECONDS / MILLISECONDS_PER_HOUR) % HOURS_PER_DATE;
			},
			getMinutes : function() {
				return Math.floor(EORZEA_MILLISECONDS / MILLISECONDS_PER_MINUTE) % MINUTES_PER_HOUR;
			},
			getSeconds : function() {
				return Math.floor(EORZEA_MILLISECONDS / MILLISECONDS_PER_SECONDS) % SECONDS_PER_MINUTE;
			},
			getMilliseconds : function() {
				return EORZEA_MILLISECONDS % MILLISECONDS_PER_SECONDS;
			},
			getTime : function() {
				return EORZEA_MILLISECONDS;
			},
			getSpeed : function() {
				return Math.floor(1000 / EORZEA_PER_LOCAL);
			},
			getYears : function() {
				return Math.floor((EORZEA_MILLISECONDS / MILLISECONDS_PER_MONTH) / MONTHS_PER_YEAR)+1;
			}
		};
	};

	function EtoU(Eyear, Emonth, Eday, Ehour, Eminute, Esecond){
		var U =((((((Eyear-1) * 12 + Emonth) * 32 + Eday) * 24 + Ehour) * 60 + Eminute) * 60 +Esecond) * 70 / 1440;
		return U;
	}

	function localtime(){
		var LocalDate = new Date();
		var LocalUnix = LocalDate.getTime();
		var LtMonth = LocalDate.getMonth() + 1;
		var LtDate = LocalDate.getDate();
		var LtDay = LocalDate.getDay();
		var LtHour = LocalDate.getHours();
		var LtMinute = LocalDate.getMinutes();
		var LtSecond = LocalDate.getSeconds(); 
		var EorzeaDate = localToEorzea();
		EorzeaDate.setTime(LocalUnix);
		var EorzeaUnix = EorzeaDate.getTime();
		var EtSpeed = EorzeaDate.getSpeed();
		var EtMonth = EorzeaDate.getMonth() + 1;
		var EtDate = EorzeaDate.getDate() + 1;
		var EtHour = EorzeaDate.getHours();
		var EtMinute = EorzeaDate.getMinutes();
		var EtSecond = EorzeaDate.getSeconds();
		var EtYear = EorzeaDate.getYears();
		var jikan = new Date();
		var Lhour =('00'+jikan.getHours()).slice(-2);
		var Lminute =('00'+jikan.getMinutes()).slice(-2);
		var Lsecond =('00'+jikan.getSeconds()).slice(-2);
		var unix = Math.floor(jikan.getTime()/1000);
		var et_seconds = unix * 60.0 / 175.0;
		var et_hours = unix /175.0;
		var et_hour = et_hours % 24.0;
		var et_minute = et_seconds % 60.0;
		var Ehour =('00'+Math.floor(EtHour)).slice(-2);
		var Eminute =('00'+Math.floor(EtMinute)).slice(-2);

		if (Gminute != LtMinute){
			time.result();
			Gminnute = LtMinute;
		}
		if (EtHour < 8){
			var fE = '08:00';
			var fs = ((((8 * 60) + 0) * 60 + 0) - (((EtHour * 60) + EtMinute) * 60 + EtSecond)) * 70 / 1440 ;
			var sE = '16:00';
			var ss = ((((16 * 60) + 0) * 60 + 0) - (((EtHour * 60) + EtMinute) * 60 + EtSecond)) * 70 / 1440;
			var tE = '00:00';
			var ts = ((((24 * 60) + 0) * 60 + 0) - (((EtHour * 60) + EtMinute) * 60 + EtSecond)) * 70 / 1440;
		}
		if (EtHour >= 8 && EtHour < 16){
			var fE = '16:00';
			var fs = ((((16 * 60) + 0) * 60 + 0) - (((EtHour * 60) + EtMinute) * 60 + EtSecond)) * 70 / 1440;
			var sE = '00:00';
			var ss = ((((24 * 60) + 0) * 60 + 0) - (((EtHour * 60) + EtMinute) * 60 + EtSecond)) * 70 / 1440;
			var tE = '08:00';
			var ts = ((((32 * 60) + 0) * 60 + 0) - (((EtHour * 60) + EtMinute) * 60 + EtSecond)) * 70 / 1440;
		}
		if (EtHour >= 16){
			var fE = '00:00';
			var fs = ((((24 * 60) + 0) * 60 + 0) - (((EtHour * 60) + EtMinute) * 60 + EtSecond)) * 70 / 1440;
			var sE = '08:00';
			var ss = ((((32 * 60) + 0) * 60 + 0) - (((EtHour * 60) + EtMinute) * 60 + EtSecond)) * 70 / 1440;
			var tE = '16:00';
			var ts = ((((40 * 60) + 0) * 60 + 0) - (((EtHour * 60) + EtMinute) * 60 + EtSecond)) * 70 / 1440;
		}
		var flu = new Date(fs * 1000 + LocalUnix);
		var flt = (('00' + flu.getHours()).slice(-2)) + ':' + (('00' + flu.getMinutes()).slice(-2));
		var slu = new Date(ss * 1000 + LocalUnix);
		var slt = (('00' + slu.getHours()).slice(-2)) + ':' + (('00' + slu.getMinutes()).slice(-2));
		var tlu = new Date(ts * 1000 + LocalUnix);
		var tlt = (('00' + tlu.getHours()).slice(-2)) + ':' + (('00' + tlu.getMinutes()).slice(-2));

		var fLM = ('00' + Math.floor(fs / 60)).slice(-2);
		var fLS = ('00' + Math.floor(fs % 60)).slice(-2);
		var fL = fLM + '′' + fLS;
		var sLM = ('00' + Math.floor(ss / 60)).slice(-2);
		var sLS = ('00' + Math.floor(ss % 60)).slice(-2);
		var sL = sLM + '′' + sLS;
		var tLM = ('00' + Math.floor(ts / 60)).slice(-2);
		var tLS = ('00' + Math.floor(ts % 60)).slice(-2);
		var tL =tLM + '′' + tLS;
		var Ltime = Lhour + ':' + Lminute;
		var Etime = Ehour + ':' + Eminute;
		document.getElementById("eotime").innerHTML=Etime;
		document.getElementById("localtime").innerHTML=Ltime;
		document.getElementById("firstE").innerHTML=fE;
		document.getElementById("firstL").innerHTML=fL;
		document.getElementById("secondE").innerHTML=sE;
		document.getElementById("secondL").innerHTML=sL;
		document.getElementById("thirdE").innerHTML=tE;
		document.getElementById("thirdL").innerHTML=tL;
		document.getElementById("firstLT").innerHTML=flt;
		document.getElementById("secondLT").innerHTML=slt;
		document.getElementById("thirdLT").innerHTML=tlt;

		checkNM();
	}

	function result(){

		var radio = document.getElementsByName('trigger');
		var NM = [];
		var NH = [];
		var jikan = new Date();
		var hour =('00'+jikan.getHours()).slice(-2);
		var minute =('00'+jikan.getMinutes()).slice(-2);
		var now = parseInt("" + hour + minute,10);
		var NMb = [];
		var timeE = [];
		var timeL = [];

		for(let i = 0; i < 20; i++) {
			if (!(document.getElementById("NM" + ('00' + (i+1)).slice(-2)).value)){
				NM[i] = -1;
			} else {
				NM[i] = document.getElementById("NM" + ('00' + (i+1)).slice(-2)).value;
			}
		}

		for(let i = 0; i < NM.length; i++) {
			timeL[i] = jikan.getHours() * 60 + jikan.getMinutes();

			if(NM[i] == -1){
				NH[i] = "[--:--]";
			}else{
				NH[i]='[' + (('00' + NM[i]).slice(-4)).slice(-4,2) + ':' + ('00' + NM[i]).slice(-2) + ']';
			}

			if(document.getElementById('CH1').checked){
				if(NM[i] != -1){
					NMb[i] = parseInt((('00' + NM[i]).slice(-4)).slice(-4,2) ,10) * 60 + parseInt(('00' + NM[i]).slice(-2) ,10);
					if(now < NM[i]){
						timeL[i] = (jikan.getHours()+24 )* 60 + jikan.getMinutes();
					}
					if (NMb[i] +120 <= timeL[i]){
						NH[i] = '[OK!]';
					}
				}
			}
		}

		//shout文
		var NNM = [];
		for (var i = 0; i < NMData.length; i++) {
			if(NMData[i][7] != '') {
				NNM[i] = NMData[i][7] + NH[i];
			}
		}

		//shout文(略称)
		var NMR = [];
		for (var i = 0; i < NMData.length; i++) {
			if(NMData[i][8] != '') {
				NMR[i] = NMData[i][8] + NH[i];
			}
		}

		//shout文(むーむーさん準拠)
		var NMR2 = [];
		for (var i = 0; i < NMData.length; i++) {
			if(NMData[i][9] == null) {
				NMR2[i] = 'データ無し' + NH[i];
			} else if(NMData[i][9] != '') {
				NMR2[i] = NMData[i][9] + NH[i];
			}
		}

		for(let i = 0; i < NM.length; i++) {
			NM[i]=parseInt(NM[i],10);
			if(NM[i] == -1){
				NM[i] = 5000;
			} else if(NM[i] > now){
				NM[i]=NM[i]-2400;
			}
		}

		var users = [];
		for (var i = 0; i < NNM.length; i++) {
			users[i] = 
			{
				id:i+1,
				time:NM[i],
				name:NNM[i],
				namer:NMR[i],
				namer2:NMR2[i]
			}
		}

		//shout1の出力
		if(radio[0].checked){
			const order = [
			{key: "id", reverse: false}];
			users.sort(sort_by(order));
			var shout = "/sh " + users[0].name;
			for (var i = 1; i < users.length; i++) {
				if((i % 5) == 0) {
					shout = shout + "、\n/wait 1\n/sh " + users[i].name;
				} else {
					shout = shout + "、" + users[i].name;
				}
			}
		} else if(radio[1].checked){
			const order = [
			{key: "time", reverse: false},
			{key: "id", reverse: false}];
			users.sort(sort_by(order));
			var shout = "/sh " + users[0].name;
			for (var i = 1; i < users.length; i++) {
				if((i % 5) == 0) {
					shout = shout + "、\n/wait 1\n/sh " + users[i].name;
				} else {
					shout = shout + "、" + users[i].name;
				}
			}
		}

		//shout2の出力
		if(radio[2].checked){
			const order = [
			{key: "id", reverse: false}];
			users.sort(sort_by(order));
			var shout = "/sh " + users[0].namer;
			for (var i = 1; i < users.length; i++) {
				shout = shout + "、" + users[i].namer;
			}
		} else if(radio[3].checked){
			const order = [
			{key: "time", reverse: false},
			{key: "id", reverse: false}];
			users.sort(sort_by(order));
			var shout = "/sh " + users[0].namer;
			for (var i = 1; i < users.length; i++) {
				shout = shout + "、" + users[i].namer;
			}
		}

		//shout3の出力
		if(radio[4].checked){
			var shout = "/sh " + users[0].namer2;
			for (var i = 1; i < users.length; i++) {
				shout = shout + "、" + users[i].namer2;
			}
		}

		document.getElementById("result").value=shout;
	}


	function checkNM(){
		var NM = [];
		var jikan = new Date();
		var hour =('00'+jikan.getHours()).slice(-2);
		var minute =('00'+jikan.getMinutes()).slice(-2);
		var now = parseInt("" + hour + minute,10);
		var timeE = [];
		var timeL = [];

		for(let i = 0; i < 20; i++) {
			if (!(document.getElementById("NM" + ('00' + (i+1)).slice(-2)).value)){
				NM[i] = -1;
			} else {
				NM[i] = document.getElementById("NM" + ('00' + (i+1)).slice(-2)).value;
			}
		}

		for(let i = 0; i < NM.length; i++) {
			timeL[i] = jikan.getHours() * 60 + jikan.getMinutes();
			if(NM[i] == -1){
				NM[i] = -200;
			} else if(parseInt(NM[i], 10)> now){
				timeL[i] = (jikan.getHours()+24 )* 60 + jikan.getMinutes();
			}
			timeE[i] = parseInt((('00' + NM[i]).slice(-4)).slice(-4,2) ,10) * 60 + parseInt(('00' + NM[i]).slice(-2) ,10);
		}

		for(let i = 0; i < NM.length; i++){
			if (timeE[i] +120 <= timeL[i]){
				markinga[i].addTo(mapObj);
				markingc[i].remove(mapObj);
				markingb[i].remove(mapObj);
			}else if(timeE[i] +110 <= timeL[i]){
				markingc[i].addTo(mapObj);
				markingb[i].remove(mapObj);
				markinga[i].remove(mapObj);
			}else{
				markingb[i].addTo(mapObj);
				markinga[i].remove(mapObj);
				markingc[i].remove(mapObj);
			}
		}
	}

	function sort_by(list) {
		return (a, b) => {
			for (let i=0; i<list.length; i++) {
				const order_by = list[i].reverse ? 1 : -1;
				if (a[list[i].key] < b[list[i].key]) return order_by;
				if (a[list[i].key] > b[list[i].key]) return order_by * -1;
			}
			return 0;
		};
	}

	var global = {
		result: function(){
			result();
		},

		times: function(){
			setInterval(localtime,1000);
		},

		init: function(){
			//マップのマーカー設定
			var x = [];
			for (var i = 0; i < NMData.length; i++) {
				x[i] = NMData[i][5];
			}
			var y = [];
			for (var i = 0; i < NMData.length; i++) {
				y[i] = NMData[i][6];
			}
	
			for(let i = 0; i < nms.length; i++) {
				markinga[i] = L.marker(map.getLatlng(x[i],y[i]), {icon: nms[i]})
				.on('click', function(){main.pressNow(i+1);});
				markingb[i] = L.marker(map.getLatlng(x[i],y[i]), {icon: anm[i]})
				.on('click', function(){main.pressNow(i+1);});
				markingc[i] = L.marker(map.getLatlng(x[i],y[i]), {icon: nmy[i]})
				.on('click', function(){main.pressNow(i+1);});
			}
		}
	};
	return global;
})();