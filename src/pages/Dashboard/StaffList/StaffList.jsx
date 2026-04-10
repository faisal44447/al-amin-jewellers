import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import StafSalaryCard from '../../Dashboard/StafSalaryCard/StafSalaryCard.jsx'; 

const StaffList = () => {
    const [staffs, setStaffs] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/stafs') // আপনার ব্যাকএন্ডের রুট অনুযায়ী
            .then(res => setStaffs(res.data))
            .catch(err => console.error(err));
    }, [axiosSecure]);

    return (
        <div className="max-w-7xl mx-auto p-5">
            <h2 className="text-3xl font-bold text-center mb-10">স্টাফ বেতন ও খরচ রেকর্ড</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffs.map(staff => (
                    <StafSalaryCard key={staff._id} staff={staff} />
                ))}
            </div>
        </div>
    );
};

export default StaffList;