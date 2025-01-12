"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Graph from "./components/Graph";
import DonutChart from "./components/Pie";
import ProgressComponent from "./components/ProgressBar";
import { HiMenu, HiX } from "react-icons/hi";

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [percentile, setPercentile] = useState<string | number>(30);
  const [rank, setRank] = useState<string | number>(1);
  const [score, setScore] = useState<string | number>(10);
  const [percentileError, setPercentileError] = useState<string>("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleFormClose = () => setIsFormVisible(false);

  const handleRank = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setRank(value === "" ? "" : value);
  };

  const handlePercentileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value && (parseInt(value) > 100 || parseInt(value) < 0)) {
      setPercentileError("required | percentile 0 - 100");
    } else {
      setPercentileError("");
    }
    setPercentile(value === "" ? "" : value);
  };

  const handleScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setScore(value === "" ? "" : value);
  };

  return (
    <div className="main-coin" style={{ display: "flex", height: "100vh" }}>
      <div className="mobile-menu-button sm:hidden p-4">
        <button
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          className="p-4 bg-white-600 text-black font-[40px] "
        >
          {isSidebarVisible ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>
      <div
        className={`border-r border-gray-300 sidebar ${
          !isSidebarVisible && "hidden"
        }`}
      >
        <Sidebar />
      </div>

      <div
        className="sidebarBeside"
        style={{
          flex: 1,
          padding: "40px 20px 40px 40px",
          display: "grid",
          gridTemplateColumns: "63% 35%",
          gap: "20px",
        }}
      >
        <div>
          <h2 className="mb-4 font-[400px]">Skill Test</h2>
          <div className="flex flex-row items-start space-x-4 justify-between mb-4 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
            <img
              src="images/html5.svg"
              alt="html5"
              className="w-12 h-12 mb-0"
            />
            <header className="text-left">
              <h3 className="text-xm font-semibold">
                Hyper Text Markup Language
              </h3>
              <p className="text-[15.5px] text-gray-500">
                Questions: 08 | Duration: 15mins | Submitted on 5 June 2021
              </p>
            </header>
            <button
              className="px-6 py-2 bg-[#142177] text-white text-[15px] rounded-lg hover:bg-[#1a2d7a] focus:outline-none focus:ring-2 focus:ring-[#142177] font-semibold"
              onClick={() => setIsFormVisible(true)}
            >
              Update
            </button>
          </div>

          {isFormVisible && (
            <div
              id="form-overlay"
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg w-2/5 overlay-form">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold mb-4">Update scores</h2>
                  <img src="images/html5.svg" alt="html5" className="w-8 h-8" />
                </div>

                <form>
                  <div className="mb-4 flex items-center justify-between">
                    <label
                      htmlFor="rank"
                      className="text-sm font-medium text-gray-700 w-1/3"
                    >
                      Update your <span className="font-bold">Rank</span>
                    </label>
                    <input
                      type="text"
                      id="rank"
                      placeholder="Rank"
                      value={rank || ""}
                      onChange={handleRank}
                      className="block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <label
                      htmlFor="percentile"
                      className="text-sm font-medium text-gray-700 w-1/3"
                    >
                      Update your <span className="font-bold">Percentile</span>
                    </label>
                    <input
                      type="text"
                      id="percentile"
                      placeholder="Percentile"
                      value={percentile || ""}
                      onChange={handlePercentileChange}
                      className="block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  {percentileError && (
                    <p className="text-red-500 text-[11px] mb-2 mr-7 mt-[-18px] text-right perc-p-text">
                      {percentileError}
                    </p>
                  )}
                  <div className="mb-4 flex items-center justify-between">
                    <label
                      htmlFor="score"
                      className="text-sm font-medium text-gray-700 w-2/3"
                    >
                      Update your{" "}
                      <span className="font-bold">
                        Current Score (out of 15)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="score"
                      placeholder="Score"
                      value={score || ""}
                      onChange={handleScore}
                      className="block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-4 py-2 bg-white text-[#132277] border border-[#132277] rounded-lg hover:bg-[#f0f0f0] focus:outline-none"
                      onClick={handleFormClose}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="px-4 py-2 bg-[#142177] text-white rounded-lg hover:bg-[#1a2d7a] focus:outline-none flex items-center justify-center space-x-2"
                      onClick={handleFormClose}
                    >
                      Save
                      <svg
                        width="16px"
                        height="16px"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                      >
                        <polygon
                          fill="var(--ci-primary-color, #FFFFFF)"
                          points="359.873 121.377 337.246 144.004 433.243 240.001 16 240.001 16 240.002 16 272.001 16 272.002 433.24 272.002 337.246 367.996 359.873 390.623 494.498 256 359.873 121.377"
                          className="ci-primary"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
            <h4 className="mb-4 font-bold quick">Quick Statistics</h4>
            <div className="flex flex-row items-start space-x-4 justify-between mb-2">
              <div className="flex flex-row items-start space-x-4 justify-between ml-6 pr-4 border-r-2 border-gray-300">
                <div className="w-12 h-12 bg-[#F4F6F8] rounded-full flex items-center justify-center">
                  <img
                    src="images/trophy.svg"
                    alt="html5"
                    className="w-8 h-8"
                  />
                </div>
                <header className="text-left">
                  <h3 className="text-xm font-semibold">{rank}</h3>
                  <p className="text-sm text-gray-500 rank">YOUR RANK</p>
                </header>
              </div>

              <div className="flex flex-row items-start space-x-4 justify-between pr-4">
                <div className="w-12 h-12 bg-[#F4F6F8] rounded-full flex items-center justify-center">
                  <img src="images/per.svg" alt="html5" className="w-8 h-8" />
                </div>
                <header className="text-left">
                  <h3 className="text-xm font-semibold">{percentile}%</h3>
                  <p className="text-sm text-gray-500 rank">PERCENTILE</p>
                </header>
              </div>

              <div className="flex flex-row items-start space-x-4 justify-between pl-4 border-l-2 border-gray-300">
                <div className="w-12 h-12 bg-[#F4F6F8] rounded-full flex items-center justify-center">
                  <img src="images/check.png" alt="html5" className="w-8 h-8" />
                </div>
                <header className="text-left">
                  <h3 className="text-xm font-semibold">{score} / 15</h3>
                  <p className="text-sm text-gray-500 rank">CORRECT ANSWERS</p>
                </header>
              </div>
            </div>
          </div>

          <div
            className="mb-32"
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <h4 className="font-bold mb-4 comp">Comparison Graph</h4>
            <div className="flex items-center justify-between">
              <p className="w-4/5 perc-text text-[15px] leading-[20px]">
                {percentile >= 72
                  ? `You score ${percentile}% percentile which is higher than the average percentile 72% of all the engineers who took this assignment`
                  : `You score ${percentile}% percentile which is lower than the average percentile 72% of all the engineers who took this assignment`}
              </p>

              <div
                className="w-1/2 bg-[#F4F6F8] rounded-full flex items-center justify-center border border-gray-300"
                style={{
                  width: "10%",
                  aspectRatio: "1 / 1",
                }}
              >
                <img
                  src="images/growth.svg"
                  alt="growth icon"
                  className="w-8 h-8"
                />
              </div>
            </div>
            <Graph percentile={percentile} />
          </div>
        </div>

        <div className="p-4 flex flex-col">
          <div className="border border-gray-300 rounded-lg mb-4 p-4 pt-6">
            <div>
              <p className="text-[14px] font-bold">Syllabus Wise Analysis</p>
            </div>
            <div>
              <ProgressComponent />
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 pt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[15px] font-bold">Question Analysis</h2>
              <span className="text-[#4C5698] font-bold text-[13px]">
                {score}/15
              </span>
            </div>

            <div className="mt-1">
              <p className="text-[12.9px] custom-word-spacing">
                <span className="font-semibold">
                  you score {score} questions out of 15.
                </span>
                However it still needs some improvements
              </p>
            </div>
            <div className="mt-[-40px]">
              <DonutChart value={score} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
