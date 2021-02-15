import React from 'react'

export default function TeamForm(props) {
    const { form, update, submit } = props

    const handleChange = event => {
        const { name, value } = event.target;
        update(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div>
                <section className='Name'>
                    <label>
                    Name
                    <input
                        type='text'
                        name='name'
                        placeholder='enter your name'
                        value={form.name}
                        onChange={handleChange}
                    />
                    </label>
                </section>
                <section>
                <label>
                Email
                <input
                    type='email'
                    name='email'
                    placeholder='type an email'
                    value={form.email}
                    onChange={handleChange}
                />
                </label>
            </section>
            <section>
                <label>
                Role
                <select
                    name='role'
                    value={form.role}
                    onChange={handleChange}
                >
                    <option value=''>Select a Role</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Designer'>Designer</option>
                    <option value='UX Designer'>UX Designer</option>
                    <option value='QA Tester'>QA Tester</option>
                </select>
                </label>
            </section>
        </div>
        <div className='submit'>
        <button>Submit</button>
        </div>
    </form>
    )
}