import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link, useParams,useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function BoardDetail(){
    const nav=useNavigate()

    const {no}=useParams()
    const [detail,setDetail]=useState({})

    useEffect(()=>{
        axios.get('http://localhost/board/detail_react',{
            params:{
                no:no
            }
        }).then(response=>{
            setDetail(response.data)
        })
    },[])
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="row" style={{"marginLeft":"5%"}}>
                    <div className={"row"}>
                        <h3 className={"text-center"}>{detail.subject}</h3>
<div style={{"height": "50px"}}></div>
                        <table className={"table"}>
                            <tbody>
                            <tr style={{"borderTopWidth": "thick"}}>
                                <td className={"text-center success"} width={"20%"}>번호</td>
                                <td className={"text-center"} width={"30%"}>{detail.no}</td>
                                <td className={"text-center success"} width={"20%"}>작성일</td>
                                <td className={"text-center"} width={"30%"}>{detail.regdate}</td>
                            </tr>
                            <tr>
                                <td className={"text-center success"} width={"20%"}>이름</td>
                                <td className={"text-center"} width={"30%"}>{detail.name}</td>
                                <td className={"text-center success"} width={"20%"}>조회수</td>
                                <td className={"text-center"} width={"30%"}>{detail.hit}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"} height={"200"} colSpan={"4"} valign={"top"}>
                                    <pre style={{"whiteSpace": "pre-wrap", "border": "none"}}>{detail.content}</pre>
                                </td>
                            </tr>
                            <tr>
                                <td className={"text-center"} colSpan={"4"} style={{"borderBottomWidth": "0px"}}>
                                    <Link to={"/board/update/" + no}
                                          className={"btn btn-dark btn-social mx-2"}>수정</Link>
                                    <Link to={"/board/delete/" + no}
                                          className={"btn btn-dark btn-social mx-2"}>삭제</Link>
                                    <Button onClick={() => nav(-1)}
                                            className={"btn btn-dark btn-social mx-2"}>목록</Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoardDetail