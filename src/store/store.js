import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    xzvalue:new Date(),
    user: {},
    token: null,
    title: '',
    lang: 'zhchs',
    rtc:"WS",
    tour:"WS",
    watermarkstring:"linkingvision",
    watermarktoggle:"",
    conference:"",
    root:null,
    users:null,
    Adswitch:"false",
    link:'false'
  },
  mutations: {
    // LINK模式
    [types.LINK]: (state, data) => {
      sessionStorage.h5link= data
      state.link=data
    },

    [types.WATERMARKTOGGLE]: (state, data) => {
      sessionStorage.h5watermarktoggle= data
      state.watermarktoggle=data
    },
    [types.WATERMARKSTRING]: (state, data) => {
      sessionStorage.watermarkstring= data
      state.watermarkstring=data
    },
    //回放
    [types.ADSWITCH]: (state, data) => {
      sessionStorage.h5adswitch= data
      state.Adswitch=data
    },
    // 视频会议
    [types.CONFERENCE]: (state, data) => {
      sessionStorage.h5conference= data
      state.conference=data
    },
    //巡更协议
    [types.TRTCSW]: (state, data) => {
      sessionStorage.h5toursw= data
      state.tour=data
    },
    //实时播放协议
    [types.RTCSW]: (state, data) => {
      sessionStorage.h5rtcsw= data
      state.rtc=data
    },
    //..
    [types.LOGIN]: (state, data) => {
      sessionStorage.h5stoken = data
      state.token = data
    },
    //用户名
    [types.USER]: (state, data) => {
      sessionStorage.h5suser = data
      state.users = data
    },
    [types.ROOT]: (state, data) => {
      sessionStorage.h5sroot = data
      state.root = data
    },
    
    [types.LOGOUT]: (state) => {
      sessionStorage.removeItem('h5stoken')
      state.token = null
      sessionStorage.removeItem('h5suser')
      state.users = null
      sessionStorage.removeItem('h5sroot')
      state.root = null
      sessionStorage.removeItem('h5link')
      state.link = 'false'
    },
    [types.TITLE]: (state, data) => {
      state.title = data
    },
    [types.LANG]: (state, data) => {
      sessionStorage.h5slang = data
      state.lang = data
    }
  }
})