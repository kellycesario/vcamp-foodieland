import React from "react";
import "./mainFooter.css";
import "./mediaQuerie.css";
import database from "./../../../database.json";
import foodieLandLogo from "./../../../public/assets/icons/foodielandLogo.svg";
import Button from "../Button";

export default function MainFooter() {
  return (
    <footer>
      <div className="containerDiv">
        <div className="topContainer">
          <div className="containerHeaderDiv">
            <img src={foodieLandLogo} />
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>

          <nav className="navThroughPages">
            <ul>
              <li>
                <a href="">Recipes</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
            </ul>
          </nav>
        </div>

        <Button content='Teste' btnColor='light' btnSize='large' />

        <hr />

        <div className="bottomContainer">
          <p className="flowbaseCopyright">
            © 2020 Flowbase. Powered by{" "}
            <span className="highlight">Webflow</span>
          </p>

          <div className="socialMediaDiv">
            <nav className="socialMediaNav">
              <ul>
                {database.socialMedia.forEach((el) => {
                  console.log("");
                })}

                {/* temp Save */}
                <li>
                  <a href="">
                    <img src={database.socialMedia[0].image} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={database.socialMedia[1].image} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={database.socialMedia[2].image} alt="" />
                  </a>
                  {/* temp Save */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
