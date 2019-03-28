import React, {Component} from 'react';
import Anime from 'animejs';
import Styled from 'styled-components';

const AnimeSVG = Styled.svg`
    margin: auto;
    display: block;
    width: 500px;
    height: 500px;
    top:0;left:0;bottom:0;right:0;
    stroke-width: 1px;
    stroke: rgba(80, 80, 80, .35);
    backface-visibility: hidden;
    .st0{
        fill: url(#sphereGradient);
        stroke: rgba(80, 80, 80, .35);
        stroke-width: 1px;
        backface-visibility: hidden;
    }
`;


class Sphere extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: false
		};
		this.setOrReset = this.setOrReset.bind(this)
	}

	drawSVG = (target) => {
		const sphere_lines = target.querySelectorAll(".st0");
		const pathLength = sphere_lines.length;
		let animations = [];
		const breathAnimation = Anime({
			begin: function () {
				for (let i = 0; i < pathLength; i++) {
					animations.push(Anime({
						targets: sphere_lines[i],
						stroke: {value: ['rgba(255,75,75,1)', 'rgba(80,80,80,.35)'], duration: 500},
						translateX: [2, -4],
						translateY: [2, -4],
						easing: 'easeOutQuad',
						autoplay: false
					}));
				}
			},
			update: function (ins) {
				animations.forEach(function (animation, i) {
					let percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
					animation.seek(animation.duration * percent);
				});
			},
			duration: Infinity,
			autoplay: false
		});

		const shadowAnimation = Anime({
			targets: '#sphereGradient',
			x1: '25%',
			x2: '25%',
			y1: '0%',
			y2: '75%',
			duration: 30000,
			easing: 'easeOutQuint',
			autoplay: false
		}, 0);

		breathAnimation.play();
		shadowAnimation.play();
	};


	componentDidMount() {
		this.drawSVG(this.svg);
	}

	setOrReset() {
		this.setState({
			animate: !this.state.animate
		});
	}

	render() {
		return (
			<div style={{height: "800px", margin: "auto", textAlign: "center"}}>
				<AnimeSVG style={{width: "100%", height: "1000px"}} id="sphere-svg" viewBox="auto"
				          xmlns="http://www.w3.org/2000/svg" innerRef={node => {
					this.svg = node
				}} stroke="rgba(80,80,80,.35)">
					<g>
						<defs>
							<linearGradient id="sphereGradient" x1="5%" x2="5%" y1="0%" y2="15%">
								<stop stop-color="#373734" offset="0%"/>
								<stop stop-color="#242423" offset="50%"/>
								<stop stop-color="#0D0D0C" offset="100%"/>
							</linearGradient>
						</defs>
						<path className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						      points="1567.782,185.755 1479.541,154.684
	1439.011,231.693 1525.308,265.807 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1432.979,475.4 1456.299,431.525
	1373.654,391.378 1351.388,433.62 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1424.205,456.343 1434.852,436.266
	1352.668,395.744 1342.49,415.076 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1428.607,465.901 1445.606,433.89
	1363.188,393.555 1346.954,424.372 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1477.849,263.864 1526.166,172.471
	1438.465,141.529 1392.379,229.411 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1488.766,261.741 1535.471,173.458
	1447.62,142.556 1403.07,227.451 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1499.396,260.083 1544.273,175.319
	1456.283,144.421 1413.481,225.937 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1508.996,260.262 1552.578,178.012
	1464.484,147.086 1422.91,226.195 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1433.635,272.468 1483.942,177.001
	1397.092,145.58 1349.124,237.34 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1466.874,265.998 1516.317,172.393
	1428.795,141.381 1381.646,231.376 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1419.773,446.737 1424.058,438.655
	1342.101,397.945 1338.011,405.727 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1560.407,181.505 1472.234,150.517
	1431.401,228.161 1517.604,262.225 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1388.53,281.241 1439.168,184.849
	1353.293,152.807 1305.035,245.422 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1411.188,276.832 1461.669,180.904
	1375.302,149.174 1327.186,241.36 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1399.887,279.032 1450.445,182.875
	1364.328,150.984 1316.134,243.384 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1422.442,274.646 1472.829,178.948
	1386.221,147.371 1338.183,239.346 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="713.688,586.808 769.57,475.903
	704.241,427.077 651.161,533.205 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="725.129,811.232 742.951,776.229
	681.317,716.257 664.354,749.825 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="731.818,821.776 756.922,772.513
	694.844,712.854 670.949,760.104 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="745.07,842.646 784.641,765.153
	721.684,706.118 684.01,780.466 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="751.63,852.98 798.392,761.501
	735.002,702.771 690.479,790.558 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="761.464,856.772 809.144,763.584
	745.472,704.924 700.068,794.359 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="788.753,849.077 821.876,784.454
	758.057,725.278 726.507,787.295 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="775.146,852.917 815.532,774.059
	751.782,715.133 713.321,790.823 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="802.291,845.253 828.183,794.803
	764.29,735.363 739.627,783.799 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="676.065,477.112 747.99,333.268
	681.977,289.795 613.745,427.256 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="314.449,982.874 597.1,412.33
	536.891,364.24 268.663,909.493 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="684.681,540.237 805.967,298.478
	737.761,256.918 622.649,488.051 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="690.722,554.563 821.771,293.627
	753.02,252.399 628.628,501.9 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="842.481,833.92 846.855,825.413
	782.763,765.231 778.592,773.402 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="682.106,437.804 717.687,366.566
	652.982,321.479 619.228,389.547 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="815.758,841.46 834.445,805.074
	770.486,745.384 752.68,780.318 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="829.154,837.683 840.67,815.275
	776.644,755.335 765.67,776.853 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="346.636,973.797 612.667,438.073
	552.137,389.103 299.62,901.228 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="394.116,736.065 573.328,373.013
	513.625,326.302 343.712,672.926 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="457.966,577.395 565.285,359.718
	505.766,313.479 404.059,521.205 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="331.491,891.69 581.308,386.215
	521.434,339.036 284.471,821.862 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="330.59,978.324 604.914,425.246
	544.54,376.713 284.186,905.351 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="378.459,964.822 512.08,696.355
	457.166,636.228 330.242,893.059 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="628.012,463.447 567.178,413.625
	514.793,519.625 572.793,574.383 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="362.592,969.295 620.367,450.807
	559.681,401.406 314.976,897.132 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="784.148,622.834 830.977,530.582
	764.329,480.382 719.81,568.755 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="795.961,623.935 844.761,527.886
	777.682,477.936 731.279,569.954 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="741.355,608.192 787.415,517.069
	721.941,466.888 678.173,554.13 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="861.774,614.108 913.609,512.588
	844.397,463.949 795.091,561.259 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="821.034,622.85 872.525,521.717
	804.578,472.297 755.61,569.216 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="834.34,620.603 886.297,518.657
	817.92,469.503 768.507,567.202 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="808.25,623.95 858.68,524.792
	791.165,475.111 743.209,570.121 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="848.07,617.387 899.99,515.617
	831.191,466.72 781.811,564.268 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1197.915,319.715 1243.963,230.874
	1162.935,195.619 1119.104,280.848 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="968.777,588.462 1015.271,498.115
	943.146,451.095 898.891,537.778 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1108.279,513.872 1109.66,511.2
	1035.328,464.758 1034.009,467.322 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1253.431,234.062 1172.223,198.769
	1129.398,281.979 1208.437,320.787 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1173.878,323 1223.468,227.135
	1142.877,191.854 1095.682,283.797 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1186.303,320.624 1233.981,228.552
	1153.163,193.301 1107.787,281.62 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1113.984,523.941 1122.023,508.46
	1047.354,462.244 1039.698,477.112 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1119.65,533.95 1134.314,505.736
	1059.318,459.747 1045.349,486.845 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="705.391,577.505 835.73,318.556
	766.791,276.465 643.04,524.155 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="697.688,566.852 835.395,292.967
	766.21,251.884 635.484,513.81 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="772.8,620.681 818.345,530.863
	752.075,480.511 708.779,566.543 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="761.893,617.512 806.946,528.565
	740.997,478.174 698.171,563.354 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1148.762,327.887 1200.757,227.209
	1120.711,191.737 1071.245,288.277 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1161.357,325.436 1212.401,226.675
	1132.074,191.315 1083.498,286.03 "/>
						<polyline fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10" points="1204.847,219.01 1161.835,302.299 
	1241.373,341.541 1286.531,254.776 1223.461,227.158 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1293.695,261.784 1211.949,225.828
	1167.984,310.884 1247.539,350.376 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1141.987,573.368 1183.071,494.576
	1106.804,449.491 1067.64,525.201 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1300.399,269.566 1218.598,233.391
	1172.987,321.553 1252.518,361.384 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1130.889,553.777 1158.712,500.324
	1083.085,454.783 1056.564,506.138 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1136.453,563.604 1170.818,497.639
	1094.877,452.32 1062.122,515.699 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1158.377,602.3 1240.959,444.333
	1162.764,401.547 1084.021,553.384 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1317.633,297.654 1235.831,260.641
	1167.852,391.74 1246.289,434.124 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1147.481,583.068 1196.636,488.881
	1119.994,444.134 1073.135,534.648 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1152.945,592.716 1212.932,477.873
	1135.79,433.671 1078.598,544.046 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1479.509,576.365 1525.495,490.521
	1442.563,449.273 1398.591,532.038 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1483.6,585.238 1529.43,499.734
	1446.574,458.253 1402.743,540.697 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1458.725,531.253 1611.19,245.578
	1523.152,212.86 1377.486,488.035 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1462.934,540.381 1614.289,256.98
	1526.385,223.919 1381.756,496.933 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1532.083,639.38 1563.895,580.393
	1481.734,536.94 1451.288,593.863 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1551.874,633.8 1571.316,597.781
	1489.327,553.918 1470.706,588.681 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1561.7,631.029 1575,606.413
	1493.09,562.344 1480.352,586.105 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1571.488,628.266 1578.661,614.982
	1496.838,570.723 1489.953,583.546 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1507.67,637.444 1552.594,553.954
	1470.2,511.125 1427.202,591.687 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1512.118,645.016 1556.379,562.815
	1474.062,519.776 1431.698,599.092 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1522.124,642.19 1560.148,571.631
	1477.908,528.382 1441.516,596.47 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1542.003,636.587 1567.609,589.118
	1485.535,545.451 1461.021,591.272 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1581.229,625.519 1582.313,623.513
	1500.559,579.065 1499.521,580.993 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="394.232,960.372 449.018,850.428
	397.487,783.783 345.43,889.007 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="588.211,598.561 643.137,488.465
	582.015,437.819 529.886,543.058 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="694.979,699.938 729.598,631.451
	666.996,576.403 634.087,642.003 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="709.414,696.348 736.489,642.846
	673.783,587.464 648.042,638.726 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="752.239,685.701 756.879,676.563
	693.875,620.235 689.466,628.992 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="718.393,800.626 728.903,779.959
	667.722,719.668 657.721,739.483 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="298.214,987.455 589.234,399.319
	529.192,351.683 253.057,913.654 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="972.719,276.047 977.979,265.706
	904.255,226.92 899.265,236.821 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1054.199,741.716 1102.495,649.089
	1029.99,597.983 983.926,687.044 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="979.305,287.637 991.676,263.302
	917.547,224.727 905.789,248.017 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="992.339,310.579 1018.86,258.538
	943.919,220.376 918.718,270.197 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="998.787,321.936 1032.338,256.172
	957,218.215 925.117,281.183 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="985.847,299.145 1005.311,260.915
	930.764,222.546 912.274,259.142 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1083.967,539.577 1010.587,491.879
	955.392,599.217 1026.041,651.338 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="965.226,768.666 1004.233,693.404
	934.619,639.63 897.435,711.941 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="965.063,789.949 1090.148,548.811
	1016.737,500.874 897.505,732.545 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="972.109,797.192 1095.627,559.3
	1022.2,511.071 904.459,739.655 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1019.78,351.894 1072.338,249.16
	995.828,211.807 945.87,310.212 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1032.432,350.517 1085.527,246.85
	1008.635,209.691 958.171,309.003 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1005.201,333.217 1045.74,253.823
	970.002,216.067 931.479,292.102 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1011.617,344.335 1059.077,251.486
	982.95,213.934 937.847,302.861 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="665.872,707.173 715.682,608.427
	653.294,554.059 605.956,648.605 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="680.466,703.551 722.664,619.979
	660.167,565.267 620.058,645.297 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="640.502,680.589 694.441,573.307
	632.402,519.988 581.16,622.662 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="625.822,657.558 680.037,549.489
	618.244,496.901 566.752,600.294 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="723.767,692.78 743.33,654.162
	680.521,598.46 661.923,635.462 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="738.042,689.229 750.127,665.401
	687.221,609.378 675.729,632.216 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="711.612,789.94 714.781,783.705
	654.055,723.094 651.042,729.072 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="738.467,832.251 770.818,768.829
	708.298,709.482 677.501,770.313 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="603.415,622.412 658.052,513.131
	596.652,461.69 544.782,566.181 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="610.934,634.206 665.431,525.334
	603.895,473.502 552.154,577.629 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="635.602,476 574.619,425.762
	522.367,531.379 580.531,586.511 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="595.84,610.527 650.622,500.843
	589.354,449.792 537.359,554.656 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="618.403,645.921 672.759,537.454
	611.095,485.241 559.479,588.993 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="633.189,669.116 687.264,561.442
	625.346,508.483 573.979,611.51 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="647.769,691.983 701.57,585.098
	639.41,531.418 588.293,633.729 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="654.989,703.301 708.65,596.806
	646.376,542.773 595.38,644.734 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="902.441,604.353 954.033,503.609
	883.607,455.73 834.521,552.326 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="888.958,607.583 940.629,506.587
	870.605,458.459 821.443,555.292 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="875.401,610.83 927.154,509.58
	857.536,461.198 808.301,558.266 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="915.854,601.13 967.364,500.647
	896.544,453.02 847.526,549.38 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="929.195,597.93 980.313,498.303
	909.117,450.9 860.47,546.449 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="942.463,594.745 992.589,497.139
	921.059,449.909 873.349,543.534 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="955.666,591.584 1004.233,497.092
	932.396,449.991 886.16,540.632 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="980.897,587.151 1025.713,500.152
	953.339,453.175 910.683,536.646 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1097.75,337.811 1150.408,235.474
	1071.714,199.28 1021.631,297.37 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1110.611,335.309 1163.177,233.235
	1084.131,197.231 1034.126,295.079 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1123.396,332.819 1175.875,231.01
	1096.485,195.19 1046.566,292.8 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1136.118,330.345 1188.511,228.798
	1108.787,193.165 1058.937,290.533 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1125.285,543.894 1146.545,503.025
	1071.229,457.258 1050.977,496.519 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1278.943,248.469 1197.338,212.864
	1154.864,295.188 1234.332,334.239 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1262.398,238.081 1181.042,202.714
	1138.74,284.843 1217.966,323.667 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1270.905,242.893 1189.408,207.424
	1147.201,289.288 1226.574,328.198 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="965.569,725.622 971.165,714.806
	902.621,659.899 897.282,670.302 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1016.878,604.946 1062.02,517.607
	988.929,470.419 945.934,554.262 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1009.572,597.414 1053.717,511.929
	980.772,464.843 938.729,546.898 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1069.825,524.101 996.624,476.773
	951.949,563.799 1022.934,614.741 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="991.653,588.392 1035.578,503.161
	962.994,456.188 921.164,537.974 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1001.159,591.912 1044.911,507.102
	972.133,460.091 930.463,541.485 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="965.398,747.227 985.596,708.218
	916.614,653.71 897.355,691.188 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1077.161,531.39 1003.859,483.899
	956.016,577.013 1026.945,628.359 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="985.425,792.243 1100.231,571.324
	1026.845,522.743 917.391,735.043 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1015.004,776.384 1105.867,601.84
	1032.713,552.318 946.074,720.097 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="999.598,785.554 1103.76,585.294
	1030.457,536.292 931.139,728.76 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1032.448,763.226 1105.992,622.062
	1033.08,571.878 962.947,707.578 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1084.824,340.323 1137.569,237.727
	1059.225,201.344 1009.072,299.672 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1071.838,342.852 1124.661,239.99
	1046.677,203.412 996.444,301.989 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1045.639,347.948 1098.641,244.547
	1021.389,207.589 970.993,306.653 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1058.773,345.392 1111.689,242.261
	1034.064,205.497 983.754,304.316 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1455.847,268.146 1505.922,173.278
	1418.602,142.158 1370.853,233.355 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1444.764,270.299 1494.994,175.062
	1407.909,143.792 1360.021,235.341 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1574.711,190.742 1486.441,159.55
	1445.825,236.653 1532.162,270.877 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1581.221,196.428 1492.925,165.095
	1451.913,242.905 1538.256,277.289 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1587.324,202.788 1499.022,171.292
	1457.361,250.285 1543.68,284.871 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1593.007,209.835 1504.719,178.153
	1461.871,259.326 1548.13,294.174 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1450.242,512.851 1501.747,416.213
	1418.095,377.005 1368.886,470.096 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1454.496,522.079 1518.877,401.352
	1434.727,362.789 1373.193,479.091 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1325.102,242.737 1346.86,201.032
	1263.125,167.69 1242.402,207.725 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1330.096,253.554 1358.607,198.975
	1274.589,165.798 1247.437,218.198 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1335.068,264.305 1370.29,196.927
	1286,163.913 1252.447,228.611 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1340.008,274.99 1381.92,194.887
	1297.348,162.04 1257.427,238.963 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1345.775,283.969 1393.486,192.861
	1308.648,160.175 1263.195,247.681 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1354.104,287.938 1404.99,190.843
	1319.888,158.321 1271.404,251.583 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1377.111,283.461 1427.827,186.839
	1342.218,154.637 1293.883,247.466 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1365.639,285.693 1416.44,188.833
	1331.08,156.471 1282.675,249.519 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1603.09,226.046 1514.882,193.903
	1466.43,285.565 1552.343,321.259 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1607.43,235.33 1519.299,202.917
	1464.211,307.039 1549.753,343.468 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1611.395,346.805 1524.933,310.849
	1470.099,413.992 1554.036,453.823 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1491.717,602.839 1537.232,518.009
	1454.535,476.067 1410.984,557.876 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1467.115,549.455 1616.575,269.796
	1528.836,236.333 1386.002,505.779 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1475.405,567.448 1617.872,301.257
	1530.6,266.798 1394.423,523.332 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1471.268,558.478 1617.872,284.375
	1530.333,250.455 1390.224,514.579 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1616.124,321.311 1529.193,286.201
	1452.139,431.248 1535.509,471.821 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1487.675,594.065 1533.346,508.901
	1450.57,467.185 1406.879,549.31 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1495.736,611.565 1541.104,527.071
	1458.485,484.901 1415.074,566.394 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1499.73,620.235 1544.96,536.081
	1462.408,493.689 1419.141,574.867 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1503.705,628.867 1548.786,545.044
	1466.321,502.431 1423.184,583.295 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="676.701,502.829 770.026,316.39
	703.144,273.791 614.591,451.985 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="679.858,523.297 788.913,305.673
	721.32,263.676 617.83,471.7 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="523.081,415.588 557.187,346.321
	497.845,300.569 465.537,366.633 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="722.473,594.971 773.007,494.778
	707.756,445.277 659.75,541.165 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="751.416,613.343 796.667,523.91
	730.979,473.577 687.971,559.21 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="836.386,369.13 767.941,325.069
	757.141,346.642 825.01,391.682 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="836.058,343.944 767.368,300.859
	740.368,354.848 807.613,400.396 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="731.697,602.089 779.368,507.679
	714.046,457.76 668.751,548.136 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1315.002,220.899 1323.189,205.185
	1240.03,171.503 1232.225,186.585 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1320.059,231.853 1335.061,203.105
	1251.604,169.59 1237.329,197.188 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1309.905,209.878 1311.264,207.272
	1228.386,173.423 1227.098,175.924 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1302.015,704.285 1306.073,696.636
	1229.892,646.623 1226.013,653.991 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1221.072,712.963 1267.908,624.225
	1191.5,575.928 1146.764,661.358 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1226.099,721.829 1272.778,633.464
	1196.394,584.935 1151.806,670.029 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1235.051,723.172 1277.617,642.644
	1201.256,593.895 1160.594,671.45 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1246.344,719.987 1282.433,651.774
	1206.096,602.807 1171.621,668.507 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1306.651,278.069 1224.834,241.648
	1176.367,335.262 1255.78,375.55 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1312.426,287.387 1230.602,250.686
	1177.077,353.992 1256.248,394.944 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1190.282,658.619 1238.079,567.632
	1161.545,520.764 1115.936,608.302 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1328.246,395.999 1247.554,355.722
	1178.654,487.941 1256.015,533.509 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1195.496,667.805 1243.129,577.207
	1166.611,530.091 1121.148,617.27 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1320.419,430.195 1240.35,388.7
	1202.566,461.151 1280.802,505.534 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1169.14,621.305 1325.96,321.803
	1244.314,284.027 1094.783,571.901 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1174.471,630.717 1328.793,336.241
	1247.281,297.995 1100.115,581.079 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1257.59,716.818 1287.218,660.851
	1210.911,611.674 1182.603,665.573 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1268.775,713.665 1291.971,669.881
	1215.694,620.477 1193.529,662.653 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1290.995,707.391 1301.406,687.77
	1225.186,637.96 1215.227,656.863 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1279.912,710.521 1296.699,678.849
	1220.456,629.25 1204.409,659.759 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1445.966,503.566 1488.75,423.229
	1405.428,383.671 1364.547,461.05 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1598.267,217.585 1510.01,185.685
	1465.111,270.678 1551.244,305.881 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1437.333,484.839 1466.936,429.172
	1384.074,389.204 1355.798,442.815 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1441.656,494.232 1477.526,426.831
	1394.455,387.046 1360.184,451.958 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1163.778,611.829 1322.182,309.05
	1240.452,271.681 1089.414,562.668 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1179.777,640.067 1330.424,352.831
	1249.107,314.028 1105.414,590.202 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1185.045,649.37 1233.006,558.005
	1156.457,511.387 1110.69,599.279 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1330.486,372.299 1249.428,332.838
	1160.999,502.65 1237.774,548.919 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1200.663,676.952 1248.146,586.714
	1171.645,539.363 1126.33,626.189 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1205.814,686.028 1253.126,596.174
	1176.655,548.58 1131.481,635.057 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1210.935,695.06 1258.082,605.586
	1181.628,557.746 1136.602,643.876 "/>
						<polygon className="st0" fill="none" stroke="#000000" stroke-width="0.25" stroke-miterlimit="10"
						         points="1216.016,704.035 1263.008,614.929
	1186.584,566.858 1141.706,652.64 "/>
					</g>
				</AnimeSVG>
			</div>
		);
	}
}

export default Sphere;