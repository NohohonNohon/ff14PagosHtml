var mapObj;

var map = (function() {
	var mark = L.icon({
		iconUrl: 'img/e-te.png',
		iconRetinaUrl: 'img/e-te.png',
		iconSize: [25, 25],
		iconAnchor: [12,12],
		popupAnchor: [0, -12],
	});

	var global = {
		
		/**
		* マップの設定
		*/
		setMap: function(){		
			mapObj = new L.map('map', {
				dragging: true, // マウスドラッグによるパン操作を不可
				touchZoom: false, // タッチによるズーム操作を不可
				scrollWheelZoom: false, // スクロールによるズーム操作を不可
				doubleClickZoom: false, // ダブルクリックによるズーム操作を不可
				boxZoom: false, // [Shift] + ドラッグによるボックスズーム操作を不可
				tap: false, // タップによるズーム操作を不可
				keyboard: false, // キーボードによる操作を不可
				zoomControl: false, // ズーム コントロールの非表示
				crs: L.CRS.Simple
			}).setView([0, 0], 0);

			mapObj.setMaxBounds(new L.LatLngBounds([0,0], [500 ,500])); //表示可能範囲

			var imageUrl = 'img/pagos.jpg'; //size 2048 x 2048
			var imageBounds = [[0, 0],[500, 500]]; //表示範囲

			L.imageOverlay(imageUrl, imageBounds, {
				attribution:'<a href="http://www.jp.square-enix.com/">SQUARE ENIX CO</a> | <a href="http://jp.finalfantasyxiv.com/">FINAL FANTASY XIV</a>'
			}).addTo(mapObj);

			/* マーカーと重なってしまうため、削除
			var marker = L.marker(map.getLatlng(23.2,27.5), {icon: mark})
				.bindPopup("ヴロンデットの別荘")
				.addTo(mapObj);
				marker.on('mouseover', function (e) {
				this.openPopup();
			});
			marker.on('mouseout', function (e) {
				this.closePopup();
			});

			var marker = L.marker(map.getLatlng(7.4,15.1), {icon: mark})
				.bindPopup("地熱研究室")
				.addTo(mapObj);
				marker.on('mouseover', function (e) {
				this.openPopup();
			});
			marker.on('mouseout', function (e) {
				this.closePopup();
			});

			var marker = L.marker(map.getLatlng(28.4,15.7), {icon: mark})
				.bindPopup("レビテト研究分室")
				.addTo(mapObj);
				marker.on('mouseover', function (e) {
				this.openPopup();
			});
			

			marker.on('mouseout', function (e) {
				this.closePopup();
			});*/
				
			for(let i = 0; i < markinga.length; i++) {
				markinga[i].addTo(mapObj);
			}

			L.control.mousePosition().addTo(mapObj);
		},

		/**
		* xy座標をLatlngオブジェクトで返却する
		* @param {x} x座標
		* @param {y} y座標
		* @return {Latlng} Latlngオブジェクト
		*/
		getLatlng: function(x,y) {
			return [500-((y-1)/40.9*500),((x-1)/40.9*500)];
		}
	};
	return global;
})();