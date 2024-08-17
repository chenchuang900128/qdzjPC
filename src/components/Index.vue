<template>
    <div>
        <el-carousel :height="computeHeight">
            <el-carousel-item v-for="(item, index) in sliders" :key="index">
                <img  :src="item.img" class="slider_img">
            </el-carousel-item>
        </el-carousel>
        <div class="solve head-label">
            <div style="text-align: center; padding-top: 20px !important;" class="font_size_24">
                一站式解决方案
            </div>
        </div>
        <!-- 盒子 -->
        <div class="border_parent">
            <el-row :gutter="10">
                <el-col :xs="12" :sm="12" :md="6">
                    <div class="border">
                        <div class="border_img_parent">
                            <img :src="images[1].img" class="img_border"/>
                        </div>
                        <div class="border_title">{{images[1].title}}</div>
                        <div class="border_content_one">{{images[1].content[0]}}</div>
                        <div class="border_content_two">{{images[1].content[1]}}</div>
                    </div>
                </el-col>
                <el-col :xs="12" :sm="12" :md="6">
                    <div class="border">
                        <div class="border_img_parent">
                            <img :src="images[2].img" class="img_border"/>
                        </div>
                        <div class="border_title">{{images[2].title}}</div>
                        <div class="border_content_one">{{images[2].content[0]}}</div>
                        <div class="border_content_two">{{images[2].content[1]}}</div>
                    </div>
                </el-col>
                <el-col :xs="12" :sm="12" :md="6">
                    <div class="border">
                        <div class="border_img_parent">
                            <img :src="images[3].img" class="img_border"/>
                        </div>
                        <div class="border_title">{{images[3].title}}</div>
                        <div class="border_content_one">{{images[3].content[0]}}</div>
                        <div class="border_content_two">{{images[3].content[1]}}</div>
                    </div>
                </el-col>
                <el-col :xs="12" :sm="12"  :md="6">
                    <div class="border" style="margin-right: 0">
                        <div class="border_img_parent">
                            <img :src="images[4].img" class="img_border"/>
                        </div>
                        <div class="border_title">{{images[4].title}}</div>
                        <div class="border_content_one">{{images[4].content[0]}}</div>
                        <div class="border_content_two">{{images[4].content[1]}}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 手机端商品展示 -->
        <div id="产品微观" class="head-label">
            <div style="text-align: center;" class="font_size_24">
                产品微观介绍
            </div>
        </div>
        <div class="product_mobile">
            <el-row>
                <el-col :xs="24" :sm="12">
                    <div class="product_mobile_content" style="padding-top: 50%;position: relative;">
                        <div style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;display: flex;
                        justify-content: center;align-items: center;flex-direction: column;">
                            <div class="product_mobile_title font_size_30">{{products[0].title}}</div>
                            <div class="product_font_style product_mobile_content_one" style="width: 80%; margin-top: 20px !important; color:#333" v-for="(content, index) in products[0].content" :key="index">{{content}}</div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12">
                    <el-row :gutter="20">
                        <el-col span="12">
                            <img :src="products[0].img[0].left" style="width: 100%;">
                        </el-col>
                        <el-col span="12">
                            <img :src="products[0].img[0].right" style="width: 100%;">
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!-- 后台管理 -->
        <div class="product_pc">
            <el-row>
                <el-col :xs="24" :sm="12">
                    <div class="product_pc_one">
                        <div class="product_mobile_title font_size_30">{{manages[0].title}}</div>
                        <div style="margin-top: 20px" class="product_font_style">{{manages[0].content[0]}}</div>
                        <div style="margin-top: 10px" class="product_font_style">{{manages[0].content[1]}}</div>
                        <div style="margin-top: 10px" class="product_font_style">{{manages[0].content[2]}}</div>
                        <div style="margin-top: 10px" class="product_font_style">{{manages[0].content[3]}}</div>
                        <div style="margin-top: 10px" class="product_font_style">{{manages[0].content[4]}}</div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12">
                    <img :src="manages[0].img[0]" class="product_pc_img"/>
                </el-col>
            </el-row>
        </div>
        <!-- 产品特点-->
        <div id="产品特点" class="product_spec_title head-label">
            <div style="text-align: center;" class="font_size_24">
                产品特点
            </div>
        </div>
        <div class="product_spec_parent">
            <div class="border_one border_spec">
                <div class="border_spec_inner_one">
                    <img :src="spec.product[0].img" style="width: 50px;height: 50px"/>
                    <div style="margin-left:5px; font-weight: bold;" class="font_size_24">
                        {{spec.product[0].title}}
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;">
                    <div class="border_spec_content_one">
                        {{spec.product[0].contents[0]}}
                    </div>
                    <div class="border_spec_inner_last">
                        {{spec.product[0].contents[1]}}
                    </div>
                </div>
            </div>
            <div>
                <img :src="computeArrowImg" class="border_spec_img"/>
            </div>
            <div class="border_spec">
                <div class="border_spec_inner_one">
                    <img :src="spec.product[1].img" style="width: 50px;height: 50px"/>
                    <div style="margin-left:5px; font-weight: bold;" class="font_size_24">
                        {{spec.product[1].title}}
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;">
                    <div class="border_spec_content_one">
                        {{spec.product[1].contents[0]}}
                    </div>
                    <div class="border_spec_inner_last">
                        {{spec.product[1].contents[1]}}
                    </div>
                </div>
            </div>
            <div>
                <img :src="computeArrowImg" class="border_spec_img"/>
            </div>
            <div class="border_spec">
                <div class="border_spec_inner_one">
                    <img :src="spec.product[2].img" style="width: 50px;height: 50px"/>
                    <div style="margin-left:5px; font-weight: bold;" class="font_size_24">
                        {{spec.product[2].title}}
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;">
                    <div class="border_spec_content_one">
                        {{spec.product[2].contents[0]}}
                    </div>
                    <div class="border_spec_inner_last">
                        {{spec.product[2].contents[1]}}
                    </div>
                </div>
            </div>
            <div>
                <img :src="computeArrowImg" class="border_spec_img"/>
            </div>
            <div class="border_spec" style="margin-right: 0">
                <div class="border_spec_inner_one">
                    <img :src="spec.product[3].img" style="width: 50px;height: 50px"/>
                    <div style="margin-left:5px; font-weight: bold;" class="font_size_24">
                        {{spec.product[3].title}}
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;">
                    <div class="border_spec_content_one">
                        {{spec.product[3].contents[0]}}
                    </div>
                    <div class="border_spec_inner_last">
                        {{spec.product[3].contents[1]}}
                    </div>
                </div>
            </div>
        </div>
        <!-- 官方小程序-->
        <div id="官方小程序" class="cooperation head-label">
            <div style="text-align: center;" class="font_size_24">
                官方小程序
            </div>
        </div>
        <div class="cooperation_parent">
            <div style="width: auto; height: auto; margin: auto">
                <img style="height: 160px;width: 160px;" src="../../static/other/partner_01.jpg"/>
                <img style="height: 160px;width: 160px;margin-left: 30px;" src="../../static/other/partner_02.jpg"/>
				<img style="height: 160px;width: 160px;margin-left: 30px;" src="../../static/other/partner_03.jpg"/>
				<img style="height: 160px;width: 160px;margin-left: 30px;" src="../../static/other/partner_04.jpg"/>
            </div>
        </div>
        <!-- 关于我们-->
        <div id="关于我们" class="about_me head-label">
            <div style="text-align: center;" class="font_size_24">
                关于我们
            </div>
        </div>
        <div style="width: 90%;background-color: #F2F6FC;margin: 10px auto;">
            <div style="display: flex; flex-direction: column;width: 100%;">
                <p class="about_me_p">{{company[0]}}</p>
                <p class="about_me_p">{{company[1]}}</p>
                <p class="about_me_p">{{company[2]}}</p>
                <p class="about_me_p">{{company[3]}}</p>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'Index',
        data() {
            return {
                sliders: [],
                images: [
                    {
                        img: require('../../static/other/用户管理.png'),
                        title: "用户管理",
                        content: ["用户消费分析", "用户标签设定"]
                    },
                    {
                        img: require('../../static/other/店铺管理.png'),
                        title: "前端组件",
                        content: ["丰富多样组件", "提高代码可维护性"]
                    },
                    {
                        img: require('../../static/other/数据分析.png'),
                        title: "前端模版",
                        content: ["大量行业模版", "提升前端开发效率"]
                    },
                    {
                        img: require('../../static/other/品牌渠道.png'),
                        title: "产品定制",
                        content: ["深蕴定制经验", "满足客户个性化需求"]
                    }, {
                        img: require('../../static/other/用户构建.png'),
                        title: "Sass产品",
                        content: ["众多合作产品", "助力企业高质量发展"]
                    }
                ],
                products: [
                    {
                        img: [
                            {
                                left: require('../../static/other/1.jpg'), 
                                right: require('../../static/other/2.jpg'), 
                            },
                            {
                                left: require('../../static/other/3.jpg'), 
                                right: require('../../static/other/4.jpg'), 
                            }
                        ],
                        title: "丰富多样前端组件，大量行业前后端模版",
                        content: [
                            "我们为您带来丰富多样的前端组件，宛如一座宝库，满足您的各种需求。还有大量行业前端模版，如同精心绘制的蓝图，为您的项目奠定坚实基础。无论您是在构建创新的网站，还是开发独特的应用，我们的资源都将成为您的得力助手，助您在数字世界中脱颖而出。", 
                            "",
                           
                        ]
                    }
                ],
                manages: [
                    {
                        img: [require('../../static/other/product_info.jpg')],
                        title: "DIYGW UniApp可视化开发平台",
                        content: ["拖拽式界面设计，一键生成代码",
                            "丰富的组件模板，接口数据绑定",
                            "路由自动生成与配置，项目代码导出与运行",
							 

                        ]
                    }
                ],
                spec: {
                    img: require('../../static/other/arrow.png'),
                    product: [
                        {
                            img: require('../../static/other/手指.png'),
                            title: "前端组件",
                            contents: ["提高开发效率", "易于维护和更新"]
                        },
                        {
                            img: require('../../static/other/店铺管理.png'),
                            title: "前端模版",
                            contents: ["保持风格一致", "快速搭建页面结构"]
                        },
                        {
                            img: require('../../static/other/数据分析.png'),
                            title: "产品定制",
                            contents: ["满足个性化需求", "提升市场竞争力"]
                        },
                        {
                            img: require('../../static/other/助力零售.png'),
                            title: "Sass产品",
                            contents: ["降低开发成本", "提升效益"]
                        }
                    ]
                },
                company: [
                    "企业从事于：前端组件开发、模板开发以及产品定制开发，推动互联网产品营销实现产品化和商业化，并给予技术支持，助力个人和企业发展。",
                    "核心理念：构建五者融合的软件行业新生态，包括前端组件开发、模板开发、产品定制开发、Sass 产品销售及互联网项目产品化商业化。",
                    "团队作风：我们来自不同地域，因梦想而相聚，进而组建团队。每个团队伙伴携手同行，皆是不可或缺。",
                    "企业精神：以实力为盾，自信为矛。我们坚信成功靠朋友，成长靠对手，成就靠团体。",
                ],
                carousel_height: '550px',
            }
        },
        methods: {},
        mounted() {
            this.sliders = [
                {
                    img: require("../../static/slider/a1.jpg")
                },
                {
                    img: require("../../static/slider/a2.jpg")
                }
                
            ]
        },
        computed: {
            //计算高度
            computeHeight() {
                let screenHeight = document.body.clientWidth;
                if (screenHeight > 415) {
                    return '36vw';
                } else {
                    return '36vw';
                }
            },
            computeArrowImg() {
                let screenHeight = document.body.clientWidth;
                if (screenHeight > 450) {
                    return require('../../static/other/arrow.png');
                } else {
                    return require('../../static/other/arrow_down.png');
                }
            }

        },
    }
