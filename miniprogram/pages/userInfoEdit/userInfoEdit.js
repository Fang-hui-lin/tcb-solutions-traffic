// pages/userInfoEdit/userInfoEdit.js
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  regionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },

  // 获取位置
  chooseLocation() {
    const that = this
    wx.chooseLocation({
      success(res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          locationAddress: res.address
        })
      },
      fail: (res) => {
        wx.showModal({
          title: '',
          content: '未授权无法获取位置',
          showCancel: false
        })
        wx.getSetting({
          success: res => {
            let authSetting = res.authSetting
            if (!authSetting['scope.userLocation']) {
              this.setData({
                setAuth: true
              });
            }
          }
        })
      }
    })
  },

  // 开启授权
  callbackSetting(res) {
    if (res.detail.authSetting['scope.userLocation']) {
      this.setData({
        setAuth: false
      });
    }
  },

  // 修改资料
  formSubmit: function(e) {
    const info = e.detail.value;
    if (info.username == "") {
      util.alert("请输入昵称");
      return;
    } else if (info.tel == "") {
      util.alert("请输入电话");
      return;
    } else if (info.address == "") {
      util.alert("请输入详细地址");
      return;
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
})