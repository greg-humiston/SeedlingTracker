import SideMenu from "./SideMenu";
import TrayEditor from "./TrayEditor";

export const Home = () => {

    return (
        <div>
            <div>
                <div>
                    <SideMenu/>
                </div>
            </div>
            <div>
                <div>
                    <span>Seedling Trays</span>
                </div>
                <div>
                    <TrayEditor/>
                </div>
            </div>
        </div>
    );
};

export default Home;