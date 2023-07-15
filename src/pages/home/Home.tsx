import React, {useEffect, useState} from 'react';
import {CardCategory} from "../../shared/ui/card-category/CardCategory";
import axios from "axios";

const Home = () => {
    const [categories, setCategory] = useState([])

    useEffect(() => {
        const getDataApi = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/categories')
                setCategory(response.data)
            } catch (e) {
                alert(e)
                console.log(e);
            }

        }
        void getDataApi()

    }, [])
    return (
        <div>
            <h5 style={{margin: "20px"}} className="text-uppercase">Категории</h5>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
                {
                    categories.map(category => (
                        <CardCategory category={category}/>
                    ))
                }
            </div>
        </div>

    );
};

export default Home;