import React, {useState} from 'react'

// Todolist
const AppUseState3 = () => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(storageJobs ?? [])
    
    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            // save in local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)

            return newJobs
        })
        setJob('')
    }

    return (
        <div style={{ padding: 32 }}>
            <input value={job} onChange={e => setJob(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => 
                    <li key={index}>{job}</li>
                )}
            </ul>   
        </div>

        
    )
}

export default AppUseState3
