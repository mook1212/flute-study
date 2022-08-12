import { useState } from 'react'
import './Introduce.css'
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'


function Introduce() {

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
            <div className='intgram flex-row'>
                <div className='flex-center int'>
                    <h2>Flute Study</h2>
                </div>
                <div className='flex-center now'>
                    <p>Flute Study /</p>
                    <p> 학원소개</p>
                </div>
            </div>

            <div className='flex-row int-box bg-grey'>


                <div className='int-main'>

                    <div className='m-int-introduce flex-center'>
                        <p style={{ marginLeft: '10px' }}>- 학원소개</p>
                    </div>
                    <div className={`${drop2} m-int-in-drop`}>
                        <li>프로그램</li>
                        <li>- 레슨 프로그램</li>
                        <li>- 교육과정</li>
                        <li>- 출장 레슨</li>
                    </div>

                    <div className='binbox'></div>

                    <div className='int2'>
                        <h1>Flute Study</h1>
                        <br>
                        </br>
                        <div className='cc'>
                            <h4>Flute Study는 어렵고 낯설게만 느껴지는 클래식을<br></br>
                                더 많은 사람들에게 쉽고 편하게 다가갈 수 있도록 <br></br>
                                노력하는 1:1 및 그룹레슨 전문입니다.
                            </h4>
                            <div className='int-imm' >
                                <img src={process.env.PUBLIC_URL + '/img/intro.jpg'} />
                            </div>
                            <br></br><br></br>
                            <p>플루트를 주 전문으로 전공자 선생님의 체계적이고 꼼꼼한 지도는 물론,</p>
                            <p>1:1 개인레슨 뿐 아니라 그룹 레슨을 통해</p>
                            <p>내 연주 스타일을 체크해보고 더 나은 방향으로 나갈 수 있게 지도합니다.</p>
                            <br></br>
                            <p>나아가 음악연주를 통해 마음의 안정과 불안의 해소를 경험함으로 더 행복한 삶을 누릴 수 있습니다.</p>
                            <p>다수의 학생들을 지도해 본 경험으로 높은 퀄리티의 레슨을 받을 수 있습니다.</p>
                            <p>나이불문 남녀노소 누구나 음악에 대한 열정만 있다면 Flute Study는 항상 열려있습니다.</p>
                            <br></br>
                            <p>Flute Study의 폭넓은 경험과 다채로운 수업 방식을 통하여</p>
                            <p>음악 교육의 만족감을 더욱 높여드립니다.</p>
                            <br></br>
                            <p style={{fontSize : '12px'}}><span style={{color:'#007087'}}>Flute Study</span> 김경묵</p>
                        </div>
                    </div>

                </div>

                <div className='int-introduce'>
                    <div className='intro-box'>
                        <h3>학원소개</h3>
                        <p onClick={() => { navigate('/introduce') }}>Flute Study</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduce