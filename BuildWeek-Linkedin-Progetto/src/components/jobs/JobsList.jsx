import { AiOutlineClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const JobsList = ({ job }) => {


  return (
    <>
      {/* Company Profiles */}
      <div className="d-flex flex-column job-item">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              className="rounded-circle mt-3"
              width={48}
              height={48}
              src={`https://ui-avatars.com/api/?name=${job.company_name}&size=48&background=random`}
              alt={job.title}
            />
            <div className="flex-column">
              <div className="m-3">
                <h5>{job.company_name}</h5>
                <span className="text-muted">{job.category}</span>
              </div>
              <div className="m-3">
                <h6>{job.title}</h6>
                <p className="text-muted">{job.description.slice(0, 600) + '...'}</p>
              </div>
            </div>
            <div className="d-flex align-items-start mt-3">
              {/* update button */}
              <button className="rounded-display">
                <BsThreeDots className="my-2 mx-1" />
              </button>

              {/* delete button */}
              <button className="rounded-display">
                <AiOutlineClose className="my-2 mx-1" />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-4 remove-last-hr" />
      </div>
    </>
  );
};

export default JobsList;
