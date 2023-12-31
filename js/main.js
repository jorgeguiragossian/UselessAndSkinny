// Custom JavaScript code can go here

import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';

Amplify.configure(config);


// Example: Initializing a Bootstrap Carousel
$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2000
    });
});


window.addEventListener('scroll', function() {
    var logo = document.querySelector('.navbar-brand img');
    if (window.pageYOffset > 100) { // Adjust the 100 value as needed
        logo.style.height = '40px'; // Smaller size when scrolled down
    } else {
        logo.style.height = '100px'; // Larger size when at the top of the page
    }
});

export default function App() {
    return (
      <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    );
  }

 