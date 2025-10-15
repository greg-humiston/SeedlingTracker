import type { SeedlingTrayItem } from "../../types/seedlingTypes";
import { Seedling } from "../seedling/Seedling";

type SeedlingGridItemProps = {
    data: SeedlingTrayItem
};

export const SeedlingGridItem = (props: SeedlingGridItemProps) => {
    const { data } = props;
    const { seedling } = data;
    return (
        <div className="w-full flex justify-center border-3 border-white">
            <div className="">
                <Seedling
                    data={seedling}
                />
            </div>
        </div>
    );
};