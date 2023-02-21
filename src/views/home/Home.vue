<template>
    <div class="home">
        <div class="nav-bar">
            <div class="title">旅途</div>
        </div>
        <div class="banner">
            <img src="../../assets/img/home/home-banner.png" alt="">
        </div>

        <div class="location">
            <div class="city">晋中</div>
            <div class="myPosition">
                <span class="text">我的位置</span>
                <div class="icon">
                    <icon name="aixin" size="18"></icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

.home {
    .nav-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        box-shadow:0 2px 2px #ccc;
        .title {
            color: var(--primary-color);
            font-size: 18px;
            font-weight: 700;
        }
    }

    .banner {
        img {
            width: 100%;
        }
    }
    .location {
        height: 44px;
        display: flex;
        align-items: center;
        padding: 0 20px;

        .city {
            flex: 1;
        }
        .myPosition {
            width: 74px;
            display: flex;
            align-items: center;
            .text {
                font-size: 1.2rem;
            }
            .icon {
                margin-left: 4px;
            }
        }
    }

}
</style>