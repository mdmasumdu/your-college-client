/* eslint-disable react/prop-types */


const Partner = ({partner}) => {
    // console.log(partner)
    return (
        <div >
            <img className="w-40 h-[100px]" src={partner.img} alt="" />
            <p>{partner.description.slice(0,50)}</p>
            
        </div>
    );
};

export default Partner;