
import useEventListener from '../../hooks11-15/13-useEventListener/useEventListener';
import useTimeout from './../../hooks1-5/2-useTimeout/useTimeout';
import useEffectOnce from './../../hooks16-20/20-useEffectOnce/useEffectOnce';

export default function useLongPress(ref, cb, { delay = 250 } = {}) {
    const { reset, clear } = useTimeout(cb, delay)
    useEffectOnce(clear)

    useEventListener("mousedown", reset, ref.current)
    useEventListener("touchstart", reset, ref.current)

    useEventListener("mouseup", clear, ref.current)
    useEventListener("mouseleave", clear, ref.current)
    useEventListener("touchend", clear, ref.current)
}