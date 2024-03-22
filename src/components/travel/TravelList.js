import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function TravelList(){
    const [count,setCount]=useState(0)
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)
    const [totalpage,setTotalpage]=useState(0)
    const [travelList,setTravelList]=useState([])
    const [curpage,setCurpage]=useState(1)
    useEffect(()=>{
        axios.get('http://localhost/travel/travel_list_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setCount(response.data.count)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setTravelList(response.data.list)
        })
    },[curpage])
    let html=travelList.map((vo)=>
        <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
                <Link to={"/travel/detail/" + vo.no} style={{"textDecoration":"none","color":"black"}}>
                    <img className="img-fluid" src={vo.poster1} style={{"width": "416px", "height": "267px"}}/>
                </Link>
                <Link to={"/travel/detail/" + vo.no} style={{"textDecoration":"none","color":"black"}}>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading" style={{"fontSize":"17px"}}>{vo.title}</div>
                     </div>
                </Link>
            </div>
        </div>
    )

    const pageChange = (page) => {
        setCurpage(page)
    }
    const prevHandler = () => {
        setCurpage(startPage - 1)
    }
    const nextHandler = () => {
        setCurpage(endPage + 1)
    }
    let row = []
    if (startPage > 1) {
        row.push(<li><a href={"#"} onClick={() => prevHandler()} className={"btn btn-dark btn-social mx-2"}>&laquo;</a></li>)
    }

    for (let i = startPage; i <= endPage; i++) {
        if (curpage === i) {
            row.push(<li style={{"marginLeft":"3%"}}><a onClick={()=>pageChange(i)} style={{"color":"black","textDecoration":"none"}}>{i}</a></li>)
        }
        else
        {
            row.push(<li style={{"marginLeft":"3%"}}><a onClick={()=>pageChange(i)} style={{"color":"black","textDecoration":"none"}}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li style={{"marginTop":"-7px","marginLeft":"1%"}}><a href={"#"} onClick={()=>nextHandler()} className={"btn btn-dark btn-social mx-2"}>&raquo;</a></li>)
    }

    return (
        <Fragment>
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="row">
                    {html}
                </div>
                <ul className={"pagination"} style={{"marginLeft": "35%", "marginTop": "70px"}}>
                    {row}
                </ul>
            </div>
        </section>
        </Fragment>
    )
}

export default TravelList