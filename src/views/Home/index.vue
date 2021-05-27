<template>
  <header class="between SngBlog_header align-center">
    <div class="center SngBlog_header_left">
      <div
        class="Logo_img_box align-center"
        :class="{ 'Logo_img_box_Phone': !readonlyObject.matches }"
      >
        <img class="Logo_img" src="../../assets/img/Logo.jpg" alt="呜呜呜Logo没加载出来" />
        <h3>SngBlog</h3>
      </div>
    </div>
    <ul class="SngBlog_header_right between align-center">
      <li>
        <router-link to="/Home/page">首页</router-link>
      </li>
      <li>
        <router-link to="/Home/project">项目</router-link>
      </li>
      <li>
        <router-link to="/Home/article">文章</router-link>
      </li>
      <li>
        <a href="https://github.com/1622583480" target="view_window">
          Github
          <i class="iconfont icon-fenxiang"></i>
        </a>
      </li>
      <li class="Logo">
        <img src="../../assets/img/Logo.jpg" alt="呜呜呜Logo没加载出来" />
      </li>
    </ul>
    <div class="center SngBlog_header_Menu" @click="OpenRightMenu">
      <i class="iconfont icon-ego-menu"></i>
    </div>
  </header>
  <main>
    <router-view v-model:readonlyObject="readonlyObject"></router-view>
    <!-- <h1 class="SngBlog_h1" @click="EditColor">这只是一个普通的h1标签</h1> -->
  </main>
  <van-overlay :show="MenuFlag" @click="DrawerHide" v-if="readonlyObject.matches">
    <div class="Phone_Menu_Hide" @click.stop :class="{ Phone_Menu_Show: MenuShowFlag }">
      <ul class="Phone_Menu_List">
        <div class="Doge" :class="MenuShowDogeFlag ? 'Doge_Show' : 'Doge_Hide'">
          <img src="../../assets/img/Doge.gif" alt="Doge无了~" />
        </div>
        <li>
          <router-link to="/Home/page">首页</router-link>
        </li>
        <li>
          <router-link to="/Home/project">项目</router-link>
        </li>
        <li>
          <router-link to="/Home/article">文章</router-link>
        </li>
        <li>
          <a href="https://github.com/1622583480" target="view_window">
            Github
            <i class="iconfont icon-fenxiang"></i>
          </a>
        </li>
      </ul>
    </div>
  </van-overlay>
  <footer>页底说明文件</footer>
</template>

<script lang="ts" setup>
import { readonly, computed, ref, watch } from "vue";
import { useStore } from "vuex";
const Store = useStore();
// ref: Header_img = undefined as HTMLImageElement | undefined;
ref: readonlyObject = computed(() => readonly(Store.getters.Media));
ref: MenuFlag = false as boolean;
ref: MenuShowFlag = false as boolean;
ref: MenuShowDogeFlag = false as boolean;
watch($readonlyObject, (e) => {
  if (e.matches) {
    MenuShowDogeFlag = false
    MenuFlag = false;
    MenuShowFlag = false
  }
});
// import lottie from "lottie-web"
// onMounted(() => {
//     console.dir(Server.value, '获取的html元素')
//     const anim = lottie.loadAnimation({
//         container: Server.value, // 渲染容器
//         renderer: "canvas", // 渲染器 html | svg | canvas
//         loop: true, // 循环
//         autoplay: true, // 自动播放
//         // animationData: {}, //json动画数据 建议用path 因为 animationData 会将数据打包进来，会使得 js bundle 过大
//         path: "https://gw.alipayobjects.com/os/sage/10726a69-0e6a-484f-a784-d57a812af9a6/lottie.json"
//         // json路径会通过一个http请求获取
//     })
//     // 实例上还有很多方法 播放停止等等等 详情请查询github文档
// })
function OpenRightMenu() {
  MenuFlag = !MenuFlag;
  MenuShowDogeFlag = !MenuShowDogeFlag;
  setTimeout(() => {
    MenuShowFlag = !MenuShowFlag;
  }, 200);
}
function DrawerHide() {
  MenuShowDogeFlag = false
  setTimeout(() => {
    MenuFlag = false;
    MenuShowFlag = false
  }, 300)

}
// const ColorS = ref<string>('red')
// const fontS = ref<string>('14px')
// const arr: Array<string> = ['red', 'blue', 'yellow', 'pink']
// const fontarr: Array<string> = ['14px', '16px', '18px', '20px']
// function EditColor() {
//   ColorS.value = arr[Math.floor((Math.random() * arr.length))]
//   fontS.value = fontarr[Math.floor((Math.random() * fontarr.length))]
// }
</script>

<style lang="less" scoped>
// .SngBlog_h1 {
//   color: v-bind(ColorS);
//   font-size: v-bind(fontS);
//   user-select: none;
// }
.SngBlog_header {
  padding: 14px;
  box-shadow: 0px -11px 26px -3px #212121;
  white-space: nowrap;
  .SngBlog_header_right {
    height: 40px;
    width: 300px;
    li {
      cursor: pointer;
    }
  }
  .SngBlog_header_Menu {
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: none;
  }
}

@media screen and (max-width: 644px) {
  .SngBlog_header_right {
    display: none;
  }
  .SngBlog_header_Menu {
    display: flex !important;
  }
}
.Logo {
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  &:hover {
    animation: rotates 0.7s infinite forwards linear;
  }
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
}
@keyframes rotates {
  to {
    transform: rotate(0deg);
  }

  from {
    transform: rotate(-360deg);
  }
}
@keyframes TabItem {
  to {
    position: relative;
    &::after {
      position: absolute;
    }
  }
  from {
    &::after {
      position: absolute;
    }
  }
}
@keyframes bounce-in {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-300%);
  }
}
.Logo_img {
  border-radius: 50%;
  margin-right: 10px;
  height: 40px;
  transition: all 1s;
  opacity: 1;
}
.Logo_img_box {
  transition: all 1s;
}
.Logo_img_box_Phone {
  transform: translateX(-40%);
  .Logo_img {
    opacity: 0;
  }
}
.icon-fenxiang {
  font-size: 16px !important;
}
.SngBlog_header_left {
  position: relative;
}
.Phone_Menu_Hide {
  position: absolute;
  right: 0;
  top: 0;
  box-shadow: -2px 0 8px rgb(0 0 0 / 15%);
  transition: transform 0.3s;
  height: 100vh;
  width: 50vw;
  transform: translateX(100%);
  background: #ffffff;
  ul {
    position: relative;
    height: 100%;
    padding: 20px;
    .Doge {
      position: absolute;
    }
    .Doge_Show {
      animation: ShowMenuDoge 0.7s forwards;
    }
    .Doge_Hide {
      transform: rotate(10deg);
      animation: HideMenuDoge 0.7s forwards;
    }
  }
  li {
    cursor: pointer;
  }
}
@keyframes ShowMenuDoge {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}
@keyframes HideMenuDoge {
  from {
    transform: translateX(calc(-100% - 20px)) rotateY(180deg);
  }
  to {
    transform: translateX(0) rotateY(180deg);
  }
}
.Phone_Menu_Show {
  transform: translateX(0);
}
.Phone_Menu_List {
  li {
    padding: 5vw;
  }
}
</style>