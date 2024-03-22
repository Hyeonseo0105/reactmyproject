import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function TravelFind(){
    const [startPage, setStartPage] = useState(0)
    const [endPage, setEndPage] = useState(0)
    const [totalpage, setTotalpage] = useState(0)
    const [curpage, setCurpage] = useState(1)
    const [travelList, setTravelList] = useState([])
    const [search, setSearch] = useState('통영')
    useEffect(() => {
        axios.post('http://localhost/travel/travel_find_react', null, {
            params: {
                page: curpage,
                search: search
            }
        }).then(response => {
            console.log(response.data)
            setTravelList(response.data.list)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
        })
    }, [search, curpage])

    let html=travelList.map((vo) =>
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
    const findHandler = () => {
        setCurpage(1)
    }

    const changeHandler = (e) => {
        setCurpage(1)
        setSearch(e.target.value)
    }
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
        row.push(<li><a href={"#"} onClick={() => prevHandler()}>&laquo;</a></li>)
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
                    <input type={"text"} placeholder={"검색어 입력"}
                        value={search}
                        onChange={changeHandler}
                        style={{"width":"417px","marginLeft":"1%"}}
                    />
                    <input type={"button"} className={"btn btn-dark btn-social mx-2"} value={"검색"} onClick={findHandler}/>
<div style={{"height":"50px"}}></div>

                        {html}

<div style={{"height":"10px"}}></div>

                    <div className={"text-center"}>
                        <ul className={"pagination"} style={{"marginLeft": "46%", "marginTop": "70px"}}>
                            {row}
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default TravelFind