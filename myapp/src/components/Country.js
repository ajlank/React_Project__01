import style from './country.module.css'
function Country(props){
    const{name,flags,capital,population,area}=props.country;
    
 return <article>
     <div className={style.country}>
         <img src={flags.png} alt={name.common}/>
         <h4>Name: {name.common}</h4>
         <h4>Capital: {capital}</h4>
         <h4>Population: {population}</h4>
         <h4>area: {area} sq</h4>
         <button className={style.btn} onClick={()=>{
            props.onRemoveCountry(name.common);
         }}>Remove Country</button>
     </div>
 </article>
}
export default Country;
