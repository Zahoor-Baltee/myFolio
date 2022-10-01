import React from "react";

function Skills() {
  return (
    <>
      <div className="main-skills-container  ">
        <div className="main-skills-heading ">
          <p>Skills</p>
          <p className="line"></p>
        </div>
        <div className="main-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            possimus quis laborum at labore ipsam. Explicabo ut corrupti, minima
            quibusdam rem iste libero fuga, blanditiis repudiandae quam, totam
            culpa ullam!
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="html-line">
              <div className="name-per d-flex">
                <p>HTML</p>
                <p>100%</p>
              </div>
              <div className="main-line"></div>
            </div>
            <div className="css-line">
              <div className="name-per d-flex">
                <p>CSS</p>
                <p>90%</p>
              </div>
              <div className="full-line">
                <div className="filled-line-css"></div>
              </div>
            </div>
            <div className="javascript-line">
              <div className="name-per d-flex">
                <p>Javascript</p>
                <p>75%</p>
              </div>
              <div className="full-line">
                <div className="filled-line-js"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="react-line">
              <div className="name-per d-flex">
                <p>React.js</p>
                <p>80%</p>
              </div>
              <div className="full-line">
                <div className="filled-line-re"></div>
              </div>
            </div>
            <div className="native-line">
              <div className="name-per d-flex">
                <p>React Native</p>
                <p>70%</p>
              </div>
              <div className="full-line">
                <div className="filled-line-na"></div>
              </div>
            </div>
            <div className="node-line">
              <div className="name-per d-flex">
                <p>Node.js</p>
                <p>60%</p>
              </div>
              <div className="full-line">
                <div className="filled-line-no"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
