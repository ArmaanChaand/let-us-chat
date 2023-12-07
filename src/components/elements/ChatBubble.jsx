export function ChatBubble({name="Bonnie Green", time="11:46", msg="Message", status="sending", is_me=false }){
    return (
       
    <div 
        className={
            !is_me ? "flex-none flex flex-col w-full max-w-[300px] leading-1.5 p-4 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-e-xl rounded-es-xl mr-auto " :
            "flex flex-col w-full max-w-[300px] leading-1.5 p-4 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-s-xl rounded-ee-xl ml-auto" 
            }>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {!is_me  &&
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {name}
        </span>
            }
        
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
        {msg}
        </p>
        <div className="flex justify-between items-center">
            <span className=" text-xs font-normal text-gray-500 dark:text-gray-400">
                {time}
            </span>
            <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
            {status}
            </span>
        </div>
    </div>
    )
}