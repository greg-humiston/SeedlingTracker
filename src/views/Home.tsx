import SideMenu from "./SideMenu";
import TrayEditor from "./TrayEditor";

export const Home = () => {

    return (
        <div className="flex border h-full w-full">
            <div className="flex border w-50 h-full">
                <SideMenu/>
            </div>
            <div className="flex flex-col border h-full w-full">
                <div className="border flex justify-center items-center h-25 w-full">
                    <div>
                        <span>Seedling Trays</span>
                    </div>
                </div>
                <div className="border flex-1 w-full">
                    <TrayEditor/>
                </div>
            </div>
        </div>
    );
};

export default Home;