import superagent from 'superagent'
import Promise from 'bluebird'
// SuperAgent是轻量级更为优化的ajax API
//初始化一个请求可以通过调用request模块中适当的方法，
//然后使用.end()来发送请求，例如一个简单的GET请求：

export default{
  get:(url,params)=>{
    // return new Promise(()=>{})

    // It doesn't matter what you're returning from the end
    //method callback, as it asynchronously
    //executed when you've get response and result of callback
    //execution is nowhere used. Look here and here in the source
    //code. end method returns this, so in your second example
    //you're resolving superagent not response. To get response
    //your post method must looks like:


    return new Promise((resolve,reject)=>{

      superagent
			.get(url)
			.query(params)
			.set('Accept', 'application/json')
			.end((err, response) => {
				if (err){
					reject(err)
					return
				}

				resolve(response.body)
			})


    })

  }
}

// var p = new Promise(function(resolve, reject) {
//     // ... ...
//     // 此处,可以执行某些异步任务,然后...
//     // 在回调中,或者任何地方执行 resolve/reject
//
//     if(/* good condition */) {
//         resolve('传入成果结果信息,如 data');
//     }
//     else {
//         reject('失败:原因...!');
//     }
// });
//
// p.then(function(data) {
//     /* do something with the result */
// }).catch(function(err) {
//     /* error :( */
// });

//
// SuperAgent是轻量级更为优化的ajax API，对比大量糟糕的现存的API，SuperAgent是灵活的、易读的、并且非常易学，同时SuperAgent可用于Node.js！
//
// request
//    .post('/api/pet')
//    .send({ name: 'Manny', species: 'cat' })
//    .set('X-API-Key', 'foobar')
//    .set('Accept', 'application/json')
//    .end(function(err, res){
//      if (err || !res.ok) {
//        alert('Oh no! error');
//      } else {
//        alert('yay got ' + JSON.stringify(res.body));
//      }
//    });

//
// 通过调用request模块中适当的方法，然后使用.end()来发送请求，例如一个简单的GET请求：
//
// request
//     .get('/search')
//     .end(function(err, res){
//
//     })；
