const Experience = ({experience}) => {

  console.log( "questo e experince", experience);
  return (
    <>
      <div className="d-flex">
        <div className="me-3">
        
            <img
              src={experience.image}
              x="0"
              y="0"
              width="48"
              height="48"
            />
          
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <h6 className="m-0">{experience.company}</h6>
          <p className="custom-font">{experience.role}</p>
          <span className="text-muted custom-font">
            {`${new Date(experience.startDate).toLocaleDateString()} - ${new Date(experience.endDate).toLocaleDateString()}`}
          </span>
          <span className="text-muted custom-font">{experience.area}</span>
          <p className="mt-3 custom-font">
            {experience.description}
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Experience;
