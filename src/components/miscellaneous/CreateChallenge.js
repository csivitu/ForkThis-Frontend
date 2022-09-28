import React from "react";
import { useState } from "react";
import createChallengeHandler from "../../controllers/createChallengeHandler";
import { ToastContainer } from "react-toastify";

const CreateChallenge = () => {
  const [startsAt, setstartsAt] = useState([]);
  const [endsAt, setendsAt] = useState([]);
  const [tags, settags] = useState([]);
  const [pointsBet, setpointsBet] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const submitHandler = async () => {
    const formdata = {
      startsAt,
      endsAt,
      tags,
      pointsBet,
      difficulty,
    };
    await createChallengeHandler(formdata);
  };

  return (
    <>
      <div className="font-mono w-full">
        <div className="mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-fuxll lg:w-11/12 flex">
              <div
                id="card-design"
                className="w-full  bg-HTpurple-900 p-5 -lg "
              >
                <form className="px-8 pt-6 pb-8 mb-4 bg-HTpurple-900 ">
                  <div className="bg-HTpurple-900 mb-4 md:flex md:justify-between">
                    <ToastContainer />
                    <div className="bg-HTpurple-900 w-1/2 mb-4 md:mr-2 md:mb-0">
                      <label
                        className="bg-HTpurple-900 block mb-2 text-sm font-bold text-gray-250"
                        htmlFor="firstName"
                      >
                        Start Time :
                      </label>
                      <input
                        className="bg-HTpurple-900 w-full px-3 py-2 text-sm leading-tight text-gray-250 border  shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="startsAt"
                        type="datetime-local"
                        value={startsAt}
                        onChange={(el) => setstartsAt(el.target.value)}
                      />
                    </div>
                    <div className="w-1/2  bg-HTpurple-900">
                      <label
                        className="block bg-HTpurple-900 mb-2 text-sm font-bold text-gray-250"
                        htmlFor="lastName"
                      >
                        End Time :
                      </label>
                      <input
                        className="bg-HTpurple-900 w-full px-3 py-2 text-sm leading-tight text-gray-250 border  shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="endsAt"
                        type="datetime-local"
                        value={endsAt}
                        onChange={(el) => setendsAt(el.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4 bg-HTpurple-900">
                    <label
                      className="block bg-HTpurple-900 mb-2 text-sm font-bold text-gray-250"
                      htmlFor="email"
                    >
                      Tags
                    </label>
                    <fieldset>
                      <div className="flex bg-HTpurple-900 flex-wrap w-full h-full justify-around items-center">
                        <div className="w-1/2 h-full bg-HTpurple-900">
                          {/* <legend>Choose your monster's features:</legend> */}
                          {/* bug, documentation, easy ,medium ,hard ,beginner,expert , web development  , ML , web3 , ai , */}
                          <div className="bg-HTpurple-900">
                            <input
                              type="checkbox"
                              id="Bug"
                              name="Bug"
                              value="Bug"
                              onChange={(el) => {
                                const temp = [...tags];
                                temp.includes(el.target.value)
                                  ? temp.pop(el.target.value)
                                  : temp.push(el.target.value);
                                settags(temp);
                              }}
                            />
                            <label className="bg-HTpurple-900" htmlFor="scales">
                              Bug
                            </label>
                          </div>
                          <div className="bg-HTpurple-900">
                            <input
                              type="checkbox"
                              id="Documentation"
                              name="Documentation"
                              value="Documentation"
                              onChange={(el) => {
                                const temp = [...tags];
                                temp.includes(el.target.value)
                                  ? temp.pop(el.target.value)
                                  : temp.push(el.target.value);
                                settags(temp);
                              }}
                            />
                            <label className="bg-HTpurple-900" htmlFor="scales">
                              Documentation
                            </label>
                          </div>
                          <div className="bg-HTpurple-900">
                            <input
                              type="checkbox"
                              id="Web Development"
                              name="Web Development"
                              value="Web Development"
                              onChange={(el) => {
                                const temp = [...tags];
                                temp.includes(el.target.value)
                                  ? temp.pop(el.target.value)
                                  : temp.push(el.target.value);
                                settags(temp);
                              }}
                            />
                            <label className="bg-HTpurple-900" htmlFor="scales">
                              Web Development
                            </label>
                          </div>
                          <div className="bg-HTpurple-900">
                            <input
                              type="checkbox"
                              id="Web 3.0"
                              name="Web 3.0"
                              value="Web 3.0"
                              onChange={(el) => {
                                const temp = [...tags];
                                temp.includes(el.target.value)
                                  ? temp.pop(el.target.value)
                                  : temp.push(el.target.value);
                                settags(temp);
                              }}
                            />
                            <label className="bg-HTpurple-900" htmlFor="scales">
                              Web 3.0
                            </label>
                          </div>
                          <div className="bg-HTpurple-900">
                            <input
                              type="checkbox"
                              id="Machine Learning"
                              name="Machine Learning"
                              value="Machine Learning"
                              onChange={(el) => {
                                const temp = [...tags];
                                temp.includes(el.target.value)
                                  ? temp.pop(el.target.value)
                                  : temp.push(el.target.value);
                                settags(temp);
                              }}
                            />
                            <label className="bg-HTpurple-900" htmlFor="scales">
                              Machine Learning
                            </label>
                          </div>

                          <div className="bg-HTpurple-900">
                            <input
                              type="checkbox"
                              id="AI"
                              name="AI"
                              value="AI"
                              className="bg-HTpurple-900"
                              onChange={(el) => {
                                const temp = [...tags];
                                temp.includes(el.target.value)
                                  ? temp.pop(el.target.value)
                                  : temp.push(el.target.value);
                                settags(temp);
                              }}
                            />
                            <label htmlFor="horns" className="bg-HTpurple-900">
                              AI
                            </label>
                          </div>
                        </div>
                        <div className="w-1/2 h-full bg-HTpurple-900">
                          <div className="bg-HTpurple-900">
                            <input
                              type="radio"
                              id="Beginner"
                              name="Difficulty"
                              value="Beginner"
                              onChange={(el) => {
                                setDifficulty(el.target.value);
                              }}
                            />
                            <label className="bg-HTpurple-900" htmlFor="scales">
                              Beginner
                            </label>
                          </div>
                          <div className="bg-HTpurple-900">
                            <input
                              type="radio"
                              id="Easy"
                              name="Difficulty"
                              value="Easy"
                              onChange={(el) => {
                                setDifficulty(el.target.value);
                              }}
                            />
                            <label className="bg-HTpurple-900" htmlFor="scales">
                              Easy
                            </label>
                          </div>
                          <div className="bg-HTpurple-900">
                            <input
                              type="radio"
                              id="Medium"
                              name="Difficulty"
                              value="Medium"
                              onChange={(el) => {
                                setDifficulty(el.target.value);
                              }}
                            />
                            <label className="bg-HTpurple-900" htmlFor="scales">
                              Medium
                            </label>
                          </div>
                          <div className="bg-HTpurple-900">
                            <input
                              type="radio"
                              id="Hard"
                              name="Difficulty"
                              value="Hard"
                              onChange={(el) => {
                                setDifficulty(el.target.value);
                              }}
                            />
                            <label className="bg-HTpurple-900" htmlFor="scales">
                              Hard
                            </label>
                          </div>
                          <div className="bg-HTpurple-900">
                            <input
                              type="radio"
                              id="Expert"
                              name="Difficulty"
                              value="Expert"
                              onChange={(el) => {
                                setDifficulty(el.target.value);
                              }}
                            />
                            <label className="bg-HTpurple-900" htmlFor="scales">
                              Expert
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="mb-4  bg-HTpurple-900 md:mb-0">
                    <label
                      className="bg-HTpurple-900 block mb-2 text-sm font-bold text-gray-250"
                      htmlFor="password"
                    >
                      Points Bet :
                    </label>
                    <input
                      className="bg-HTpurple-900 w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-250 border  shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="number"
                      value={pointsBet}
                      onChange={(el) => {
                        setpointsBet(el.target.value);
                      }}
                    />
                  </div>

                  <div className="bg-HTpurple-900 mb-6 text-center">
                    <button
                      id="create-challenge-submit-btn"
                      className="w-full px-4 py-2 mt-1 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={submitHandler}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateChallenge;
