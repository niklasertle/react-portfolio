import nikPhoto1 from "../../assets/nik-1.jpg";
import nikPhoto2 from "../../assets/nik-2.jpg";

export default function About() {
  return (
    <div className="m-5">
      <h1 className="mb-5">About</h1>
      <div className="row">
        <div className="col-6">
          <div>
            <p>
              Full Stack Web Developer with a Web Development Certificate from
              the University of Denver with experience in HTML, CSS, and
              Javascript. As well as a Certificate from Arapahoe Community
              College as a PC Certified A+ Pro. I'm a quick learner and someone
              who takes initiative on tasks. Accels designing user interfaces to
              be friendly and easy to use for the user. Looking to become a full
              stack web developer with experience.
            </p>
          </div>
          <div className="text-center d-none d-lg-block">
            <img
              src={nikPhoto1}
              alt="Photo of Nik"
              width="50%"
              className=" rounded img-fluid img-thumbnail"
            />
          </div>
        </div>
        <div className="col-6 text-center">
          <img
            src={nikPhoto2}
            alt="Photo of Nik"
            className="rounded float-right img-fluid img-thumbnail"
          />
        </div>
      </div>
    </div>
  );
}
