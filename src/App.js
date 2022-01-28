
import './App.css';
import React, {useState} from 'react';
import CNavbar from './Components/Navbar/CNavbar';
import CBanner from './Components/Banner/banner'
import CService from './Components/Service/service';
import CProblemsSolved from './Components/problomsSolved/ProblemsSolved';
import Video1 from './assets/video/2.m4v';
import Video2 from './assets/video/ChatAnimation.m4v';

function App() {

  const problemData = {
    titleProblem : "Шийдэж буй асуудлууд",
    video : Video1,
    title : "Үзлэгийн урт дараалал",
    text : "Хөдөө орон нутгийн иргэд зөвхөн нарийн мэргэшлийн эмчид өвчнийхөө оношийг тодорхойлуулахын тулд хамгийн багадаа 9 өдрийг зарцуулдаг байна.",
    changeData: true
  }
  const NextProblemData = {
    titleProblem : "",
    video : Video2,
    title : "Хаанаас ч хэдийд ч холбогдох боломж",
    text : "Та орон нутгаас, малчны хотноос, хилийн чандаас, гэрээсээ гээд интернэт холбогдож л байвал хаанаас ч мэргэжлийн эмчтэй холбогдож эрүүл мэндийн асуудлаа шийдвэрлүүлэх боломжтой.",
    changeData: false
  }


 

  return (
    <div>
    <CNavbar/>
    <CBanner/>
    <CService/>
    <CProblemsSolved data = {problemData} change={true} />
    <CProblemsSolved data = {NextProblemData} change={false}/>
    </div>
    
  );
}

export default App;
