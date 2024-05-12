"use cient";

import { useEffect, useRef } from "react";

// import EmojiPicker from "emoji-picker-react";
export default function Chat() {
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jhon Doe</span>
            <p>Active now!</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="" />
          <img src="/video.png" alt="" />
          <img src="/info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, saepe.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, saepe.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, saepe.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, saepe.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, saepe.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, saepe.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, saepe.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, saepe.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, saepe.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <img src="/nature.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, saepe.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/img.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message..." />
        <div className="emoji">
          <img src="/emoji.png" alt="" />
          {/* <EmojiPicker /> */}
        </div>

        <div className="sendButton">Send</div>
      </div>
    </div>
  );
}
