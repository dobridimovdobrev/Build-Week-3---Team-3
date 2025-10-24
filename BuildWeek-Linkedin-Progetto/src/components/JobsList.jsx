import { Container } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const JobsList = () => {
  return (
    <Container>
      {/* Company Profiles */}
      <div className="d-flex flex-column ">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              className="rounded-circle mt-3"
              width={48}
              height={48}
              src="https://img.freepik.com/vettori-premium/icona-predefinita-del-profilo-dell-avatar-immagine-dell-utente-dei-social-media-icona-dell-avatar-grigio-silhouette-del-profilo-vuoto-illustrazione-vettoriale_561158-3485.jpg?w=360"
              alt="profileImg"
            />
            <div className="flex-column">
              <div className="m-3">
                <h5>Company Name</h5>
                <span className="text-muted">Role</span>
              </div>
              <div className="m-3">
                <h6>Title Job</h6>
                <p className="text-muted">Description</p>
              </div>
            </div>
          </div>
          <div className="flex-column">
            <div className="text-end fs-4 mb-1">
              <button className="rounded-display">
                <BsThreeDots className="my-2 mx-1" />
              </button>
              <button className="rounded-display">
                <AiOutlineClose className="my-2 mx-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JobsList;
