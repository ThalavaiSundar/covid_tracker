import React , {useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../css/topbar.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from "react-redux/es/exports";
import { textAlign } from "@mui/system";

const TopBar = ()=>{

      const [age, setAge] = React.useState('');
      const [covidInfo , setCovidInfo] = useState([]) 
      const [data , setdata] = useState('');
      const[country,  setCountry] = useState('')
      const dispatch = useDispatch()



            useEffect(() => {
              console.log("dhsgfjs")
              const getCovidInfo = async () => {
                  console.log("call")
                  const data = await axios.get("https://disease.sh/v3/covid-19/countries")
                  console.log(data.data)
                  setCovidInfo(data.data)
              };
              getCovidInfo(); // run it, run it
              
              return () => {
                // this now gets called when the component unmounts
              };
            }, []);



            const handleChange = (event) => {
              console.log("djbdjd",event.target.value)
              setCountry(event.target.value);
              dispatch({type:"country",payload:event.target.value})
            }; 



            const myFunction = (event) => {
              console.log("djbdjd",event.target.value)
              setCountry(event.target.value);
              dispatch({type:"country",payload:event.target.value})
            }



  return(


         <div className="topnav">

            
               <div className="functions">
                
                <input type="text" id="mySearch" onKeyUp={myFunction} placeholder="Search.." title="Type in a category"/>

                    <Box sx={{ minWidth: 120 }}  className="selector">
                          <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">COUNTRY</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={country}
                                label="COUNTRY"
                                onChange={handleChange}
                              >
                                <MenuItem value="All">ALL</MenuItem>
                                { covidInfo.map((elmt,index)=>{
                                return(  
                                <MenuItem value={elmt.country}>{elmt.country}</MenuItem>
                                )
                              })
                              }
                              </Select>
                        </FormControl>
                    </Box>
                    <label> Country
                    <select onChange={handleChange}>
                      {
                        covidInfo.map((elmt,index)=>{
                          return(
                            <option value={elmt.country}>{elmt.country}</option>
                          )
                        })
                      }
                    </select>
                    </label>
            </div>

            
            <div className="toplink">
                  <li><Link className="covid"style={{color:"black"}} to="/TableView">Table view</Link></li>
                  <li> <Link className="view" to="/cardview" style={{color:"black"}}>Card view</Link></li>
            </div>

    </div>
    
  )
}
export default TopBar;

