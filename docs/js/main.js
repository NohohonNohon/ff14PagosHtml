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
			$(cells[0]).text(NMData[i][0]);
			$(cells[1]).text(NMData[i][1]);
			$(cells[4]).text(NMData[i][2]);
			$(cells[5]).text(NMData[i][3]);
			$(cells[6]).text(NMData[i][4]);
			i++;
		});
	}


	var global = {

		/**
		 * ページの初期処理
		 */
		init: function() {
			loadData();
			makeTable();
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
				//eachはループを途中で中断できないため使えない
				for (var i = 0; i < tempNMData.length; i++) {
					if(tempNMData[i].length != 9){
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
			//	 EL,	NM,					Triger,				Lv,	Remarks,	x,	y,	shout1,				shout2
			tempNMData=[
				['20',	'雪上のしあわせうさぎ',			'不明',				'',	'',		'18.1',	'27.5',	'[1]雪うさぎ',			'雪うさぎ',		],
				['20',	'白き支配者「雪の女王」',		'ユキンコ',			'25',	'',		'21.0',	'26.2',	'[2]雪の女王',			'雪の女王',		],
				['21',	'腐れる読書家「タキシム」',		'デモン・オブ・レアブック',	'26',	'ET19:00～5:59','25.9',	'27.4',	'[3]タキシム',			'タキシム',		],
				['22',	'灰殻の鱗王「アッシュドラゴン」',	'ブラッドデーモン',		'27',	'',		'30.0',	'29.7',	'[4]アッシュドラゴン',		'ドラゴン',		],
				['23',	'地殻変動の謎「グラヴォイド」',		'バルウォーム',			'28',	'',		'32.8',	'27.2',	'[5]グラヴォイド',		'ヴォイド',		],
				['24',	'雪解けの化身「アナポ」',		'スノウメルトスプライト',	'29',	'霧',		'32.9',	'21.6',	'[6]アナポ',			'アナポ',		],
				['25',	'五行眼の主「ハクタク」',		'ブラバーアイズ',		'30',	'',		'28.9',	'22.3',	'[7]ハクタク',			'ハクタク',		],
				['26',	'動く雪洞「キングイグルー」',		'フワシ',			'31',	'',		'17.7',	'16.6',	'[8]キングイグルー',		'イグルー',		],
				['27',	'硬質の病魔「アサグ」',			'ワンダリング・オプケン',	'32',	'',		'10.5',	'11.0',	'[9]アサグ',			'アサグ',		],
				['28',	'家畜の慈母「スラビー」',		'パゴス・ビリー',		'33',	'',		'9.8',	'19.0',	'[10]スラビー',			'スラビー',		],
				['29',	'円卓の霧王「キングアースロ」',		'バル・スニッパー',		'34',	'',		'9',	'15',	'[11]キングアースロ',		'アースロ',		],
				['30',	'唇亡びて歯寒し(エルダータウルス)',	'ラボラトリー・ミノタウロス',	'35',	'',		'13',	'19',	'[12]エルダータウルス',		'タウルス',		],
				['31',	'宝石狙いのしあわせうさぎ',		'不明',				'',	'',		'20.5',	'21.1',	'[13]宝石うさぎ',		'宝うさぎ',		],
				['31',	'野牛の救い主「エウレカの聖牛」',	'エルダーバッファロー',		'36',	'',		'25',	'17',	'[14]エウレカの聖牛',		'聖牛',		],
				['32',	'雷雲の魔獣「ハダヨッシュ」',		'ヴォイド・レッサードラゴン',	'37',	'雷',		'30',	'19',	'[15]ハダヨッシュ',		'ハダヨッシュ',	],
				['33',	'太陽の使者「ホルス」',			'ヴォイド・ヴィーヴル',		'38',	'',		'25',	'19',	'[16]ホルス',			'ホルス',		],
				['34',	'闇眼王「アーチ・アンラ・マンユ」',	'ガウパー',			'39',	'',		'23',	'25',	'[17]アーチ・アンラ・マンユ',	'マンユ',		],
				['35',	'模倣犯「コピーキャット・キャシー」',	'不明',				'40',	'',		'99',	'99',	'[18]コピーキャット・キャシー',	'キャシー',		],
				['35',	'蒼き氷刃「ロウヒ」',			'バル・コープス',		'40',	'',		'36',	'19',	'[19]ロウヒ',			'ロウヒ',		],
				['',	'予備',　				'不明',				'',	'',		'99',	'99',	'',				'',			]
			];

			tempNMList = [
				['雪うさぎ\\[(..):(..)\\]','NM01'],['雪の女王\\[(..):(..)\\]','NM02'],['タキシム\\[(..):(..)\\]','NM03'],['ドラゴン\\[(..):(..)\\]','NM04'],['ヴォイド\\[(..):(..)\\]','NM05'],['アナポ\\[(..):(..)\\]','NM06'],['ハクタク\\[(..):(..)\\]','NM07'],['イグルー\\[(..):(..)\\]','NM08'],['アサグ\\[(..):(..)\\]','NM09'],['スラビー\\[(..):(..)\\]','NM10'],['アースロ\\[(..):(..)\\]','NM11'],['タウルス\\[(..):(..)\\]','NM12'],['宝うさぎ\\[(..):(..)\\]','NM13'],['宝石うさぎ\\[(..):(..)\\]','NM13'],['聖牛\\[(..):(..)\\]','NM14'],['ハダヨッシュ\\[(..):(..)\\]','NM15'],['ホルス\\[(..):(..)\\]','NM16'],['マンユ\\[(..):(..)\\]','NM17'],['キャシー\\[(..):(..)\\]','NM18'],['ロウヒ\\[(..):(..)\\]','NM19'],
				['雪うさぎ:(..):(..)','NM01'],['雪の女王:(..):(..)','NM02'],['タキシム:(..):(..)','NM03'],['アッシュドラゴン:(..):(..)','NM04'],['グラヴォイド:(..):(..)','NM05'],['アナポ:(..):(..)','NM06'],['ハクタク:(..):(..)','NM07'],['キングイグルー:(..):(..)','NM08'],['アサグ:(..):(..)','NM09'],['スラビー:(..):(..)','NM10'],['キングアースロ:(..):(..)','NM11'],['エルダータウルス:(..):(..)','NM12'],['宝石うさぎ:(..):(..)','NM13'],['エウレカの聖牛:(..):(..)','NM14'],['ハダヨッシュ:(..):(..)','NM15'],['ホルス:(..):(..)','NM16'],['アーチ・アンラ・マンユ:(..):(..)','NM17'],['コピーキャット・キャシー:(..):(..)','NM18'],['ロウヒ:(..):(..)','NM19'],
			];
			localStorage.setItem('NMData', JSON.stringify(tempNMData));
			localStorage.setItem('NMList', JSON.stringify(tempNMList));
			localStorage.setItem('Version', $('#version').text());
			if(msgFlag) {
				alert($('#successMsg2').text());
			}
		}
	};
	return global;
})();

// ページ読み込み完了と同時に初期処理を実行する
$(window).on('load', main.init);