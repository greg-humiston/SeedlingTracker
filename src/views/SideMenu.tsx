import type { SeedlingTray } from "../types/seedlingTypes";

type SideMenuProps = {
    onSelect: (seedlingTrayId: number | undefined) => void;
    selectedTrayId: number | undefined;
    seedlingTrayList: SeedlingTray[]
};

export const SideMenu = (props: SideMenuProps) => {
    const {
        onSelect,
        selectedTrayId,
        seedlingTrayList
    } = props;

    if (!seedlingTrayList?.length) {
        return <></>;
    }

    return (
        <div className="flex justify-center w-full">
            <div className="flex-column mt-3">
                {
                    seedlingTrayList.map((seedlingTray) => {
                        const isSelectedClassName = seedlingTray?.id === selectedTrayId ? 'font-bold text-gray-500 cursor-default' : 'cursor-pointer';
                        return (
                            <div 
                                onClick={() => onSelect(seedlingTray?.id)}
                                className={`mt-3 ${isSelectedClassName}`}
                            >
                                <span>{seedlingTray?.title}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>        
    );
};

export default SideMenu;