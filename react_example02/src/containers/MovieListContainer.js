/*
 * 电影列表容器组件
 * */
import React from 'react'
import service from '../service/movieService.js'
import '../styles/movieList.css'

export default class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading:true,
            movieListData: []
        }
    }
      static contextTypes={
        router:React.PropTypes.object
    }


    componentDidMount(){

        this.fetch()
        // const _this = this
        // setTimeout(function(){
        //     _this.setState({
        //         isLoading: false
        //     })
        // },3000)
    }
    // 数据请求访问
    fetch = () => {
        const _this = this
        const promise = service.getMovieListData()
         promise.then(
            function(data){
                console.log(data)
                _this.setState({
                    isLoading: false,
                    movieListData: data.subjects 

                })
            },function(err){
                console.log(err)
            }
          
        ).catch(function(err){

        })
    }

    // 跳转到详细页面
    goDetail = (id) =>{
        this.context.router.push(`/movie/movieDetail/${id}`)
    }


     // 渲染loading遮罩
    renderLoading= () =>{
        return (
            <div>
                正在加载数据，请等待。。。。。。
            </div>
        )
    }

   
    // 渲染电影列表
    renderMovieList = () => {
       
        return (
            <div className="movieList_container">
                {this.state.movieListData.map(this.renderItem)}
            </div>
        )
    }

        // 渲染每一行数据
         renderItem = (item)=> {
            return (
                <div className="movieList_item" key={item.id} onClick={()=>this.goDetail(item.id)}>
                    <img src={item.images.small} alt="" />
                    <div>
                        <h1>{item.title}</h1>
                        <span>{item.year}</span>
                    </div> 
                </div>
            )
        };
    
    render() {
        if(this.state.isLoading){
         return this.renderLoading()
        }else{
           return this.renderMovieList()
        }
        
    }
}

