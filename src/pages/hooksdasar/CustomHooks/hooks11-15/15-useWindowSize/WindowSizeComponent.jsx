import useWindowSize from "./useWindowSize";


export default function WindowSizeComponent() {
    const { width, height } = useWindowSize()

    return (
        <div>
            {width} X {height}
        </div>
    )
}