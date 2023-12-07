import { useState } from "react"

export function TextInput({
    type="text",
    classes="", id="", label="", placeholder="", name="" ,is_error=false, bottom_msg="",
    input_left_elm="", input_right_elm="", defaultValue="", readOnly=false, 
    value, handleOnChange
}){
    const tw_classes = `w-full text-sm text-white font-medium h-fit`
    const [input_focus, set_input_focus] = useState(false)
    const onInputFocus = (e) => {
        set_input_focus(true)
    }
    const onInputBlur = (e) => {
        set_input_focus(false)
    }
    return(
        <div className={tw_classes + " " + classes}>
        <label
            htmlFor={id}
            className="block mb-1 text-sm text-white/60"
        >
            {label}
        </label>
        <div 
            className="flex flex-row justify-center items-center w-full h-fit rounded overflow-hidden 
            border-[1px] border-zinc-500"
            style={input_focus ? is_error ? {borderColor: "#ff3333"} : {} : {}}
        >
            {input_left_elm}
            <input
                type={type}
                id={id}
                className="text-base block w-full px-3 py-2 bg-transparent outline-none  placeholder:text-zinc-400 caret-theme-gold"
                placeholder={placeholder}
                name={name}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                defaultValue={defaultValue}
                readOnly={readOnly}
                value={value}
                onChange={handleOnChange}
            />
            {input_right_elm}
        </div>
        <p className="mt-1 text-xs text-zinc-400" style={ is_error ?  {color: "#ff3333"} : {}}>
            {bottom_msg}
        </p>
        </div>

    )
}
