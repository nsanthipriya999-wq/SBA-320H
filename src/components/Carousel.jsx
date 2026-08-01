export default function Carousel({parks})
{
    return(
    <div className="carousel">
    {
      parks.map((park)=>(
        <div className="display-card"
            key={park.id}>

        <img src={park.images?.length ? park.images[0].url:"https://placehold.co/400*300?text=No+Image"}
        alt={park.fullName}/>
       <div className="card-content">
        <h2>{park.fullName}</h2>
        <p>{park.states}</p>
       </div>
       </div>
        ))
    }
    
    
    </div>
);
}