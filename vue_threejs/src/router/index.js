import { createRouter, createWebHistory } from 'vue-router'
import test from '@/view/test/test.vue'
import test2 from '@/view/test2/test2.vue'
import test3 from '@/view/test3/test3.vue'
import test4 from '@/view/test4/test4.vue'
import test5 from '@/view/test5/test5.vue'
import test6 from '@/view/test6/test6.vue'
import test7 from '@/view/test7/test7.vue'
import test8 from '@/view/test8/test8.vue'
import test9 from '@/view/test9/test9.vue'
import test10 from '@/view/test10/test10.vue'
import test11 from '@/view/test11/test11.vue'
import test12 from '@/view/test12/test12.vue'

const routes = [
  {
    path: '/test',
    name: '点光源',
    component: test
  },
  {
    path: '/test2',
    name: 'orbitControls(旋转缩放)',
    component: test2
  },
  {
    path: '/test3',
    name: '环境光（AmbientLight）',
    component: test3
  },
  {
    path: '/test4',
    name: '平行光（DirectionalLight）',
    component: test4
  },
  {
    path: '/test5',
    name: '自动旋转（requestAnimationFrame）',
    component: test5
  },
  {
    path: '/test6',
    name: '全屏渲染与更新onresize',
    component: test6
  },
  {
    path: '/test7',
    name: '显示帧数',
    component: test7
  },

  {
    path: '/test8',
    name: '批量创建100个长方体（测试性能）',
    component: test8
  },

  {
    path: '/test9',
    name: '沿x轴排列多个正方体(调整透视相机参数)',
    component: test9
  },

  {
    path: '/test10',
    name: '常见的几何体',
    component: test10
  },
  {
    path: '/test11',
    name: '高光材质',
    component: test11
  },
  {
    path: '/test12',
    name: 'WebGL渲染器设置（锯齿模糊、背景颜色）',
    component: test12
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;

