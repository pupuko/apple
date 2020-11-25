<template>
    <div class="main-window">
        <div class="header-div">
            <ul v-if="!isShowMiniGuide">
                <li
                    v-for="(item, index) in guideList"
                    :key="item.name"
                    @click="guideClick(item.name)"
                >
                    <i v-if="item.fa" :class="item.fa" aria-hidden="true" />
                    <i v-else-if="item.el" :class="item.el" />
                    <a v-else>{{ item.name }}</a>
                </li>
            </ul>

            <ul v-else>
                <li>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </li>
                <li>
                    <i class="fa fa-apple" aria-hidden="true"></i>
                </li>
                <li>
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </li>
            </ul>
        </div>
        <div class="container-div">
            <img src="static/image/Jobs.jpg" />
            <div class="iPhone">
                <h1>iPhone 11</h1>
                <h2>Design and Display It’s all screen.</h2>
                <p>From $37.45/mo. or $899 before trade in.<sup>1</sup></p>
                <p>Buy directly from Apple with special carrier offers.</p>
                <h3>
                    <span @click="itemClick('more')"
                        >Learn more <i class="el-icon-arrow-right"
                    /></span>
                    <span @click="itemClick('buy')"
                        >Buy <i class="el-icon-arrow-right"
                    /></span>
                </h3>
                <img src="static/image/iPhone 11.jpg" />
            </div>
            <!-- <div class="iPhone">
                <img src="static/image/iPhone 11.jpg" />
            </div> -->

            <img src="static/image/1.jpg" />
        </div>
        <div class="footer-div">
            <div class="footer-content-div">
                <ul>
                    <li v-for="item in detailList" :key="item">
                        <p>{{ item }}</p>
                    </li>
                </ul>
                <div class="footer-help-div">
                    <div class="help">
                        <ul>
                            <li class="help-title">
                                <p>{{ helpList[0].title }}</p>
                            </li>

                            <li
                                class="help-content"
                                v-for="item in helpList[0].content"
                                :key="item"
                            >
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="help">
                        <ul>
                            <li class="help-title">
                                <p>{{ helpList[1].title }}</p>
                            </li>

                            <li
                                class="help-content"
                                v-for="item in helpList[1].content"
                                :key="item"
                            >
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                        <ul>
                            <li class="help-title">
                                <p>{{ helpList[2].title }}</p>
                            </li>

                            <li
                                class="help-content"
                                v-for="item in helpList[2].content"
                                :key="item"
                            >
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="help">
                        <ul>
                            <li class="help-title">
                                <p>{{ helpList[3].title }}</p>
                            </li>

                            <li
                                class="help-content"
                                v-for="item in helpList[3].content"
                                :key="item"
                            >
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="help">
                        <ul>
                            <li class="help-title">
                                <p>{{ helpList[4].title }}</p>
                            </li>

                            <li
                                class="help-content"
                                v-for="item in helpList[4].content"
                                :key="item"
                            >
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                        <ul>
                            <li class="help-title">
                                <p>{{ helpList[5].title }}</p>
                            </li>

                            <li
                                class="help-content"
                                v-for="item in helpList[5].content"
                                :key="item"
                            >
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                        <ul>
                            <li class="help-title">
                                <p>{{ helpList[6].title }}</p>
                            </li>

                            <li
                                class="help-content"
                                v-for="item in helpList[6].content"
                                :key="item"
                            >
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                        <ul>
                            <li class="help-title">
                                <p>{{ helpList[7].title }}</p>
                            </li>

                            <li
                                class="help-content"
                                v-for="item in helpList[7].content"
                                :key="item"
                            >
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="help">
                        <ul>
                            <li class="help-title">
                                <p>{{ helpList[8].title }}</p>
                            </li>

                            <li
                                class="help-content"
                                v-for="item in helpList[8].content"
                                :key="item"
                            >
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                        <ul>
                            <li class="help-title">
                                <p>{{ helpList[9].title }}</p>
                            </li>

                            <li
                                class="help-content"
                                v-for="item in helpList[9].content"
                                :key="item"
                            >
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-third-div">
                    <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
                </div>
                <div class="footer-fourth-div">
                    <span class="span-1">
                        <p>Copyright &copy 2020 Apple Inc. All rights reserved.</p>
                    </span>
                    <span class="span-2">
                        <p>Privacy Policy  |  Terms of Use  |  Sales and Refunds  |  Legal  |  Site Map</p>
                    </span>
                    <span class="span-3">
                        <p>United States</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { guideList } from './GuideList.js'
