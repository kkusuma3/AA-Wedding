const RSVPForm = () => (
    <div className="flex flex-col justify-evenly md:w-2/3 mx-auto">
        <span className="text-white text-2xl md:text-4xl text-center">RSVP</span>
        <div className="flex flex-col justify-evenly pt-5 md:pt-10">
            <div className="flex flex-row flex-wrap justify-between space-y-4 md:space-y-0 py-4">
                <input type="text" title="Name" placeholder="Name*" className="p-3 md:p-5 w-full md:w-5/12 rounded-md"/>
                <input type="text" title="Email" placeholder="Email" className="p-3 md:p-5 w-full md:w-5/12 rounded-md"/>
            </div>
            <div className="flex flex-row flex-wrap justify-between space-y-4 md:space-y-0 py-4">
                <input type="text" title="Phone Number" placeholder="Phone Number" className="p-3 md:p-5 w-full md:w-5/12 rounded-md"/>
                <select title="Number of Guests" name="Number of Guests" className="p-3 md:p-5 w-full md:w-5/12 rounded-md">
                    <option value="" disabled selected>{`Number of Guest(s)*`}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className="py-4">
                <select title="Attendance Confirmation" name="Attendance Confirmation" className="p-3 md:p-5 w-full rounded-md">
                    <option value="" disabled selected>Attendance Confirmation</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
        </div>
        <span className="text-white text-md">{`*Required fields`}</span>
        <button className="m-2 rounded-3xl w-1/3 mx-auto p-2 md:p-3 text-white bg-blue-700">Submit</button>
    </div>
);

export default RSVPForm;