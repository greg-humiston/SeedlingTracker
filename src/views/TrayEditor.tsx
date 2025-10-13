import { MOCK_SEEDLING_TRAY_LIST } from "../mock_data/mock_seedling_data";
import type { SeedlingTray } from "../types/seedlingTypes";

type TrayEditorProps = {
    seedlingTrayId: number
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
            <div>
                <span>Select a seedling tray from the side menu to continue</span>
            </div>
        );
    }

    const seedlingTrayData = getSeedlingTrayById(seedlingTrayId);

    return (
        <div>
            <div>
                {JSON.stringify(seedlingTrayData)}
            </div>
            <div>
                <div>
                    <button>Save</button>
                </div>
                <div>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default TrayEditor;