import { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Google login
    console.log('Login with:', email);
  };

  return (
    <div className="relative">
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsLogin(!isLogin)}
        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-all"
      >
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.71-.95 7.93-2.66V20.5c-1.06.65-2.25 1.07-3.53 1.25v-3.39H12v4.41z" fill="#34A853"/>
          <path d="M12 23c-2.97 0-5.71-.95-7.93-2.66L4.5 19.5c1.06-.65 2.25-1.07 3.53-1.25v3.39h3.97v-4.41z" fill="#FBBC05"/>
          <path d="M12 16.9c-1.28-.18-2.47-.6-3.53-1.25v-3.39l-3.45 3.45C5.71 19.05 8.45 20 12 20v-3.1z" fill="#EA4335"/>
        </svg>
        <span className="text-white text-sm font-medium">
          {isLogin ? 'Sign in' : 'Sign up'}
        </span>
      </motion.button>
    </div>
  );
};

export default Login;
