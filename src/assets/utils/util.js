import Storage from './Storage';

export const messageHelp = (id) => {
  const message = {
    4: {
      title: '新功能',
      message: '搜索功能全面支持 QQ 音乐啦，vip 的拦截设置绕圈子暂时解决啦，更多内容前去关于了解',
      type: 'info',
      duration: 20000,
    },
    2: {
      title: 'tips',
      message: '如果网易云寻不到想要的歌曲，就点下「企鹅」试试吧',
      type: 'info',
      duration: 20000,
    },
    3: {
      title: '😫',
      message: '由于qq音乐对 vip 音乐增加了拦截限制，所以目前无法再获取 vip 音乐的播放链接，请谅解',
      type: 'info',
      duration: 20000,
    },
    5: {
      title: '新功能！！',
      message: '🐧 音乐歌单全方面支持啦！去歌单页面，切到🐧tab，输入企鹅号就可以啦（需要企鹅音乐主页设为公开）',
      type: 'info',
      duration: 20000,
    },
    6: {
      title: '看见音乐！',
      message: '新增了音频图的显示，如果影响到了性能和流量请点左上角头像，关闭显示！',
      type: 'info',
      duration: 20000,
    },
    7: {
      title: '咪咕音乐！',
      message: '新增咪咕音乐的支持，搜索页面的最右侧！同样支持无损～',
      type: 'info',
      duration: 20000,
    },
    8: {
      message: '反馈可以戳右下面👇',
      type: 'info',
      duration: 20000,
    },
    9: {
      message: ''
    }
  };
  const newMessage = [
    {
      content: '',
      time: '',
    },
    {
      content: '反馈可以戳右下面👇',
      time: '20-01-09',
    },
    {
      content: '可以前往设置页，自行加入企鹅音乐Cookie啦，未来会支持更多操作',
      time: '20-01-31',
    },
    {
      content: '数据层面和接口重大重构！如果有什么bug及时反馈！',
      time: '20-05-17',
    },
    {
      content: '音频图大优化！windows 也不卡了！',
      time: '20-06-16',
    },
    {
      content: '如果无法播放可以尝试去设置页关闭先进模式',
      time: '20-07-07',
    }
  ];
  if (id === 'newInfo') {
    const newInfoIndex = Number(Storage.get('notify-new-index') || 0);
    if (newInfoIndex < (newMessage.length - 1)) {
      Storage.set('notify-new-index', newMessage.length - 1);
      window.VUE_APP.$notify({
        title: '有更新呀！',
        message: newMessage.slice(newInfoIndex + 1).map((v) => `${v.content} (${v.time})`).join('<br/>'),
        duration: (newMessage.length - newInfoIndex) * 20000,
        dangerouslyUseHTMLString: true,
      })
    }
    return;
  }

  if (!Storage.get(`notify-${id}`)) {
    window.VUE_APP.$notify(message[id]);
    Storage.set(`notify-${id}`, '1');
  }
};