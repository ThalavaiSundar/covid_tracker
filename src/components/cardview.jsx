import React , {useState,useEffect} from "react";
import axios from "axios"
import { Card, CardActions } from "@mui/material";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { textAlign } from "@mui/system";
import '../css/card.css'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const CardView=()=>{


        const [covidInfo , setCovidInfo] = useState([])
        const [covidList,setCovidList] = useState([])
        const [data , setdata] = useState('');
        const countryName = useSelector((state)=>state.country)
        let navigate = useNavigate();



        useEffect(() => {
          console.log("dhsgfjs")
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



          const moreDetail = (countryDetail)=>{
            
                  navigate("/button",{state:countryDetail})
                  
                }

return(
        <div className="CardView">
                <h1 style={{color:"black",textAlign:"center"}}>CARD VIEW</h1>

                <div className="CardView">
                       {
          covidInfo.map((elmt,index)=>{
            return(
              <Card className="Card">
                    <CardContent>
                        <Typography variant="h5" component="div">
                        COUNTRY:{elmt.country}
                        </Typography>
                        <Typography variant="h5" component="div">
                        CASES:{elmt.cases}
                        </Typography>
                        <Typography variant="h5" component="div">
                        DEATHS:{elmt.deaths}
                        </Typography>
                        <Typography variant="h5" component="div">
                        RECOVERED:{elmt.recovered}
                        </Typography>
                        <Typography variant="h5" component="div">
                        ACTIVE:{elmt.active}
                        </Typography>
                        <Typography variant="h5" component="div">
                        POPULATION:{elmt.population}
                        </Typography>
                    </CardContent>
                    <button className="button" onClick={()=>moreDetail(elmt)} >MORE DETAILS</button>  
              </Card>
            )
          })
        }
                </div>
        </div>  
       
      )
}
      export default CardView;