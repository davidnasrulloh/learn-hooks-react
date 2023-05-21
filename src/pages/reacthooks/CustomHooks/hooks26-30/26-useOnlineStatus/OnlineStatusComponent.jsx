import useOnlineStatus from "./useOnlineStatus";

export default function OnlineStatusComponent() {
    const online = useOnlineStatus()

    // console.log(online)
    return <div>Status Online : {online?.toString()}</div>
}