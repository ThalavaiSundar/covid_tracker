import React , {useState,useEffect} from "react";
import axios from "axios"
import '../css/table.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TableView=()=>{
    const [covidInfo , setCovidInfo] = useState([]) 
    const [covidList,setCovidList] = useState([])
    const [data , setdata] = useState('');
    let navigate = useNavigate();
    const countryName = useSelector((state)=>state.country)
    console.log(countryName)
    


      useEffect(() => {
        const getCovidInfo = async () => {
            console.log("call")
            const data = await axios.get("https://disease.sh/v3/covid-19/countries")
            console.log(data.data)
            setCovidInfo(data.data)
            setCovidList(data.data)
        };
      
        getCovidInfo(); // run it, run it
      
        return () => {
          // this now gets called when the component unmounts
        };
    }, []);


    useEffect(()=>{
        console.log(countryName)
          if(countryName == "All"){
              setCovidInfo(covidList)
          }
            else{
  
              var output = covidList.filter(country=>country.country== countryName);
              console.log("output-->",output)
              setCovidInfo(output)
            }
  
        },[countryName])

        const moreDetail=(countryDetail)=>{
            
            navigate("/button",{state:countryDetail})
            
        }

    return(
        <div>
            <h1 className="table">Table View</h1>

            <table className="Table" style="overflow:auto">

                <thead>

                    <tr>
                        <th>COUNTRY</th>
                        <th>CASES</th>
                        <th>DEATHS</th>
                        <th>RECOVERED</th>
                        <th>ACTIVE</th>
                        <th>POPULATION</th>
                        <th>OVERALL DETAILS</th>
                    </tr>

                </thead>
                
                <tbody>
                    {
                            covidInfo.map((elmt,index)=>{
                                return (<tr>
                                            <td>{elmt.country}</td>
                                            <td>{elmt.cases}</td>
                                            <td>{elmt.deaths}</td>
                                            <td>{elmt.recovered}</td>
                                            <td>{elmt.active}</td>
                                            <td>{elmt.population}</td>
                                            <td>
                                                <button onClick={()=>moreDetail(elmt)}>MORE DETAILS</button>
                                            </td>
                                        </tr>)
                            })
                        }
                </tbody>
                
            </table>
        </div>
    )
}
export default TableView;