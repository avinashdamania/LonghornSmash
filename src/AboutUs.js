import React from 'react'
import tp1 from './assets/tp1.jpg'
import tp2 from './assets/tp2.jpg'
import tp3 from './assets/tp3.jpg'
import tp4 from './assets/tp4.jpg'



const hstyle = {
    textAlign: "center",
    fontFamily: "Aclonica",
    fontSize: "65px"
};
const pstyle = {
    textAlign: "center",
    fontFamily: "Aclonica",
    fontSize: "25px"
};
const pstyle2 = {
    textAlign: "center",
    fontFamily: "Aclonica",
    fontSize: "25px",
    marginTop:"20px"
};

export const AboutUs = () => (
    <div style={{
        backgroundColor: '#e9f5f8', width: '100%',
        height: '100%'}}>
        <h2 style={hstyle}>About Us</h2>
        <p style={pstyle}>Longhorn Smash is an organization fostered by a unified passion for the Super Smash Bros series. Its members build friendship through playing video games together, organizing social events, and of course, competing in weekly tournaments hosted by the organization’s administration team.</p> 

        <p style={pstyle}>From the start of the 2019-2020 semester it became a branch of Longhorn Gaming, UT’s biggest esports club. This allowed Longhorn Smash to send their esports team to collegiate tournaments, given the opportunity to compete across the country.</p>
        <p style={pstyle}>The primary way our group communicates is through Discord; you can join below!</p>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'24px'
        }}><td textAlign= 'center'> <a textAlign='center' href={"https://discord.gg/UrNNR92"}> Join our discord!</a> </td></div>

        <p style={pstyle}>Below are some pictures from our previous tournaments</p>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px'
        }}>
            <img textAlign="center" width={.7*window.innerWidth} src={tp1} alt="first pic"></img>
            <img textAlign="center" width={.7*window.innerWidth} src={tp2} alt="second pic"></img>
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
            <img textAlign="center" width={.7*window.innerWidth} src={tp3} alt="third pic"></img>
            <img textAlign="center" width={.7*window.innerWidth} src={tp4} alt="fourth pic"></img>
        </div>
        <p style={pstyle2}>Find us on HornsLink</p>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'24px'
        }}><td> <a textAlign='center' href={"https://utexas.campuslabs.com/engage/organization/cgc"}>Click me!</a> </td>
        </div>
    </div>
)