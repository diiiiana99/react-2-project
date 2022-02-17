import React from "react";
import "./HomeStyle.css";




function HomeStyle() {
    return (
    <div className="section">
        <h1 style={{color: "white", textAlign: "center"}}>WE ARE THE LEADER IN NEW DEVELOPMENTS.</h1>
        <p style={{color: "white" ,textAlign: "center"}} class="desc">Browse Our Brilliant Agents Who Focuses On Residential Developments.</p>
        <div className="card-container">
            <div class="home-card">
                        <h2>TINA WILLIAMS</h2>
                <p>Experience: 10 YEARS</p>
                <p>Dianna is a native New Yorker as well as a proud husband, father and sports enthusiast. After graduating Magna Cum Laude from the Honors Program of Iona College with a degree in Finance, he spent 15 years in the hospitality industry in South Florida and NYC. </p>
                <p>Occupcancy: CEO</p>
                <img src="https://mediarouting.vestahub.com/Media/116860622/box/500x500" alt="hi"></img>
            </div>
            <div class="home-card">
                <h2>TONI REY</h2>
                <p>Experience:25 YEARS</p>
                <p>Toni held a variety of management positions serving clientele at some of the world's best known luxury brands.</p>
                <p>Position: LICENSED RE SALESPERSON</p>
                <img src="https://mediarouting.vestahub.com/Media/116587503/box/500x500"alt="hi"></img>
            </div>
            <div class="home-card">
                <h2>CECILIA CHAO</h2>
                <p>Experience: 10 YEARS</p>
                <p></p>Cecilia Chao comes to the real estate profession bringing knowledge and experience from a diverse background.
                <p>Position: LICENSED RE SALESPERSON</p>
                <img src="https://mediarouting.vestahub.com/Media/113825311/box/500x500"alt="hi"></img>
            </div>
            <div class="home-card">
                <h2>RANI BALSAMO</h2>
                <p>Experience: 15 YEARS</p>
                <p>Experienced in the NYC hospitality industry for over a decade, moving on to real estate brought a natural skill set that clicked with Rani right away.</p>
                <p>Position: LICENSED RE SALESPERSON</p>
                <img src="https://mediarouting.vestahub.com/Media/130561269/box/500x500"alt="hi"></img>
              
            </div>
           
            </div>
        </div>

);
}


export default HomeStyle;

