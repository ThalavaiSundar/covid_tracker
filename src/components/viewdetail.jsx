import React , {useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import '../css/viewdetail.css'

const ViewDetail=()=>{

    let location = useLocation()
    console.log(location.state)

return(
    <div className="details" style={{marginTop:"50px"}}>
            <h1 style={{color:"black"}}>MORE DETAILS</h1>
            <h1>Updated:{location.state.updated}</h1>
            <h1>Country:{location.state.country}</h1>
            <h1>Cases:{location.state.cases}</h1>
            <h1>TodayCases:{location.state.todayCases}</h1>
            <h1>Deaths:{location.state.deaths}</h1>
            <h1>TodayDeaths:{location.state.todayDeaths}</h1>
            <h1>Recovered:{location.state.recovered}</h1>
            <h1>TodayRecovered:{location.state.todayRecovered}</h1>
            <h1>Active:{location.state.active}</h1>
            <h1>CasesPerOneMillion:{location.state.casesPerOneMillion}</h1>
            <h1>DeathsPerOneMillion:{location.state.deathsPerOneMillion}</h1>
            <h1>Tests:{location.state.tests}</h1>
            <h1>TestsPerOneMillion:{location.state.testsPerOneMillion}</h1>
            <h1>Population:{location.state.population}</h1>
            <h1>Continent:{location.state.continent}</h1>
            <h1>OneCasePerPeople:{location.state.oneCasePerPeople}</h1>
            <h1>OneDeathPerPeople:{location.state.oneDeathPerPeople}</h1>
            <h1>OneTestsPerPeople:{location.state.oneTestPerPeople}</h1>
            <h1>ActivePerOneMillion:{location.state.activePerOneMillion}</h1>
            <h1>RecoveredPerOneMillion:{location.state.recoveredPerOneMillion}</h1>
            <h1>CriticalPerOneMillion:{location.state.criticalPerOneMillion}</h1>
    </div>
)
}
export default ViewDetail;