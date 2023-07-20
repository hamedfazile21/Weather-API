import axios from "axios";
import {
  AiFillGithub,
  AiOutlineVerticalAlignTop,
  AiOutlineVerticalAlignBottom,
} from "react-icons/ai";
import {
  GiWaterDrop,
  GiWhirlwind,
  GiPressureCooker,
  GiDustCloud,
} from "react-icons/gi";
import {
  BsFillSunFill,
  BsFillCloudsFill,
  BsFillCloudLightningRainFill,
  BsFillCloudRainFill,
} from "react-icons/bs";
import React, { useState } from "react";

const App = () => {
  const [giveCountry, setGiveCountrry] = useState("");
  const [getData, setGetData] = useState("");
  const [getData_2, setGetData_2] = useState("");
  const submit = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${giveCountry}&appid=b1ed85d6358ceee1d3a9ddc9c8a556a5`
      )
      .then((res) => {
        setGetData(res.data);
      });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${giveCountry}&appid=b1ed85d6358ceee1d3a9ddc9c8a556a5`
      )
      .then((res) => {
        setGetData_2(res.data);
      });
      giveCountry = ""
  };

  const nameData = (Event) => {
    setGiveCountrry(Event.target.value);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col w-full justify-center items-center p-[50px]">
        <div className="flex flex-col w-[90%] h-auto bg-gradient-to-t from-gray-200 via-cyan-100 to-blue-300 rounded-md p-10 ">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl text-primary font-bold">Reat Weather</h1>
            </div>
            <div>
              <AiFillGithub size="2rem" />
            </div>
          </div>
          <div
            onClick={submit}
            className="my-5 flex flex-row items-center gap-x-4"
          >
            <input
              onChange={nameData}
              type="search"
              className="w-full px-5 py-2 rounded-full outline-none"
            />
            <button className="px-5 py-2 bg-white text-primary rounded-full">
              Submit
            </button>
          </div>
          <div className="flex flex-col items-start justify-around bg-white p-5 rounded-md w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <h3 className="text-primary">Current Weather</h3>
              <div className="border border-red-500 rounded-full h-[20px] w-[20px]"></div>
            </div>
            <div>
              <div className="flex flex-row items-center justify-between w-[600px] mt-5 ml-5">
                <div className="flex flex-col items-center justify-start  gap-y-8">
                  <p className="text-primary font-bold">{getData.name}</p>
                  <div className="ml-5">
                    {getData.weather ? (
                      getData.weather[0].description === "clear sky" ? (
                        <BsFillSunFill color="yellow" size="4rem" />
                      ) : getData.weather[0].description === "broken clouds" ||
                        "few clouds" ||
                        "scattered clouds" ||
                        "scattered clouds" ? (
                        <BsFillCloudsFill color="gray" size="4rem" />
                      ) : getData.weather[0].description === "dust" ? (
                        <GiDustCloud size="4rem" />
                      ) : getData.weather[0].description === "rain" ||
                        "light rain" ? (
                        <BsFillCloudLightningRainFill size="4rem" color="gray" />
                      ) : null
                    ) : null}
                  </div>
                  <div id="weather">
                    {getData.weather ? (
                      <p className="font-bold text-primary">
                        {getData.weather[0].description}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className=" ml-10">
                  {getData.main ? (
                    <h1 className="text-6xl text-blue-300 font-bold">
                      {getData.main.temp}°
                    </h1>
                  ) : null}
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 ml-20">
                  <p>
                    Feels Like :{" "}
                    {getData.main ? (
                      <span className="font-bold text-primary">
                        {getData.main.feels_like}
                      </span>
                    ) : null}{" "}
                  </p>
                  <p className="flex flex-row items-center gap-x-2">
                    {" "}
                    <AiOutlineVerticalAlignTop size="1.5rem" />:
                    {getData.main ? (
                      <span className="font-bold text-primary">
                        {getData.main.temp_max}
                      </span>
                    ) : null}
                  </p>
                  <p className="flex flex-row items-center gap-x-2">
                    {" "}
                    <AiOutlineVerticalAlignBottom size="1.5rem" />:
                    {getData.main ? (
                      <span className="font-bold text-primary">
                        {getData.main.temp_min}
                      </span>
                    ) : null}
                  </p>
                  <div className="flex flex-row items-center gap-x-5">
                    <GiWaterDrop />
                    <p>
                      Humidity :{" "}
                      {getData.main ? (
                        <span className="text-primary font-bold">
                          {getData.main.humidity}%
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-x-5">
                    <GiWhirlwind />
                    <p>
                      Wind :{" "}
                      {getData ? (
                        <span className="text-primary font-bold">
                          {getData.wind.speed}kph
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-x-5">
                    <GiPressureCooker />
                    <p>
                      Pressure :{" "}
                      {getData ? (
                        <span className="text-primary font-bold">
                          {getData.wind.deg}hpa
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer flex flex-col items-start justify-start bg-white p-5 rounded-md mt-3">
            <div>
              <p className="text-grau-200">Extended Forecast</p>
            </div>
            <div className="flex flex-row items-center justify-around w-full mt-5">
              <div className="flex flex-col items-center justify-centerc w-1/5 gap-y-5">
                <p>Sat</p>
                <div>
                  {getData_2.list ? (
                    getData_2.list[0].weather[0].description === "clear sky" ? (
                      <BsFillSunFill color="yellow" size="4rem" />
                    ) : getData_2.list[0].weather[0].description ===
                        "broken clouds" ||
                      "few clouds" ||
                      "scattered clouds" ||
                      "scattered clouds" ? (
                      <BsFillCloudsFill color="gray" size="4rem" />
                    ) : getData_2.list[0].weather[0].description === "dust" ? (
                      <GiDustCloud size="4rem" />
                    ) : getData_2.list[0].weather[0].description === "rain" ||
                      "light rain" || "light rain" ? (
                      <BsFillCloudLightningRainFill size="4rem" color="gray" />
                    ) : null
                  ) : null}
                </div>
                {getData_2 ? (
                  <p className=" text-blue-300 text-center">
                    {getData_2.list[0].weather[0].description}
                  </p>
                ) : null}
                {getData_2 ? (
                  <p className=" text-primary text-center">
                    {getData_2.list[0].main.temp}°
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col items-center justify-center w-1/5 gap-y-5">
                <p>Sun</p>
                <div>
                  {getData_2.list ? (
                    getData_2.list[1].weather[0].description === "clear sky" ? (
                      <BsFillSunFill color="yellow" size="4rem" />
                    ) : getData_2.list[1].weather[0].description ===
                        "broken clouds" ||
                      "few clouds" ||
                      "scattered clouds" ||
                      "scattered clouds" ? (
                      <BsFillCloudsFill color="gray" size="4rem" />
                    ) : getData_2.list[1].weather[0].description === "dust" ? (
                      <GiDustCloud size="4rem" />
                    ) : getData_2.list[1].weather[0].description === "rain" ||
                      "light rain" || "light rain" ? (
                      <BsFillCloudLightningRainFill size="4rem" color="gray" />
                    ) : null
                  ) : null}
                </div>
                {getData_2 ? (
                  <p className=" text-blue-300 text-center">
                    {getData_2.list[1].weather[0].description}
                  </p>
                ) : null}
                {getData_2 ? (
                  <p className=" text-primary text-center">
                    {getData_2.list[1].main.temp}°
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col items-center justify-center w-1/5 gap-y-5">
                <p>Mon</p>
                <div>
                  {getData_2.list ? (
                    getData_2.list[2].weather[0].description === "clear sky" ? (
                      <BsFillSunFill color="yellow" size="4rem" />
                    ) : getData_2.list[2].weather[0].description ===
                        "broken clouds" ||
                      "few clouds" ||
                      "scattered clouds" ||
                      "scattered clouds" ? (
                      <BsFillCloudsFill color="gray" size="4rem" />
                    ) : getData_2.list[2].weather[0].description === "dust" ? (
                      <GiDustCloud size="4rem" />
                    ) : getData_2.list[2].weather[0].description === "rain" ||
                      "light rain" || "light rain" ? (
                      <BsFillCloudLightningRainFill size="4rem" color="gray" />
                    ) : null
                  ) : null}
                </div>
                {getData_2 ? (
                  <p className=" text-blue-300 text-center">
                    {getData_2.list[2].weather[0].description}
                  </p>
                ) : null}
                {getData_2 ? (
                  <p className=" text-primary text-center">
                    {getData_2.list[2].main.temp}°
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col items-center justify-center w-1/5 gap-y-5">
                <p>Tue</p>
                <div>
                  {getData_2.list ? (
                    getData_2.list[3].weather[0].description === "clear sky" ? (
                      <BsFillSunFill color="yellow" size="4rem" />
                    ) : getData_2.list[3].weather[0].description ===
                        "broken clouds" ||
                      "few clouds" ||
                      "scattered clouds" ||
                      "scattered clouds" ? (
                      <BsFillCloudsFill color="gray" size="4rem" />
                    ) : getData_2.list[3].weather[0].description === "dust" ? (
                      <GiDustCloud size="4rem" />
                    ) : getData_2.list[3].weather[0].description === "rain" ||
                      "light rain" || "light rain" ? (
                      <BsFillCloudLightningRainFill size="4rem" color="gray" />
                    ) : null
                  ) : null}
                </div>
                {getData_2 ? (
                  <p className=" text-blue-300 text-center">
                    {getData_2.list[3].weather[0].description}
                  </p>
                ) : null}
                {getData_2 ? (
                  <p className=" text-primary text-center">
                    {getData_2.list[3].main.temp}°
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col items-center justify-center w-1/5 gap-y-5">
                <p>Wed</p>
                <div>
                  {getData_2.list ? (
                    getData_2.list[4].weather[0].description === "clear sky" ? (
                      <BsFillSunFill color="yellow" size="4rem" />
                    ) : getData_2.list[4].weather[0].description ===
                        "broken clouds" ||
                      "few clouds" ||
                      "scattered clouds" ||
                      "scattered clouds" ? (
                      <BsFillCloudsFill color="gray" size="4rem" />
                    ) : getData_2.list[4].weather[0].description === "dust" ? (
                      <GiDustCloud size="4rem" />
                    ) : getData_2.list[4].weather[0].description === "rain" ||
                      "light rain" || "light rain" ? (
                      <BsFillCloudLightningRainFill size="4rem" color="gray" />
                    ) : null
                  ) : null}
                </div>
                {getData_2 ? (
                  <p className=" text-blue-300 text-center">
                    {getData_2.list[4].weather[0].description}
                  </p>
                ) : null}
                {getData_2 ? (
                  <p className=" text-primary text-center">
                    {getData_2.list[4].main.temp}°
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col items-center justify-center w-1/5 gap-y-5">
                <p>Thu</p>
                <div>
                  {getData_2.list ? (
                    getData_2.list[5].weather[0].description === "clear sky" ? (
                      <BsFillSunFill color="yellow" size="4rem" />
                    ) : getData_2.list[5].weather[0].description === "broken clouds" ||
                      "few clouds" ||
                      "scattered clouds" ||
                      "scattered clouds" ? (
                      <BsFillCloudsFill color="gray" size="4rem" />
                    ) : getData_2.list[5].weather[0].description === "dust" ? (
                      <GiDustCloud size="4rem" />
                    ) : getData_2.list[5].weather[0].description === "rain" ||
                      "light rain" || "light rain" ? (
                      <BsFillCloudLightningRainFill size="4rem" color="gray" />
                    ) : null
                  ) : null}
                </div>
                {getData_2 ? (
                  <p className=" text-blue-300 text-center">
                    {getData_2.list[5].weather[0].description}
                  </p>
                ) : null}
                {getData_2 ? (
                  <p className=" text-primary text-center">
                    {getData_2.list[5].main.temp}°
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col items-center justify-center w-1/5 gap-y-5">
                <p>Fri</p>
                <div>
                  {getData_2.list ? (
                    getData_2.list[6].weather[0].description === "clear sky" ? (
                      <BsFillSunFill color="yellow" size="4rem" />
                    ) : getData_2.list[6].weather[0].description ===
                        "broken clouds" ||
                      "few clouds" ||
                      "scattered clouds" ||
                      "scattered clouds" ? (
                      <BsFillCloudsFill color="gray" size="4rem" />
                    ) : getData_2.list[6].weather[0].description === "dust" ? (
                      <GiDustCloud size="4rem" />
                    ) : getData_2.list[6].weather[0].description === "rain" ||
                      "light rain" || "light rain" ? (
                      <BsFillCloudLightningRainFill size="4rem" color="gray" />
                    ) : null
                  ) : null}
                </div>
                {getData_2 ? (
                  <p className=" text-blue-300 text-center">
                    {getData_2.list[6].weather[0].description}
                  </p>
                ) : null}
                {getData_2 ? (
                  <p className=" text-primary text-center">
                    {getData_2.list[6].main.temp}°
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
