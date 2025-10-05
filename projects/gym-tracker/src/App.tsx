import { useState, useEffect } from 'react'
import './App.css'

interface Exercise {
  id: string
  name: string
  sets: number
  reps: number
  weight: number
}

interface Workout {
  id: string
  date: string
  exercises: Exercise[]
}

function App() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [currentExercises, setCurrentExercises] = useState<Exercise[]>([])
  const [exerciseName, setExerciseName] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')
  const [showHistory, setShowHistory] = useState(false)

  // Load workouts from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('gym-workouts')
    if (saved) {
      setWorkouts(JSON.parse(saved))
    }
  }, [])

  // Save workouts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('gym-workouts', JSON.stringify(workouts))
  }, [workouts])

  const addExercise = () => {
    if (!exerciseName || !sets || !reps || !weight) {
      alert('Please fill in all fields')
      return
    }

    const newExercise: Exercise = {
      id: Date.now().toString(),
      name: exerciseName,
      sets: parseInt(sets),
      reps: parseInt(reps),
      weight: parseFloat(weight)
    }

    setCurrentExercises([...currentExercises, newExercise])
    setExerciseName('')
    setSets('')
    setReps('')
    setWeight('')
  }

  const removeExercise = (id: string) => {
    setCurrentExercises(currentExercises.filter(ex => ex.id !== id))
  }

  const saveWorkout = () => {
    if (currentExercises.length === 0) {
      alert('Add at least one exercise')
      return
    }

    const newWorkout: Workout = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      exercises: currentExercises
    }

    setWorkouts([newWorkout, ...workouts])
    setCurrentExercises([])
    alert('Workout saved!')
  }

  const deleteWorkout = (id: string) => {
    setWorkouts(workouts.filter(w => w.id !== id))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Gym Tracker</h1>
        <p>Track your workouts and monitor your progress</p>
      </header>

      <div className="container">
        <div className="button-group">
          <button
            className={!showHistory ? 'tab-active' : 'tab-inactive'}
            onClick={() => setShowHistory(false)}
          >
            New Workout
          </button>
          <button
            className={showHistory ? 'tab-active' : 'tab-inactive'}
            onClick={() => setShowHistory(true)}
          >
            History ({workouts.length})
          </button>
        </div>

        {!showHistory ? (
          <div className="workout-section">
            <h2>Add Exercise</h2>
            <div className="form">
              <input
                type="text"
                placeholder="Exercise name (e.g., Bench Press)"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
              />
              <div className="form-row">
                <input
                  type="number"
                  placeholder="Sets"
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Reps"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                />
                <input
                  type="number"
                  step="0.5"
                  placeholder="Weight (kg)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <button className="btn-primary" onClick={addExercise}>
                Add Exercise
              </button>
            </div>

            {currentExercises.length > 0 && (
              <div className="current-workout">
                <h3>Current Workout</h3>
                {currentExercises.map(exercise => (
                  <div key={exercise.id} className="exercise-card">
                    <div className="exercise-info">
                      <strong>{exercise.name}</strong>
                      <span>{exercise.sets} sets × {exercise.reps} reps @ {exercise.weight}kg</span>
                    </div>
                    <button
                      className="btn-delete"
                      onClick={() => removeExercise(exercise.id)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button className="btn-save" onClick={saveWorkout}>
                  Save Workout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="history-section">
            <h2>Workout History</h2>
            {workouts.length === 0 ? (
              <p className="empty-state">No workouts yet. Start tracking!</p>
            ) : (
              workouts.map(workout => (
                <div key={workout.id} className="workout-card">
                  <div className="workout-header">
                    <h3>{workout.date}</h3>
                    <button
                      className="btn-delete"
                      onClick={() => deleteWorkout(workout.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="exercises-list">
                    {workout.exercises.map(exercise => (
                      <div key={exercise.id} className="exercise-item">
                        <strong>{exercise.name}</strong>
                        <span>{exercise.sets} × {exercise.reps} @ {exercise.weight}kg</span>
                      </div>
                    ))}
                  </div>
                  <div className="workout-stats">
                    Total exercises: {workout.exercises.length}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Created by Gonçalo De Almeida</p>
        <p>
          <a href="mailto:goncalo.dealmeida.dev@gmail.com">goncalo.dealmeida.dev@gmail.com</a>
        </p>
      </footer>
    </div>
  )
}

export default App
