import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import { useState } from 'react'
import './program.css'

function Program() {

  let navigate = useNavigate();


    let [drop2,setDrop2] = useState('none')

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
                    <p> 레슨 프로그램</p>
                </div>
            </div>

            <div className='flex-row pro-box bg-grey'>


                <div className='pro-main'>

                    <div className='m-pro-introduce flex-center'>
                        <p style={{marginLeft : '10px'}}>- 레슨 프로그램</p>
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
                            <img src={process.env.PUBLIC_URL + '/img/pro1.jpg'} />
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>1:1 개인 레슨</h4>
                        <br></br>
                        <table>
                            <tbody>
                                <tr className='tr1'>
                                    <td><p>악기</p></td>
                                    <td><p>시간</p></td>
                                    <td><p>레슨비용</p></td>
                                </tr>

                                <tr className='tr2'>
                                    <td><p>플루트</p></td>
                                    <td>
                                        <p>주 1회 30분</p>
                                        <p>주 1회 60분</p>
                                    </td>
                                    <td>
                                        <p>월 11만원</p>
                                        <p>월 20만원</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <br></br>

                        <h4>그룹 레슨</h4>
                        <br></br>
                        <table>
                            <tbody>
                                <tr className='tr1'>
                                    <td><p>그룹 인원</p></td>
                                    <td><p>시간</p></td>
                                    <td><p>레슨비용</p></td>
                                </tr>

                                <tr className='tr2'>
                                    <td>
                                        <p>2인 그룹</p>
                                        <p>3인 그룹</p>
                                    </td>
                                    <td>
                                        <p>주 1회 90분</p>
                                        <p>주 1회 60분</p>
                                    </td>
                                    <td>
                                        <p>월 11만원</p>
                                        <p>월 11만원</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='zzz'>* 그룹 레슨은 인당 레슨비용</p>

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

export default Program