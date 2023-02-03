import axios from "axios";
import { useState } from "react";
import { bear, url } from "./common";

export function ListeEnchere(search){
    return axios.get(url()+"encheres"+search);
}
export function RechercheDynam(desc,min,max,data){
     axios.get(url()+"encheres?prixMin=5000").then(function (response) {
        // handle success
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      return data;
}
export function Detail(idu){
    return axios.get(url()+"encheres/"+idu);
}

export function Authentificable(value){
    return axios.post(url()+"login?admin=false",value);
}

export function rencherissement(enchere,id){
    return axios.post(url()+"membres/"+id+"/rencherissements",enchere,bear());
}

export function TempsRestant(date){
  var dateT = Date.parse(date);
  var dateN = Date.now();
  var t = dateT - dateN;
  var s = Math.floor(t / 1000) % 60;
//minutes
  var m = Math.floor(t / 60000) % 60;
//affichage
  var chaine = m+"m:"+s+"s";
  return chaine;
}

export function isDisable(date){
  var dateT = Date.parse(date);
  var dateN = Date.now();
  var t = dateT - dateN;
  var bo = true;
  if(t > 0){
    bo = false;
  }
  return bo;
}