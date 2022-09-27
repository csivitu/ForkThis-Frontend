import React from "react";
import Projects from "../miscellaneous/Projects";

const ProjectsSubMenu = () => {
  return (
    // <div className="flex flex-wrap justify-around items-center gap-y-2">
    //   <div className=" flex justify-around flex-wrap gap-4 p-1 ">
    //     <div className=" rounded-md   relative">
    //       <div id="cut-corner" className="py-8 bg-white">
    //         <div className="px-6 bg-white">
    //           <p className="bg-white text-sm leading-none text-justify text-black-800 dark:text-black-100 mt-1">
    //             Challenge Name
    //           </p>
    //         </div>
    //         <div className="mt-5 px-6 bg-white">
    //           <p className="bg-white text-sm leading-none text-justify text-black-800 dark:text-black-100 mt-1">
    //             <span className="text-xs bg-white mr-1 text-black-400">
    //               Raised By:
    //             </span>
    //             Tuesday, 9:00pm - 11:00pm
    //           </p>
    //         </div>
    //         <div className="mt-5 px-6 bg-white">
    //           <p className="bg-white text-sm leading-none text-justify text-black-800 dark:text-black-100 mt-1">
    //             <span className=" bg-white text-xs mr-1 text-black-400">
    //               Raised By:
    //             </span>
    //             Tuesday, 9:00pm - 11:00pm
    //           </p>
    //         </div>
    //         <div className="bg-white mt-5 px-6 flex items-center w-full">
    //           <div className="bg-white">
    //             <p className="text-xs text-black-400 bg-white">Tickets Sold</p>
    //             <p className="text-sm bg-white leading-none text-justify text-black-800 dark:text-black-100 mt-1">
    //               857
    //             </p>
    //           </div>
    //           <div className=" bg-white ml-14">
    //             <p className="bg-white text-xs text-black-400">
    //               Revenue Earned
    //             </p>
    //             <p className="bg-white text-sm leading-none text-justify text-black-800 dark:text-black-100 mt-1">
    //               $7698
    //             </p>
    //           </div>
    //         </div>

    //         <div className="bg-white pt-6 flex justify-between relative items-center w-full">
    //           <div className="bg-white w-3 h-5  dark:bg-gray-400 rounded-r-3xl" />
    //           <div className=" bg-white w-full border-b-2 border-dashed border-gray-100 dark:border-gray-400" />
    //           <div className=" bg-white w-3 h-5  dark:bg-gray-400 rounded-l-3xl" />
    //         </div>
    //         <div className="bg-white mt-4 px-6 flex flex-col w-full justify-center items-center">
    //           <img
    //             src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png"
    //             alt="barcode"
    //             className="bg-white"
    //           />
    //           <div
    //             id="requestbuttons"
    //             className="bg-white w-full mt-2 flex justify-around items-center"
    //           ></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white w-full h-full">
      <Projects />
    </div>
  );
};

export default ProjectsSubMenu;
