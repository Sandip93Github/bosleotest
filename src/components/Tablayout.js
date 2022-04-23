import * as React from 'react';
import { useTabs, TabPanel } from "react-headless-tabs"
import { TabSelector } from '../components/TabSelector.tsx'
import Search from '../../src/assets/search.png'
import Moviecollection from '../components/Moviecollection'
import Lists from '../components/Lists'

const moviecollection = Moviecollection();

export function Tablayout(props) {
    const [selectedTab, setSelectedTab] = useTabs([
        'movie',
        'trending',
        'upcoming',
    ]);

    return (
        <>
            <nav className="flex border-b border-gray-300">
                <TabSelector
                    isActive={selectedTab === 'movie'}
                    onClick={() => setSelectedTab('movie')}
                >
                    All Movies
                </TabSelector>
                <TabSelector
                    isActive={selectedTab === 'trending'}
                    onClick={() => setSelectedTab('trending')}
                >
                    Trending
                </TabSelector>
                <TabSelector
                    isActive={selectedTab === 'upcoming'}
                    onClick={() => setSelectedTab('upcoming')}
                >
                    Upcoming Premier
                </TabSelector>

            </nav>
            <div className="p-4">
                <TabPanel hidden={selectedTab !== 'movie'}>
                    <section>
                        <div className="flex justify-between mb-10 mt-4">
                            <div className="flex flex-col justify-start">
                                <p className=" flex text-lg font-bold">Collection of all movies</p>
                                <p>Keep track of all the movies on moviebox</p>
                            </div>
                            <div >
                                <div className="container  flex justify-center items-center px-4 sm:px-6 lg:px-8">
                                    <div className="relative"> <input type="text" className="h-14 w-96 pr-8 pl-5 border-2 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="    Search" />
                                        <div className="absolute top-5 left-4"><img src={Search} alt="S" /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" border-t-2 border-l-2 border-r-2 rounded-md  border-gray-300">
                            <div className="bg-gray-200 border-b-2  border-gray-300 pl-8">
                                <div className="flex justify-between">
                                    {moviecollection.map((items, index) => {
                                        return (
                                            <p className="flex justify-start items-center text-lg font-bold py-4 w-52">
                                                {items.title}
                                            </p>
                                        );
                                    })}
                                    <p className="flex justify-start items-center text-lg font-bold py-4 px-4 w-36"></p>
                                </div>
                            </div>

                            <div >
                                {
                                    moviecollection.map((item, index) => {
                                        return <Lists logo={item.logo}
                                            movie={item.movie}
                                            category={item.category}
                                            popularity={item.popularity}
                                            watchlist={item.watchlist}
                                            streams={item.streams}
                                            releases={item.releases} />
                                    })
                                }
                            </div>
                        </div>
                    </section>

                </TabPanel>
                <TabPanel hidden={selectedTab !== 'trending'}>
                    <section>
                        <div className="h-96 border-2 round-md border-gray-200 bg-gray-200 mt-16">
                            <p></p>
                        </div>
                        <div className="h-96 border-2 round-md border-gray-200 bg-gray-200">
                            <p className="text-xl font-bold">Trending Movies</p>
                        </div>
                    </section>
                </TabPanel>
                <TabPanel hidden={selectedTab !== 'upcoming'}>
                <section>
                        <div className="h-96 border-2 round-md border-gray-200 bg-gray-200 mt-16">
                            <p></p>
                        </div>
                        <div className="h-96 border-2 round-md border-gray-200 bg-gray-200">
                            <p className="text-xl font-bold">Upcoming Premier</p>
                        </div>
                    </section>
                </TabPanel>
            </div>
        </>
    );
}

export default Tablayout