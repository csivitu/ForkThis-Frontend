import React from "react";
import { useState } from "react";
import createChallengeHandler from "../controllers/createChallengeHandler";
const CreateChallenge = () => {
  const [starttime, setstarttime] = useState([]);
  const [endtime, setendtime] = useState([]);
  const [tags, settags] = useState([]);
  const [pointsbet, setpointsbet] = useState([]);
  const submitHandler = async () => {
    const formdata = {
      starttime,
      endtime,
      tags,
      pointsbet,
    };
    await createChallengeHandler(formdata);
  };

  return (
    <>
      <div className="font-mono bg-gray-400 w-full">
        <div className="mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="bg-white mb-4 md:flex md:justify-between">
                    <div className="bg-white mb-4 md:mr-2 md:mb-0">
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
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
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
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Tags
                    </label>
                    <fieldset>
                      {/* <legend>Choose your monster's features:</legend> */}

                      <div>
                        <input
                          type="checkbox"
                          id="scales"
                          name="scales"
                          value="scales"
                          onChange={(el) => {
                            const temp = [...tags];
                            temp.includes(el.target.value)
                              ? temp.pop(el.target.value)
                              : temp.push(el.target.value);
                            settags(temp);
                          }}
                        />
                        <label for="scales">Scales</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="horns"
                          name="horns"
                          value="horns"
                          onChange={(el) => {
                            const temp = [...tags];
                            temp.includes(el.target.value)
                              ? temp.pop(el.target.value)
                              : temp.push(el.target.value);
                            settags(temp);
                          }}
                        />
                        <label for="horns">Horns</label>
                      </div>
                    </fieldset>
                  </div>

                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Points Bet :
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="number"
                      value={pointsbet}
                      onChange={(el) => {
                        setpointsbet(el.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-6 text-center">
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
