import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import './App.css';
import Program from './Route/Program.js'
// import Navbar from './Route/Nav.js'
import Navb from './Route/Nav.js'
import Teacher from './Route/Teacher.js';
import HomeService from './Route/HomeService.js';
import Education from './Route/Education.js';
import Introduce from './Route/Introduce.js';

function App() {



  let navigate = useNavigate();
  let [drop, setDrop] = useState('none')

  return (
    <div className="App">


      <Navb></Navb>

      <Carousels></Carousels>

      <Routes>
        <Route path='/' element={<MainPage></MainPage>} />

        <Route path='/introduce' element={<Introduce></Introduce>} />

        <Route path='/program' element={<Program></Program>} />
        <Route path='/Education' element={<Education></Education>} />
        <Route path='/HomeService' element={<HomeService></HomeService>} />

        <Route path='/teacher' element={<Teacher></Teacher>} />


      </Routes>

      <Footer></Footer>

      <ScrollHight></ScrollHight>

    </div>
  );
}

function Carousels() {
  return (
    <>
      <div className='container1' >
        <Carousel id='carousevar' >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/img/main1.jpg'}
              alt="First slide"
            />
            <Carousel.Caption className='carousels'>
              <h3>Flute Study</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/img/main2.jpg'}
              alt="Second slide"
            />

            <Carousel.Caption className='carousels'>
              <h3>나를 위한 1:1 맞춤형 레슨</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 im"
              src={process.env.PUBLIC_URL + '/img/main3.jpg'}
              alt="Third slide"
            />

            <Carousel.Caption className='carousels'>
              <h3>앙상블, 연주회, 콩쿨목적 등 다양한 음악활동</h3>
            </Carousel.Caption>
          </Carousel.Item>

          {/* <Carousel.Item>
            <img
              className="d-block w-100 im"
              src={process.env.PUBLIC_URL + '/img/007087.png'}
              alt="Third slide"
            />

            <Carousel.Caption className='carousels'>
              <h3>Flute Study에서 만나보세요</h3>
            </Carousel.Caption>
          </Carousel.Item> */}

        </Carousel>
      </div>
    </>
  )
}

function MainPage() {

  let navigate = useNavigate();

  return (
    <div>
      <div className='bg'>
        <div className='container2'>
          <div className='img-box'>
            <img src={process.env.PUBLIC_URL + '/img/viol.jpg'} />
            <h3>Flute Study</h3>
            <p>Flute Study는 어렵고 낯설게만 느껴지는 클래식을 더 많은 사람들에게
              쉽고 편하게 다가갈 수 있도록 노력하는 1:1 레슨입니다.
            </p>
          </div>
          <div className='img-box'>
            <img src={process.env.PUBLIC_URL + '/img/piano4.jpg'} />
            <h3>PROFESSIONAL</h3>
            <p>플룻 전공자 선생님의 체계적이고 꼼꼼한 지도는 물론,
              1:1 맞춤 레슨을 통해 내 연주 스타일을
              체크해보고 더 나은 방향으로 나아갈 수 있게 지도합니다.
            </p>
          </div>
        </div>
      </div>

      <div className='container3'>
        <h2 style={{ marginTop: '50px' }}>Flute Study Introduce</h2>
        <br></br>
        <p>Flute Study의 상세한 수업 정보,커리큘럼</p>
        <p>음표를 클릭하여 Flute Study를 만나보세요!</p>
        <p></p>
        <img style={{ cursor: 'pointer' }}
          onClick={() => { navigate('/Introduce') }} src={process.env.PUBLIC_URL + '/img/hugi.jpg'} />
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='foo'>
      <div className='footer'>
        <h2>ABOUT US</h2>
        <p>Flute Study</p>
        <p>Flute Study 대표 : 김경묵 / 사업자 등록번호 : 0000-12-0000</p>
        <p><i class="fa-solid fa-location-dot"></i> 인천광역시 부평구 갈월서로46</p>
        <p>apsode211@naver.com</p>
        <p>010-2523-7762</p>
        <br></br>
        <p>
          <a href='#'> 홈으로</a>
          <a href='#'> Flute Study</a>
          <a href='#'> 프로그램</a>
          <a href='#'> 강사소개</a>
        </p>
        <br></br>
        <p>©2022 Flute Study All Rights Reserved</p>
      </div>
    </div>
  )
}

function ScrollHight() {

  return (
    <>
      <div class="sc">
        <a href="#"><i style={{ color: 'white' }} class="fa-solid fa-chevron-up"></i></a>
      </div>
    </>
  )
}



export default App;
