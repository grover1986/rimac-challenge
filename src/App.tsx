import './styles/global.scss'
import MainLayout from './components/layout/MainLayout/MainLayout'

function App() {

  return (
		<MainLayout>
			<div className='container'>
				<h1>¡Hola! Este es el contenido principal</h1>
				<p>El Header está arriba y el Footer está abajo.</p>
			</div>
		</MainLayout>
  )
}

export default App
