/* eslint-disable react/prop-types */


const Sectiontitle = ({heading,subheading}) => {
    return (
        <div>
            <h1 className="text-center font-bold text-4xl">{heading}</h1>
            <div className="divider"></div>
            <h1 className="text-center">{subheading}</h1>
        </div>
    );
};

export default Sectiontitle;