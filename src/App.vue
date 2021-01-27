<template>
  <div id="app">
    <LeftMenu/>
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    width: 100%;
    font-family: DM Mono;
    color: #6B7B8A;
    overflow-x: hidden;
    margin: 0;
  }
  #app {
    margin-left: 280px;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-left: 2.5px solid #E8EDF3;
  }
  .main {
    width: 100%;
  }
  h2 {
    font-size: 18px;
    line-height: 22px;
    margin-top: 0;
  }
  .big-font {
    font-size: 26px;
    font-weight: 300;
    b {
      color: #03C4C7;
      font-weight: 300;
    }
  }
  .btn {
    padding: 10px 32px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    border: none;
    outline: none;
  }
  .btn-blue {
    background-color: #03C4C7;
    color: #fff;
  }
  .btn-grey {
    background-color: #E8EDF3;
    color: #6B7B8A;
  }
  .btn:disabled {
    color: #B3C1CE;
    background-color: #E8EDF3;
  }
  .flex-block {
    display: flex;
  }
  li {
    list-style-type: none;
  }
  .right-block {
    min-height: 85vh;
    padding: 44px;
    background-color: #FAFBFC;
    padding-bottom: 100px;
    h1 {
      color: #2E374D;
      font-size: 26px;
      font-weight: 500;
      margin-top: 0;
    }
  }
  .top-block {
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 30px;
    &__item {
      &:last-child {
        display: flex;
        align-items: center;
      }
    }
    p span {
      color: #03C4C7;
    }
  }
  .balance-box {
    padding: 14px 20px;
    border: 2px solid #EDF0F4;
    border-radius: 4px;
  }
  .balance-box {
    span {
      display: block;
      text-align: left;
    }
  }
  .set-box {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 30px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s ease;
    text-align: center;
    line-height: 32px;
    letter-spacing: -1px;
    &:hover {
      background-color: #EEF2F5;
      .hover-title {
        opacity: 1;
        visibility: visible;
      }
    }
    .hover-title {
      letter-spacing: initial;
      min-width: 100px;
      font-weight: 500;
      position: absolute;
      top: -45px;
      left: 50%;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      text-transform: uppercase;
      background-color: #2E374D;
      text-align: center;
      padding: 10px 5px;
      z-index: 1;
      transform: translateX(-50%);
      line-height: initial;
      opacity: 0;
      visibility: hidden;
      &:after {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        left: 50%;
        bottom: -5px;
        background-color: #2E374D;
        transform: translateX(-50%)rotate(45deg);
      }
    }
  }
  .right-block {
    .multiselect__select {
      &:before {
        width: 12px;
        height: 7px;
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        border: none;
        background-repeat: no-repeat;
        background-image: url(./assets/Icons/Down.svg);
        margin-top: 0;
      }
    }

    .multiselect, .multiselect__input, .multiselect__single {
      font-size: 14px;
    }
    .multiselect__option.multiselect__option--highlight {
      background-color: #FAFBFC;
      color: #000;
      &:after {
        content: '';
      }
    }
    .multiselect__option.multiselect__option--selected {
      &:after {
        content: '';
        width: 14px;
        height: 10px;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        background-repeat: no-repeat;
        background-image: url(./assets/Icons/Checkmark.svg);
        background-color: transparent;
        padding: 0;
      }
    }
    .multiselect__option--selected.multiselect__option--highlight {
      background-color: #FAFBFC;
    }
    .mobil-hidden-item {
      display: flex;
    }
    .desk-hidden-item {
      display: none;
    }
  }
  @media screen and (max-width: 1024px) {
    #app {
      margin-left: 215px;
    }
    h2 {
      font-size: 16px;
    }
    .big-font {
      font-size: 16px;
      line-height: 20px;
    }
    .right-block {
      padding: 28px;
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    #app {
      margin-left: 192px;
    }
    .right-block {
      padding: 28px 10px;
    }
  }
  @media screen and (max-width: 767px) {
    #app {
      margin-left: 0;
    }
    .active-menu {
      overflow: hidden;
    }
    .right-block {
      padding: 10px 20px;
      .mobil-hidden-item {
        display: none;
      }

      .desk-hidden-item {
        display: flex;
      }
    }
    .top-block {
      flex-direction: column-reverse;
      margin-bottom: 20px;
      &__item {
        display: flex;
        justify-content: space-between;
        &:first-of-type {
          display: block;
          margin-top: 20px;
          p {
            margin-bottom: 0;
          }
        }
        &:last-of-type {
          padding-bottom: 10px;
          margin: 0 -10px;
          &:after {
            content: '';
            height: 2px;
            position: absolute;
            top: 77px;
            right: 0;
            left: 0;
            background-color: #E8EDF3;
          }
        }
      }
    }
    .set-box {
      top: 5px;
      right: 10px;
    }
  }
</style>
<script>
  import LeftMenu from "./components/LeftMenu";
  export default {
    components: {
      LeftMenu
    }
  }
</script>
