<template>
    <div id="app">
        <div class="header">
            <div class="logo_img" @click="logoClick">
                <div style="display:flex; align-items: center; float:left; height: 65px;">
                    <div class="header-logo">
                        <img id="header-img" src="../assets/logo1.png" >
                    </div>
                </div>
                <div style="display:flex; float:left; height: 65px;">
                    <div class="header-important">
                        <div class="company_name">前端组件开发</div>
                        <div class="header-title company_name">qdzjkf.com</div>
                    </div>
                </div>
            </div>
            <div id="menu_index">
                <!-- web端菜单导航 -->
                <el-menu v-if="seen" :default-active="activeIndex" class="el-menu-demo" menu-trigger="click" text-color="#333" style="height: 65px; border:0;" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1" class="header-title">首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">产品与解决方案</template>
                        <el-menu-item index="2-1">产品微观</el-menu-item>
                        <!-- <el-menu-item index="2-2">生鲜果蔬</el-menu-item>
                        <el-menu-item index="2-3" disabled>服装品牌</el-menu-item>
                        <el-menu-item index="2-4" disabled>微商城小程序</el-menu-item> -->
                    </el-submenu>
                    <el-menu-item index="3" class="header-title">产品特点</el-menu-item>
                    <el-menu-item index="4" class="header-title">官方小程序</el-menu-item>
                    <el-menu-item index="5" class="header-title">关于我们</el-menu-item>
                </el-menu>
                <!-- 手机端菜单导航 v-bind:style="{backgroundColor:'#409EFF'}" -->
                <el-menu v-if="!seen" :default-active="activeIndex" class="el-menu-demo" menu-trigger="click" text-color="#333" style="height: 65px; border:0;" mode="horizontal" @select="handleSelectMobile">
                    <el-submenu index="1" class="header-title mobile_menu">
                        <template slot="title">{{currentMenu}}</template>
                        <el-menu-item index="1" class="header-title">首页</el-menu-item>
                        <el-menu-item index="2-2" class="header-title">生鲜果蔬</el-menu-item>
                        <el-menu-item index="2-1" class="header-title">产品微观</el-menu-item>
                        <el-menu-item index="3" class="header-title">产品特点</el-menu-item>
                        <el-menu-item index="4" class="header-title">官方小程序</el-menu-item>
                        <el-menu-item index="5" class="header-title">关于我们</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
            <!-- <div v-if="seen" style="float: right; display: flex;align-items: center; height: 100%;">
                <el-button type="text" style="margin-right: 20px;" class="header-title" @click="login">登录</el-button>
                <el-button type="primary" class="header-title" @click="register" round>注册</el-button>
            </div> -->
        </div>
        <div class="container" style="clear: both;">
            <router-view></router-view>
        </div>

        <div style="width: 90%;margin: 20px auto;">
            <div style="height:1px;padding:0;background-color:#999;">
            </div>
        </div>
        <div style="width: 90%;margin: 20px auto;">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="18">
					<div style="margin-left: -56%;">
                    <p class="footer_font">邮箱：2819971691@qq.com</p>
					
                    <div @click="goBeiAnClick" style="margin: auto;"   class="footer_font" >
                        互联网ICP备案：粤ICP备2024215752号
                    </div>
					<div @click="goGABeiAnClick" style="margin: 10px 0px;"   class="footer_font" >
					    公安备案号：粤公网安备44060502003704号

					</div>
                    <div style="margin: auto;margin-top: 6px;" class="footer_font">
                        ©qdzjkf.com所有
                    </div>
					</div>
                </el-col>
                <el-col :xs="24" :sm="6">
					<div style="display: flex; justify-self: right;">
						
						<div><img :src="company.qrcode" style="width: 100px;height: 100px;border: 0"/>
						<div class="footer_font" style="padding-left: 0px;">关注公众号</div>
						
						</div>
						
						<div style="margin-left: 60px;">
							<img :src="company.wxcode" style="width: 100px;height: 100px;border: 0"/>
						<div class="footer_font" style="padding-left: 0px;">{{"联系我们"}}</div>
						
						</div>
					</div>
                    
                </el-col>
            </el-row>
        </div>
        <div id="back_to_top" ref="btn" @click="backTop" style="display: none;">
            <p style="font-size: 0.625em; font-weight: bold">TOP</p>
            <img src="../assets/other/launch.png" style="height: 45px;width: 35px" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        data() {
            return {
                activeIndex: '1',
                company:{
                    qrcode: require("../../static/other/公众号二维码.jpg"),
					wxcode: require("../../static/other/微信二维码.jpg"),
					
                },
                scroll: '',
                timer: '',
                seen: true,
                currentMenu:'首页'
            };
        },
        methods: {
			goBeiAnClick(){
				
				// 打开新标签
				window.open("https://beian.miit.gov.cn/#/Integrated/index", '_blank');
			},
			goGABeiAnClick(){
				
				// 打开新标签
				window.open("https://beian.mps.gov.cn/#/query/webSearch", '_blank');
			},
            handleSelect(key) {
                switch (key){
                    case '1':
                        this.$router.push({name: "Index"});
                        break;
                    case '2-1':
                        window.location.hash = "#产品微观";
                        break;
                    case '2-2':
                        this.$router.push({name: "Fruit"});
                        break;
                    case '2-3':
                        this.$router.push({name: "Fashion"});
                        break;
                    case '3':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#产品特点";
                        break;
                    case '4':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#官方小程序";
                        break;
                    case '5':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#关于我们";
                        break;
                }
            },
            handleSelectMobile(key) {
                switch (key){
                    case '1':
                        this.$router.push({name: "Index"});
                        this.currentMenu='首页';
                        break;
                    case '2-1':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#产品微观";
                        this.currentMenu='首页';
                        break;
                    case '2-2':
                        this.$router.push({name: "Fruit"});
                        this.currentMenu='生鲜果蔬';
                        break;
                    case '2-3':
                        this.$router.push({name: "Fashion"});
                        break;
                    case '3':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#产品特点";
                        this.currentMenu='首页';
                        break;
                    case '4':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#官方小程序";
                        this.currentMenu='首页';
                        break;
                    case '5':
                        this.$router.push({name: "Index"});
                        window.location.hash = "#关于我们";
                        this.currentMenu='首页';
                        break;
                }
            },
            handleScroll(){
                this.scroll = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
                if( this.scroll >600 ){  //判断滚动后高度超过400px,就显示
                    this.$refs.btn.style.display = 'block';
                }else{
                    this.$refs.btn.style.display = 'none'
                }
            },
            backTop(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
                this.timer = setInterval(() => {
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let ispeed = Math.floor(-osTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                    if (osTop === 0) {
                        clearInterval(this.timer)
                    }
                }, 30)
            },
            login(){
                window.open('https://admin.qdzjkf.com/login')
            },
            register(){
                window.open('https://admin.qdzjkf.com/registe')
            },
            menuSeen(){
                // 屏幕尺寸
                let screenHeight=document.body.clientWidth;
                if(screenHeight>415){
                    this.seen=true;
                }else{
                    this.seen=false;
                }
            },
            logoClick(){
                this.$router.push({name: "Index"});
                this.currentMenu='首页';
            }
        },
        mounted() {
            this.menuSeen()
            window.addEventListener('scroll', this.handleScroll)
        },
    }
