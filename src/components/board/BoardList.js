import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function BoardList(){
    const [count,setCount]=useState(0)
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)
    const [totalpage,setTotalpage]=useState(0)
    const [boardList,setBoardList]=useState([])
    const [curpage,setCurpage]=useState(1)

    useEffect(() => {
        axios.get('http://localhost/board/board_list_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            setBoardList(response.data.list)
            setCurpage(response.data.curpage)
            setCount(response.data.count)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
            setTotalpage(response.data.totalpage)
        })
    }, [curpage]);
    // 출력
    let html=boardList.map((vo)=>
        <tr>
            <td className={"text-center"} width={"10%"}>{vo.no}</td>
            <td width={"45%"}>
                <Link to={"/board/detail/"+vo.no} style={{"textDecoration":"none","color":"black","fontWeight":"bold"}}>{vo.subject}</Link>
            </td>
            <td className={"text-center"} width={"15%"}>{vo.name}</td>
            <td className={"text-center"} width={"20%"}>{vo.regdate}</td>
            <td className={"text-center"} width={"10%"}>{vo.hit}</td>
        </tr>
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
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className={"row"}>
                    <h3 className={"text-center"}>커뮤니티</h3>
<div style={{"height":"20px"}}></div>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td style={{"borderBottomWidth":"0px"}}>
                                <Link to={"/board/insert"} className={"btn btn-dark btn-social mx-2"}>새글</Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table className={"table"}>
                        <thead>
                        <tr className={"success"}>
                            <th className={"text-center"} width={"10%"} style={{"borderTopWidth":"thick"}}>번호</th>
                            <th className={"text-center"} width={"45%"} style={{"borderTopWidth":"thick"}}>제목</th>
                            <th className={"text-center"} width={"15%"} style={{"borderTopWidth":"thick"}}>이름</th>
                            <th className={"text-center"} width={"20%"} style={{"borderTopWidth":"thick"}}>작성일</th>
                            <th className={"text-center"} width={"10%"} style={{"borderTopWidth":"thick"}}>조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {html}
                        </tbody>
                        <tfoot>
                        <tr>
                            <ul className={"pagination"} style={{"marginLeft": "490%", "marginTop": "70px"}}>
                                {row}
                            </ul>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    )
}
export default BoardList