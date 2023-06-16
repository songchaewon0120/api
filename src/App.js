import logo from "./logo.svg";
import "./App.css";
import { useState, setError, setIsLoaded, setPropile, fetchData } from "react";

const seoul = [
  { name: "강남구", siDo: 11, goGun: 680 },
  { name: "마포구", siDo: 11, goGun: 440 },
  { name: "종로구", siDo: 11, goGun: 110 },
];

const year = [2019, 2020, 2021];

function fetchData(city, year) {
  const endPoint = "http://apis.data.go.kr/B552061/frequentzoneBicycle";
  const serviceKey =
    "CrOh%2FMB81HKw7N499livS0S7b8f6yqeJlvFpDzmjhPr8a7HVkD%2BXB%2Bq96iiK7xQNuf%2FUmvIofCxXYBimO0TgXA%3D%3D";
  const type = "json";
  const numOfRows = 10;
  const pageNo = 1;

  // 자바스크립트에 내장된 fetch() 메서드를 사용하여 서버에 요청한다
  const promise = fetch(
    `${endPoint}?serviceKey=${serviceKey}&searchYearCd=${year}&siDo=${city.siDo}&guGun=${city.goGun}&type=${type}&numOfRows=${numOfRows}&pageNo=${pageNo}`
  )
    .then((res) => {
      // ok : 서버의 응답코드(status)가 200(성공)이 아닌 경우 catch 블록에 응답 객체를 던진다
      //res : 응답 성공 | rej : 응답 실패
      if (!res.ok) {
        throw res;
      }
      // 서버의 응답코드가 200인 경우 응답객체(프로미스 객체)를 리턴한다
      return res.json();
    })

    .finally(() => setIsLoaded(true), []);
  // 최초 한번만 보여짐?
}

// ---------------------------------------

// ---------------------------------------

function setIsLoaded() {
  return <p> 로딩중입니다! </p>;
}

// ---------------------------------------

function Dashboard() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [propile, setPropile] = useState(null);

  return <>
  
  </>;
}

// ---------------------------------------

export default App;
