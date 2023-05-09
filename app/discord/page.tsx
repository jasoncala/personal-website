import DiscordChannelBar from "../components/DiscordChannelBar";
import DiscordContentContainer from "../components/DiscordContentContainer";
import DiscordSideBar from "../components/DiscordSideBar";

export default function Discord() {
    return (
        <div className="flex">
            <DiscordSideBar />
            <DiscordChannelBar />
            <DiscordContentContainer />
        </div>
    )
}