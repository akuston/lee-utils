const urlParams = new URLSearchParams(window.location.search);
// 将 URLSearchParams 对象转换为对象
const paramsObj = Object.fromEntries(urlParams.entries());

export default paramsObj;