<template>
    <div class="main-window">
        <div class="header-div">
            <div class="header-content-div">
                <i class="fa fa-apple" aria-hidden="true"></i>
                <ul>
                    <li v-for="(item, index) in guideList" :key="item.name">
                        <a>{{ item.name }}</a>
                    </li>
                </ul>
                <i class="fa fa-search" aria-hidden="true"></i>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
        </div>
        <div class="container-div"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            guideList: [
                {
                    name: 'Mac'
                },
                {
                    name: 'iPad'
                },
                {
                    name: 'iPhone'
                },
                {
                    name: 'Watch'
                },
                {
                    name: 'Music'
                },
                {
                    name: 'Support'
                }
            ]
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
    background-color: #000000;
    position: fixed;
    display: flex;
    justify-content: center;
}
.header-div ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    float: left;
}
.header-div li {
    float: left;
    margin: 0 40px;
}
.header-div li a {
    /* display: block; */
    color: #cccccc;
    text-align: center;
    font-size: 14px;
    padding: 17px 0px;
    cursor: pointer;
}
.header-div li a:hover {
    /* display: block; */
    color: #ffffff;
}
.fa {
    font-size: 20px;
    color: #cccccc;
    float: left;
    margin: 14px 40px;
}
</style>
