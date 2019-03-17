// promise ? --> 비동기를 순차 실행

let promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('async set time out');
    resolve('success')
  }, 1000);
});

promise.then(value => {
  console.log(value);
  setTimeout(() => {
    console.log('async set time out1');
  }, 1000);
  return 'success'
}).then(value => {
  console.log(value + '1')
});