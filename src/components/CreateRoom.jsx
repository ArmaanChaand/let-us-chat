import { useEffect, useState } from "react";
import { TextInput } from "./elements/Inputs";
import { useNavigate } from "react-router-dom";

export function CreateRoom({room, set_room}){
    const [username, set_username] = useState('');
    const [room_id, set_room_id] = useState('');
    const [room_passkey, set_room_passkey] = useState('');
    const navigate = useNavigate()

    const handleRoomID = (event) => {
      // Remove spaces from the input value
      const newValue = event.target.value.replace(/[^A-Za-z0-9]/g, '');
      set_room_id(newValue);
    };
    const handleUsername = (event) => {
      // Remove spaces from the input value
      const newValue = event.target.value.replace(/[^A-Za-z0-9]/g, '');
      set_username(newValue);
    };
    function handleOnSubmission(){
        const load_data = {
            room_id, room_passkey
        }
        if (room_passkey?.length < 6 || !username.length || !room_id.length) return
        // console.log(load_data)
        navigate("/" + username +"/room/" + room_id)
    }
    useEffect(()=>{
      // In your React component
  const requestNotificationPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        console.log('Notification permission:', permission);
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    };
      
    requestNotificationPermission()

  }, [])
    return(
        <div
            id="info-popup"
            className="block bg-black/30 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
            >
            <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
                <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                    <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white capitalize">
                    {room} Room
                    </h3>
                    <p className="mb-2">Enter room name and password and you're good to go.</p>
                    <form onSubmit={(e)=>e.preventDefault()} >
                        <TextInput
                            placeholder="Username"
                            classes="mb-3"
                            id="id_username"
                            name="username"
                            value={username}
                            handleOnChange={handleUsername}
                            bottom_msg=" No spaces and no special characters."
                            />
                        <TextInput
                            placeholder="Room ID"
                            classes="mb-3"
                            id="id_room_id"
                            name="room_id"
                            value={room_id}
                            handleOnChange={handleRoomID}
                            bottom_msg=" No spaces and no special characters."
                            />
                        <TextInput
                            placeholder="Room passkey."
                            id="id_room_passkey"
                            type="password"
                            name="room_passkey"
                            value={room_passkey}
                            handleOnChange={(e)=>set_room_passkey(e.target.value)}
                            bottom_msg=" Minimum 6 characters long."
                        />
                    </form>
                </div>
                <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                    <button
                    onClick={()=>set_room(prev => prev == "create" ? "join" : "create")}
                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline first-letter:capitalize"
                    >
                    {room != "create" ? "create" : "join"} a room instead.
                    </button>
                    <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                    <button
                        onClick={()=>set_room(null)}
                        id="close-modal"
                        type="button"
                        className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleOnSubmission}
                        id="confirm-button"
                        type="button"
                        className="capitalize py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        {room}
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>

    )
}