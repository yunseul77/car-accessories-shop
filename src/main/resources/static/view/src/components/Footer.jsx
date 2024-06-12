import React from 'react';

const Footer = () => {
  return (
      <footer className="bg-dark text-light py-4 mt-auto">
        <div className="row justify-content-center mt-4">
          <div className="col text-center">
            <h1>Developed By Team 09</h1>
          </div>
        </div>
        <hr style={{ width:"70%", margin:"auto", marginTop:"2%", marginBottom:"2%", border:"2px solid #FFFFFF", backgroundColor:"#FFFFFF" }}/>
        <div className="row justify-content-center mt-2">
          <div className="col text-center">
            <a style={{ marginLeft:"5%", marginRight:"5%" }}>김가은</a>
            <a style={{ marginLeft:"5%", marginRight:"5%" }}>김두현</a>
            <a style={{ marginLeft:"5%", marginRight:"5%" }}>김민재</a>
            <a style={{ marginLeft:"5%", marginRight:"5%" }}>박규태</a>
            <a style={{ marginLeft:"5%", marginRight:"5%" }}>안지완</a>
            <a style={{ marginLeft:"5%", marginRight:"5%" }}>최수종</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;