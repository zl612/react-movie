import config from '../js/config.js'

export default {
    // 获取电影列表数据
    getMovieListData(){
        const url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getMovieListData`
            return new Promise(function(resolve, reject) {
                // fetch(url)  
                //     .then((response) => {
                //     if (response.ok) {
                //         return response.json()
                //     } else {
                //         console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                //     }
                //     })
                //     .then((data) => {
                //         resolve(data)
                //     })
                //     .catch((err)=> {
                //         reject(err)
                //     })

// 模拟真数据
              setTimeout(function(){
                    const data = {
    "count": 10,
    "start": 3,
    "total": 34,
    "subjects": [
        {
            "rating": {
                "max": 10,
                "average": 7.4,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "科幻",
                "惊悚",
                "恐怖"
            ],
            "title": "异形：契约",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1000010/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/32214.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/32214.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/32214.jpg"
                    },
                    "name": "迈克尔·法斯宾德",
                    "id": "1000010"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1316589/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/1494691117.87.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/1494691117.87.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1494691117.87.jpg"
                    },
                    "name": "凯瑟琳·沃特斯顿",
                    "id": "1316589"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1009265/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1413531816.25.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1413531816.25.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1413531816.25.jpg"
                    },
                    "name": "比利·克鲁德普",
                    "id": "1009265"
                }
            ],
            "collect_count": 76455,
            "original_title": "Alien: Covenant",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1054416/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/588.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/588.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/588.jpg"
                    },
                    "name": "雷德利·斯科特",
                    "id": "1054416"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2459944375.jpg",
                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459944375.jpg",
                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2459944375.jpg"
            },
            "alt": "https://movie.douban.com/subject/11803087/",
            "id": "11803087"
        },
        {
            "rating": {
                "max": 10,
                "average": 7.3,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "剧情"
            ],
            "title": "雄狮",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1025134/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/1487565203.27.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/1487565203.27.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1487565203.27.jpg"
                    },
                    "name": "戴夫·帕特尔",
                    "id": "1025134"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1274969/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/34813.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/34813.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/34813.jpg"
                    },
                    "name": "鲁妮·玛拉",
                    "id": "1274969"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1049573/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/5140.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/5140.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/5140.jpg"
                    },
                    "name": "大卫·文翰",
                    "id": "1049573"
                }
            ],
            "collect_count": 19653,
            "original_title": "Lion",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1356931/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1487844297.93.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1487844297.93.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1487844297.93.jpg"
                    },
                    "name": "加斯·戴维斯",
                    "id": "1356931"
                }
            ],
            "year": "2016",
            "images": {
                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2462515303.jpg",
                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462515303.jpg",
                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2462515303.jpg"
            },
            "alt": "https://movie.douban.com/subject/26220650/",
            "id": "26220650"
        },
        {
            "rating": {
                "max": 10,
                "average": 4.8,
                "stars": "25",
                "min": 0
            },
            "genres": [
                "动作",
                "奇幻",
                "冒险"
            ],
            "title": "新木乃伊",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1054435/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/567.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/567.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/567.jpg"
                    },
                    "name": "汤姆·克鲁斯",
                    "id": "1054435"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1016674/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/17524.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/17524.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/17524.jpg"
                    },
                    "name": "罗素·克劳",
                    "id": "1016674"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1315815/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/33650.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/33650.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/33650.jpg"
                    },
                    "name": "安娜贝拉·沃丽丝",
                    "id": "1315815"
                }
            ],
            "collect_count": 47625,
            "original_title": "The Mummy",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1049959/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/25843.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/25843.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/25843.jpg"
                    },
                    "name": "艾里克斯·库兹曼",
                    "id": "1049959"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2459198108.jpg",
                "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2459198108.jpg",
                "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2459198108.jpg"
            },
            "alt": "https://movie.douban.com/subject/20451290/",
            "id": "20451290"
        },
        {
            "rating": {
                "max": 10,
                "average": 9.2,
                "stars": "45",
                "min": 0
            },
            "genres": [
                "剧情",
                "传记",
                "运动"
            ],
            "title": "摔跤吧！爸爸",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1031931/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/13628.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/13628.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/13628.jpg"
                    },
                    "name": "阿米尔·汗",
                    "id": "1031931"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1372457/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/1493121366.9.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/1493121366.9.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1493121366.9.jpg"
                    },
                    "name": "法缇玛·萨那·纱卡",
                    "id": "1372457"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1372458/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1493121856.81.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1493121856.81.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1493121856.81.jpg"
                    },
                    "name": "桑亚·玛荷塔",
                    "id": "1372458"
                }
            ],
            "collect_count": 324774,
            "original_title": "Dangal",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1366907/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1484120321.24.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1484120321.24.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1484120321.24.jpg"
                    },
                    "name": "涅提·蒂瓦里",
                    "id": "1366907"
                }
            ],
            "year": "2016",
            "images": {
                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2457983084.jpg",
                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2457983084.jpg",
                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2457983084.jpg"
            },
            "alt": "https://movie.douban.com/subject/26387939/",
            "id": "26387939"
        },
        {
            "rating": {
                "max": 10,
                "average": 7.2,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "动作",
                "奇幻",
                "冒险"
            ],
            "title": "神奇女侠",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1044996/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/8710.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/8710.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/8710.jpg"
                    },
                    "name": "盖尔·加朵",
                    "id": "1044996"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1053621/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/32637.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/32637.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/32637.jpg"
                    },
                    "name": "克里斯·派恩",
                    "id": "1053621"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1009298/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/1416109882.48.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/1416109882.48.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1416109882.48.jpg"
                    },
                    "name": "康妮·尼尔森",
                    "id": "1009298"
                }
            ],
            "collect_count": 147342,
            "original_title": "Wonder Woman",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1023041/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1496555593.75.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1496555593.75.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1496555593.75.jpg"
                    },
                    "name": "派蒂·杰金斯",
                    "id": "1023041"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2460006593.jpg",
                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2460006593.jpg",
                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2460006593.jpg"
            },
            "alt": "https://movie.douban.com/subject/1578714/",
            "id": "1578714"
        },
        {
            "rating": {
                "max": 10,
                "average": 7.1,
                "stars": "35",
                "min": 0
            },
            "genres": [
                "爱情"
            ],
            "title": "原谅他77次",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1041425/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/35594.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/35594.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/35594.jpg"
                    },
                    "name": "蔡卓妍",
                    "id": "1041425"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1275779/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1426919557.0.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1426919557.0.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1426919557.0.jpg"
                    },
                    "name": "周柏豪 ",
                    "id": "1275779"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1313357/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/26708.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/26708.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/26708.jpg"
                    },
                    "name": "诗雅",
                    "id": "1313357"
                }
            ],
            "collect_count": 1379,
            "original_title": "原諒他77次",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1274313/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/28346.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/28346.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/28346.jpg"
                    },
                    "name": "邱礼涛",
                    "id": "1274313"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2464315908.jpg",
                "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2464315908.jpg",
                "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2464315908.jpg"
            },
            "alt": "https://movie.douban.com/subject/26857793/",
            "id": "26857793"
        },
        {
            "rating": {
                "max": 10,
                "average": 5.2,
                "stars": "25",
                "min": 0
            },
            "genres": [
                "剧情",
                "喜剧",
                "动作"
            ],
            "title": "我不做大哥好多年",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1274814/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/44400.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/44400.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/44400.jpg"
                    },
                    "name": "郭采洁",
                    "id": "1274814"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1051157/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1484124188.44.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1484124188.44.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1484124188.44.jpg"
                    },
                    "name": "杨祐宁",
                    "id": "1051157"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1002862/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1161.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1161.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1161.jpg"
                    },
                    "name": "曾志伟",
                    "id": "1002862"
                }
            ],
            "collect_count": 1306,
            "original_title": "大尾鱸鰻2",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1310965/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/1498152566.57.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/1498152566.57.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1498152566.57.jpg"
                    },
                    "name": "邱瓈宽",
                    "id": "1310965"
                }
            ],
            "year": "2016",
            "images": {
                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2462611862.jpg",
                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462611862.jpg",
                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2462611862.jpg"
            },
            "alt": "https://movie.douban.com/subject/26429879/",
            "id": "26429879"
        },
        {
            "rating": {
                "max": 10,
                "average": 6.9,
                "stars": "35",
                "min": 0
            },
            "genres": [
                "剧情",
                "动作",
                "犯罪"
            ],
            "title": "缉枪",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1340456/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1414480382.94.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1414480382.94.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1414480382.94.jpg"
                    },
                    "name": "白举纲",
                    "id": "1340456"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1312979/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/14640.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/14640.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/14640.jpg"
                    },
                    "name": "连奕名",
                    "id": "1312979"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1275262/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/1373458385.8.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/1373458385.8.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1373458385.8.jpg"
                    },
                    "name": "热依扎",
                    "id": "1275262"
                }
            ],
            "collect_count": 661,
            "original_title": "缉枪",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1319928/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1496407606.15.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1496407606.15.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1496407606.15.jpg"
                    },
                    "name": "徐兵",
                    "id": "1319928"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2461747793.jpg",
                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2461747793.jpg",
                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2461747793.jpg"
            },
            "alt": "https://movie.douban.com/subject/26801782/",
            "id": "26801782"
        },
        {
            "rating": {
                "max": 10,
                "average": 8,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "纪录片"
            ],
            "title": "重返·狼群",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1374776/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/1496589773.39.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/1496589773.39.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1496589773.39.jpg"
                    },
                    "name": "李微漪",
                    "id": "1374776"
                }
            ],
            "collect_count": 4069,
            "original_title": "重返·狼群",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1374775/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1497740555.21.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1497740555.21.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1497740555.21.jpg"
                    },
                    "name": "亦风",
                    "id": "1374775"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2461834877.jpg",
                "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2461834877.jpg",
                "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2461834877.jpg"
            },
            "alt": "https://movie.douban.com/subject/26920269/",
            "id": "26920269"
        },
        {
            "rating": {
                "max": 10,
                "average": 7.3,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "剧情"
            ],
            "title": "忠爱无言",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1339722/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1416481290.81.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1416481290.81.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1416481290.81.jpg"
                    },
                    "name": "高强",
                    "id": "1339722"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1314006/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/21303.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/21303.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/21303.jpg"
                    },
                    "name": "于月仙",
                    "id": "1314006"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1274715/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/img/celebrity/small/6017.jpg",
                        "large": "https://img1.doubanio.com/img/celebrity/large/6017.jpg",
                        "medium": "https://img1.doubanio.com/img/celebrity/medium/6017.jpg"
                    },
                    "name": "李玉峰",
                    "id": "1274715"
                }
            ],
            "collect_count": 6038,
            "original_title": "忠爱无言",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1373927/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/img/celebrity/small/1495082084.72.jpg",
                        "large": "https://img3.doubanio.com/img/celebrity/large/1495082084.72.jpg",
                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1495082084.72.jpg"
                    },
                    "name": "谈宜之",
                    "id": "1373927"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2459193246.jpg",
                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459193246.jpg",
                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2459193246.jpg"
            },
            "alt": "https://movie.douban.com/subject/26995137/",
            "id": "26995137"
        }
    ],
    "title": "正在上映的电影-北京"
}
    resolve(data)
              },1000)  

        
});
       
    },
    // 获取电影详细
    getMovieDetailData(){

    },
    // 搜索数据
    searchMovie(){

    }
}