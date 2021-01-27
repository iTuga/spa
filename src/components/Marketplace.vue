<template>
  <div class="right-block">
    <div class="top-block">
      <div class="top-block__item">
        <h1>Marketplace</h1>
        <p>Description</p>
      </div>
      <UserNav/>
    </div>
    <div class="filter-block" v-bind:class="{ filterActive: useFilter }">
      <div class="filter-block__item">
        <span class="title">Filtering</span>
        <form action="">
          <multiselect
                  class="select-type"
                  @select="onChange"
                  v-model="typeValue"
                  :options="typeOptions">
          </multiselect>
          <multiselect
                  class="select-vintage"
                  v-model="vintageValue"
                  :options="vintageOptions">
          </multiselect>
          <multiselect
                  class="select-price"
                  v-model="priceValue"
                  :options="priceOptions">
          </multiselect>
          <label>
            <input type="text" placeholder="Search">
            <button>
              <img src="../assets/Icons/Plus.svg" alt="">
            </button>
          </label>
        </form>
      </div>
      <div class="filter-block__item">
        <button class="btn btn-blue">
          Apply
        </button>
        <button class="btn btn-grey" v-on:click="onReset">
          Reset
        </button>
      </div>
    </div>
    <div class="sorting-block">
      <div class="sorting-block__item">

        <div class="count-result-box">
          <span class="count">{{ totalProduct }} Items</span>
          <span class="filter-name" v-show="!useFilter">No Filters</span>
          <span class="filter-name" v-show="useFilter">{{ typeValue }} {{ vintageValue }} {{ priceValue }}</span>
        </div>
      </div>
      <div class="sorting-block__item">
        <multiselect
                class="select-sorting"
                v-model="sortingValue"
                :options="sortingOptions">
        </multiselect>
      </div>
    </div>
    <div class="prod-block">
      <div class="prod-block__item" v-for="(product, index) in productList" :key="index">
        <div class="title-box">
          <h3>{{ product.name }}<span>{{ product.percent }}%</span></h3>
          <span class="add-date">Added: 2020/12/14</span>
        </div>
        <div class="info-box">
          <span class="title">Producer</span>
          <h4>{{ product.producer }}</h4>
          <div class="set-box">
            ...
            <div class="hover-title">expand actions</div>
          </div>
        </div>
        <div class="info-box">
          <span class="title">Origin</span>
          <h4>{{ product.place }}</h4>
          <div class="set-box">
            ...
            <div class="hover-title">expand actions</div>
          </div>
        </div>
        <div class="bottom-info-box">
          <div class="bottom-info-box__item">
            <span class="title">Price</span>
            <span class="value">{{ product.price }}</span>
          </div>
          <div class="bottom-info-box__item">
            <span class="title">Value</span>
            <span class="value">{{ product.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UserNav from "./UserNav";
  export default {
    name: 'Marketplace',
    components: {UserNav},
    data () {
      return {
        useFilter: false,
        //selects
        typeValue: 'All',
        vintageValue: 'All',
        priceValue: 'Any',
        sortingValue: 'Sorting',
        typeOptions: ['All', 'Red', 'White'],
        vintageOptions: ['All', 'Red', 'White'],
        priceOptions: ['Any', 'Red', 'White'],
        sortingOptions: ['Sorting', 'Sorting2', 'Sorting3'],
        //product list
        productList: [
          {
            name: 'Name of Wine ',
            percent: '15',
            addDate: '2020/12/14',
            producer: 'Name of Producer',
            place: 'Place of Origin',
            value: '234',
            price: '5,432'
          },
          {
            name: 'Name of Wine ',
            percent: '15',
            addDate: '2020/12/14',
            producer: 'Name of Producer',
            place: 'Place of Origin',
            value: '234',
            price: '5,432'
          },
          {
            name: 'Name of Wine ',
            percent: '15',
            addDate: '2020/12/14',
            producer: 'Name of Producer',
            place: 'Place of Origin',
            value: '234',
            price: '5,432'
          },
          {
            name: 'Name of Wine ',
            percent: '15',
            addDate: '2020/12/14',
            producer: 'Name of Producer',
            place: 'Place of Origin',
            value: '234',
            price: '5,432'
          },
          {
            name: 'Name of Wine ',
            percent: '15',
            addDate: '2020/12/14',
            producer: 'Name of Producer',
            place: 'Place of Origin',
            value: '234',
            price: '5,432'
          },
        ]
      }
    },
    computed: {
      totalProduct () {
        return this.productList.length
      }
    },
    methods: {
      onChange: function () {
        this.useFilter = true
      },
      onReset: function () {
        this.useFilter = false
      }
    }
  }
</script>

<style lang="scss">
  .filter-block {
    display: flex;
    border: 2.5px solid #E8EDF3;
    border-radius: 4px;
    font-size: 14px;
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      &:first-of-type {
        width: 80%;
        border-right: 2.5px solid #E8EDF3;
      }
      &:last-of-type {
        width: 20%;
        min-width: 200px;
      }
      .btn {
        &:first-of-type {
          margin-right: 10px;
        }
      }
    }
    form {
      width: 100%;
      display: flex;
      align-items: center;
    }
    .title {
      display: inline-block;
      font-size: 12px;
      text-transform: uppercase;
      margin-right: 18px;
    }
    .multiselect {
      margin-right: 10px;
    }
    .multiselect__tags {
      color: #B3C1CE;
    }
    .select-type {
      .multiselect__tags {
        padding-left: 60px;
        &:before {
          content: 'Type: ';
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-58%);
        }
      }
    }
    .select-vintage {
      .multiselect__tags {
        padding-left: 85px;
        &:before {
          content: 'Vintage: ';
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-58%);
        }
      }
    }
    .select-price {
      .multiselect__tags {
        padding-left: 65px;
        &:before {
          content: 'Price: ';
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-58%);
        }
      }
    }
    label {
      position: relative;
      input {
        background-color: #fff;
        border-radius: 4px;
        border: none;
        min-height: 38px;
        padding: 0 15px;
        outline: none;
        &::placeholder {
          font-family: DM Mono;
          font-size: 14px;
          color: #B3C1CE;
        }
      }
      button {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent;
        border: none;
      }
    }
    button.btn {
      min-height: 38px;
      color: #B3C1CE;
      background-color: #E8EDF3;
      user-select: none;
      cursor: unset;
    }
    .btn-blue {
      min-width: 50%;
    }
  }
  .filter-block.filterActive {
    .multiselect__single {
      color: #2E374D;
    }
    label {
      input {
        color: #2E374D;
      }
    }
    button.btn {
      user-select: initial;
      cursor: pointer;
    }
    button.btn-grey {
      background-color: #E8EDF3;
      color: #6B7B8A;
    }
    button.btn-blue {
      background-color: #03C4C7;
      color: #fff;
    }
  }
  .sorting-block {
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count-result-box {
    span {
      display: inline-block;
      font-size: 12px;
      text-transform: uppercase;
    }
    .count {
      border-right: 1px solid #B3C1CE;
      padding-right: 8px;
      margin-right: 8px;
    }
    .filter-name {
      color: #B3C1CE;
    }
  }
  .prod-block {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &__item {
      flex: 0 0 22.5%;
      border: 2.5px solid #E8EDF3;
      border-radius: 4px;
      margin-bottom: 2.5%;
    }
    .title-box {
      padding: 30px;
      border-bottom: 2.5px solid #E8EDF3;
      text-transform: initial;
      background-color: #fff;
    }
    h3 {
      margin: 0 0 10px;
      font-size: 18px;
      font-weight: 500;
      span {
        font-size: 12px;
        padding: 4px 5px;
        background-color: #E8EDF3;
        border-radius: 4px;
        font-weight: 400;
      }
    }
    .add-date {
      font-size: 14px;
      color: #B3C1CE;
    }
    .info-box {
      position: relative;
      padding: 15px 70px 15px 30px;
      border-bottom: 2.5px solid #E8EDF3;
    }
    .title {
      display: block;
      margin: 0 0 5px;
      color: #B3C1CE;
      text-transform: uppercase;
      font-size: 12px;
    }
    h4 {
      margin: 0;
      font-weight: 400;
    }
    .set-box {
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      letter-spacing: -2px;
      &:hover {
        background-color: initial;
      }
    }
    .hover-title {
      min-width: 115px;
    }
    .bottom-info-box {
      display: flex;
      background-color: #fff;
      &__item {
        width: 50%;
        padding: 20px 30px;
        border-right: 2.5px solid #E8EDF3;
        &:last-of-type {
          border-right: none;
        }
        span {
          display: block;
        }
      }
    }
    .value {
      font-size: 18px;
    }
  }
</style>
