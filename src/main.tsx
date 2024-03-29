import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.sass'

import { Provider } from 'react-redux'
import { setupStore } from './redux/store.ts'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
)
