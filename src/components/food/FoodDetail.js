import {Fragment, useEffect, useState} from "react";
import {Link, useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import {Button} from "react-bootstrap";

function FoodDetail(){
    const nav=useNavigate()

    const [FoodVO,setFoodVO]=useState({})
    const {no}=useParams()

    useEffect(() => {
        axios.get('http://localhost/food/food_detail_react',{
            params:{
                no:no
            }
        }).then(response=>{
            console.log(response.data)
            setFoodVO(response.data)
        })
    }, []);
    return(
        <Fragment>
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="row" style={{"marginLeft":"5%"}}>
                        <h5 style={{"marginLeft": "7%"}}>{FoodVO.local}의 맛</h5>
                        <div style={{"height": "20px"}}></div>
                        <h3 className={"text-center"}>{FoodVO.name}</h3>
                        <p className={"text-center"}>"{FoodVO.title}"</p>
                        <table className={"table"} style={{"marginLeft": "7%", "width": "1000px"}}>
                            <tr>
                                <td align={"center"}>
                                    <img src={FoodVO.poster} style={{"width": "700px", "height": "500px","marginLeft":"3.5%"}}/>
                                </td>
                            </tr>
                        </table>
                        <div style={{"height": "40px"}}></div>
                        <table className={"table"} style={{"marginLeft": "7%", "width": "1000px"}}>
                            <tr><h3>소개</h3></tr>
                            <tr style={{"borderTopWidth": "thick"}}>&nbsp;&nbsp;&nbsp;{FoodVO.content}</tr>
                        </table>
                        <div style={{"height": "100px"}}></div>
                        <div style={{"marginLeft": "50%"}}>
                            <Button onClick={()=>nav(-1)} className={"btn btn-dark btn-social mx-2"}>목록</Button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default FoodDetail