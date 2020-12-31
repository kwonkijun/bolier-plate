const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // start coding@naver.com 빈칸을 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0 // 지정을 안해주면 0 
    },
    image: String, // 객체로 쓰지 않아도 된다
    token: {
        type: String // 유효성 관리에 필요
    },
    tokenExp: {
        type: Number // 토큰이 사용될 기간
    }
})

const User = mongoose.model('User', userSchema) // 모델은 스키마를 감싸주는 역할
module.exports = {User}