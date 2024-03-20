'use client'
import { useUserAuth } from "./_utils/auth-context.js";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const handleLogin = async () => {
    await gitHubSignIn();
  };
  const handleLogout = async () => {
    await firebaseSignOut();
  };

return (
    <div>
        {/* If user is logged in, display welcome message, logout button, and link to shopping list page */}
        {user ? (
            <div style={{ background: 'lightgray', padding: '10px', color: 'black', textAlign: 'center' }}>
                <h1 style={{ fontSize: '24px', fontFamily: 'Indie Flower' }}>Welcome, {user.displayName} ({user.email})</h1>
                <div>
                    <button style={{ background: 'lightblue', padding: '5px 10px', margin: '0 auto' }} onClick={handleLogout}>Logout</button>
                    <span style={{ margin: '0 10px' }}></span>
                    <button style={{ background: 'lightblue', padding: '5px 10px', margin: '0 auto' }} onClick={() => window.location.href = '/week-8/shopping-list'}>Shopping List</button>
                </div>
            </div>
        ) : (
            <div style={{ background: 'lightgray', padding: '10px', color: 'black', textAlign: 'center' }}>
                <button style={{ background: 'lightblue', padding: '5px 10px', margin: '0 auto' }} onClick={handleLogin}>Login with GitHub</button>
            </div>
        )}
    </div>
);
};

export default LandingPage;