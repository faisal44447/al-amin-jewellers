const StafSalaryCard = ({ staff }) => {
    const { name, monthlySalary, totalTaken, weeklyExpenses, month, year, submissionDate, submissionTime } = staff;

    const remaining = monthlySalary - totalTaken;
    const isOverLimit = totalTaken > monthlySalary;
    const isCompleted = totalTaken === monthlySalary;

    return (
        <div className="card bg-base-100 shadow-xl border-t-4 border-blue-500 relative">
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <span className="badge badge-ghost">{month}, {year}</span>
                </div>

                <div className="divider m-0"></div>

                <div className="space-y-2">
                    <p className="flex justify-between"><span>মূল বেতন:</span> <b>৳{monthlySalary}</b></p>
                    <p className="flex justify-between"><span>মোট নিয়েছেন:</span> <b className="text-orange-600">৳{totalTaken}</b></p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md my-3">
                    <p className="text-sm font-semibold mb-1">সাপ্তাহিক খরচ:</p>
                    <div className="grid grid-cols-2 gap-2">
                        {weeklyExpenses?.map((exp, index) => (
                            <span key={index} className="text-xs bg-white p-1 border rounded text-center">
                                সপ্তাহ {index + 1}: ৳{exp}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={`p-3 rounded-lg font-bold text-center mt-2 ${isOverLimit ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'}`}>
                    {isOverLimit ? <p>বেশি নিয়েছেন: ৳{Math.abs(remaining)}</p> :
                        <p>{isCompleted ? "পুরো বেতন পরিশোধিত" : `বাকি পাবেন: ৳${remaining}`}</p>}
                </div>

                {isCompleted && (
                    <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded-lg text-center">
                        <p className="text-blue-600 font-bold text-sm">✅ Salary Completed</p>
                    </div>
                )}

                {/* তারিখ ও সময় প্রদর্শন */}
                <div className="mt-4 pt-2 border-t text-[10px] text-gray-400 flex justify-between">
                    <span>এন্ট্রি তারিখ: {submissionDate || 'N/A'}</span>
                    <span>সময়: {submissionTime || 'N/A'}</span>
                </div>
            </div>
        </div>
    );
};

export default StafSalaryCard;