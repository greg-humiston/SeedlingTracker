import { useState } from "react";
import SideMenu from "./SideMenu";
import TrayEditor from "./TrayEditor";
import { MOCK_SEEDLING_TRAY_LIST } from "../mock_data/mock_seedling_data";

export const Home = () => {
    const [selectedTrayId, setSelectedTrayId] = useState(-1);
    return (
        <div className="flex border h-full w-full">
            <div className="flex border w-50 h-full">
                <SideMenu
                    onSelect={(id) => setSelectedTrayId(id)}
                    selectedTrayId={selectedTrayId}
                    seedlingTrayList={MOCK_SEEDLING_TRAY_LIST}
                />
            </div>
            <div className="flex flex-col border h-full w-full">
                <div className="border flex justify-center items-center h-25 w-full">
                    <div>
                        <span>Seedling Trays</span>
                    </div>
                </div>
                <div className="border flex-1 w-full">
                    <TrayEditor
                        seedlingTrayId={selectedTrayId}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;