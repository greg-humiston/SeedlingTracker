import type { SeedlingTray, SeedlingTrayItem } from "../../types/seedlingTypes";
import { SeedlingGridItem } from "./SeedlingGridItem";

type SeedlingGridProps = {
    data: SeedlingTray
};

export const SeedlingGrid = (props: SeedlingGridProps) => {
    const { data } = props;

    const { width, length, seedlings } = data;
    return (
        <div 
            className={`grid grid-cols-${width} grid-rows-${length} border-1`}
        >
            {
                seedlings.map((seedlingTrayItem: SeedlingTrayItem) => {
                    return (
                        <SeedlingGridItem
                            key={seedlingTrayItem.id}
                            data={seedlingTrayItem}
                        />
                    );
                })
            }
        </div>
    );
};