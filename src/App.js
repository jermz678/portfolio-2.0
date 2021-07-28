import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import MyWork from './components/MyWork';
import Form from './components/Contact';
import Resume from './components/Resume';
import './App.css';
import './index.css';

function App() {

  return (
    <Router basename='/portfolio-2.0/'>
      <div >
        <main className="flex">
          <Header></Header>
          <Route exact path="/" component={About}/>
          <Route exact path="/myWork" component={MyWork}/>
          <Route exact path="/Contact" component={Form}/>
          <Route exact path="/Resume" component={Resume}/>
          <Footer></Footer>
        </main>
      </div>
      </Router>
  );
}

export default App;


// A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio
// A single Project component that will be used multiple times in the Portfolio section
// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer

// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
