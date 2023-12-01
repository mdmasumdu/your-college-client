/* eslint-disable react/prop-types */


const Class = ({classa}) => {
  console.log(classa)
    const {Name,Title,Image,price,Short_description ,total_enrollment}=classa
    return (
        <div>
            <div className="card  shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={Image} alt="Shoes" className="rounded-xl h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{Title}</h2>
    <p>Instructor:{Name}</p>
    <p>{Short_description}</p>
    <p>Enrolled students:{total_enrollment}</p>
    <p>Price:$ {price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Enroll Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Class;