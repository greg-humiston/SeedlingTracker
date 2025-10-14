import { MOCK_SEEDLING_TRAY_LIST } from "../mock_data/mock_seedling_data";
import type { SeedlingTray } from "../types/seedlingTypes";

type TrayEditorProps = {
    seedlingTrayId: number | undefined
};

// TODO: replace with api call
const getSeedlingTrayById = (seedlingTrayId: number) => {
    if (!seedlingTrayId) return undefined;

    return MOCK_SEEDLING_TRAY_LIST.find((seedlingTray: SeedlingTray) => {
        return seedlingTrayId === seedlingTray.id;
    });
};

export const TrayEditor = (props: TrayEditorProps) => {
    const { seedlingTrayId } = props;
    if (!seedlingTrayId) {
        return (
            <div className="flex w-full h-full">
                <span className="m-auto">Select a seedling tray from the side menu to continue</span>
            </div>
        );
    }

    const seedlingTrayData = getSeedlingTrayById(seedlingTrayId);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex-1 m-5">
                {JSON.stringify(seedlingTrayData)}
            </div>
            <div className="flex h-25 ml-auto mr-auto mt-5 mb-5">
                <div className="ml-3 mr-3">
                    <button className="w-30">Save</button>
                </div>
                <div className="ml-3 mr-3">
                    <button className="w-30">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default TrayEditor;