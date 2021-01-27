<template>
    <div class="right-block">
        <div class="top-block">
            <div class="top-block__item">
                <h1>Overview</h1>
                <p>Good Morning <span>{{ userName }}</span>, here’s an update</p>
            </div>
            <UserNav/>
        </div>
        <div class="stat-block">
            <div class="stat-block__item">
                <div class="img-box violet-box">
                    <img src="../assets/Icons/Growth.svg" alt="">
                </div>
                <div class="text-box">
                    <h2>Growth <span>{{ growthPercent }}%</span></h2>
                    <p>Since last visit</p>
                    <span class="stat-number">{{ growth }}</span>
                </div>
                <div class="set-box">
                    ...
                    <div class="hover-title">growth edit</div>
                </div>
            </div>
            <div class="stat-block__item">
                <div class="img-box green-box">
                    <img src="../assets/Icons/Target.svg" alt="">
                </div>
                <div class="text-box">
                    <h2>Target</h2>
                    <div class="progress-box">
                        <p>Completed</p>
                        <span class="pars-count">{{ progressBar }}%</span>
                    </div>
                    <div class="progress-bar">
                        <span class="progress-line" v-bind:style="{ width: progressBar + '%'}"></span>
                    </div>
                </div>
                <div class="set-box">
                    ...
                    <div class="hover-title">set target</div>
                </div>
            </div>
            <div class="stat-block__item mobil-hidden-item">
                <div class="img-box blue-box">
                    <img src="../assets/Icons/Average.svg" alt="">
                </div>
                <div class="text-box">
                    <h2>Average</h2>
                    <div class="flex-block">
                        <div>
                            <p>Daily</p>
                            <span class="stat-number">{{ averageDaily }}</span>
                        </div>
                        <div>
                            <p>Weekly</p>
                            <span class="stat-number">{{ averageWeekly }}</span>
                        </div>
                    </div>
                </div>
                <div class="set-box">
                    ...
                    <div class="hover-title">edit section</div>
                </div>
            </div>
        </div>
        <div class="chart-block">
            <h2>Development</h2>
            <multiselect
                    @select="onSelect"
                    v-model="value"
                    :options="options">
            </multiselect>
            <Charts/>
        </div>
        <div class="stat-block__item desk-hidden-item">
            <div class="img-box blue-box">
                <img src="../assets/Icons/Average.svg" alt="">
            </div>
            <div class="text-box">
                <h2>Average</h2>
                <div class="flex-block">
                    <div>
                        <p>Daily</p>
                        <span class="stat-number">+5</span>
                    </div>
                    <div>
                        <p>Weekly</p>
                        <span class="stat-number">+35</span>
                    </div>
                </div>
            </div>
            <div class="set-box">
                ...
                <div class="hover-title">edit section</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Charts from "./Charts";
    import UserNav from "./UserNav";
    export default {
        name: 'Overview',
        components: {UserNav, Charts},
        data () {
            return {
                userName: 'John Doe',
                value: 'One Year',
                options: ['One Year', 'Two Years', 'Three Years', 'Four Years', 'Five Years'],
                progressBar: '50',
                growth: '+5,432.10',
                growthPercent: '+15',
                averageDaily: '+5',
                averageWeekly: '+35'
            }
        },
        methods: {
          onSelect: function () {

          }
        }
    }
</script>

<style lang="scss">
    .stat-block {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        &__item {
            display: flex;
            width: 25%;
            max-width: 25%;
            border: 2.5px solid #E8EDF3;
            border-radius: 4px;
            padding: 3%;
            background-color: #fff;
            margin-right: 30px;
            position: relative;
            &:last-child {
                margin-right: 0;
            }
            .img-box {
                width: 60px;
                min-width: 60px;
                height: 60px;
                border-radius: 50%;
                margin-right: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .flex-block {
                div {
                    padding-right: 50px;
                    margin-right: 20px;
                    border-right: 2px solid #E8EDF3;
                    &:last-of-type {
                        padding-right: 0;
                        margin-right: 0;
                        border: none;
                    }
                }
                p {
                    margin-top: 0;
                }
            }
        }
        p {
            color: #B3C1CE;
            margin: 10px 0;
        }
        h2 {
            margin-bottom: 10px;
            font-weight: 500;
            span {
                font-size: 12px;
                padding: 2px 7px;
                background-color: #E8EDF3;
                border-radius: 4px;
                font-weight: 400;
            }
        }
        .stat-number {
            font-size: 18px;
            line-height: 22px;
        }
    }
    .violet-box {
        background-color: #F2F0FE;
    }
    .green-box {
        background-color: #F0FAE5;
    }
    .blue-box {
        background-color: #E5F4FF;
    }
    .progress-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            margin-top: 0;
            margin-bottom: 15px;
        }
        .pars-count {
            margin-bottom: 15px;
        }
    }
    .progress-bar {
        min-width: 175px;
        height: 3px;
        background-color: #EEF2F5;
    }
    .progress-line {
        display: block;
        width: 40%;
        height: 3px;
        background-color: #B3C1CE;
    }
    .chart-block {
        padding: 40px;
        background-color: #fff;
        border: 2.5px solid #E8EDF3;
        border-radius: 4px;
        position: relative;
        h2 {
            margin-top: 0;
            margin-bottom: 40px;
        }
        .multiselect {
            max-width: 180px;
            position: absolute;
            top: 30px;
            right: 30px;
        }
        .multiselect__tags {
            padding-left: 35px;
            //position: relative;
            &:before {
                content: '';
                width: 15px;
                height: 15px;
                position: absolute;
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
                background-repeat: no-repeat;
                background-image: url(../assets/Icons/Calendar.svg);
            }
        }
    }


    @media screen and (max-width: 1380px) {
        .stat-block {
            &__item {
                flex-direction: column;
            }
            .img-box {
                margin-right: 0;
                margin-bottom: 20px;
            }
            .flex-block {
                div {
                    padding-right: 10%;
                }
            }
        }
        .progress-bar {
            min-width: 100%;
        }
    }
    @media screen and (max-width: 1024px) {
        .stat-block {
            &__item {
                .img-box {
                    width: 50px;
                    min-width: 50px;
                    height: 50px;
                }
            }
        }
    }
    @media screen and (max-width: 991px) {
        .stat-block {
            margin-bottom: 10px;
            &__item {
                margin-right: 10px;
            }
        }
        .chart-block {
            padding: 20px;
        }
    }
    @media screen and (max-width: 767px) {
        .active-menu {
            .right-block {
                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.2);
                    z-index: 90;
                }
            }
        }
        .stat-block {
            &__item {
                width: 45%;
                max-width: 45%;
                padding: 6%;
                &:nth-child(2) {
                    margin-right: 0;
                }
            }
            &__item.desk-hidden-item {
                width: initial;
                max-width: 100%;
                margin-top: 10px;
                flex-direction: row;
                padding: 7%;
                .set-box {
                    top: 10px;
                    right: 15px;
                }
            }
            .stat-number {
                font-size: 16px;
            }
            .pars-count {
                font-size: 10px;
            }
        }
        .chart-block {
            h2 {
                margin-left: 15px;
            }
            padding: 25px 10px;
            .multiselect {
                width: 130px;
                min-height: 35px;
                top: 20px;
                right: 20px;
            }
            .multiselect, .multiselect__input, .multiselect__single {
                font-size: 12px;
            }
            .multiselect__tags {
                min-height: 35px;
                padding-right: 25px;
                padding-left: 25px;
                &:before {
                    left: 10px;
                }
            }
        }
    }

</style>
