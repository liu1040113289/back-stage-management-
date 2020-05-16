import actionType from '../actions/actionType'
const isLogin=Boolean(window.localStorage.getItem('token'))||Boolean(window.sessionStorage.getItem('token'))
const userInfo=JSON.parse(window.localStorage.getItem('userInfo'))||JSON.parse(window.sessionStorage.getItem('userInfo'))
const initState={
    ...userInfo,
    isLogin,
    isLoading:false
}

export default (state=initState,action)=>{
    console.log(action)
    switch(action.type){
        case actionType.START_LOGIN:
            return{
                ...state,
                isLoading:true
            }
        case actionType.LOGIN_SUCCESS:
            return{
                ...state,
                ...action.payload.userInfo,
                isLogin:true,
                isLoading:false
            }
        case actionType.CHANGE_AVATAR:
            return{
                ...state,
                avatar:action.payload.avatarUrl
            }
        case actionType.LOGIN_FAILED:
            return {
                id:'',
                displayName:'',
                avatar:'',
                isLogin:false,
                isLoading:false,
                role:''
            }
        default:
            return state
    }
}