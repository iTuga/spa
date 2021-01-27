<template>
    <div class="top-block__item">
        <div class="mobil-box">
            <div class="burger-btn" v-on:click="showMenu">
                <div class="burger-btn__line"></div>
                <div class="burger-btn__line"></div>
                <div class="burger-btn__line"></div>
            </div>
            <img alt="logo" src="../assets/Icons/wiv-logo.svg" class="mobil-logo">
        </div>
        <div class="nav-btn-box" v-bind:class="{ active: visibleNotifications }">
            <div class="nav-btn" v-on:click="visibleNotifications=!visibleNotifications">
                <img v-show="!visibleNotifications && !notificationPresent" src="../assets/Icons/Notifications.svg">
                <img v-show="!visibleNotifications && notificationPresent" src="../assets/Icons/Notifications-ringing.svg">
                <img v-show="visibleNotifications" src="../assets/Icons/Close.svg">
                <span class="notification-label" v-show="notificationPresent"></span>
            </div>
            <div class="hidden-block" v-show="visibleNotifications">
                <div class="title-box">
                    <span>notifications</span>
                    <span class="n-count" v-show="notificationPresent">2 new</span>
                    <img v-show="!notificationPresent" src="../assets/Icons/Notifications.svg">
                    <img v-show="notificationPresent" src="../assets/Icons/Notifications-ringing.svg">
                </div>
                <ul class="n-list">
                    <li v-bind:class="{ newMessage: newNotifications }">
                        <span class="title">Attention</span>
                        <p>You need to tokenize an asset</p>
                        <span>2 days</span>
                    </li>
                    <li v-bind:class="{ newMessage: newNotifications }">
                        <span class="title">Attention</span>
                        <p>You need to tokenize an asset</p>
                        <span>2 days</span>
                    </li>
                    <li>
                        <span class="title">Attention</span>
                        <p>You need to tokenize an asset</p>
                        <span>2 days</span>
                    </li>
                    <li>
                        <span class="title">Attention</span>
                        <p>You need to tokenize an asset</p>
                        <span>2 days</span>
                    </li>
                    <li>
                        <span class="title">Attention</span>
                        <p>You need to tokenize an asset</p>
                        <span>2 days</span>
                    </li>
                </ul>
                <div class="botton-box">
                    <div class="btn btn-blue">See all Updates</div>
                    <div class="btn btn-grey btn-clear" v-bind:class="{ clearDone: btnClear }" v-on:click="clearNotification">Clear</div>
                </div>
            </div>
        </div>
        <div class="nav-btn-box" v-bind:class="{ active: visibleUserInfo }">
            <div class="nav-btn" v-on:click="visibleUserInfo=!visibleUserInfo">
                <img v-show="!visibleUserInfo" src="../assets/Icons/User.svg">
                <img v-show="visibleUserInfo" src="../assets/Icons/Close.svg">
            </div>
            <div class="hidden-block" v-show="visibleUserInfo">
                <div class="title-box desk-title-box">
                    <span>User Account</span>
                    <img src="../assets/Icons/User.svg">
                </div>
                <div class="title-box mobil-title-box">
                    <span>Account</span>
                    <multiselect
                            v-model="accountValue"
                            :options="accountOptions">
                    </multiselect>
                </div>
                <ul class="user-list">
                    <li class="mobil-hidden" v-on:click="accountSwitch" v-bind:class="{ activeSwitch: accountList }">
                        <IconSwitch/>
                        Switch Account
                        <ul class="account-list">
                            <li>
                                Account2
                            </li>
                            <li>
                                Account3
                            </li>
                            <li>
                                Account4
                            </li>
                        </ul>
                    </li>
                    <li>
                        <IconManage/>
                        Manage Account(s)
                    </li>
                    <li>
                        <IconSettings/>
                        Account Settings
                    </li>
                    <li>
                        <IconLogOut/>
                        Log Out
                    </li>
                </ul>
            </div>
        </div>
        <div class="balance-box">
            <span>Balance</span>
            <span class="big-font">
                <b>$</b> {{ balance }}
            </span>
        </div>
        <div class="page-bg" v-bind:class="{ active: visibleNotifications || visibleUserInfo }"></div>
    </div>
