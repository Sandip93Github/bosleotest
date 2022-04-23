import React from 'react'

const Lists = props => {
    return (
        <div className="flex  border-b-2 border-gray-300 justify-between py-2 ">
            
            <div className="flex w-60">
                <img src={props.logo} className="flex justify-start items-center py-4 px-4" alt="movie" />
                <p className="flex justify-start items-center text-lg  py-4  font-semibold ">{props.movie}</p>
            </div>
            <div className="w-52 flex items-center">
                <p className="flex justify-start font-medium fontsz text-lg px-2 bg-blue-200 text-blue-700  border-2 rounded-full border-blue-300 ">{props.category}</p>
            </div>
            <div >
                <p className="flex justify-start items-center text-lg  py-4  w-52">{props.popularity}</p>
            </div>
            <div>
                <p className="flex justify-start items-center text-lg  py-4  w-52">{props.watchlist}</p>
            </div>
            <div>
                <p className="flex justify-start items-center text-lg  py-4 w-52 ">{props.streams}</p>
            </div>
            <div>
                <p className="flex justify-start items-center text-lg  py-4 w-52 ">{props.releases}</p>
            </div>
            <div className="flex justify-start items-center text-lg  py-4 w-36 ">
                <button className="border-2 rounded-md  border-gray-200 px-6 py-1  font-medium hover:bg-gray-100">View</button>
            </div>

        </div>
    )
}

export default Lists