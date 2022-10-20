setTimeout(() => {
  let url = location.href;
  let urlSplit = url.split('appViewId=');
  let viewId = urlSplit[1]
  viewId == '88b59c50-9a7d-4883-9ffb-bf3d822adc17' ?
    console.log('Welcome')
    :
    console.log('No Welcome')
}, 1000);