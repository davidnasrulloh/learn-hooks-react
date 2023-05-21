
import useToggle from './../../hooks1-5/1-useToggle/useToggle';
import useRenderCount from './useRenderCount';

export default function RenderCountComponent() {
    const [boolean, toggle] = useToggle(false)

    const renderCount = useRenderCount()

    return (
        <>
            <div>{boolean.toString()}</div>
            <div>{renderCount}</div>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={toggle}>Toggle</button>
        </>
    )
}