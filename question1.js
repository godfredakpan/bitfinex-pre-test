
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const MyComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    const fetchData = () => {
        return async (dispatch) => {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            dispatch({
                type: 'FETCH_DATA',
                payload: data,
            });
        };
    }

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};