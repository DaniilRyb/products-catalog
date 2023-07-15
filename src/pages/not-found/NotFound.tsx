import React from 'react';
import error from "../../assets/error.png"

export const NotFound = () => {
    return (
        <div className="text-center position-relative p-5">
            <div>
                <h3>Ошибка 404. Страница не найдена :(</h3></div>
            <div>
                <p>Error 404. Page not found</p>
            </div>
            <img src={error} alt="error" width="400px" className="p-1"/>
        </div>

    );
};
