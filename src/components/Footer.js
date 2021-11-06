export default function Footer() {
  return (
    <div>
      <div className="row bg-dark card-footer fixed-bottom text-center">
        <p className="col-3">
          <a href="mailto:nik.ertle16@gmail.com">
            <i class="fas fa-envelope-square"></i>
          </a>
        </p>
        <p className="col-3">
          <a href="tel:3037094702">
            <i class="fas fa-phone"></i>
          </a>
        </p>
        <p className="col-3">
          <a href="https://github.com/niklasertle" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </p>
        <p className="col-3">
          <a
            href="https://www.linkedin.com/in/niklas-ertle-796492212/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </p>
      </div>
    </div>
  );
}