</script>

<style scoped>
    .logo_img{
        float:left;
        width: 30%;
        cursor: pointer;
    }
    #back_to_top{
        position: fixed;
        bottom: 50px;
        right: 30px;
        cursor: pointer
    }
    .header-title{
        font-size: 1em;
    }
    .company_name{
        font-weight: normal;
        font-size: 1em;
    }
    .footer_font{
        font-size: 1em;
		text-align: center;
    }
    #menu_index{
        float: left; width: 50%;height: 100%
    }
    .header{
        margin: auto;
        width: 90%;
        height: 65px;
        /*background: #F56C6C;*/
    }
    @media screen and (max-device-width: 415px) {
        .logo_img{
            float:left;
            width: auto;
            cursor: pointer;
        }
        #back_to_top{
            position: fixed;
            bottom: 50px;
            right: 5px;
            cursor: pointer
        }
        .footer_font{
            font-size: 0.875em;
        }
        #menu_index{
            float: right;
            width: auto;
            height: 100%
        }
        .mobile_menu{

        }
    }
    #header-img{
        width: 50px;
        height: 50px;
        float: left;
        margin: auto;
    }
    .header-logo{
        height: 50px;
        width: 50px;
        align-self: center;
    }
    .header-important{
        float: left;
        margin-left: 6px;
        align-self: center;
    }

    .footer{
        display: flex;
        align-items: center;
        margin: 10px auto;
        width: 90%;
    }
    a{text-decoration: none;}
    a:visited{text-decoration: none;}
    a:hover {text-decoration: none;}
    a:active{text-decoration:none;}
</style>