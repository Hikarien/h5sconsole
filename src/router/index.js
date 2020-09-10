import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/views/dashboard'
import GPU from '@/components/views/dashboard/GPU'
import Device from '@/components/views/dashboard/device'

import Liveview from '@/components/views/liveview'
import Archive from '@/components/views/archive'
import AdvancePB from '@/components/views/Advancepbss'
import Sreenshots from '@/components/views/screenshots'
import Playback from '@/components/views/playback'
import camera from '@/components/views/camera'

import avintercom from '@/components/views/avintercom'
import avintercoms from '@/components/views/avintercom/avintercoms'
import upload from '@/components/views/avintercom/upload'

import Tour from '@/components/views/tour'
//import AdvancePB from '@/components/views/Advancepb'
import Event from '@/components/views/event'


import cloud from '@/components/views/cloud'
import clouds from '@/components/views/cloud/clouds'

import Settings from '@/components/views/settings'
import devices from '@/components/views/settings/devices'
import devicesdks from '@/components/views/settings/devicesdks'
import devicertmppushs from '@/components/views/settings/devicertmppushs'
import records from '@/components/views/settings/record'
import usersettings from '@/components/views/settings/usersetting'
import Transcoding  from '@/components/views/settings/Transcoding'
import Regional from '@/components/views/settings/Regional'
import Cloudconnect from '@/components/views/settings/cloudconnect'
import Webrtc from '@/components/views/settings/webrtc'
import System from '@/components/views/settings/system'
import Log from '@/components/views/settings/log'

import GB from '@/components/views/GB'
import GB28181 from '@/components/views/GB/GB28181'
import GBplatform from '@/components/views/GB/GBplatform'
import GB_Service from '@/components/views/GB/GB_Service'

import H5S from '@/components/h5s'
import Login from '@/components/login'
import Logout from '@/components/logout'
import Downloadapp from '@/components/views/downloadapp'

