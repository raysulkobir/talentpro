import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Service from './Service';
import fetchTodo from '../redux/serviceList/thunk/fetchTodo';

export default function ServiceList() {
    const servicesList = useSelector((state) => state.serviceList);
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodo)
    }, [dispatch])


    return (
        <div className="mt-2 text-gray-700 text-sm overflow-y-auto" >
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
                    {
                        servicesList.map(service => (
                            <Service service={service} key={service.id} />
                        ))
                    }
               
                </div>
            </div>
        </div>
    )
}
