/*
export async function fetchCars(filters){
    
    const { manufacturer, year, model, limit, fuel } = filters;
    
    // Set the required headers for the API request
    const headers = {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
          headers: headers,
        }
      );
    const results = await response.json();
    console.log(results)
    return results;
}
*/

export async function fetchCars(filters){
  const { manufacturer, year, model, limit, fuel } = filters;
  return  "salut";
}