</script>

<style scoped>
    .border_parent {
        width: 90%;
        margin: auto;
    }

    .slider_img {
        height: 36vw;
        width: 100vw;
    }

    .solve {
        margin-top: 30px;
        margin-bottom: 10px
    }

    .border {
        border-radius: 6px;
        border: 1px solid #EBEEF5;
        height: auto;
        margin: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }

    .border_one {
        margin-left: 0;
    }

    .border_img_parent {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .product_mobile_content {
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .product_mobile_img {
        width: 50%;
    }

    .product_mobile_title {
        font-weight: bold;
        text-align: center;
    }

    .product_pc_one {
        text-align: center;
        min-height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .font_size_30 {
        font-size: 1.875em;
    }

    .product_font_style {
        font-size: 1.085em;
    }

    .product_pc_img {
        width: 100%
    }

    .product_pc_img_div {
        width: 50%;
        float: left;
        display: flex;
        align-items: center;
    }

    .product_pc {
        display: flex;
        width: 90%;
        margin: 20px auto;
        background: #F2F6FC;
        align-items: center;
    }

    .product_spec_title {
        margin-top: 30px;
        margin-bottom: 10px
    }

    .product_spec_parent {
        display: flex;
        width: 90%;
        margin: 20px auto;
        align-items: center;
        height: auto
    }

    .cooperation_parent {
        display: flex;
        justify-content: center;
        width: 90%;
        margin: 20px auto;
        align-items: center;
        height: auto
    }

    .border_spec {
        border-radius: 6px;
        border: 1px solid #EBEEF5;
        float: left;
        width: 25%;
        height: auto;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .about_me_p {
        font-size: 1.05em;
        font-weight: normal;
        padding: 0 20px;
        margin: 10px;
		color: #333;
    }

    .border_title {
        font-family: "PingFang SC";
        margin-top: 10px;
        font-size: 1.125em;
        font-weight: bold;
        text-align: center;
    }

    .border_content_one {
        margin-top: 20px;
        font-size: 1.125em;
        text-align: center;
    }

    .border_content_two {
        margin-top: 5px;
        font-size: 1.125em;
        margin-bottom: 25px;
        text-align: center;
    }

    .img_border {
        margin-top: 15px;
        width: 80px;
        height: 80px
    }

    .border_spec_inner_one {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 35px;
        height: 70px;
    }

    .border_spec_content_one {
        margin-top: 15px;
        font-size: 1.125em;
        float: left;
        text-align: center;
    }

    .border_spec_inner_last {
        margin-top: 15px;
        font-size: 1.125em;
        float: left;
        margin-bottom: 25px;
        text-align: center;
    }

    .cooperation {
        margin-top: 30px;
        width: 100%;
    }

    .about_me {
        display: flex;
        margin-top: 30px;
        justify-content: center;
        width: 100%;
    }

    .product_mobile {
        width: 90%;
        align-items: center;
        margin: 20px auto;
        background: #F2F6FC;
    }

    .product_mobile_img_div {
        width: 50%;
        height: auto;
    }

    .product_mobile_content_one {
        margin-top: 28px;
        text-align: center;
		height: 36px;
		line-height: 36px;
    }

    .product_mobile_content_two {
        margin-top: 10px;
        text-align: center;
    }

    /* 屏幕设备适配 max-device-width: 400px */
    @media screen and (max-device-width: 415px) {
        .slider_img {
            height: 250px;
            width: 100%;
        }


        .border_parent {
            display: flex;
            width: 90%;
            margin: auto;
            height: auto;
            flex-direction: column;
        }

        .border {
            border-radius: 6px;
            border: 1px solid #EBEEF5;
            float: left;
            width: 100%;
            height: auto;
            margin: 10px 0 auto;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
            /*background: aquamarine;*/
        }

        .border_img_parent {
            margin-top: 0;

        }

        .product_mobile {
            width: 90%;
            align-items: center;
            margin: 20px auto;
            height: auto;
            background: #F2F6FC;
        }

        .product_mobile_content {
            width: 100%;
            margin-top: 15px;
        }

        .product_mobile_content_one {
            margin-top: 5px;
        }

        .product_mobile_content_two {
            margin-top: 5px;
        }

        .product_mobile_img_div {
            display: flex;
            width: 100%;
            height: auto;
            justify-content: center;
            margin-top: 10px;
            margin-bottom: 15px;
        }

        .product_mobile_img {
            float: left;
        }

        .product_mobile_title {
            font-weight: bold;
        }

        .product_pc_one {
            width: 100%;
            margin-top: 15px;
        }

        .font_size_30 {
            font-size: 1.25em;
        }

        .product_font_style {
            font-size: 1em;
        }

        .product_pc_img {
            height: 280px;
            width: 320px;
        }

        .product_pc_img_div {
            width: 100%;
            float: left;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
        }

        .product_pc {
            display: flex;
            width: 90%;
            height: auto;
            margin: 20px auto;
            background: #F2F6FC;
            flex-direction: column;
        }

        .head-label {
            display: flex;
            margin-top: 20px;
        }

        .product_spec_parent {
            display: flex;
            width: 90%;
            align-items: center;
            justify-content: center;
            margin: 20px auto;
            height: auto;
            flex-direction: column;
        }

        .border_spec {
            float: left;
            height: auto;
            margin: 8px;
            width: 100%;
            border-radius: 6px;
            border: 1px solid #EBEEF5;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }


        .border_title {
            font-family: "PingFang SC";
            margin-top: 5px;
            font-size: 1.125em;
            font-weight: bold;
        }

        .border_content_one {
            margin-top: 5px;
            font-size: 1.125em;
        }

        .border_content_two {
            margin-top: 5px;
            font-size: 1.125em;
            margin-bottom: 8px;
        }

        .img_border {
            margin-top: 8px;
            width: 80px;
            height: 80px
        }

        .border_spec_inner_one {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 8px;
            /*background-color: aqua;*/
            height: 70px;
        }

        .border_spec_content_one {
            margin-top: 5px;
            font-size: 1.125em;
            float: left;
        }

        .border_spec_inner_last {
            /*background-color: bisque;*/
            margin-top: 5px;
            font-size: 1.125em;
            float: left;
            margin-bottom: 8px;
        }

        .about_me {
            display: flex;
            margin-top: 10px;
            width: 100%;
        }
    }

    .border_spec_img {
        width: 75px;
        height: 55px;
        align-self: center
    }

    .font_size_24 {
        font-size: 1.5em;
    }
</style>