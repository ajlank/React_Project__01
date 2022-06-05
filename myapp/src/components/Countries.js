import {v4 as uuidv4 } from "uuid";
import Country from "./Country";
import style from './countries.module.css'
function Countries(props){
 return <div className={style.countries}>
     {
         props.countries.map((country)=>{
             const newCountry={country, id:uuidv4()};
             return <Country {...newCountry} key={newCountry.id} onRemoveCountry={props.onRemoveCountry}/>
         })
     }
 </div>
}
export default Countries;