import { ChatBubble } from "./elements/ChatBubble";

export function ChatBox({room_messages=[], user_id}){
    return(
        <div className="h-full w-full overflow-y-auto overflow-x-hidden">
            <div className="w-full h-fit flex flex-col-reverse justify-end items-stretch gap-2 py-2">
                {room_messages.map(msg => (
                    <ChatBubble
                        key={msg?.message}
                        name={msg?.user}
                        msg={msg?.message}
                        is_me={msg?.user == user_id}
                    />
                ))}
            </div>
        </div>
    )
}