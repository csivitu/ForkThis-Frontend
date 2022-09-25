import React from "react";
import { useState } from "react";
import createChallengeHandler from "../../controllers/createChallengeHandler";
const CreateChallenge = () => {
  const [starttime, setstarttime] = useState([]);
  const [endtime, setendtime] = useState([]);
  const [tags, settags] = useState([]);
  const [pointsbet, setpointsbet] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const submitHandler = async () => {
    const formdata = {
      starttime,
      endtime,
      tags: [...tags, difficulty],
      pointsbet,
    };
    console.log(formdata);
    await createChallengeHandler(formdata);
  };

  return (
    <>
      <div className="font-mono bg-gray-400 w-full">
        <div className="mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-fuxll lg:w-11/12 flex">
              <div id="cut-corner" className="w-full  bg-white p-5 -lg ">
                <form className="px-8 pt-6 pb-8 mb-4 bg-white ">
                  <div className="bg-white mb-4 md:flex md:justify-between">
                    <div className="bg-white w-1/2 mb-4 md:mr-2 md:mb-0">
                      <label
                        className="bg-white block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="firstName"
                      >
                        Start Time :
                      </label>
                      <input
                        className="bg-white w-full px-3 py-2 text-sm leading-tight text-gray-700 border  shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="starttime"
                        type="datetime-local"
                        value={starttime}
                        onChange={(el) => setstarttime(el.target.value)}
                      />
                    </div>
                    <div className="w-1/2  bg-white">
                      <label
                        className="block bg-white mb-2 text-sm font-bold text-gray-700"
                        htmlFor="lastName"
                      >
                        End Time :
                      </label>
                      <input
                        className="bg-white w-full px-3 py-2 text-sm leading-tight text-gray-700 border  shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="endtime"
                        type="datetime-local"
                        value={endtime}
                        onChange={(el) => setendtime(el.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4 bg-white">
                    <label
                      className="block bg-white mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Tags
                    </label>
                    <fieldset>
                      <div className="flex bg-white flex-wrap w-full h-full justify-around items-center">
                        <div className="w-1/2 h-full bg-white">
                          {/* <legend>Choose your monster's features:</legend> */}
                          {/* bug, documentation, easy ,medium ,hard ,beginner,expert , web development  , ML , web3 , ai , */}
                          <div className="bg-white">
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
                            <label className="bg-white" htmlFor="scales">
                              Bug
                            </label>
                          </div>
                          <div className="bg-white">
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
                            <label className="bg-white" htmlFor="scales">
                              Documentation
                            </label>
                          </div>
                          <div className="bg-white">
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
                            <label className="bg-white" htmlFor="scales">
                              Web Development
                            </label>
                          </div>
                          <div className="bg-white">
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
                            <label className="bg-white" htmlFor="scales">
                              Web 3.0
                            </label>
                          </div>
                          <div className="bg-white">
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
                            <label className="bg-white" htmlFor="scales">
                              Machine Learning
                            </label>
                          </div>

                          <div className="bg-white">
                            <input
                              type="checkbox"
                              id="AI"
                              name="AI"
                              value="AI"
                              className="bg-white"
                              onChange={(el) => {
                                const temp = [...tags];
                                temp.includes(el.target.value)
                                  ? temp.pop(el.target.value)
                                  : temp.push(el.target.value);
                                settags(temp);
                              }}
                            />
                            <label htmlFor="horns" className="bg-white">
                              AI
                            </label>
                          </div>
                        </div>
                        <div className="w-1/2 h-full bg-white">
                          <div className="bg-white">
                            <input
                              type="radio"
                              id="Beginner"
                              name="Difficulty"
                              value="Beginner"
                              onChange={(el) => {
                                setDifficulty(el.target.value);
                              }}
                            />
                            <label className="bg-white" htmlFor="scales">
                              Beginner
                            </label>
                          </div>
                          <div className="bg-white">
                            <input
                              type="radio"
                              id="Easy"
                              name="Difficulty"
                              value="Easy"
                              onChange={(el) => {
                                setDifficulty(el.target.value);
                              }}
                            />
                            <label className="bg-white" htmlFor="scales">
                              Easy
                            </label>
                          </div>
                          <div className="bg-white">
                            <input
                              type="radio"
                              id="Medium"
                              name="Difficulty"
                              value="Medium"
                              onChange={(el) => {
                                setDifficulty(el.target.value);
                              }}
                            />
                            <label className="bg-white" htmlFor="scales">
                              Medium
                            </label>
                          </div>
                          <div className="bg-white">
                            <input
                              type="radio"
                              id="Hard"
                              name="Difficulty"
                              value="Hard"
                              onChange={(el) => {
                                setDifficulty(el.target.value);
                              }}
                            />
                            <label className="bg-white" htmlFor="scales">
                              Hard
                            </label>
                          </div>
                          <div className="bg-white">
                            <input
                              type="radio"
                              id="Expert"
                              name="Difficulty"
                              value="Expert"
                              onChange={(el) => {
                                setDifficulty(el.target.value);
                              }}
                            />
                            <label className="bg-white" htmlFor="scales">
                              Expert
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="mb-4  bg-white md:mb-0">
                    <label
                      className="bg-white block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Points Bet :
                    </label>
                    <input
                      className="bg-white w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="number"
                      value={pointsbet}
                      onChange={(el) => {
                        setpointsbet(el.target.value);
                      }}
                    />
                  </div>

                  <div className="bg-white mb-6 text-center">
                    <button
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
