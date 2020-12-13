export interface AqiResponse {
    records:[
    id:string,
    country:string,
    state:string,
    city:string,
    station:string,
// last_update:string,
    pollutant_id:string,
    pollutant_min:string,
    pollutant_max:string,
    pollutant_avg:string,
    pollutant_unit:string,
    
    ]

}