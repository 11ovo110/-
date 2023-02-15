import { reqCarList, reqChangeChecked, reqDeleteGood, reqAddOrUpdateCar } from "@/api";

const state = {
  carList: {}
};

const mutations = {
  GETDATALIST(state, data) {
    state.carList = data;
  }
};

const actions = {
  async getCarList({ dispatch, getters, state, commit },) {
    let result = await reqCarList();
    commit('GETDATALIST', result.data);
  },
  async changeChecked({dispatch, commit, getters, state}, {skuId, isChecked}) {
    console.log(1111);
    let result = await reqChangeChecked(skuId, isChecked);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async deleteGood({dispatch, state, commit, getters}, skuId) {
    let result = await reqDeleteGood(skuId);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async changeNum({dispatch, state, commit, getters}, {skuId, skuNum}) {
    let result = await reqAddOrUpdateCar(skuId, skuNum);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
};

const getters = {
  cartInfoList(state) {
    return (state.carList[0] || {}).cartInfoList || []
  }
};

export default { state, mutations, actions, getters };