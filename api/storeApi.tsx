import axios from "axios";

interface StoreParams {
    take : number;
    page : number;
    skip : number;
    searchKeyword : string;
}

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getStoreData = async (  params:StoreParams, currentCityName: string | null)=>{
    const data = await axios.get(`${BASE_URL}/store/stores`,{
        params : {
            ...params,
        },
        headers : {
            "City" : currentCityName,
          }
    });
    return data;
}

export const getIndividualStoreData = async (slug:string)=>{
    const data = await axios.get(`${BASE_URL}/store/slug-or-id/${slug}`,{
    });
    return data;
}