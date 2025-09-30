import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
    1) App은 컴포넌트(자바스크립트 함수)를 이용한 사용자 정의 태그
    2) 컴포넌트는 대문자로 시작해야 함
    3) 컴포넌트가 정의되어 있는 파일 이름은 컴포넌트의 이름과 같아야 함
    4) 컴포넌트는 반드시 return문을 가짐
    5) 다른 파일에서 컴포넌트 import 하려면 컴포넌트 작성 시 export 해야 됨 */}
    <App />
  </StrictMode>,
)
