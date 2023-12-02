import { Link, useLoaderData } from "react-router-dom";


const ClaassDetails = () => {
    const classa =useLoaderData();
    console.log(classa)
    return (
        <div className="min-h-screen">
            <div className="card lg:card-side bg-base-100  shadow-xl">
 <div className="flex-1">
 <figure><img className="w-full" src={classa.Image} alt="Album"/></figure>
 </div>
  <div className="card-body flex">
    <h2 className="card-title text-orange-400">{classa.Title}</h2>
    <h1>{classa.Short_description}</h1>
    
   <div>
   <h1><span className="font-bold text-blue-500">Teacher:</span> {classa.Name}</h1>
    <p><span className="font-bold text-blue-500">Price: </span>${classa.price}</p>
   
   </div>
  <p></p>
    <div className="card-actions justify-end">
     <Link to={`/payment/${classa._id}`}> <button className="btn w-40 bg-orange-400">Pay</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ClaassDetails;