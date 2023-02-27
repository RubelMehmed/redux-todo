import React from 'react'
import TickImg from '../assets/images/double-tick.png'
import NoteImg from '../assets/images/notes.png'
import PlusImg from '../assets/images/plus.png'

const Header = () => {
  return (
    <div>
        <form
            className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        >
            <img
                src={NoteImg}
                className="w-6 h-6"
                alt="Add todo"
            />
            <input
                type="text"
                placeholder="Type your todo"
                className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            />
            <button
                type="submit"
                className={`appearance-none w-8 h-8 bg-[url(${PlusImg})] bg-no-repeat bg-contain`}
            ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li className="flex space-x-1 cursor-pointer">
                <img
                    className="w-4 h-4"
                    src={TickImg}
                    alt="Complete"
                />
                <span>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer">Clear completed</li>
        </ul>
</div>
  )
}

export default Header