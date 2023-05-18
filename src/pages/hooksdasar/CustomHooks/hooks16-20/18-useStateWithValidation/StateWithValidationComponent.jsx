import useStateWithValidation from "./useStateWithValidation";


export default function StateWithValidationComponent() {
    const [username, setUsername, isValidName] = useStateWithValidation(
        name => name.length > 5,
        ""
    )

    return (
        <>
            <div>Valid: {isValidName.toString()}</div>
            <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2" placeholder="Write for anything..."
                type="text"
                name="name"
                value={username}
                onChange={e => setUsername(e.target.value)} />
        </>
    )
}