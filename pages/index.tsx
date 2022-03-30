import type { NextPage } from "next";
import { IHomePage } from "../ts-types/componentTypes";
import { IMsgInfo } from "../ts-types/dataTypes";
import CheckDoneSVG from "../assets/svgs/CheckDone";
import { HomeStyle } from "../styles/HomeStyle.styled";
import { Msg, retrieveData, saveData, isUrl } from "../assets/utils";
import { useEffect, useState, FormEvent, MouseEvent, ChangeEvent } from "react";
import TrashIcon from "../assets/svgs/TrashIcon";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const HomePage: NextPage<IHomePage> = () => {
  const [messages, setMessages] = useState<IMsgInfo[]>([]);
  const [text, setText] = useState("");
  const [msgNum, setmsgNum] = useState(0);

  //GET PREVIOUS MESSAGES WHEN COMPONENT RENDERS
  useEffect(() => getData(), []);

  //SCROLL TO THE LAST MESSAGE SENT WHEN A NEW MESSAGE IS SENT
  useEffect(() => {
    const el = document.getElementsByClassName("received__msg");
    if (el.length) {
      const targetElement = el[el.length - 1];
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
    }
  }, [msgNum]);

  //STORE THE LASTEST MESSAGE ARRAY TO THE LOCALSTORAGE EVERYTIME A NEW MESSAGE IS SENT
  useEffect(() => {
    saveData("lastMessages", messages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  //FUNCTON FOR GETTING PREVIOUS MESSAGES SENT AND POPULATING IT TO THE STATE
  const getData = () => {
    if (retrieveData("lastMessages")) setMessages(retrieveData("lastMessages"));
  };

  //FUNCTION FOR ADDING A NEW MESSAGE
  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isUrl(text);
    if (!text.trim()) return;
    setMessages(msg => [...msg, new Msg(text).msgInfo()]);

    const inputField: HTMLInputElement = document.querySelector(
      "[placeholder='Type your message']"
    )!;
    inputField.value = "";
    setText("");
    setmsgNum(num => num + 1);
  };

  //FUNCTION TO GET THE VALUES TYPED INTO THE INPUT FIELD
  const inputValue = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  //FUNCTION FOR DELETING A MESSAGE
  const deleteMessage = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const messageId: string = e.currentTarget.attributes[0].value!;

    const filterMessage = messages.filter(val => val.id !== messageId);
    setMessages(filterMessage);
  };

  return (
    <HomeStyle>
      <div className="wrapper">
        <h3>Beginning of your chat with Sarah Kyle</h3>
        {messages.length
          ? messages.map(val => (
              <div className="received__msg" key={val.id}>
                {val.text}

                {val.url && (
                  <LinkPreview
                    margin="10px 0"
                    url={val.url}
                    width="100%"
                    height="100%"
                    showPlaceholderIfNoImage={true}
                    showLoader={false}
                  />
                )}
                <div className="received__msg-time">
                  <span>
                    {val.time}
                    <CheckDoneSVG />
                  </span>
                  <button
                    onDoubleClick={e => deleteMessage(e)}
                    data-key={val.id}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))
          : ""}
      </div>
      <form onSubmit={e => sendMessage(e)} className="input__wrapper">
        <input
          className="input-field"
          placeholder="Type your message"
          onChange={inputValue}
        />{" "}
        <input className="submit" type="submit" value="Send" />
      </form>
    </HomeStyle>
  );
};

export default HomePage;
