const Divider = () => <hr className="bg-gray-800 border border-gray-800 rounded-full mx-2" />

const SideBarIcon = ({ icon, text = 'WIP' }) => {
    return (
        <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-800 hover:bg-green-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}

export default function DiscordSideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
            <SideBarIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-green-500" viewBox="0 0 20 20" fill="currentColor"></svg>} text="Home" />
            <Divider />
            <SideBarIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-green-500" viewBox="0 0 20 20" fill="currentColor"></svg>} text="Explore" />
            <SideBarIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-green-500" viewBox="0 0 20 20" fill="currentColor"></svg>} text="Servers" />
            <SideBarIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-green-500" viewBox="0 0 20 20" fill="currentColor"></svg>} text="Settings" />
            <Divider />
            <SideBarIcon icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-green-500" viewBox="0 0 20 20" fill="currentColor"></svg>} text="Logout" />

        </div>
    )
}