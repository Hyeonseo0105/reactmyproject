import {useState,useEffect,Fragment} from "react";
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import {Button} from "react-bootstrap";

function TravelDetail() {
    const nav=useNavigate()
    const [imageSrc, setImageSrc] = useState('');
    const [travelVO, setTravelVO] = useState({})
    const {no} = useParams()
    const [fposter, setfPoster] = useState({})
    const [sposter, setsPoster] = useState({})
    const [tposter, settPoster] = useState({})
    const [mapaddress,setMapaddress] = useState('')

    useEffect(() => {
        axios.get('http://localhost/travel/travel_detail_react', {
            params: {
                no: no
            }
        }).then(response => {
            console.log(response.data)
            setTravelVO(response.data)
            const posterf = response.data.poster1
            const posters = response.data.poster2
            const postert = response.data.poster3
            const kakaoaddress=response.data.manage

            setfPoster(posterf)
            setsPoster(posters)
            settPoster(postert)
            setMapaddress(kakaoaddress)

        })
    }, []);

    const {kakao} = window;

    useEffect(()=>{
        const script=document.createElement("script")
        // <script src=""></script>
        script.async=true
        script.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=670578b4696a6fd3733ec8b701528348&autoload=false&libraries=services"
        document.head.appendChild(script)
        /*
            <head>
             <script src=""></script>
            </head>
         */
        script.onload=()=>{
            kakao.maps.load(()=>{
                const mapContainer = document.getElementById('map'), // 지도를 표시할 div
                    mapOption = {
                        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                        level: 3 // 지도의 확대 레벨
                    };

                // 지도를 생성합니다
                const map = new kakao.maps.Map(mapContainer, mapOption);

                // 주소-좌표 변환 객체를 생성합니다
                const geocoder = new kakao.maps.services.Geocoder();

                // 주소로 좌표를 검색합니다
                geocoder.addressSearch(mapaddress, function(result, status) {

                    // 정상적으로 검색이 완료됐으면
                    if (status === kakao.maps.services.Status.OK) {

                        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                        // 결과값으로 받은 위치를 마커로 표시합니다
                        var marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                        });

                        // 인포윈도우로 장소에 대한 설명을 표시합니다
                        var infowindow = new kakao.maps.InfoWindow({
                            content: '<div style="width:150px;text-align:center;padding:6px 0;">'+travelVO.title+'</div>'
                        });
                        infowindow.open(map, marker);

                        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                        map.setCenter(coords);
                    }
                });
            })
        }

    },[])

    return(
        <Fragment>
    <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="row" style={{"marginLeft": "6%"}}>
                <h5 style={{"marginLeft": "7%"}}>{travelVO.genre}관광</h5>
                <h3 className={"text-center"}>{travelVO.title}</h3>
                <table>
                    <tr>
                        <td width={"50%"} colSpan={"2"} align={"center"}>

                            {imageSrc && <img src={imageSrc} style={{"width": "700px", "height": "500px"}}/>}
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center"}>
                            <button onClick={() => setImageSrc(fposter)} style={{"border": "none"}}>
                                <img src={travelVO.poster1} style={{
                                    "width": "100px",
                                    "height": "70px"
                                }}/></button>
                            <button onClick={() => setImageSrc(sposter)} style={{"border": "none"}}>
                                <img src={travelVO.poster2} style={{
                                    "width": "100px",
                                    "height": "70px"
                                }}/></button>
                            <button onClick={() => setImageSrc(tposter)} style={{"border": "none"}}>
                                <img src={travelVO.poster3} style={{
                                    "width": "100px",
                                    "height": "70px"
                                }}/></button>
                            <h6>크게 보고싶은 사진 클릭!</h6>
                        </td>
                    </tr>
                </table>
                <h3 style={{"marginLeft": "7%"}}>기본정보</h3>
                <table className={"table"} style={{"width": "1000px", "marginLeft": "7.5%"}}>
                    <tr style={{"borderTopWidth": "thick"}}>
                        <td width={"15%"} className={"text-center"} style={{"fontWeight": "bold"}}>관리기관</td>
                        <td width={"55%"}>{travelVO.address}</td>
                    </tr>
                    <tr>
                        <td width={"15%"} className={"text-center"} style={{"fontWeight": "bold"}}>전화</td>
                        <td width={"55%"}>{travelVO.phone}</td>
                    </tr>
                    <tr>
                        <td width={"15%"} className={"text-center"} style={{"fontWeight": "bold"}}>주소</td>
                        <td width={"55%"}>{mapaddress}</td>
                    </tr>
                </table>
                <div style={{"height": "100px"}}></div>
                <table className={"table"} style={{"marginLeft": "7%", "width": "1000px"}}>
                    <tr><h3>소개</h3></tr>
                    <tr style={{"borderTopWidth": "thick"}}>&nbsp;&nbsp;&nbsp;{travelVO.content}</tr>
                </table>
<div style={{"height": "100px"}}></div>
                <table className={"table"} style={{"marginLeft": "7%"}}>
                    <tr>
                        <td>
                            <div id="map" style={{"width": "1000px", "height": "350px"}}></div>
                        </td>
                    </tr>
                </table>
<div style={{"height": "100px"}}></div>
                <div style={{"marginLeft": "48%"}}>
                    <Button onClick={() => nav(-1)} className={"btn btn-dark btn-social mx-2"}>목록</Button>
                </div>
            </div>
        </div>
    </section>
        </Fragment>
    )
}

export default TravelDetail