import Control from '@/components/Control'
import store from '@/store/store'
import * as types from '@/store/types'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/app/dashboard'
  },
  {
    path: '/app',
    name: 'h5s',
    component: H5S,
    children: [
      
      {
        path: '/app/liveview',
        name: 'liveviewRouter',
        component: Liveview
      },
      {
        path: '/app/GPU',
        name: 'GPURouter',
        component: GPU
      },
      {
        path: '/app/Device',
        name: 'DeviceRouter',
        component: Device
      },
      {
        path: '/app/playback',
        name: 'playbackRouter',
        component: Playback
      },
      {
        path: '/app/AdvancePB',
        name: 'AdvancePBRouter',
        component: AdvancePB
      },
     
      {
        path: '/app/event',
        name: 'eventRouter',
        component: Event
      },
      {
        path: '/app/archive',
        name: 'archiveRouter',
        component: Archive
      },
      {
        path: '/app/Tour',
        name: 'TourRouter',
        component: Tour
      },
      {
        path: '/app/screenshots',
        name: 'screenshotsRouter',
        component: Sreenshots
      },
      
      {
        path: '/app/snapshot',
        name: 'snapshotRouter',
        redirect: {name: 'dashboardRouter'}
      },
      {
        path: '/app/dashboard',
        name: 'dashboardRouter',
        component: Dashboard
      },


      //用户
      {
        path: '/app/camera',
        name: 'cameraRouter',
        meta: {
          roles: 'admin',
        },
        component: camera
      },
      {
        path: '/app/avintercom',
        name: 'avintercomRouter',
        component: avintercom,
        meta: {
          roles: 'admin',
          requireAuth: true
        },
        children: [
          //1
          {
            path: '/app/avintercom/avintercoms',
            name: 'avintercomsRouter',
            component: avintercoms,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },{
            path: '/app/avintercom/upload',
            name: 'uploadRouter',
            component: upload,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
        ],
      },
      {
        path: '/app/GB',
        name: 'GBRouter',
        meta: {
          roles: 'admin',
          requireAuth: true
        },
        component: GB,
        children: [
          //1
          {
            path: '/app/GB/GB28181',
            name: 'GB28181Router',
            component: GB28181,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //2
          {
            path: '/app/GB/GBplatform',
            name: 'GBplatformRouter',
            component: GBplatform,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },{
            path: '/app/GB/GB_Service',
            name: 'GB_ServiceRouter',
            component: GB_Service,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
        ]
      },
      {
        path: '/app/cloud',
        name: 'cloudRouter',
        component: cloud,
        meta: {
          roles: 'admin',
          requireAuth: true
        },
        children: [
          //1
          {
            path: '/app/cloud/clouds',
            name: 'cloudsRouter',
            component: clouds,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          }
        ]
      },
      //样式   管理
      {
        path: '/app/settings',
        name: 'settingsRouter',
        meta: {
          roles: 'admin',
          requireAuth: true
        },
        component: Settings,
        children: [
          //1
          {
            path: '/app/setting/devices',
            name: 'devicesRouter',
            component: devices,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //2
          {
            path: '/app/setting/devicesdks',
            name: 'devicesdksRouter',
            component: devicesdks,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //3
          {
            path: '/app/setting/devicertmppushs',
            name: 'devicertmppushsRouter',
            component: devicertmppushs,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //4
          {
            path: '/app/setting/records',
            name: 'recordsRouter',
            component: records,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //5
          {
            path: '/app/setting/usersettings',
            name: 'usersettingsRouter',
            component: usersettings,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //6
          {
            path: '/app/setting/Regional',
            name: 'RegionalRouter',
            component: Regional,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          }, 
          //7
          {
            path: '/app/setting/Transcoding',
            name: 'TranscodingRouter',
            component: Transcoding,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //8
          {
            path: '/app/setting/Cloudconnect',
            name: 'CloudconnectRouter',
            component: Cloudconnect,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //9
          {
            path: '/app/setting/Webrtc',
            name: 'WebrtcRouter',
            component: Webrtc,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //10
          {
            path: '/app/setting/System',
            name: 'SystemRouter',
            component: System,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //11
          {
            path: '/app/setting/Log',
            name: 'LogRouter',
            component: Log,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
        ]
      },
      // {
      //   path: '/app/cloud',
      //   name: 'cloudRouter',
      //   meta: {
      //     requireAuth: true
      //   },
      //   redirect: {name: 'dashboardRouter'}
      // },
      {
        path: '/app/logout',
        name: 'logoutRouter',
        component: Logout
      }
    ]
  },
  
  {
    path: '/Control',
    name: 'ControlRouter',
    component: Control
  },
  {
    path: '/login',
    name: 'LoginRouter',
    component: Login
  },
  {
    path: '/Downloadapp',
    name: 'DownloadappRouter',
    component: Downloadapp
  },
];
// 页面刷新时，重新赋值token
if (window.sessionStorage.getItem('h5stoken')) {
  store.commit(types.LOGIN, window.sessionStorage.getItem('h5stoken'))
}
if (window.sessionStorage.getItem('h5link')) {
  store.commit(types.LINK, window.sessionStorage.getItem('h5link'))
}

if (window.sessionStorage.getItem('h5slang')) {
  store.commit(types.LANG, window.sessionStorage.getItem('h5slang'))
}
if (window.sessionStorage.getItem('h5rtcsw')) {
  store.commit(types.RTCSW, window.sessionStorage.getItem('h5rtcsw'))
}
if (window.sessionStorage.getItem('watermarkstring')) {
  store.commit(types.WATERMARKSTRING, window.sessionStorage.getItem('watermarkstring'))
}
if (window.sessionStorage.getItem('h5watermarktoggle')) {
  store.commit(types.WATERMARKTOGGLE, window.sessionStorage.getItem('h5watermarktoggle'))
}
//巡更
if (window.sessionStorage.getItem('h5toursw')) {
  store.commit(types.WATERMARKTOGGLE, window.sessionStorage.getItem('h5toursw'))
}
//视频会议
if (window.sessionStorage.getItem('h5conference')) {
  store.commit(types.CONFERENCE, window.sessionStorage.getItem('h5conference'))
}

if (window.sessionStorage.getItem('h5adswitch')) {
  store.commit(types.ADSWITCH, window.sessionStorage.getItem('h5adswitch'))
}

//用户名
if (window.sessionStorage.getItem('h5suser')) {
  store.commit(types.USER, window.sessionStorage.getItem('h5suser'))
}
if (window.sessionStorage.getItem('h5sroot')) {
  console.log(window.sessionStorage.getItem('h5sroot'))
  store.commit(types.ROOT, window.sessionStorage.getItem('h5sroot'))
}

const Router = new VueRouter({
  routes
});

Router.beforeEach((to, from, next) => {
  // console.log('hao',store.state.token,to.meta.roles)
  if(store.state.root=="Operator"&&to.meta.roles){
    console.log("store.state.root",store.state.root,to.meta.roles)
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  }
  if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
          next()
        } else {
          next({
            path: '/login',
            query: {redirect: to.fullPath}
          })
        }
      } else {
        next();
      }
})

// Router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (store.state.token) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   } else {
//     next();
//   }
// })

export default Router;
