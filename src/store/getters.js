const getters = {
  sidebar: state => state.app.sidebar, // 对象，open属性控制sidebar打开与关闭
  device: state => state.app.device,
  language: state => state.app.language,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters
