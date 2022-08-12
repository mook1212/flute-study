import { useState } from 'react'
import './Homeservice.css'
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'


function HomeService() {

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
            <div className='hsgram flex-row'>
                <div className='flex-center hs'>
                    <h2>프로그램</h2>
                </div>
                <div className='flex-center now'>
                    <p>프로그램 /</p>
                    <p> 출장 레슨</p>
                </div>
            </div>

            <div className='flex-row hs-box bg-grey'>


                <div className='hs-main'>

                    <div className='m-hs-introduce flex-center'>
                        <p style={{ marginLeft: '10px' }}>- 출장레슨</p>
                        <span className='flex-center' style={{ marginLeft: 'auto', marginRight: '10px', cursor: 'pointer', width : '10%', height : '100%' }} onClick={() => { None(); }}><i class="fa-solid fa-caret-down"  ></i></span>
                    </div>
                    <div className={`${drop2} m-hs-in-drop`}>
                        <li>프로그램</li>
                        <li onClick={()=> {None(); navigate('/program')} }>- 레슨 프로그램</li>
                        <li onClick={()=> {None(); navigate('/education')} }>- 교육과정</li>
                        <li onClick={()=> {None(); navigate('/Homeservice')} }>- 출장 레슨</li>
                    </div>

                    <div className='binbox'></div>

                    <div className='hs2'>
                        <div className='imm' >
                            <img src={process.env.PUBLIC_URL + '/img/출장1.jpg'} />
                        </div>

                        <br></br><br></br>
                        <h3>레슨 악기</h3>
                        <p>플루트</p>
                        <br></br>
                        <h3>레슨 진행</h3>
                        <p>인원 / 시간에 따라 조율, 협의</p>
                        <p>1인 부터 3인까지 수업 진행 가능</p>
                        <p>악기 대여 불가능</p>

                        <div className='imm' >
                            <img src={process.env.PUBLIC_URL + '/img/출장2.jpg'} />
                        </div>
                    </div>


                </div>

                <div className='hs-introduce'>
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

export default HomeService