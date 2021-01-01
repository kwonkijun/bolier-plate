// node 환경변수는 process.env에 저장된다

if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
}else {
    module.exports = require('./dev');
}