export default function Button({ isDisabled=false, children: text }) {
    return (
        <button className="
        border rounded-lg bg-sky-400 pr-5 pl-5 pt-2 pb-2
        hover:bg-sky-500 transition ease-in-out"
        onClick={(e) => {
            e.target.className = "border rounded-lg bg-sky-400 pr-3 pl-3 pt-2 pb-2 hover:bg-sky-500 transition ease-in-out"
            setTimeout(() => {
                e.target.className = "border rounded-lg bg-sky-400 pr-5 pl-5 pt-2 pb-2 hover:bg-sky-500 transition ease-in-out"
            }, 100)
        }}
        >{text}</button>
    )
}