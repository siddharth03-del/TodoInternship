function DropDown({value, setValue}){
    return(
        <div>
            <div>
                <label htmlFor="Todo">Choose Priority : </label>
                <select className="w-1/3 sm:w-1/2 md:w-1/3 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={value} onChange={(e)=>{setValue(parseInt(e.target.value))}}>
                    <option value={1} className="text-xs max-w-fit">High</option>
                    <option value={2} className="text-xs max-w-fit">Medium</option>
                    <option value={3} className="text-xs max-w-fit">Low</option>
                </select>
            </div>
        </div>
    )
}
export default DropDown;