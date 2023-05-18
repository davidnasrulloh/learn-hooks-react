import isEqual from "lodash/fp/isEqual"
import { useEffect } from "react"
import { useRef } from "react"

export default function useDeepCompareEffect(callback, dependencies) {
    const currentDependeciesRef = useRef()

    if (!isEqual(currentDependeciesRef.current, dependencies)) {
        currentDependeciesRef.current = dependencies
    }

    useEffect(callback, [currentDependeciesRef.current])

}