import { detailList, helpList } from './FooterList.js'
export default {
    mounted() {
        this.screenWidth = document.body.clientWidth
        this.screenHeight = document.body.clientHeight
        window.onresize = () => {
            return (() => {
                this.screenWidth = document.body.clientWidth
                this.screenHeight = document.body.clientHeight
            })()
        }
    },
    watch: {
        screenWidth: function(value) {
            if (value <= 600) {
                this.isShowMiniGuide = 1
            } else {
                this.isShowMiniGuide = 0
            }
        }
    },
    data() {
        return {
            guideList,
            detailList,
            helpList,
            screenWidth: '',
            screenHeight: '',
            isShowMiniGuide: 0
        }
    },
    methods: {
        guideClick(item) {
            console.log(item)
        },
        itemClick(item) {
            console.log(item)
        }
    }
}
</script>

<style scoped>
.main-window {
    width: 100%;
}
.header-div {
    height: 48px;
    width: 100%;
    box-sizing: border-box;
    line-height: 48px;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
}
.header-div ul {
    list-style-type: none;
    margin: 0px 10px;
    padding: 0;
    width: 1000px;
    display: flex;
    justify-content: space-between;
}
.header-div li {
    float: left;
}
.header-div li a {
    color: #cccccc;
    text-align: center;
    font-size: 14px;
    padding: 17px 10px;
    cursor: pointer;
    transition: color 0.5s;
}
.header-div li a:hover {
    color: #ffffff;
}
.header-div i {
    font-size: 18px;
    color: #cccccc;
    padding: 15px 10px;
    cursor: pointer;
    transition: color 0.5s;
}
.header-div i:hover {
    color: #ffffff;
}
.container-div {
    margin-top: 48px;
    width: 100%;
}
.container-div img {
    width: 100%;
}
.iPhone h1 {
    padding-top: 50px;
    margin-bottom: 10px;
    font-size: 5em;
    cursor: default;
}
.iPhone h2 {
    font-size: 1.5em;
    font-weight: 300;
    margin-top: 10px;
    cursor: default;
}
.iPhone p {
    margin: 8px 0;
    color: #aaaaaa;
    cursor: default;
}
.iPhone span {
    margin: 0 20px;
    cursor: pointer;
}
.iPhone h3 {
    font-weight: 500;
    color: #0066cc;
    margin-top: 25px;
    cursor: default;
}
.iPhone img {
    margin: 50px 0;
    width: 70%;
}
.footer-div {
    width: 100%;
}
.footer-content-div {
    width: 1000px;
    margin: auto;
    padding: 0 20px;
    box-sizing: border-box;
}
.footer-div ul {
    list-style-type: none;
    margin: 0px;
    padding: 10px 0;
    border-bottom: 1px solid #cccccc;
}
.footer-div p {
    font-size: 12px;
    color: #999999;
    text-align: justify;
}
.footer-help-div {
    display: flex;
    flex-wrap: nowrap;
}
.help {
    flex-basis: 25%;
    text-align: left;
}
.help ul {
    border: 0;
}
.help-title p {
    font-size: 12px;
    font-weight: 600;
    color: #444444;
}
.help-content p {
    color: #666666;
    cursor: pointer;
}
.footer-third-div {
    width: 100%;
    border-bottom: 1px solid #cccccc;
}
.footer-fourth-div {
    width: 100%;
    padding-bottom: 20px;
}
.footer-fourth-div span {
    display: inline-block;
    margin-bottom: 20px;
}
.footer-fourth-div .span-1 {
    margin-right: 30px;
    float: left;
}
.footer-fourth-div .span-2 {
    margin-right: 30px;
    float: left;
}
.footer-fourth-div .span-3 {
    float: right;
}
.footer-fourth-div .span-3 p {
    color: #666666;
}
@media screen and (max-width: 1020px) {
    .header-div ul {
        list-style-type: none;
        margin: 0px 10px;
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .footer-content-div {
        width: 100%;
        margin: auto;
        padding: 0 20px;
        box-sizing: border-box;
    }
}
</style>
