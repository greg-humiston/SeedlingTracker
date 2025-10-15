import type { Seedling as SeedlingType } from "../../types/seedlingTypes";

import Herb from '../../assets/icons/herb.svg?react';
import LeafyGreen from '../../assets/icons/leafy_green.svg?react';
import Vegetable from '../../assets/icons/vegetable.svg?react';
import Fruit from '../../assets/icons/fruit.svg?react';

type SeedlingProps = {
    data: SeedlingType
};

const PLANT_TYPE_ICONS = {
    herb: Herb,
    leafy_green: LeafyGreen,
    vegetable: Vegetable,
    fruit: Fruit
};

export const Seedling = (props: SeedlingProps) => {
    const { data } = props;
    const { name, imageURL, plantType} = data;
    const IconComponent = PLANT_TYPE_ICONS[plantType] || (() => <></>);
    return (
        <div className="flex flex-col mt-3 mb-3">
            <div className="flex mt-3 mb-3">
                <div><span>{name}</span></div>
                <div className="ml-5"><IconComponent/></div>
            </div>
            <div className="w-50 h-50">
                <img src={imageURL} />
            </div>
        </div>
    );
};