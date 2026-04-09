// ... অন্য ইম্পোর্ট ...
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routers/router';
import { RouterProvider } from 'react-router-dom';
// আপনার AuthProvider ফাইলটি ইম্পোর্ট করুন (সঠিক পাথ ব্যবহার করুন)
import AuthProvider from './providers/AuthProvider'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* এখানে AuthProvider দিয়ে ঘিরে দিন */}
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>,
)