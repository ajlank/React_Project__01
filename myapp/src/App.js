import { useEffect ,useState} from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";
import style from './components/app.css'
import { ImWink } from "react-icons/im";
const url="https://restcountries.com/v3.1/all";
function App(){
    const[isLoading,setisLoading]=useState(true);
    const[error,setError]=useState(null);
    const[countries,setCountries]=useState([]);
    const fetchdata= async (url)=>{
        setisLoading(true);
      try{
        const response=await fetch(url);
        const data=await response.json();
        setCountries(data);
        setisLoading(false);
        setError(null);
        
      }catch(error){
          setisLoading(false);
          setError(error);
      }
        
    }
    useEffect(()=>{
        fetchdata(url);
    },[]);
    const removeCountry=(name)=>{
     const filter=countries.filter((country)=>country.name.common!==name);
     setCountries(filter);
    };
    const searchHandle=(searchValue)=>{
        let value=searchValue.toLowerCase();
        const newCountries=countries.filter((country)=>{
            const countryName=country.name.common.toLowerCase();
            return countryName.startsWith(value);
        });
        setCountries(newCountries);
    }
    
    return <>
    <section className={style.Appdesign}>
        <h1 style={{textAlign:"center",paddingTop:"12px",paddingBottom:"12px",fontSize:"2rem"}}>Your favourite countries</h1>
        <Search onSearchhandle={searchHandle} />
        {
            isLoading && <p style={{fontSize:"1.3rem",textAlign:"center",padding:"12px 15px",
            backgroundColor:"#304354",width:"25%",margin:"0 auto",color:"white",borderRadius:"12px",marginTop:"2rem",textShadow:"2px 2px 5px black"}}>Data is loading...just wait buddy <ImWink /></p>
        }
        {
            error && <p>{error.message}</p>
        }
        {
            countries && <Countries countries={countries} onRemoveCountry={removeCountry}/>
        }
    </section>
   </>
}

export default App;