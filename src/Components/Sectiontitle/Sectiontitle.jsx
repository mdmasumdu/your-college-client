/* eslint-disable react/prop-types */


const Sectiontitle = ({heading,subheading}) => {
    return (
        <div>
            <h1 className="text-center">---{heading}---</h1>
            <div className="divider pr-10 pl-10"></div>
            <h1 className="text-center font-bold text-3xl text-orange-500">{subheading}</h1>
        </div>
    );
};

export default Sectiontitle;