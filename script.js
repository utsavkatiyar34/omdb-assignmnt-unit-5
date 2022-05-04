
let area=document.getElementById("searched_data");
let forecast=document.getElementById('poster');




async function getData(){
  let movie_name= document.getElementById('inp-name').value;
  let API_key="254eef71";
 console.log(`http://www.omdbapi.com/?apikey=${API_key}&t=${movie_name}`);
  try{
    const res=await fetch(`http://www.omdbapi.com/?apikey=${API_key}&t=${movie_name}`);
    let data=await res.json();
    console.log(data);
    let reuse=document.getElementById('nan');
    console.log(reuse);
    if(reuse!==null){
    reuse.remove();
    }
    if(data.Response=="True"){
        displayData(data);
    }
    if(data.Response=="False"){
        handleError(data);
}
    
  }
  catch(err){
//     console.log(err);


    
  }
}

function displayData(data){
        let box=document.createElement("div");
        box.id="nan";
        let mapp =document.createElement("img");
        mapp.src=data.Poster;
      
        let Name=document.createElement("h1");
        
        if(Number(data.imdbRating)>=8.5){
        Name.textContent=data.Title+" (Recommended)";
        }
        else{
                Name.textContent=data.Title;
        }
        let Temp=document.createElement("h2");
        Temp.textContent="Actors: "+data.Actors;
    
        let feels_like=document.createElement("h2");
        feels_like.textContent="Writer: "+data.Writer;
    
        let TempMax=document.createElement("h2");
        TempMax.textContent="Directors: "+ data.Director;
        
        let TempMin=document.createElement("h2");
        TempMin.textContent="Awards: "+ data.Awards;
    
        let humidity=document.createElement("h2");
        humidity.textContent="BoxOffice collection: "+data.BoxOffice;
    
        let pressure=document.createElement("h2");
        pressure.textContent="Released on: "+data.Released;
    
        let sunrise=document.createElement("h2");
        sunrise.textContent="Type: "+data.Type;
        
        let sunset=document.createElement("h2");
        sunset.textContent="IMDB Ratings: "+data.imdbRating;
    
        box.append(mapp, Name, sunrise, sunset, Temp, feels_like, TempMax, TempMin, humidity, pressure,);
        area.appendChild(box);
        }
        function handleError(data){
         let box=document.createElement("div");
         box.id="nan"; 
         let erro=document.createElement("img");
         erro.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoKESfJyOyx6gpGPBD-ALk0QrVn1KEOLbyQ&usqp=CAU";
         box.append(erro);
         area.append(box);     
        }