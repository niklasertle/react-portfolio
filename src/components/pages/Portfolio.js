import workoutTrackerSceenshot from '../../assets/workout-tracker.jpg'
import getFlexedScreenshot from '../../assets/get-flexed.jpg'
import ecommerceScreenshot from '../../assets/ecommerce-backend.jpg'

export default function About() {
  return (
    <div className='m-4'>
      <div className="text-center">
        <h1>My Projects</h1>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <h3 className="text-center">Workout Tracker</h3>
          <img src={workoutTrackerSceenshot} alt='Workout tracker screenshot' width='100%'/>
          <p>This is a workout tracker app, that allows the user to track their workouts for a day, by saving carido and resistance workouts to a Mongo database.</p>
          <p><a href="https://github.com/niklasertle/workout-tracker">GitHub</a> | <a href='https://whispering-citadel-87887.herokuapp.com/?id=61874958657a2a00162eb0c9'>Deployed App</a></p>
          <h6>Technologoies</h6>
          <p>NodeJS | ExpressJS | MongoDB | Mongoose</p>
        </div>
        <div className="col-lg-4 col-md-12">
          <h3 className="text-center">Get Flexed</h3>
          <img src={getFlexedScreenshot} alt='Get Flexed home page' width='100%'/>
          <p>This is a workout blog that allows the user to log in and create workouts within categories. As well as like the workout to save for later.</p>
          <p><a href="https://github.com/LasetteBrown/project-2-get-flexed-v2">GitHub</a> | <a href='#'>Deployed App</a></p>
          <h6>Technologoies</h6>
          <p>HTML | CSS | JavaScript | Bulma | NodeJS | ExpressJS | Handlebars</p>
        </div>
        <div className="col-lg-4 col-md-12">
          <h3 className="text-center">E-Commerce Backend</h3>
          <img src={ecommerceScreenshot} alt='Dataflow diagram' width='100%'/>
          <p>This is a program that was designed to simulate the backend of an e-commerce website using an SQL database.</p>
          <p><a href="https://github.com/niklasertle/nje-ecommerce-backend">GitHub</a></p>
          <h6>Technologoies</h6>
          <p>NodeJS | ExpressJS | MySQL</p>
        </div>
      </div>
    </div>
  );
}

// GET FLEXED
// NEED HEROKU LINK!!!
// NEED SCREENTSHOT
