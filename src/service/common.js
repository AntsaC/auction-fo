export function url(){
    return "https://auction-production.up.railway.app/";
}
export function bear(){
    return {headers:{'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")).value
    
     } }
}