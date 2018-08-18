var NMData;

var main = (function() {

	var ImportNMList;

	/**
	* LocalStrageからNMデータを読み込む
	* データが無ければ、初期値を設定する
	*/
	function loadData() {
		var NMDataJson = localStorage.getItem('NMData');
		var importNMListJson = localStorage.getItem('NMList');
		var version = localStorage.getItem('Version');
		//データがない場合初期値設定
		if(NMDataJson == null || importNMListJson == null) {
			main.resetData(false);
			loadData();
			return;
		}
		if(version < $('#version').text()) {
			$('#oldMsg').css('display','inline');
		}
		NMData = JSON.parse(NMDataJson);
		ImportNMList = JSON.parse(importNMListJson);
		$('#NMData').val(NMDataJson);
		$('#ImportNMList').val(importNMListJson);
	}

	/**
	* NMテーブルを作成する
	*/
	function makeTable() {
		var i = 0;
		$('#NMTable tbody tr').each(function(){
			var cells = $(this).children();
			//NMが無いデータは行を非表示にする
			if(NMData[i][1] == '') {
				$(cells[1]).parent().css('display','none');
			} else {
				$(cells[0]).text(NMData[i][0]);
				$(cells[1]).text(NMData[i][1]);
				$(cells[4]).text(NMData[i][2]);
				$(cells[5]).text(NMData[i][3]);
				$(cells[6]).text(NMData[i][4]);
			}
			i++;
		});
	}

	/**
	* 天気情報をプルダウンに設定
	*/
	function setWeatherData() {
		var weathers = WeatherFinder.weatherLists['Pagos'];
		var selects = $("#HopeWeather").add("#BeforeWeather");
		for (var w in weathers) {
			selects.append('<option value="' + weathers[w].id + '">' + WeatherFinder.getWeatherName(weathers[w].id) + '</option>');
		}
	}

	var global = {

		/**
		 * ページの初期処理
		 */
		init: function() {
			loadData();
			makeTable();
			setWeatherData();
			time.init();
			map.setMap();
			time.times();
			time.result();
		},

		/**
		 * シャウトテキストの取り込み
		 */
		importText: function(){
			var text = $('#importText').val();
			//時間を設定
			for (var i = 0; i < ImportNMList.length; i++) {
					try {
						var pattern = new RegExp(ImportNMList[i][0],'i');
						var result = text.match(pattern);
						result[0] = '';
						var time = result.join('');
						if (time.search(/^[0-9]+$/) == 0){
								//取得した時間が数値の場合、時間を設定
								$('#' + ImportNMList[i][1]).val(time);
						}
					} catch (e) {
							console.log(pattern);
							console.log(e);
					}
				}
		},

		/**
		 * 時間を初期化する
		 */
		clearTime: function(){
			for (var i = 0; i < 20; i++) {
				$("#NM"+('00'+i).slice(-2)).val("");
			}
			time.result();
		},

		/**
		 * 現在時刻を入力する
		 */
		pressNow: function(No){
			var jikan = new Date();
			var hour =('00'+jikan.getHours()).slice(-2);
			var minute =('00'+jikan.getMinutes()).slice(-2);
			var now = parseInt("" + hour + minute,10);
			$("#NM" + ('00'+No).slice(-2) ).val(now);
			time.result();
		},

		/**
		 * シャウト文をコピーする
		 */
		copyText: function(){
			$('#result').select();
			document.execCommand("copy");
		},

		/**
		* データをLocalStrageに設定する
		*/
		saveData: function() {
			var tempNMData;
			var tempNMList;
			var NMDataJson = $('#NMData').val();
			var importNMListJson = $('#ImportNMList').val();
			//NMDataの形式チェック
			try{
				tempNMData = JSON.parse(NMDataJson);
				for (var i = 0; i < tempNMData.length; i++) {
					if(tempNMData[i].length != 10){
						alert($('#errorMsg1').text().replace('$',i+1)	);
						return;
					}
					if(isNaN(tempNMData[i][5])){
						alert($('#errorMsg2').text().replace('$',i+1));
						return;
					}
					if(isNaN(tempNMData[i][6])){
						alert($('#errorMsg3').text().replace('$',i+1));
						return;
					}
				}
			} catch(e) {
				alert($('#errorMsg6').text().replace('$',i+1));
				console.log(e);
				return;
			}
			//NMListの形式チェック
			try{
				var regex = new RegExp(/NM0[1-9]|1[0-9]|20/);
				tempNMList = JSON.parse(importNMListJson);
				for (var i = 0; i < tempNMList.length; i++) {
					if(tempNMList[i].length != 2){
						alert($('#errorMsg4').text().replace('$',i+1));
						return;
					}
					if(!tempNMList[i][1].match(regex)){
						alert($('#errorMsg5').text().replace('$',i+1));
						return;
					}
				}
			} catch(e) {
				alert($('#errorMsg6').text().replace('$',i+1));
				console.log(e);
				return;
			}
			localStorage.setItem('NMData', NMDataJson);
			localStorage.setItem('NMList', importNMListJson);
			alert($('#successMsg1').text());
		},

		/**
		* LocalStrageのデータを初期化する
		* @param {msgFlag} 成功メッセージを表示する(true:表示する、false:表示しない)
		*/
		resetData: function(msgFlag) {
			var tempNMData;
			var tempNMList;
			//	 EL,	NM,					Triger,					Lv,	Remarks,	x,	y,	shout1,				shout2,			shout3
			tempNMData=[
				['20',	'白き支配者「雪の女王」',		'ユキンコ',				'25',	'',		'21.7',	'26.3',	'[2]雪の女王',			'女王',		'女王'		],
				['21',	'腐れる読書家「タキシム」',		'デモン・オブ・レアブック',		'26',	'ET19:00～5:59','25.9',	'27.4',	'[3]タキシム',			'タキシム',		'タキシム'	],
				['22',	'灰殻の鱗王「アッシュドラゴン」',	'ブラッドデーモン',			'27',	'',		'30.0',	'29.7',	'[4]アッシュドラゴン',		'ドラゴン',		'ドラゴン'	],
				['23',	'地殻変動の謎「グラヴォイド」',		'バルウォーム',				'28',	'',		'32.8',	'27.2',	'[5]グラヴォイド',		'ヴォイド',		'芋虫'		],
				['24',	'雪解けの化身「アナポ」',		'スノウメルトスプライト',		'29',	'霧',		'32.9',	'21.6',	'[6]アナポ',			'アナポ',		'アナポ'	],
				['25',	'五行眼の主「ハクタク」',		'ブラバーアイズ',			'30',	'',		'28.9',	'22.3',	'[7]ハクタク',			'ハクタク',		'ハクタク'	],
				['26',	'動く雪洞「キングイグルー」',		'フワシ',				'31',	'',		'17.7',	'16.6',	'[8]キングイグルー',		'イグルー',		'イグルー'	],
				['27',	'硬質の病魔「アサグ」',			'ワンダリング・オプケン',		'32',	'',		'10.5',	'11.0',	'[9]アサグ',			'アサグ',		'アサグ'	],
				['28',	'家畜の慈母「スラビー」',		'パゴス・ビリー',			'33',	'',		'9.8',	'19.0',	'[10]スラビー',			'スラビー',		'スラビー'	],
				['29',	'円卓の霧王「キングアースロ」',		'バル・スニッパー',			'34',	'霧',		'8.7',	'15.4',	'[11]キングアースロ',		'アースロ',		'アースロ'	],
				['30',	'唇亡びて歯寒し(エルダータウルス)',	'ラボラトリー・ミノタウロス',		'35',	'',		'13.8',	'18.7',	'[12]エルダータウルス',		'タウルス',		'タウルス'	],
				['31',	'野牛の救い主「エウレカの聖牛」',	'エルダーバッファロー',			'36',	'',		'26.4',	'16.9',	'[14]エウレカの聖牛',		'聖牛',		'聖牛'		],
				['32',	'雷雲の魔獣「ハダヨッシュ」',		'ヴォイド・レッサードラゴン',		'37',	'雷',		'31.0',	'18.5',	'[15]ハダヨッシュ',		'ハダヨッシュ',	'ヨッシュ'	],
				['33',	'太陽の使者「ホルス」',			'ヴォイド・ヴィーヴル',			'38',	'',		'25',	'19',	'[16]ホルス',			'ホルス',		'ホルス'	],
				['34',	'闇眼王「アーチ・アンラ・マンユ」',	'ガウパー',				'39',	'',		'23',	'25',	'[17]アーチ・アンラ・マンユ',	'マンユ',		'マンユ'	],
				['35',	'模倣犯「コピーキャット・キャシー」',	'アムルタート、グリフィン、キメラ',	'40',	'',		'22',	'14',	'[18]コピーキャット・キャシー',	'キャシー',		'キャシー'	],
				['35',	'蒼き氷刃「ロウヒ」',			'バル・コープス',			'40',	'ET19:00～5:59','35.9',	'18.7',	'[19]ロウヒ',			'ロウヒ',		'ロウヒ'	],
				['',	'',					'',					'',	'',		'99',	'99',	'',				'',			''		],
				['',	'',					'',					'',	'',		'99',	'99',	'',				'',			''		],
				['',	'',					'',					'',	'',		'99',	'99',	'',				'',			''		]
			];

			tempNMList = [
				['雪の女王\\[(..):(..)\\]','NM01'],['タキシム\\[(..):(..)\\]','NM02'],['ドラゴン\\[(..):(..)\\]','NM03'],['ヴォイド\\[(..):(..)\\]','NM04'],['アナポ\\[(..):(..)\\]','NM05'],['ハクタク\\[(..):(..)\\]','NM06'],['イグルー\\[(..):(..)\\]','NM07'],['アサグ\\[(..):(..)\\]','NM08'],['スラビー\\[(..):(..)\\]','NM09'],['アースロ\\[(..):(..)\\]','NM10'],['タウルス\\[(..):(..)\\]','NM11'],['聖牛\\[(..):(..)\\]','NM12'],['ハダヨッシュ\\[(..):(..)\\]','NM13'],['ホルス\\[(..):(..)\\]','NM14'],['マンユ\\[(..):(..)\\]','NM15'],['キャシー\\[(..):(..)\\]','NM16'],['ロウヒ\\[(..):(..)\\]','NM17'],
				['雪の女王:(..):(..)','NM01'],['タキシム:(..):(..)','NM02'],['アッシュドラゴン:(..):(..)','NM03'],['グラヴォイド:(..):(..)','NM04'],['アナポ:(..):(..)','NM05'],['ハクタク:(..):(..)','NM06'],['キングイグルー:(..):(..)','NM07'],['アサグ:(..):(..)','NM08'],['スラビー:(..):(..)','NM09'],['キングアースロ:(..):(..)','NM10'],['エルダータウルス:(..):(..)','NM11'],['エウレカの聖牛:(..):(..)','NM12'],['ハダヨッシュ:(..):(..)','NM13'],['ホルス:(..):(..)','NM14'],['アーチ・アンラ・マンユ:(..):(..)','NM15'],['コピーキャット・キャシー:(..):(..)','NM16'],['ロウヒ:(..):(..)','NM17'],
				['女王\\[(..):(..)\\]','NM01'],['芋虫\\[(..):(..)\\]','NM04'],['アナボ\\[(..):(..)\\]','NM05'],['ヨッシュ\\[(..):(..)\\]','NM13'],
				['Queen\\[(..):(..)\\]','NM01'],['Taxim\\[(..):(..)\\]','NM02'],['AshDragon\\[(..):(..)\\]','NM03'],['Glavoid\\[(..):(..)\\]','NM04'],['Anapos\\[(..):(..)\\]','NM05'],['Hakutaku\\[(..):(..)\\]','NM06'],['Igloo\\[(..):(..)\\]','NM07'],['Asag\\[(..):(..)\\]','NM08'],['Surabhi\\[(..):(..)\\]','NM09'],['Arthro\\[(..):(..)\\]','NM10'],['Mindertaur\\[(..):(..)\\]','NM11'],['HolyCow\\[(..):(..)\\]','NM12'],['Hadhayosh\\[(..):(..)\\]','NM13'],['Horus\\[(..):(..)\\]','NM14'],['Mainyu\\[(..):(..)\\]','NM15'],['Cassie\\[(..):(..)\\]','NM16'],['Louhi\\[(..):(..)\\]','NM17'],
				['Queen:(..):(..)','NM01'],['Taxim:(..):(..)','NM02'],['AshDragon:(..):(..)','NM03'],['Glavoid:(..):(..)','NM04'],['Anapos:(..):(..)','NM05'],['Hakutaku:(..):(..)','NM06'],['Igloo:(..):(..)','NM07'],['Asag:(..):(..)','NM08'],['Surabhi:(..):(..)','NM09'],['Arthro:(..):(..)','NM10'],['Mindertaur:(..):(..)','NM11'],['HolyCow:(..):(..)','NM12'],['Hadhayosh:(..):(..)','NM13'],['Horus:(..):(..)','NM14'],['Mainyu:(..):(..)','NM15'],['Cassie:(..):(..)','NM16'],['Louhi:(..):(..)','NM17']
			];
			localStorage.setItem('NMData', JSON.stringify(tempNMData));
			localStorage.setItem('NMList', JSON.stringify(tempNMList));
			localStorage.setItem('Version', $('#version').text());
			if(msgFlag) {
				alert($('#successMsg2').text());
			}
		},

		/**
		* シャウト文変更チェックボックスの表示を切り替える
		* @param {viewFlag} シャウト文変更チェックボックスを表示する(true:表示する、false:表示しない)
		*/
		viewChangeShout: function(viewFlag) {
			if(viewFlag) {
				$('#ChangeShout').removeClass('viewChangeShoutFalse');
				$('#ChangeShout').addClass('viewChangeShoutTrue');
			} else {
				$('#ChangeShout').removeClass('viewChangeShoutTrue');
				$('#ChangeShout').addClass('viewChangeShoutFalse');
			}
		},

		/**
		* 天気を検索する
		*/
		searchWeather: function() {
			$("#watherResult").html('');
			var weatherStartTime = WeatherFinder.getWeatherTimeFloor(new Date()).getTime();
			var weatherStartHour = WeatherFinder.getEorzeaHour(weatherStartTime);
			var zone = 'Pagos';
			var targetWeather = $("#HopeWeather").val();
			var targetPrevWeather = $("#BeforeWeather").val();
			var tries = 0;
			var matches = 0;
			var weather = WeatherFinder.getWeather(weatherStartTime, zone);
			var prevWeather = WeatherFinder.getWeather(weatherStartTime-1, zone);
			while (tries < 1000 && matches < 3) {
				var weatherMatch = targetWeather == null;
				var prevWeatherMatch = targetPrevWeather == null;
				if (targetWeather == "" || targetWeather == weather.id) {
					weatherMatch = true;
				}
				if (targetPrevWeather == "" || targetPrevWeather == prevWeather.id) {
					prevWeatherMatch = true;
				}
				if (weatherMatch && prevWeatherMatch) {
					var weatherDate = new Date(weatherStartTime).toLocaleString();
					$("#watherResult").append('<tr><td>' + weatherStartHour + ':00</td><td>' + weatherDate + '</td></tr>');
					matches++;
				}
				weatherStartTime += 8 * 175 * 1000; // Increment by 8 Eorzean hours
				weatherStartHour = WeatherFinder.getEorzeaHour(weatherStartTime);
				prevWeather = weather;
				weather = WeatherFinder.getWeather(weatherStartTime, zone);
				tries++;
			}

			//検索該当無し
			if (matches == 0) {
				$("#watherResult").append('<td colspan="2">' + $('#noResultMsg').text() + '</td>');
			}
		}
	};
	return global;
})();

// ページ読み込み完了と同時に初期処理を実行する
$(window).on('load', main.init);