import React from 'react'
import Export from '../../src/assets/export.png'
import Trending from '../../src/assets/Trending.png'
import Spiderman from '../../src/assets/Spiderman.jpg'
import dot from '../../src/assets/dot.png'
import Movieprop from '../components/Movieprop'
import Interest from '../components/Interest'
import Tabpanel from '../components/Tablayout'
import Areagraph from "../components/Areagraph"



const movieprop = Movieprop();
const interest = Interest();


const Dashboard = (props) => {



    return (
        <>

            <div>
                <section className="h-24 relative flex justify-between items-center px-32 shadow-md mb-10">
                    <div>
                        <p className="text-3xl font-semibold">Spider-Man: No Way Home</p>
                    </div>
                    <button className="flex relative items-center border-2 rounded-md px-2 border-gray-300">
                        <div className="mx-2 my-1">
                            <img src={Export} alt="Export" />
                        </div>
                        <p className="mx-2 my-1">Export</p>
                    </button>
                </section>

                <section className="flex justify-between  mb-16 mx-28">
                    <div className="  my-8 border-2 rounded-md  border-gray-300">
                        <img src={Spiderman} alt="Spidernam" />
                    </div>
                    <div className=" my-8 border-2 rounded-md  border-gray-300">
                        <div className="flex justify-between item-center px-10 mt-10">
                            <div>
                                <p className="text-lg font-bold">Average watch time</p>
                                <p>This tracks the average watch by users every month</p>
                            </div>
                            <div >
                                <img src={dot} className="py-4" alt="dot" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="m-auto">
                                <p className="rotatea">Watch time</p>
                            </div>
                            <Areagraph />
                        </div>
                        <div className="flex justify-center">Month</div>
                    </div>
                </section>

                <section>
                    <div className="flex justify-between px-32  mb-14">
                        <div className="flex flex-col justify-start">
                            <p className=" flex text-lg font-bold">Movie Properties</p>
                            <p>A list of the details for this movie</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={Trending} className="h-4 w-auto mx-2 colo" alt="Trending" />
                            <p className="text-blue-800">Trending</p>
                        </div>
                    </div>
                    <div className="mx-32  mb-16 border-2 rounded-md  border-gray-300 ">
                        <div className="bg-gray-200 border-b-2  border-gray-300">
                            <div className="flex justify-between">
                                {movieprop.map((items, index) => {
                                    return (
                                        <p className=" flex justify-start items-center text-lg font-bold py-4 px-4 w-52">
                                            {items.title}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                        <div >
                            <div className="flex justify-between">
                                {movieprop.map((items, index) => {
                                    return (
                                        <p className="flex justify-start items-center text-lg  py-8 px-4 w-52">
                                            {items.Value}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex justify-between px-32  mb-14">
                        <div className="flex flex-col justify-start">
                            <p className=" flex text-lg font-bold">Interest Tracking Insights</p>
                            <p>Keep track of the insights on this movie</p>
                        </div>
                    </div>
                    <div className="mx-32  mb-16 border-2 rounded-md  border-gray-300 ">
                        <div className="bg-gray-200 border-b-2  border-gray-300">
                            <div className="flex justify-between">
                                {interest.map((items, index) => {
                                    return (
                                        <p className="flex justify-start items-center text-lg font-bold py-4 px-4 w-52">
                                            {items.title}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                        <div >
                            <div className="flex justify-between">
                                {interest.map((items, index) => {
                                    return (
                                        <p className="flex justify-start items-center text-lg  py-8 px-4 w-52">
                                            {items.Value}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mx-32 mb-16">
                        <Tabpanel />
                    </div>
                </section>

            </div>


        </>
    )
}

export default Dashboard