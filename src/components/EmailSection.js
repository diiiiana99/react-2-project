import React from 'react';
import "./EmailSection.css";


function EmailSection ({visible, handleModalClick}) {



    return (
      <div class="email" style={{display: visible ? "block" : "none"}} >
            
            
            <div class="email-content" >
                <h1>Get Access</h1>
                <p>Sign Up</p>
                <form action= "#">
                    <div class="form-wrap">
                    <label for="email">
                        <input type="First Name" placeholder="Enter your First Name" id="name">
                        </input>
                        <input type="Last Name" placeholder="Enter your Last Name " id="email">
                        </input>
                        <input type="email" placeholder="Enter your email" id="email">
                        </input>
                        <input type="phone" placeholder="Enter your Phone Number" id="number">
                        </input>
                    </label>
                    <button class="button" type="submit">Submit Your App</button>
                    <button class="button" onClick={handleModalClick}>Let Me Out</button>
                    </div>
                </form>
            </div>
        </div>
   
            
   
    );
}

export default EmailSection;
