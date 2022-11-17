import React, { useState } from 'react';
import 'swiper/swiper-bundle.min.css'
import CategoriesItem from './CateforiesItem/CategoriesItem';
import ModalWindow from '../ModalWindow/ModalWindow';
const Categories = () => {

    const [categoriesComponent, setCategoriesComponent] = useState({ name: "none" });

    const categoriesItem = [
        { name: "Lights", component: "Lights" },
        { name: "TV", component: "TV" },
        { name: "Intercom", component: "Intercom" },
        { name: "Sound", component: "Sound" }]

    const roomsItem = [
        { name: "Room 1", component: "Room1" },
        { name: "Room 2", component: "Room2" },
        { name: "Room 3", component: "Room3" },
        { name: "Room 4", component: "Room4" },
    ]

    return (
        <div className="shadow-xl grid px-39px rounded-25px dark:text-white shadow-xl dark:bg-add_dark pb-44px">
            <ModalWindow categoriesComponent={categoriesComponent} setCategoriesComponent={setCategoriesComponent} />
            <p className="text-18px mt-20px mb-20px">Categories</p>
            <CategoriesItem categoriesItem={categoriesItem} setComponent={setCategoriesComponent} />
            <div className="border-b-1px border-light_gray mt-30px" />
            <p className="text-18px mt-20px mb-20px">Rooms</p>
            <CategoriesItem categoriesItem={roomsItem} />
        </div>
    );
};

export default Categories;