import React, { Component } from 'react';
import echarts from 'echarts';
import 'echarts/map/js/world.js';
//全世界199个国家首都经纬度

export default class WorldMap extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataMapArr:[
                {
                    "fromName": "北京市",
                    "toName": "阿富汗",
                    "coords": [[116.24, 39.55], [69.11, 34.28]]
                },
                {
                    "fromName": "北京市",
                    "toName": "西班牙",
                    "coords": [[116.24, 39.55], [-3.45, 40.25]]
                },
                {
                    "fromName": "阿尔巴尼亚",
                    "toName": "北京市",
                    "coords": [[19.49, 41.18], [116.24, 39.55]]
                }
            ],
            markerArr: [
                {
                    "name": "阿富汗",
                    "value": [69.11, 34.28, [90, "20%"]]
                },
                {
                    "name": "西班牙",
                    "value": [-3.45, 40.25, [90, "20%"]]
                },
                {
                    "name": "阿尔巴尼亚",
                    "value": [19.49, 41.18, [1500, "25%"]]
                },
                {
                    "name": "北京",
                    "value": [116.24, 39.55, [1500, "25%"]]
                }
            ]
        }
    }
    //  地图初始化
    initMap = () => {
        let myChart = echarts.init(this.refs.myChart);
        // let data = this.props.data.chinaMapData;
        // console.log(this.props.data.mapData)
        // console.log(dataMapNow, markerArr)
        
        let nameMap = {
            'Afghanistan': '阿富汗',
            'Angola': '安哥拉',
            'Albania': '阿尔巴尼亚',
            'United Arab Emirates': '阿联酋',
            'Argentina': '阿根廷',
            'Armenia': '亚美尼亚',
            'French Southern and Antarctic Lands': '法属南半球和南极领地',
            'Australia': '澳大利亚',
            'Austria': '奥地利',
            'Azerbaijan': '阿塞拜疆',
            'Burundi': '布隆迪',
            'Belgium': '比利时',
            'Benin': '贝宁',
            'Burkina Faso': '布基纳法索',
            'Bangladesh': '孟加拉国',
            'Bulgaria': '保加利亚',
            'The Bahamas': '巴哈马',
            'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
            'Belarus': '白俄罗斯',
            'Belize': '伯利兹',
            'Bermuda': '百慕大',
            'Bolivia': '玻利维亚',
            'Brazil': '巴西',
            'Brunei': '文莱',
            'Bhutan': '不丹',
            'Botswana': '博茨瓦纳',
            'Central African Republic': '中非共和国',
            'Canada': '加拿大',
            'Switzerland': '瑞士',
            'Chile': '智利',
            'China': '中国',
            'Ivory Coast': '象牙海岸',
            'Cameroon': '喀麦隆',
            'Democratic Republic of the Congo': '刚果民主共和国',
            'Republic of the Congo': '刚果共和国',
            'Colombia': '哥伦比亚',
            'Costa Rica': '哥斯达黎加',
            'Cuba': '古巴',
            'Northern Cyprus': '北塞浦路斯',
            'Cyprus': '塞浦路斯',
            'Czech Republic': '捷克共和国',
            'Germany': '德国',
            'Djibouti': '吉布提',
            'Denmark': '丹麦',
            'Dominican Republic': '多明尼加共和国',
            'Algeria': '阿尔及利亚',
            'Ecuador': '厄瓜多尔',
            'Egypt': '埃及',
            'Eritrea': '厄立特里亚',
            'Spain': '西班牙',
            'Estonia': '爱沙尼亚',
            'Ethiopia': '埃塞俄比亚',
            'Finland': '芬兰',
            'Fiji': '斐',
            'Falkland Islands': '福克兰群岛',
            'France': '法国',
            'Gabon': '加蓬',
            'United Kingdom': '英国',
            'Georgia': '格鲁吉亚',
            'Ghana': '加纳',
            'Guinea': '几内亚',
            'Gambia': '冈比亚',
            'Guinea Bissau': '几内亚比绍',
            'Equatorial Guinea': '赤道几内亚',
            'Greece': '希腊',
            'Greenland': '格陵兰',
            'Guatemala': '危地马拉',
            'French Guiana': '法属圭亚那',
            'Guyana': '圭亚那',
            'Honduras': '洪都拉斯',
            'Croatia': '克罗地亚',
            'Haiti': '海地',
            'Hungary': '匈牙利',
            'Indonesia': '印尼',
            'India': '印度',
            'Ireland': '爱尔兰',
            'Iran': '伊朗',
            'Iraq': '伊拉克',
            'Iceland': '冰岛',
            'Israel': '以色列',
            'Italy': '意大利',
            'Jamaica': '牙买加',
            'Jordan': '约旦',
            'Japan': '日本',
            'Kazakhstan': '哈萨克斯坦',
            'Kenya': '肯尼亚',
            'Kyrgyzstan': '吉尔吉斯斯坦',
            'Cambodia': '柬埔寨',
            'South Korea': '韩国',
            'Kosovo': '科索沃',
            'Kuwait': '科威特',
            'Laos': '老挝',
            'Lebanon': '黎巴嫩',
            'Liberia': '利比里亚',
            'Libya': '利比亚',
            'Sri Lanka': '斯里兰卡',
            'Lesotho': '莱索托',
            'Lithuania': '立陶宛',
            'Luxembourg': '卢森堡',
            'Latvia': '拉脱维亚',
            'Morocco': '摩洛哥',
            'Moldova': '摩尔多瓦',
            'Madagascar': '马达加斯加',
            'Mexico': '墨西哥',
            'Macedonia': '马其顿',
            'Mali': '马里',
            'Myanmar': '缅甸',
            'Montenegro': '黑山',
            'Mongolia': '蒙古',
            'Mozambique': '莫桑比克',
            'Mauritania': '毛里塔尼亚',
            'Malawi': '马拉维',
            'Malaysia': '马来西亚',
            'Namibia': '纳米比亚',
            'New Caledonia': '新喀里多尼亚',
            'Niger': '尼日尔',
            'Nigeria': '尼日利亚',
            'Nicaragua': '尼加拉瓜',
            'Netherlands': '荷兰',
            'Norway': '挪威',
            'Nepal': '尼泊尔',
            'New Zealand': '新西兰',
            'Oman': '阿曼',
            'Pakistan': '巴基斯坦',
            'Panama': '巴拿马',
            'Peru': '秘鲁',
            'Philippines': '菲律宾',
            'Papua New Guinea': '巴布亚新几内亚',
            'Poland': '波兰',
            'Puerto Rico': '波多黎各',
            'North Korea': '北朝鲜',
            'Portugal': '葡萄牙',
            'Paraguay': '巴拉圭',
            'Qatar': '卡塔尔',
            'Romania': '罗马尼亚',
            'Russia': '俄罗斯',
            'Russia': '俄罗斯联邦',
            'Rwanda': '卢旺达',
            'Western Sahara': '西撒哈拉',
            'Saudi Arabia': '沙特阿拉伯',
            'Sudan': '苏丹',
            'South Sudan': '南苏丹',
            'Senegal': '塞内加尔',
            'Solomon Islands': '所罗门群岛',
            'Sierra Leone': '塞拉利昂',
            'El Salvador': '萨尔瓦多',
            'Somaliland': '索马里兰',
            'Somalia': '索马里',
            'Republic of Serbia': '塞尔维亚共和国',
            'Suriname': '苏里南',
            'Slovakia': '斯洛伐克',
            'Slovenia': '斯洛文尼亚',
            'Sweden': '瑞典',
            'Swaziland': '斯威士兰',
            'Syria': '叙利亚',
            'Chad': '乍得',
            'Togo': '多哥',
            'Thailand': '泰国',
            'Tajikistan': '塔吉克斯坦',
            'Turkmenistan': '土库曼斯坦',
            'East Timor': '东帝汶',
            'Trinidad and Tobago': '特里尼达和多巴哥',
            'Tunisia': '突尼斯',
            'Turkey': '土耳其',
            'United Republic of Tanzania': '坦桑尼亚联合共和国',
            'Uganda': '乌干达',
            'Ukraine': '乌克兰',
            'Uruguay': '乌拉圭',
            'United States of America': '美国',
            'Uzbekistan': '乌兹别克斯坦',
            'Venezuela': '委内瑞拉',
            'Vietnam': '越南',
            'Vanuatu': '瓦努阿图',
            'West Bank': '西岸',
            'Yemen': '也门',
            'South Africa': '南非',
            'Zambia': '赞比亚',
            'Zimbabwe': '津巴布韦'
        };
        let option = {
            "tooltip": {
                "trigger": "item",
                "formatter": (params) => {
                    console.log(params)
                    if (params.componentSubType === "lines"){
                        return `${params.data.fromName}\-\-${params.data.toName}<br/>${params.data.value}${params.data.unit}`
                    }else{
                        if (params.data.value[2] && params.data.value[2][2] === 1){
                            return `进口${params.data.value[2][0]}${params.data.value[2][1]}`
                        } else if (params.data.value[2] && params.data.value[2][2] === 2){
                            return `出口${params.data.value[2][0]}${params.data.value[2][1]}`
                        }else{
                            return ``;
                        }
                        
                    }   
                },
            },
            "legend": {
                "show": false,
                "orient": "vertical",
                "top": "bottom",
                "left": "right",
                "data": ["北京"],
                "textStyle": {
                    "color": "#fff"
                },
                "selectedMode": "single"
            },
            "geo": {
                "map": "world",
                "zoom": 1.5,
                "label": {
                    "normal": {
                        "show": false
                    },
                    "emphasis": {
                        "show": false
                    }
                },
                nameMap: nameMap,
                "roam": true,
                "itemStyle": {
                    "normal": {
                        "areaColor": "rgba(72, 118, 255,0.9)",
                        "borderColor": "#fff"
                    },
                    "emphasis": {
                        "areaColor": "#3952ca"
                    }
                }
            },
            "color": ["gold", "aqua", "lime"],
            // visualMap: {
            //     min: 0,
            //     max: 1000000,
            //     text: ['High', 'Low'],
            //     realtime: false,
            //     calculable: true,
            //     color: ['orangered', 'yellow', 'lightskyblue']
            // },
            "series": [
                {
                    "name": "北京",
                    "type": "lines",
                    "zlevel": 1,
                    "effect": {
                        "show": true,
                        "period": 6,
                        "trailLength": 0.7,
                        "color": "#fff",
                        "symbolSize": 3
                    },
                    "lineStyle": {
                        "normal": {
                            "color": "#0f0",
                            "width": 1,
                            "curveness": 0.2
                        }
                    },
                    "data": this.props.data ? this.props.data.dataMapNow : this.state.dataMapArr
                },
                {
                    "name": "北京",
                    "type": "lines",
                    "zlevel": 2,
                    "effect": {
                        "show": true,
                        "period": 6,
                        "trailLength": 0,
                        "symbol": "arrow",
                        "symbolSize": 15
                    },
                    "lineStyle": {
                        "normal": {
                            "color": "#0f0",
                            "width": 1,
                            "opacity": 0.4,
                            "curveness": 0.2
                        }
                    },
                    "data": this.props.data ? this.props.data.dataMapNow : this.state.dataMapArr
                },
                {
                    "name": "北京",
                    "type": "effectScatter",
                    "coordinateSystem": "geo",
                    "zlevel": 2,
                    "effectScatter": {
                        "symbol": "diamond"
                    },
                    "rippleEffect": {
                        "brushType": "stroke",
                        "scale": 6
                    },
                    "label": {
                        "normal": {
                            "show": true,
                            "position": "right",
                            "formatter": "{b}",
                            "textStyle": {
                                "color": "#fff",
                                "fontSize": "15"
                            }
                        },
                        
                    },
                    "symbolSize": 10,
                    "itemStyle": {
                        "normal": {
                            "color": "#0f0"
                        }
                    },
                    "data": this.props.data ? this.props.data.markerArr : this.state.markerArr
                },
                // {
                //     name: 'World Population (2010)',
                //     type: 'map',
                //     mapType: 'world',
                //     roam: true,
                //     itemStyle: {
                //         normal: {
                //             label: { show: false }
                //         },
                //         emphasis: { label: { show: false } }
                //     },
                //     data: [
                //         { name: 'Afghanistan', value: 12345 },
                //         { name: 'Angola', value: 345 },
                //         { name: 'Albania', value: 32423 },
                //         { name: 'United Arab Emirates', value: 8441.537 },
                //         { name: 'Argentina', value: 123 },
                //         { name: 'Armenia', value: 2963.496 },
                //         { name: 'French Southern and Antarctic Lands', value: 268.065 },
                //         { name: 'Australia', value: 22404.488 },
                //         { name: 'Austria', value: 8401.924 },
                //         { name: 'Azerbaijan', value: 9094.718 },
                //         { name: 'Burundi', value: 9232.753 },
                //         { name: 'Belgium', value: 10941.288 },
                //         { name: 'Benin', value: 9509.798 },
                //         { name: 'Burkina Faso', value: 15540.284 },
                //         { name: 'Bangladesh', value: 151125.475 },
                //         { name: 'Bulgaria', value: 7389.175 },
                //         { name: 'The Bahamas', value: 66402.316 },
                //         { name: 'Bosnia and Herzegovina', value: 3845.929 },
                //         { name: 'Belarus', value: 9491.07 },
                //         { name: 'Belize', value: 308.595 },
                //         { name: 'Bermuda', value: 64.951 },
                //         { name: 'Bolivia', value: 716.939 },
                //         { name: 'Brazil', value: 195210.154 },
                //         { name: 'Brunei', value: 27.223 },
                //         { name: 'Bhutan', value: 716.939 },
                //         { name: 'Botswana', value: 1969.341 },
                //         { name: 'Central African Republic', value: 4349.921 },
                //         { name: 'Canada', value: 34126.24 },
                //         { name: 'Switzerland', value: 7830.534 },
                //         { name: 'Chile', value: 32.76 },
                //         { name: 'China', value: 324000.465 },
                //         { name: 'Ivory Coast', value: 324.978 },
                //         { name: 'Cameroon', value: 324.343 },
                //         { name: 'Democratic Republic of the Congo', value: 62191.161 },
                //         { name: 'Republic of the Congo', value: 3573.024 },
                //         { name: 'Colombia', value: 46444.798 },
                //         { name: 'Costa Rica', value: 4669.685 },
                //         { name: 'Cuba', value: 11281.768 },
                //         { name: 'Northern Cyprus', value: 1.468 },
                //         { name: 'Cyprus', value: 1103.685 },
                //         { name: 'Czech Republic', value: 10553.701 },
                //         { name: 'Germany', value: 83017.404 },
                //         { name: 'Djibouti', value: 834.036 },
                //         { name: 'Denmark', value: 5550.959 },
                //         { name: 'Dominican Republic', value: 10016.797 },
                //         { name: 'Algeria', value: 37062.82 },
                //         { name: 'Ecuador', value: 15001.072 },
                //         { name: 'Egypt', value: 78075.705 },
                //         { name: 'Eritrea', value: 5741.159 },
                //         { name: 'Spain', value: 46182.038 },
                //         { name: 'Estonia', value: 1298.533 },
                //         { name: 'Ethiopia', value: 87095.281 },
                //         { name: 'Finland', value: 5367.693 },
                //         { name: 'Fiji', value: 860.559 },
                //         { name: 'Falkland Islands', value: 49.581 },
                //         { name: 'France', value: 63230.866 },
                //         { name: 'Gabon', value: 1556.222 },
                //         { name: 'United Kingdom', value: 62066.35 },
                //         { name: 'Georgia', value: 4388.674 },
                //         { name: 'Ghana', value: 24262.901 },
                //         { name: 'Guinea', value: 10876.033 },
                //         { name: 'Gambia', value: 1680.64 },
                //         { name: 'Guinea Bissau', value: 10876.033 },
                //         { name: 'Equatorial Guinea', value: 696.167 },
                //         { name: 'Greece', value: 11109.999 },
                //         { name: 'Greenland', value: 56.546 },
                //         { name: 'Guatemala', value: 14341.576 },
                //         { name: 'French Guiana', value: 231.169 },
                //         { name: 'Guyana', value: 786.126 },
                //         { name: 'Honduras', value: 7621.204 },
                //         { name: 'Croatia', value: 4338.027 },
                //         { name: 'Haiti', value: 9896.4 },
                //         { name: 'Hungary', value: 10014.633 },
                //         { name: 'Indonesia', value: 240676.485 },
                //         { name: 'India', value: 1205624.648 },
                //         { name: 'Ireland', value: 4467.561 },
                //         { name: 'Iran', value: 240676.485 },
                //         { name: 'Iraq', value: 30962.38 },
                //         { name: 'Iceland', value: 318.042 },
                //         { name: 'Israel', value: 7420.368 },
                //         { name: 'Italy', value: 60508.978 },
                //         { name: 'Jamaica', value: 2741.485 },
                //         { name: 'Jordan', value: 6454.554 },
                //         { name: 'Japan', value: 127352.833 },
                //         { name: 'Kazakhstan', value: 15921.127 },
                //         { name: 'Kenya', value: 40909.194 },
                //         { name: 'Kyrgyzstan', value: 5334.223 },
                //         { name: 'Cambodia', value: 14364.931 },
                //         { name: 'South Korea', value: 51452.352 },
                //         { name: 'Kosovo', value: 97.743 },
                //         { name: 'Kuwait', value: 2991.58 },
                //         { name: 'Laos', value: 6395.713 },
                //         { name: 'Lebanon', value: 4341.092 },
                //         { name: 'Liberia', value: 3957.99 },
                //         { name: 'Libya', value: 6040.612 },
                //         { name: 'Sri Lanka', value: 20758.779 },
                //         { name: 'Lesotho', value: 2008.921 },
                //         { name: 'Lithuania', value: 3068.457 },
                //         { name: 'Luxembourg', value: 507.885 },
                //         { name: 'Latvia', value: 2090.519 },
                //         { name: 'Morocco', value: 31642.36 },
                //         { name: 'Moldova', value: 103.619 },
                //         { name: 'Madagascar', value: 21079.532 },
                //         { name: 'Mexico', value: 117886.404 },
                //         { name: 'Macedonia', value: 507.885 },
                //         { name: 'Mali', value: 13985.961 },
                //         { name: 'Myanmar', value: 51931.231 },
                //         { name: 'Montenegro', value: 620.078 },
                //         { name: 'Mongolia', value: 2712.738 },
                //         { name: 'Mozambique', value: 23967.265 },
                //         { name: 'Mauritania', value: 3609.42 },
                //         { name: 'Malawi', value: 15013.694 },
                //         { name: 'Malaysia', value: 28275.835 },
                //         { name: 'Namibia', value: 2178.967 },
                //         { name: 'New Caledonia', value: 246.379 },
                //         { name: 'Niger', value: 15893.746 },
                //         { name: 'Nigeria', value: 159707.78 },
                //         { name: 'Nicaragua', value: 5822.209 },
                //         { name: 'Netherlands', value: 16615.243 },
                //         { name: 'Norway', value: 4891.251 },
                //         { name: 'Nepal', value: 26846.016 },
                //         { name: 'New Zealand', value: 4368.136 },
                //         { name: 'Oman', value: 2802.768 },
                //         { name: 'Pakistan', value: 173149.306 },
                //         { name: 'Panama', value: 3678.128 },
                //         { name: 'Peru', value: 29262.83 },
                //         { name: 'Philippines', value: 93444.322 },
                //         { name: 'Papua New Guinea', value: 6858.945 },
                //         { name: 'Poland', value: 38198.754 },
                //         { name: 'Puerto Rico', value: 3709.671 },
                //         { name: 'North Korea', value: 1.468 },
                //         { name: 'Portugal', value: 10589.792 },
                //         { name: 'Paraguay', value: 6459.721 },
                //         { name: 'Qatar', value: 1749.713 },
                //         { name: 'Romania', value: 21861.476 },
                //         { name: 'Russia', value: 21861.476 },
                //         { name: 'Rwanda', value: 10836.732 },
                //         { name: 'Western Sahara', value: 514.648 },
                //         { name: 'Saudi Arabia', value: 27258.387 },
                //         { name: 'Sudan', value: 35652.002 },
                //         { name: 'South Sudan', value: 9940.929 },
                //         { name: 'Senegal', value: 12950.564 },
                //         { name: 'Solomon Islands', value: 526.447 },
                //         { name: 'Sierra Leone', value: 5751.976 },
                //         { name: 'El Salvador', value: 6218.195 },
                //         { name: 'Somaliland', value: 9636.173 },
                //         { name: 'Somalia', value: 9636.173 },
                //         { name: 'Republic of Serbia', value: 3573.024 },
                //         { name: 'Suriname', value: 524.96 },
                //         { name: 'Slovakia', value: 5433.437 },
                //         { name: 'Slovenia', value: 2054.232 },
                //         { name: 'Sweden', value: 9382.297 },
                //         { name: 'Swaziland', value: 1193.148 },
                //         { name: 'Syria', value: 7830.534 },
                //         { name: 'Chad', value: 11720.781 },
                //         { name: 'Togo', value: 6306.014 },
                //         { name: 'Thailand', value: 66402.316 },
                //         { name: 'Tajikistan', value: 7627.326 },
                //         { name: 'Turkmenistan', value: 5041.995 },
                //         { name: 'East Timor', value: 10016.797 },
                //         { name: 'Trinidad and Tobago', value: 1328.095 },
                //         { name: 'Tunisia', value: 10631.83 },
                //         { name: 'Turkey', value: 72137.546 },
                //         { name: 'United Republic of Tanzania', value: 44973.33 },
                //         { name: 'Uganda', value: 33987.213 },
                //         { name: 'Ukraine', value: 46050.22 },
                //         { name: 'Uruguay', value: 3371.982 },
                //         { name: 'United States of America', value: 312247.116 },
                //         { name: 'Uzbekistan', value: 27769.27 },
                //         { name: 'Venezuela', value: 236.299 },
                //         { name: 'Vietnam', value: 89047.397 },
                //         { name: 'Vanuatu', value: 236.299 },
                //         { name: 'West Bank', value: 13.565 },
                //         { name: 'Yemen', value: 22763.008 },
                //         { name: 'South Africa', value: 51452.352 },
                //         { name: 'Zambia', value: 13216.985 },
                //         { name: 'Zimbabwe', value: 13076.978 }
                //     ]
                // }
            ]
        }
        myChart.setOption(option);
    }
    componentDidMount(){
        //  地图初始化
        this.initMap()
    }
    componentDidUpdate(){
        //  地图更新
        this.initMap()
    }
    render(){
        return(
            <div className="myChart" ref="myChart" style={{ width: '100%', height: '100%' }}></div> 
        )
    }
}