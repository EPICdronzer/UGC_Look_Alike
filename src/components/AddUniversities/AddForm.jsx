import React from 'react'

function AddForm() {
  return (
    <>
    <div className='p-24 flex justify-center items-center'>
        <form className='shadow-2xl rounded-2xl p-10 flex flex-col gap-10 border-2'>
            <div className='flex gap-10 justify-between'>
                <label>University Name:</label>
                <input type="text" name="university_name" required className='border-2 rounded-2xl shadow-2xl'></input>
            </div>
            <div className='flex gap-10 justify-between'>
                <label>University Type:</label>
                <select name="university_type" required>
                    <option value="">--Select--</option>
                    <option>Central</option>
                    <option>State</option>
                    <option>Deemed</option>
                    <option>Private</option>
                </select>
            </div>
            <div className='flex gap-10 justify-between'>
                <label>Short Name / Acronym:</label>
                <input type="text" name="short_name" className='border-2 rounded-2xl shadow-2xl'></input>
            </div>
            <div className='flex gap-10 justify-between' >
                <label>Establishment Year:</label>
                <input type="number" name="est_year" required className='border-2 rounded-2xl shadow-2xl'></input>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddForm