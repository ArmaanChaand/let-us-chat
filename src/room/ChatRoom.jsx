import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ChatBubble } from "../components/elements/ChatBubble"
import { TextInput } from "../components/elements/Inputs"
import { ChatBox } from "../components/ChatBox"

export default function ChatRoom({}){
    const {user_id, room_id} = useParams()
    const [message, set_message] = useState()
    const [room_messages, set_messages] = useState([
        {
            message: "Hello",
            user: "Me",
        }
    ])

    const handleMessageChange = (event) => {
        const newValue = event.target.value;
        
        // Check for initial space and update the state
        if (!newValue.startsWith(' ')) {
            set_message(newValue);
        }
      };
   
    function handleOnSubmit(e){
        e.preventDefault();
        if(!message?.length || message.startsWith(" ")) return 
        const formData = {message, user:user_id}
        set_messages(prev => [formData, ...prev ])
        set_message("")
        console.log(formData)


    }
    return(
        <section className="w-full px-2 sm:px-10 md:w-10/12 lg:w-1/2 h-full mx-auto flex flex-col justify-center items-center">
                    <nav className="w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
            <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {room_id}
            </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/"
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
                Exit
            </Link>
            
            </div>
        </div>
        </nav>
        <ChatBox
            room_id={room_id}
            room_messages={room_messages}
            user_id={user_id}
        />
        <form 
            className="w-full pb-3 flex justify-center items-center gap-2"
            onSubmit={handleOnSubmit}
        >
            <TextInput
                name="message"
                id="id_message"
                value={message}
                handleOnChange={handleMessageChange}
                placeholder="Type here..."
            />
            <button
                // onClick={()=>set_room("create")}
                className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                Send
                <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
        </form>
        </section>

    )
}