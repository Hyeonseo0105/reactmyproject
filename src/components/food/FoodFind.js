import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function FoodFind(){
    const [startPage, setStartPage] = useState(0)
    const [endPage, setEndPage] = useState(0)
    const [totalpage, setTotalpage] = useState(0)
    const [curpage, setCurpage] = useState(1)
    const [travelList, setTravelList] = useState([])
    const [search, setSearch] = useState('거제')
    useEffect(() => {
        axios.post('http://localhost/food/food_find_react', null, {
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
                <Link to={"/food/detail/" + vo.no}>
                    <img className="img-fluid" src={vo.poster} style={{"width":"416px","height":"267px"}}/>
                </Link>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{vo.name}</div>
                    <div className="portfolio-caption-subheading text-muted">{vo.local}</div>
                </div>
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
                               style={{"width": "417px", "marginLeft": "1%"}}
                        />
                        <input type={"button"} className={"btn btn-dark btn-social mx-2"} value={"검색"} onClick={findHandler}/>
<div style={{"height": "50px"}}></div>

                        {html}

<div style={{"height": "10px"}}></div>
                        <div className={"text-center"}>
                            <ul className={"pagination"} style={{"marginLeft": "50%", "marginTop": "70px"}}>
                                {row}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default FoodFind