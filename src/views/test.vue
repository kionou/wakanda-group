<template >
  <div>
      <div id="J_xiaomi_dialog" style="z-index: 10; right: 20px; bottom: 50px;"><div class="J_weak" @click="toggleDropdown">
      <img src="//ae01.alicdn.com/kf/H794f99266c5d4fd387a337d99a786172K.png" class="alime-avatar">
      <span class="alime-text">Besoin d'aide?</span>
    </div>
    <div class="J_Dialog alicare-dialog-undefined" style="display: block; bottom: 0px;">
          <div class="alicare-dialog-wrapper" style="opacity: 1; right: 12px;">
              <div class="dialog-fake-mask" style="visibility: hidden;"></div>
              <div class="alicare-fake-header alicare-draggable" style="width: 80%;">
                  <a class="alicare-im-close" @click="toggleDropdown">
                    <img src="//gw.alicdn.com/tfs/TB1lWlNOkvoK1RjSZPfXXXPKFXa-29-29.svg">
                  </a>
              </div>
              <!-- <iframe v-if="isOpen" allowfullscreen="true" class="alicare-frame" name="alicare-dialog" src="https://h5-global.alimebot.aliexpress.com/intl/index.htm?dialog=true&amp;from=7n5eoLV8E5" frameborder="0" data-spm-anchor-id="a2g0o.order_list.0.i5.25b35e5b5eqDjd" data-spm-act-id="a2g0o.order_list.0.i5.25b35e5b5eqDjd"></iframe> -->
          </div>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
          isOpen: false,
          
      }
  },
  mounted() {
      
  },
  methods: {
      toggleDropdown() {
    this.isOpen = !this.isOpen;
  },
  },
  
}
</script>
<style lang="css" scoped>

#J_xiaomi_dialog {
  padding-top: 10px;
  position: fixed;
  font-family: PingFang SC, HEITI SC, Microsoft YaHei, STHeiti Light, sans-serif !important;
}
#J_xiaomi_dialog .J_weak {
  background-color: #fff;
  width: 150px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  border-radius: 22px;
  color: rgba(0, 0, 0, .87);
  cursor: pointer;
  -webkit-box-shadow: 0 12px 12px 0 rgba(9, 7, 7, .03), 0 8px 4px 0 rgba(0, 0, 0, .04);
  box-shadow: 0 12px 12px 0 rgba(9, 7, 7, .03), 0 8px 4px 0 rgba(0, 0, 0, .04);
}

#J_xiaomi_dialog .J_weak .alime-avatar {
  width: 20px;
  vertical-align: middle;
}
#J_xiaomi_dialog .J_weak img {
  width: 48px !important;
  height: 48px;
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);
  -ms-transform: translateX(-50%);
}
#J_xiaomi_dialog .J_weak .alime-text {
  font-size: 14px;
  vertical-align: middle;
  margin-left: 5px;
}

#J_xiaomi_dialog .J_Dialog {
  position: absolute;
  overflow: hidden;
  display: none;
  padding: 8px;
  width: 460px;
  height: 554px;
  left: -464px;
  bottom: -8px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
#J_xiaomi_dialog .J_Dialog .alicare-dialog-wrapper {
  position: absolute;
  overflow: hidden;
  border-radius: 12px;
  -webkit-box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, .06), 0 1.5px 3px 0 rgba(0, 0, 0, .08);
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, .06), 0 1.5px 3px 0 rgba(0, 0, 0, .08);
}
#J_xiaomi_dialog .J_Dialog .alicare-dialog-wrapper .dialog-fake-mask {
  background: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
}
#J_xiaomi_dialog .J_Dialog .alicare-dialog-wrapper .alicare-fake-header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 44px;
}
#J_xiaomi_dialog .J_Dialog .alicare-dialog-wrapper .alicare-fake-header .alicare-im-close {
  position: absolute;
  top: 16px;
  left: 16px;
  cursor: pointer;
}
#J_xiaomi_dialog .J_Dialog .alicare-dialog-wrapper .alicare-fake-header .alicare-im-close img {
  display: block;
  width: 14px;
}
#J_xiaomi_dialog .J_Dialog .alicare-dialog-wrapper iframe {
  display: block;
  border: none;
}

#J_xiaomi_dialog .J_Dialog .alicare-frame {
  width: 460px;
  height: 550px;
}
  
</style>