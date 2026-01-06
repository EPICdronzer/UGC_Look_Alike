import React, { useState } from 'react'

function AddForm() {
    const [formData, setFormData] = useState({
    university_name: "",
    university_type: "",
    short_name: "",
    est_year: "",
    state: "",
    city: "",
    ugc_section: "",
    ugc_recognition_date: "",
    website: "",
    email: "",
    address: ""
});
const dataChange=(e)=>{
    const {name,value}=e.target
    setFormData((prev)=>({
        ...prev,
        [name]:value
    }))
}
const submitData=()=>{
    localStorage.setItem("formData",JSON.stringify(formData))
    console.log(JSON.parse(localStorage.getItem(formData)))
}
  return (
    <>
    <div className='p-16 flex justify-center items-center'>
        <form className='shadow-2xl rounded-2xl p-10 flex flex-col gap-10'>
            <div className='flex gap-24 justify-between'>
                <label className='text-xl font-semibold'>University Name:</label>
                <input
                    type="text"
                    name="university_name"
                    required
                    placeholder="Enter full university name"
                    className='rounded-2xl px-3 py-2 border-2 border-gray-200'
                    value={formData.university_name}
                    onChange={dataChange}
                />
            </div>

            <div className='flex gap-10 justify-between'>
                <label className='text-xl font-semibold'>University Type:</label>
                <select name="university_type" required className='rounded-2xl border-2 border-gray-200 px-2 py-2' value={formData.university_type}
                    onChange={dataChange}>
                    <option value="">--Select--</option>
                    <option value="Central">Central University</option>
                    <option value="State">State University</option>
                    <option value="Deemed">Deemed to be University</option>
                    <option value="Private">Private University</option>
                </select>
            </div>

            <div className='flex gap-10 justify-between'>
                <label className='text-xl font-semibold'>Short Name / Acronym:</label>
                <input
                    type="text"
                    name="short_name"
                    placeholder="e.g. DU, JNU"
                    className='rounded-2xl px-3 py-2 border-2 border-gray-200'
                    value={formData.short_name}
                    onChange={dataChange}
                />
            </div>

            <div className='flex gap-10 justify-between'>
                <label className='text-xl font-semibold'>Establishment Year:</label>
                <input
                    type="number"
                    name="est_year"
                    required
                    placeholder="YYYY"
                    className='rounded-2xl px-3 py-2 border-2 border-gray-200'
                    value={formData.est_year}
                    onChange={dataChange}
                />
            </div>

            <div className='flex gap-10 justify-between'>
                <label className='text-xl font-semibold'>State:</label>
                <input
                    type="text"
                    name="state"
                    required
                    placeholder="Enter state name"
                    className='rounded-2xl px-3 py-2 border-2 border-gray-200'
                    value={formData.state}
                    onChange={dataChange}
                />
            </div>

            <div className='flex gap-10 justify-between'>
                <label className='text-xl font-semibold'>District / City:</label>
                <input
                    type="text"
                    name="city"
                    required
                    placeholder="Enter city or district"
                    className='rounded-2xl px-3 py-2 border-2 border-gray-200'
                    value={formData.city}
                    onChange={dataChange}
                />
            </div>

            <div className='flex gap-10 justify-between'>
                <label className='text-xl font-semibold'>UGC Recognition Section:</label>
                <select name="ugc_section" required className='rounded-2xl border-2 border-gray-200 px-3 py-2' value={formData.ugc_section}
                    onChange={dataChange}>
                    <option value="">--Select--</option>
                    <option value="2f">UGC 2(f)</option>
                    <option value="12B">UGC 12(B)</option>
                    <option value="2f_12B">UGC 2(f) & 12(B)</option>
                </select>
            </div>

            <div className='flex gap-10 justify-between'>
                <label className='text-xl font-semibold'>UGC Recognition Date:</label>
                <input
                    type="date"
                    name="ugc_recognition_date"
                    className='rounded-2xl border-2 border-gray-200 px-2 py-2'
                    value={formData.ugc_recognition_date}
                    onChange={dataChange}
                />
            </div>

            <div className='flex gap-10 justify-between'>
                <label className='text-xl font-semibold'>Official Website:</label>
                <input
                    type="url"
                    name="website"
                    required
                    placeholder="https://www.example.ac.in"
                    className='rounded-2xl px-3 py-2 border-2 border-gray-200'
                    value={formData.website}
                    onChange={dataChange}
                />
            </div>

            <div className='flex gap-10 justify-between'>
                <label className='text-xl font-semibold'>Contact Email:</label>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="info@university.ac.in"
                    className='rounded-2xl px-3 py-2 border-2 border-gray-200'
                    value={formData.email}
                    onChange={dataChange}
                />
            </div>

            <div className='flex gap-10 justify-between'>
                <label className='text-xl font-semibold'>University Address:</label>
                <textarea
                    name="address"
                    required
                    rows="3"
                    placeholder="Enter full address"
                    className='rounded-2xl px-4 py-2 border-2 border-gray-200'
                    value={formData.address}
                    onChange={dataChange}
                ></textarea>
            </div>
        <button  type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition"
        onClick={()=>submitData()}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default AddForm