import type { Seedling, SeedlingTray, SeedlingTrayItem } from "../types/seedlingTypes";

const NU_MEX_JOE_E_PARKER : Seedling = {
    id: 1,
    name: 'Nu Mex Joe E. Parker',
    imageURL: 'https://www.botanicalinterests.com/cdn/shop/files/0165w_Pepper-Chile-NuMex-Joe-Parker_nkjh3q.jpg?v=1751914676&width=1946',
    plantType: 'Hot Pepper'
};

const PASILLA_BAJIO : Seedling = {
    id: 2,
    name: 'Pasilla Bajio',
    imageURL: 'https://www.botanicalinterests.com/cdn/shop/files/0181w_Pepper-Chile-Pasilla-Bajio_ur2amz.jpg?v=1751915816&width=1946',
    plantType: 'Hot Pepper'
};

const BLACK_KRIM : Seedling = {
    id: 3,
    name: 'Black Krim',
    imageURL: 'https://www.botanicalinterests.com/cdn/shop/files/3118w_Tomato-Pole-Black-Krim-ORG_8d69200c-43eb-4a73-a365-a3349fb589f9.jpg?v=1751916652&width=1946',
    plantType: 'Tomato'
};

const HOMEMADE_PICKLES : Seedling = {
    id: 4,
    name: 'Homemade Pickles',
    imageURL: 'https://www.botanicalinterests.com/cdn/shop/files/3135w_Cucumber-Homemade-Pickles-ORG_2o9kyr.jpg?v=1751911090&width=1946',
    plantType: 'Cucumber'
};

const MOCK_SEEDLING_TRAY_ITEM_ONE : SeedlingTrayItem = {
    id: 1,
    rowNumber: 1,
    columnNumber: 1,
    seedling: NU_MEX_JOE_E_PARKER
};

const MOCK_SEEDLING_TRAY_ITEM_TWO : SeedlingTrayItem = {
    id: 1,
    rowNumber: 1,
    columnNumber: 2,
    seedling: PASILLA_BAJIO
};

const MOCK_SEEDLING_TRAY_ITEM_THREE : SeedlingTrayItem = {
    id: 1,
    rowNumber: 2,
    columnNumber: 1,
    seedling: BLACK_KRIM
};

const MOCK_SEEDLING_TRAY_ITEM_FOUR : SeedlingTrayItem = {
    id: 1,
    rowNumber: 2,
    columnNumber: 2,
    seedling: HOMEMADE_PICKLES
};

export const MOCK_SEEDLING_TRAY_ONE : SeedlingTray = {
    id: 1,
    title: 'TEST SEED TRAY',
    width: 2,
    length: 2,
    seedlings: [
        MOCK_SEEDLING_TRAY_ITEM_ONE,
        MOCK_SEEDLING_TRAY_ITEM_TWO,
        MOCK_SEEDLING_TRAY_ITEM_THREE,
        MOCK_SEEDLING_TRAY_ITEM_FOUR
    ]
};

export const MOCK_SEEDLING_TRAY_TWO : SeedlingTray = {
    id: 2,
    title: 'TEST SEED TRAY 2',
    width: 2,
    length: 2,
    seedlings: [
        MOCK_SEEDLING_TRAY_ITEM_ONE,
        MOCK_SEEDLING_TRAY_ITEM_TWO,
        MOCK_SEEDLING_TRAY_ITEM_THREE,
        MOCK_SEEDLING_TRAY_ITEM_FOUR
    ]
};

export const MOCK_SEEDLING_TRAY_THREE : SeedlingTray = {
    id: 3,
    title: 'TEST SEED TRAY 3',
    width: 2,
    length: 2,
    seedlings: [
        MOCK_SEEDLING_TRAY_ITEM_ONE,
        MOCK_SEEDLING_TRAY_ITEM_TWO,
        MOCK_SEEDLING_TRAY_ITEM_THREE,
        MOCK_SEEDLING_TRAY_ITEM_FOUR
    ]
};

export const MOCK_SEEDLING_TRAY_FOUR : SeedlingTray = {
    id: 4,
    title: 'TEST SEED TRAY 4',
    width: 2,
    length: 2,
    seedlings: [
        MOCK_SEEDLING_TRAY_ITEM_ONE,
        MOCK_SEEDLING_TRAY_ITEM_TWO,
        MOCK_SEEDLING_TRAY_ITEM_THREE,
        MOCK_SEEDLING_TRAY_ITEM_FOUR
    ]
};

export const MOCK_SEEDLING_TRAY_LIST : SeedlingTray[] = [
    MOCK_SEEDLING_TRAY_ONE,
    MOCK_SEEDLING_TRAY_TWO,
    MOCK_SEEDLING_TRAY_THREE,
    MOCK_SEEDLING_TRAY_FOUR
];