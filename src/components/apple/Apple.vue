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
                <h1>iPhone X</h1>
                <h2>Design and Display It’s all screen.</h2>
                <p>From $37.45/mo. or $899 before trade in.<sup>2</sup></p>
                <p>Buy directly from Apple with special carrier offers.</p>
                <h3>
                    <span @click="itemClick('more')">Learn more ></span>
                    <span @click="itemClick('buy')">Buy ></span>
                </h3>
                <img src="static/image/iPhone X.jpg" />
            </div>

            <img src="static/image/1.jpg" />
        </div>
    </div>
</template>

<script>
import { guideList } from './GuideList.js'
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
    padding: 15px 10px;
    cursor: pointer;
    transition: color 0.5s;
}
.header-div i:hover {
    color: #ffffff;
}
.fa {
    font-size: 18px;
    color: #cccccc;
    float: left;
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
@media screen and (max-width: 1000px) {
    .header-div ul {
        list-style-type: none;
        margin: 0px 10px;
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}
</style>
