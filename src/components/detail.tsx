"use client";

import { useState } from "react";

export default function Detail() {
  const [openMedia, setOpenMedia] = useState(false);
  return (
    <div className="detail">
      <div className="user">
        <img src="/avatar.png" alt="" />
        <h1>Jhon Doe</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Media</span>
            <img
              src={openMedia ? "/arrowDown.png" : "/arrowUp.png"}
              alt=""
              onClick={() => setOpenMedia((prev) => !prev)}
            />
          </div>
          {openMedia && (
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="/nature.jpg" alt="" />
                  <span>01_01_1990.jpg</span>
                </div>
                <img src="/download.png" alt="" className="downloadButton" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="/nature.jpg" alt="" />
                  <span>01_01_1990.jpg</span>
                </div>
                <img src="/download.png" alt="" className="downloadButton" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="/nature.jpg" alt="" />
                  <span>01_01_1990.jpg</span>
                </div>
                <img src="/download.png" alt="" className="downloadButton" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="/nature.jpg" alt="" />
                  <span>01_01_1990.jpg</span>
                </div>
                <img src="/download.png" alt="" className="downloadButton" />
              </div>
            </div>
          )}
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Log Out</button>
      </div>
    </div>
  );
}
