import './program.css'
import './teacher.css'
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import { useState } from 'react'



function Teacher() {

    let navigate = useNavigate();
    let [drop2, setDrop2] = useState('none')

    function None() {
        if (drop2 == 'none') {
            setDrop2('show')
        } else if (drop2 == 'show') {
            setDrop2('none')
        }
    }


    return (
        <>
            <div className='program flex-row'>
                <div className='flex-center pro'>
                    <h2>강사소개</h2>
                </div>
                <div className='flex-center now'>
                    {/* <p>강사소개</p> */}
                    {/* <p> 레슨 프로그램</p> */}
                </div>

            </div>

            <div className='flex-row pro-box bg-grey'>


                <div className='te-main'>

                    <div className='m-te-introduce flex-center'>
                        <p style={{ marginLeft: '10px' }}>- 강사소개</p>
                    </div>

                    <div className='binbox'></div>

                    <div className='te2'>

                        <h3>Flute Study</h3>
                        <div className='ig' >
                            <div className='ex'>
                                <img src={process.env.PUBLIC_URL + '/img/teacher1.jpg'} />
                                <p>플룻 강수진 선생님</p>
                            </div>
                            <div className='ex'>
                                <img src={process.env.PUBLIC_URL + '/img/teacher2.jpg'} />
                                <p>플룻 이예은 선생님</p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4 >강수진 선생님</h4>
                        <div>
                            <p>경기예고 졸업</p>
                            <p>美 버클리 음대 졸업</p>
                            <p>美 버클리 음대 석사-박사</p>
                            <p>노르트하우젠 극장 단원</p>
                            <p>서울 오라트리오 연수단원</p>
                            <p>2021 월드기네스 오케스트라 합동 연주회 플루트 지도</p>
                        </div>
                        <br></br>
                        <h4 >이예은 선생님</h4>
                        <div>
                            <p>경북예고 플룻 졸업</p>
                            <p>카셀음대 플룻 졸업</p>
                            <p>뮌스터국립음대 학사</p>
                            <p>독일 도르트문트 인터내셔널 오케스트라 단원역임</p>
                            <p>뮤직칸타빌레 유아음악 교육강사 및 자문위원</p>
                            <p>잼클래식 수석 연주자</p>
                        </div>


                    </div>
                </div>

                <div className='te-introduce'>
                    <div className='intro-box'>
                        <h3>강사소개</h3>
                        <p>강사소개</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teacher