import SalaryCalcForm from './SalaryCalcForm'

const showResults = () => {
  console.log('show results')
}

function App() {
  return (
    <>
      <SalaryCalcForm onSubmit={showResults} />
    </>
  )
}

export default App
