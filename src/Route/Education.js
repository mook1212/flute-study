import { useState } from 'react'
import './program.css'
import './Education.css'
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'


function Education() {

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
                    <h2>프로그램</h2>
                </div>
                <div className='flex-center now'>
                    <p>프로그램 /</p>
                    <p> 교육과정</p>
                </div>
            </div>

            <div className='flex-row pro-box bg-grey'>


                <div className='pro-main'>

                    <div className='m-pro-introduce flex-center'>
                        <p style={{ marginLeft: '10px' }}>- 교육과정</p>
                        <span className='flex-center' style={{ marginLeft: 'auto', marginRight: '10px', cursor: 'pointer', width : '10%', height : '100%' }} onClick={() => { None(); }}><i class="fa-solid fa-caret-down"  ></i></span>
                    </div>
                    <div className={`${drop2} m-pro-in-drop`}>
                        <li>프로그램</li>
                        <li onClick={()=> {None(); navigate('/program')} }>- 레슨 프로그램</li>
                        <li onClick={()=> {None(); navigate('/education')} }>- 교육과정</li>
                        <li onClick={()=> {None(); navigate('/Homeservice')} }>- 출장 레슨</li>
                    </div>

                    <div className='binbox'></div>

                    <div className='pro2'>
                        <div className='imm' >
                            <img src={process.env.PUBLIC_URL + '/img/study1.jpg'} />
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>

                        <h4>플루트</h4>
                        <br></br>
                        <table className='edu-table'>
                            <tbody>
                                <tr className='edu-tr1'>
                                    <td><p>기본과정</p></td>
                                    <td><p>중급과정</p></td>
                                    <td><p>심화과정</p></td>
                                </tr>

                                <tr className='edu-tr2'>

                                    <td>
                                        <li>- 악기의 이해 및 관련 용어
                                            <br></br>
                                            악기 연주법,음정연습
                                        </li>
                                        <li>- 악보 독보</li>
                                        <li>- 음악용어 및 이론</li>
                                        <li>- 초급 수준의 곡 연주</li>
                                        <li>- 3인 그룹</li>
                                    </td>
                                    <td>
                                        <li>- 레가토와 아티큘레이션</li>
                                        <li>- 아르페지오</li>
                                        <li>- 롱톤, 스케일</li>
                                        <li>- 중급 수준의 곡 연습</li>
                                        <br></br>
                                        <br></br>
                                    </td>
                                    <td>
                                        <li>- 롱톤, 스케일</li>
                                        <li>- 다양한 곡 연주</li>
                                        <li>- 고급 수준의 곡 연주</li>
                                        <li>- 오케스트라 프로그램</li>
                                        <br></br>
                                        <br></br>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>

                <div className='pro-introduce'>
                    <div className='intro-box'>
                        <h3>프로그램</h3>
                        <p onClick={() => { navigate('/program') }}>레슨 프로그램</p>
                        <p onClick={() => { navigate('/education') }}>교육과정</p>
                        <p onClick={() => { navigate('/HomeService') }}>출장레슨</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education