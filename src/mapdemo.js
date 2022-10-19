import React, {component} from "react";
function MapDemo(){
    const array1=[1,2,3,4,5];

    const map1= array1.map(item=>item*2 + ",")
    return(
        <h3>{map1}</h3>
    )
}
export default mapdemo;