</template>

<script>
    import axios from "axios";
    import IconLogOut from "./icons/IconLogOut";
    import IconSettings from "./icons/iconSettings";
    import IconManage from "./icons/IconManage";
    import IconSwitch from "./icons/IconSwitch";
    export default {
        name: "UserNav",
        components: {IconSwitch, IconManage, IconSettings, IconLogOut},
        data () {
            return {
                balance: [],
                isActive: true,
                visibleNotifications: false,
                newNotifications: true,
                btnClear: false,
                visibleUserInfo: false,
                notificationPresent: true,
                accountValue: 'Switch',
                accountOptions: ['Account1', 'Account2', 'Account3'],
                accountList: false
            }
        },
        methods: {
            showMenu: function() {
                document.querySelector("body").classList.add("active-menu")
            },
            clearNotification: function() {
                this.btnClear = true;
                this.notificationPresent = false;
                this.newNotifications = false
            },
            accountSwitch: function () {
                this.accountList = !this.accountList
            }
        },
        mounted () {
            axios
               .get('https://api.coindesk.com/v1/bpi/currentprice.json')
               .then(response => (this.balance = response.data.bpi.USD.rate))
        }
    }
</script>

<style lang="scss">
    .nav-btn-box {
        position: relative;
    }
    .nav-btn-box.active {
        z-index: 50;
    }
    .nav-btn {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 20px;
    }
    .notification-label {
        display: block;
        width: 15px;
        height: 15px;
        position: absolute;
        top: 0;
        right: 20px;
        background-color: #FE4B7A;
        border-radius: 50%;
    }
    .hidden-block {
        min-width: 350px;
        position: absolute;
        top: calc(100% + 25px);
        left: 50%;
        transform: translateX(-53%);
        background-color: #fff;
        border-radius: 4px;
        transition: all 0.2s ease;
        &:before {
            content: '';
            width: 20px;
            height: 20px;
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%)rotate(45deg);
            background-color: #fff;
        }
    }
    .title-box {
        padding: 20px 30px;
        border-bottom: 2px solid #E8EDF3;
        position: relative;
        font-size: 12px;
        text-transform: uppercase;
        img {
            position: absolute;
            top: 50%;
            right: 30px;
            transform: translateY(-50%);
        }
        .n-count {
            padding: 1px 5px;
            color: #fff;
            background-color: #A5B1C1;
            margin-left: 7px;
            border-radius: 4px;
        }
    }
    .mobil-title-box {
        display: none;
    }
    .n-list {
        margin: 0;
        position: relative;
        li {
            position: relative;
            padding: 30px;
            border-bottom: 2px solid #E8EDF3;
            cursor: pointer;
            background-color: #FAFBFC;
        }
        .newMessage {
            padding-left: 60px;
            background-color: #fff;
            &:before {
                content: '';
                width: 10px;
                height: 10px;
                position: absolute;
                top: 35px;
                left: 30px;
                background-color: #FE4B7A;
                border-radius: 50%;
            }
        }
        span {
            position: absolute;
            top: 32px;
            right: 30px;
            color: #B3C1CE;
            text-transform: uppercase;
            font-size: 12px;
        }
        .title {
            position: initial;
            font-size: 18px;
            font-weight: 500;
            padding-right: 100px;
            color: #6B7B8A;
            text-transform: initial;
            line-height: 15px;
        }
        p {
            font-size: 14px;
            color: #B3C1CE;
            margin: 5px 0 0;
        }
    }
    .botton-box {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }
    .clearDone {
        min-width: 45px;
        font-size: 0;
        background-image: url(../assets/Icons/Checkmark.svg);
        background-position: center;
        background-repeat: no-repeat;
    }
    .user-list {
        margin: 0;
        background-color: #FAFBFC;
        .mobil-hidden {
            position: relative;
            &:after {
                content: "";
                width: 15px;
                height: 8px;
                position: absolute;
                top: 35px;
                right: 30px;
                background-size: 15px;
                background-repeat: no-repeat;
                background-image: url(../assets/Icons/Down.svg);
            }
        }
        .mobil-hidden.activeSwitch {
            &:after {
                transform: rotate(180deg);
            }
            .account-list {
                height: auto;
                opacity: 1;
                visibility: visible;
            }
        }
        li {
            padding: 25px;
            border-bottom: 2px solid #E8EDF3;
            cursor: pointer ;
        }
        svg {
            vertical-align: sub;
        }
    }
    .account-list {
        height: 0;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
        li {
            padding: 20px 0 10px 65px;
            border-bottom: none;
            &:first-of-type {
                padding-top: 30px;
            }
            &:last-of-type {
                padding-bottom: 10px;
            }
        }
    }
    .page-bg {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.2);
        z-index: 5;
        transition: all 0.2s ease;
        opacity: 0;
        visibility: hidden;
    }
    .page-bg.active {
        opacity: 1;
        visibility: visible;
    }
    .mobil-box {
        display: none;
    }
    @media screen and (max-width: 1024px) {
        .nav-btn {
            width: 40px;
            height: 40px;
        }
        .balance-box {
            font-size: 12px;
            padding: 13px 16px;
        }
    }
    @media screen and (max-width: 767px) {
        .mobil-box {
            display: flex;
            margin-right: 5px;
        }
        .burger-btn {
            width: 40px;
            height: 40px;
            cursor: pointer;
            border-radius: 50%;
            background-color: #fff;
            position: relative;
            margin-right: 5px;
            &__line {
                position: absolute;
                left: 13px;
                width: 16px;
                height: 2px;
                background-color: #2E374D;
                &:first-of-type {
                    top: 14px;
                }
                &:nth-child(2) {
                    top: 50%;
                    transform: translateY(-50%);
                }
                &:last-of-type {
                    bottom: 14px;
                    width: 10px;
                }
            }
        }
        .notification-label {
            width: 12px;
            height: 12px;
            right: 3px;
        }
        .mobil-logo {
            width: 65px;
        }
        .nav-btn {
            margin-right: 5px;
            img {
                max-width: 55%;
            }
        }
        .top-block {
            .balance-box {
                padding: 8px;
            }
        }
        .hidden-block {
            min-width: 280px;
            top: calc(100% + 8px);
            transform: translateX(-51%);
            &:before {
                width: 8px;
                height: 8px;
                top: -4px;
            }
        }
        .title-box {
            display: flex;
            justify-content: space-between;
            background-color: #FAFBFC;
            img {
                display: none;
            }
        }
        .desk-title-box {
            display: none;
        }
        .mobil-title-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 10px 8px 25px;
            .multiselect {
                min-height: 35px;
                max-width: 50%;
                text-transform: initial;
                font-size: 12px;
            }
            .multiselect__tags {
                min-height: 35px;
                padding-left: 25px;
                &:before {
                    content: "";
                    width: 15px;
                    height: 15px;
                    position: absolute;
                    left: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-image: url(../assets/Icons/Switch.svg);
                }
            }
        }
        .mobil-hidden {
            display: none;
        }
        .n-list {
            li {
                padding: 18px 25px;
            }
            span {
                top: 22px;
            }
            p {
                font-size: 12px;
                line-height: 14px;
            }
            .title {
                font-size: 16px;
                padding-right: 50px;
            }
            .new-message {
                padding-right: 15px;
                padding-left: 45px;
                &:before {
                    width: 8px;
                    height: 8px;
                    top: 24px;
                    left: 25px;
                }
            }
        }
        .botton-box {
            font-size: 12px;
            .btn {
                padding: 10px 25px;
                &:first-of-type {
                    margin-right: 10px;
                }
            }
        }
        .user-list {
            font-size: 12px;
            li {
                background-color: #fff;
                padding: 19px 20px;
                svg {
                    height: 15px;
                    margin-right: 10px;
                }
            }
        }
    }
</style>
