import React, { useEffect, useState } from "react";
import './App.css';
import Choice from './Choice'
import About from './About'
import Login from './Login'
import Register from './Register'
import Who_am_i from './five_page/Who_am_i'
import My_experience from './five_page/My_experience'
import Etc from './five_page/Etc'
import My_memory from './five_page/My_memory'
import My_study from './five_page/My_study'

function App() {

  //카테고리 화면 렌더링
  const [page, setPage] = useState(1);

  //로그인 회원가입 화면 전환 
  const [login_register, setLogin_register] = useState(0);

  //다섯페이지중 하나 보여주기
  const [five_page, setFive_page] = useState(0);
  
  //유즈이펙트 
  //node.js 연동

  useEffect(() => {
    const timer = setInterval(() =>{
      console.log("타이머 돌아가는중....");
    }, 1000);

    return ()=>{
      clearInterval(timer);
    }
  });

  //리턴 부분
  return (
    <body className='App_body'>

      {/* 상단 제목(메인 제목, 카테고리)*/}
      <header className="home_header">
        {/* CHAN 제목*/}
        <div className="home">
                <h1 className="home_page_title">CHAN</h1>
            </div>

            {/* 카테고리*/}
            <div className="category">
                <h1 className="category_1" onClick={() => window.location.reload()}>HOME</h1>
                <h1 className="space"></h1>
                <h1 className="category_2" onClick={() => setPage(2) & setFive_page(0) & setLogin_register(0)}>ABOUT</h1>
                <h1 className="space"></h1>
                <h1 className="category_3">MYPAGE</h1>
                <h1 className="space"></h1>
                <h1 className="category_4" onClick={() => setPage(4) & setFive_page(0)}>LOGIN</h1>
            </div>
      </header>

      {/*렌더링 화면들*/}
      <div className="home_rendering">
        {page === 1 && five_page === 0 && <Choice setValue={setFive_page}></Choice>} {/*선택 전*/}
        {page === 1 && five_page === 1 && <Who_am_i></Who_am_i>} {/*첫번째*/}
        {page === 1 && five_page === 2 && <My_experience></My_experience>} {/*두번째*/}
        {page === 1 && five_page === 3 && <Etc></Etc>} {/*세번째*/}
        {page === 1 && five_page === 4 && <My_memory></My_memory>} {/*네번째*/}
        {page === 1 && five_page === 5 && <My_study></My_study>} {/*다섯번째*/}
        {page === 2 && <About></About>} {/*About*/}
        {page === 4 && login_register === 0 &&<Login setValue={setLogin_register}></Login>} {/*Login*/}
        {page === 4 && login_register === 1 &&<Register></Register>} {/*Register*/}
      </div>

    </body>
  );
}

export default App;