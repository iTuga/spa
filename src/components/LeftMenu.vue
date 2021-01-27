<template>
  <div class="left-menu">
    <img class="logo" alt="logo" src="../assets/Icons/wiv-logo.svg">
    <div class="mobil-btn-close" v-on:click="hideMenu">
      <img src="../assets/Icons/Close.svg">
    </div>
    <span class="menu-title">Market</span>
    <ul>
      <li>
        <router-link to="/">
          <IconOverview/>
          Overview
        </router-link>
      </li>
      <li>
        <router-link to="marketplace">
          <IconMarketplace/>
          Marketplace
        </router-link>
      </li>
      <li>
        <router-link to="updates">
          <IconUpdates/>
          Updates
          <span>{{ update }}</span>
        </router-link>
      </li>
    </ul>
    <span class="menu-title">Assets</span>
    <ul>
      <li>
        <router-link to="/portfolio">
          <IconPortfolio/>
          Portfolio
        </router-link>
      </li>
      <li>
        <router-link to="/certificates">
          <IconCertificates/>
          Certificates
        </router-link>
      </li>
      <li>
        <router-link to="/activity">
          <IconPortfolio/>
          Activity
        </router-link>
      </li>
      <li>
        <router-link to="/finance">
          <IconFinance/>
          Finance
        </router-link>
      </li>
    </ul>
    <ul class="bottom-box">
      <li v-for="(link, index) in linkInfo" :key="index">
        <router-link :to="`${link.url}`">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import IconOverview from "./icons/IconOverview";
import IconMarketplace from "./icons/IconMarketplace";
import IconUpdates from "./icons/IconUpdates";
import IconFinance from "./icons/iconFinance";
import IconCertificates from "./icons/IconCertificates";
import IconPortfolio from "./icons/IconPortfolio";
export default {
  name: 'LeftMenu',
  components: {
    IconPortfolio,
    IconCertificates,
    IconFinance,
    IconUpdates,
    IconOverview,
    IconMarketplace
  },
  data () {
    return {
      linkInfo: [
        {title: 'FAQ', url: 'faq'},
        {title: 'Information', url: 'information'},
        {title: 'Support', url: 'support'}
      ],
      update: '3'
    }
  },
  methods: {
    hideMenu: function () {
      document.querySelector("body").classList.remove("active-menu")
    }
  }
}
</script>

<style lang="scss">
  .left-menu {
    width: 240px;
    height: 85vh;
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    padding-top: 50px;
    padding-left: 40px;
    padding-bottom: 100px;
    li {
      span {
        display: inline-block;
        font-size: 12px;
        line-height: 10px;
        color: #fff;
        background-color: #A5B1C1;
        padding: 4px 6px;
        border-radius: 4px;
        margin-left: 24px;
      }
    }
  }
  .logo {
    margin-left: 40px;
    margin-bottom: 70px;
  }
  .mobil-btn-close {
    display: none;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: block;
    a {
      display: flex;
      align-items: center;
      position: relative;
      padding: 16px 0;
      cursor: pointer;
      color: #6B7B8A;
    }
    svg {
      margin-right: 15px;
    }
    a.router-link-exact-active {
      color: #2E374D;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: -40px;
        bottom: 0;
        background-color: #F2FCFC;
        z-index: -1;
      }
      svg {
        fill: #03C4C7;
        path {
          stroke: #03C4C7 !important;
        }
      }
    }
  }
  img {
    display: block;
  }
  a {
    display: block;
    color: #B3C1CE;
    text-decoration: none;
    padding: 11px 0;
  }
  .menu-title {
    text-transform: uppercase;
    font-size: 12px;
    color: #B3C1CE;
  }
  .bottom-box {
    position: absolute;
    bottom: 0;
    a {
      color: #B3C1CE;
      padding: 5px;
    }
    a.router-link-exact-active {
      &:before {
        content: none;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .logo {
      margin-left: 30px;
      margin-bottom: 45px;
    }
    .left-menu {
      width: 182px;
      padding-top: 35px;
      padding-left: 30px;
      a {
        font-size: 12px;
      }
      li {
        a {
          padding: 12px 0;
        }
        svg {
          max-width: 15px;
        }
      }
    }
    .menu-title {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 991px) {
    .logo {
      margin-left: 20px;
    }
    .left-menu {
      width: 160px;
    }
  }
  @media screen and (max-width: 767px) {
    .left-menu {
      left: -100%;
      transition: all 0.2s ease;
      z-index: 100;
      background-color: #fff;
    }
    .active-menu {
      .left-menu {
        left: 0;
      }
    }
    .logo {
      display: none;
    }
    .mobil-btn-close {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #FAFBFC;
      margin-bottom: 48px;
      margin-left: -20px;
    }
  }
</style>
