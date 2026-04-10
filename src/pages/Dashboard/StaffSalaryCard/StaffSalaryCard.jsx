import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // আইকন ব্যবহারের জন্য
import useAuth from '../../../hooks/useAuth'; // আপনার সঠিক পাথ দিন

const StaffSalaryCard = ({ staff, handleDelete, handleEdit }) => {
    const { _id, name, monthlySalary, totalTaken, weeklyExpenses, month, year, submissionDate, submissionTime } = staff;
    const { user } = useAuth(); 

    const isAdmin = user?.email === 'mdfaisal51777@gmail.com';

    const remaining = monthlySalary - totalTaken;
    const isOverLimit = totalTaken > monthlySalary;
    const isCompleted = totalTaken === monthlySalary;

    return (
        <div className="card bg-base-100 shadow-xl border-t-4 border-blue-500 relative transition hover:shadow-2xl">
            <div className="card-body p-5">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="card-title text-2xl font-bold">{name}</h2>
                        <span className="text-xs text-gray-400">{month}, {year}</span>
                    </div>
                    {isAdmin && (
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(staff)}
                                className="btn btn-sm btn-circle btn-outline btn-info"
                                title="এডিট করুন"
                            >
                                <FaEdit />
                            </button>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn btn-sm btn-circle btn-outline btn-error"
                                title="ডিলিট করুন"
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                    )}
                </div>

                <div className="divider m-0 mt-1"></div>

                <div className="space-y-1 mt-2">
                    <p className="flex justify-between text-sm"><span>মূল বেতন:</span> <b>৳{monthlySalary}</b></p>
                    <p className="flex justify-between text-sm"><span>মোট নিয়েছেন:</span> <b className="text-orange-600">৳{totalTaken}</b></p>
                </div>

                <div className="bg-gray-50 p-2 rounded-md my-3 border border-dashed">
                    <p className="text-[11px] font-semibold mb-1 text-gray-500 uppercase">লেনদেন/সাপ্তাহিক খরচ:</p>
                    <div className="grid grid-cols-2 gap-2">
                        {weeklyExpenses?.map((exp, index) => (
                            <span key={index} className="text-[10px] bg-white p-1 border rounded text-center">
                                সপ্তাহ {index + 1}: ৳{exp}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={`p-3 rounded-lg font-bold text-center mt-auto ${isOverLimit ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'}`}>
                    {isOverLimit ? <p className="text-sm">বেশি নিয়েছেন: ৳{Math.abs(remaining)}</p> :
                        <p className="text-sm">{isCompleted ? "বেতন পরিশোধিত ✅" : `বাকি পাবেন: ৳${remaining}`}</p>}
                </div>

                <div className="mt-4 pt-2 border-t text-[9px] text-gray-400 flex justify-between">
                    <span>📅 {submissionDate || 'N/A'}</span>
                    <span>⏰ {submissionTime || 'N/A'}</span>
                </div>
            </div>
        </div>
    );
};

export default StaffSalaryCard;