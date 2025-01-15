function Input({Text, setText, placeholder}){
    return(
        <div>
            <input
                className="w-4/5 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mx-2"
                placeholder={`${placeholder}`}
                value={Text}
                onChange={(e)=>{setText(e.target.value)}}
            />
        </div>
    )
}
export default Input; 