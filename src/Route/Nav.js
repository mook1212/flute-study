import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import '../App.css';

function Navb() {



    let navigate = useNavigate();
    let [drop, setDrop] = useState('none')
    let [modal, setModal] = useState('none')

    // document.querySelectorAll('li').addEventListener('click',()=> {
    //     setDrop('none')
    // })

    function None() {
        document.body.classList.remove("stop-scroll");
        if (drop == 'none') {
            setDrop('show')
        } else if (drop == 'show') {
            setDrop('none')
        }
    }

    var beforePosition = document.documentElement.scrollTop

    document.addEventListener('scroll', function () {

        var afterPosition = document.documentElement.scrollTop;

        if (window.scrollY == 0) {
            document.getElementById('nav').style.backgroundColor = ''
        }


        if (afterPosition > 50) {


            if (beforePosition < afterPosition) {
                // 스크롤 아래로

                // document.getElementById('nav').style.backgroundColor = ''
                document.getElementById('nav').style.opacity = '0'
                setDrop('none')

            } else {
                // 스크롤 위로 
                document.getElementById('nav').style.opacity = '1'
                document.getElementById('nav').style.transition = 'all 1s'
                document.getElementById('nav').style.backgroundColor = '#007087'


            }

        } else {
            // 평상 시
            // document.getElementById('nav').style.backgroundColor = ''
        }
        beforePosition = afterPosition;
    });

    return (
        <>

            <nav id='nav'>
                <div className='logocontainer'>
                    <p onClick={() => { navigate('/') }} className='logo'><i className="fa-solid fa-music lo"></i> Flute Study</p>
                </div>
                <div className='navcontainer flex-row'>
                    <li onClick={() => { navigate('/') }}>Home /</li>
                    <li onClick={() => { navigate('/program') }}>프로그램 /</li>
                    <li onClick={() => { navigate('/Introduce') }}>Flute Study /</li>
                    <li onClick={() => { navigate('/teacher') }}>강사소개 /</li>
                    <li onClick={() => { navigate('/blog') }}>커뮤니티</li>
                    <li className='menu' ><i onClick={() => {
                        document.body.classList.add("stop-scroll");

                        if (drop == 'none') {
                            setDrop('show')
                        } else if (drop == 'show') {
                            setDrop('none')
                        }
                    }} class="fa-solid fa-bars menu"></i></li>
                </div>


            </nav>

            <div id='dropdown-nav' className={`dropdown-nav ${drop}`}>
                <div className='nav-modal'>
                    <div className='close-modal'><i style={{ cursor: 'pointer' }} onClick={() => {
                        document.body.classList.remove("stop-scroll");

                        if (drop == 'none') {
                            setDrop('show')
                        } else if (drop == 'show') {
                            setDrop('none')
                        }
                    }} class="fa-solid fa-xmark"></i></div>
                    <h2>MENU NAVIGATION</h2>
                    <br></br>
                    <li onClick={() => { None(); navigate('/') }}>Home</li>

                    <li onClick={() => { None(); navigate('/program') }}>프로그램</li>
                    <p onClick={() => { None(); navigate('/program') }}>- 레슨 프로그램</p>
                    <p onClick={() => { None(); navigate('/education') }}>- 교육과정</p>
                    <p onClick={() => { None(); navigate('/Homeservice') }}>- 출장 레슨</p>

                    <li onClick={() => { None(); navigate('/Introduce') }}>Flute Study</li>

                    <li onClick={() => { None(); navigate('/teacher') }}>강사소개</li>

                    <li onClick={() => { None(); navigate('/blog') }}>커뮤니티</li>
                </div>
            </div>



        </>
    )
}

export default Navb