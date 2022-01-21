import React, { useState, useRef, useEffect } from 'react';

const EditEmployee = ({employee, handleUpdateEmployee}) => {
  const [formData, setFormData] = useState(employee)
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  const handleChange = evt => {
    setFormData({  ...formData, 
      [evt.target.name]: evt.target.value
    })
  }

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) :
    setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    handleUpdateEmployee(formData)
  }
  
  return ( 
    <>
    <h1>Edit Employee</h1>
    <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
      <label 
        htmlFor='bio-input'
        className='form-label'
        > Employee's Bio (required)
          <input
            type='text'
            className='form-control'
            id='nio-input'
            name='bio'
            value={formData.bio}
            onChange={handleChange}
            required
          >
          </input>
        </label>
        <button
        type='submit'
        disabled={!validForm}>
          Submit Change
        </button>

    </form>
    </>
   );
}
 
export default EditEmployee;