export default function About() {
  return (
    <div>
      <div className='text-center'>
        <h1>Resume</h1>
        <p>
          Download my resume{" "}
          <a href="#" download="#" target="_blank">
            here
          </a>
        </p>
      </div>
      <div className="row text-center">
        <div className="col-6">
          <h3>Front-end Proficiencies</h3>
          <ul className="list-unstyled">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className="col-6">
          <h3>Back-end Proficiencies</h3>
          <ul className="list-unstyled">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>GraphQL</li>
            <li>REST</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// TODO: Add Resumse file to download
// TODO: Coloring
