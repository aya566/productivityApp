import './styles/home.css';
import vector from '../assets/vector.jpg'
import { Link } from 'react-router-dom';
import todo from '../assets/todo.jpg';
import Month from '../component/monthly';
import Weekly from '../component/weekly';
import {FaFacebook , FaInstagram , FaTwitter ,FaSnapchat } from 'react-icons/fa' 
function Home(){

  
    return (
      <div>
        <div className='Home'>
            <div className='home-words'>
              <p>" Each productive moment is a sentence, and each goal achieved a chapter. Embrace the potential within each day as a blank page waiting for your unique and inspiring narrative."</p>
              <button className='home-btn'><Link to='/input'>Get Started</Link>  </button>
            </div>
            <div className='home-imgg'>
              <img src={vector}></img>
            </div>
      </div>

      <div className='home-todo'>
      <h1>Daily To-Do List</h1>
      <div className='home-flextodo'>
       
        <p>daily to-do lists are particularly beneficial for meeting deadlines, managing workloads, and staying organized in fast-paced environments. In personal life, they assist with daily routines, time for self-care, and goal achievement. Ultimately, the daily to-do list is a simple yet powerful tool that contributes to enhanced efficiency, productivity, and a greater sense of control over one's daily life.</p>
       <img src={todo}></img>
        </div>
      </div>
      <div className='home-call'>
      <Weekly  />
      </div>
      <div className='home-call'>
      <Month  />
      </div>

      <div>
      <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><FaFacebook /></li>
      <li class="social-icon__item"> < FaInstagram /></li>
      <li class="social-icon__item"> <FaTwitter /></li>
      <li class="social-icon__item"><FaSnapchat /></li>
    </ul>
    <ul class="menu">
      <li class="menu__item">Home</li>
      <li class="menu__item">About</li>
      <li class="menu__item">Services</li>
      <li class="menu__item">Team</li>
      <li class="menu__item">Contact</li>

    </ul>
    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>
      </div>
      </div>
    );
    };
  

  export default Home;