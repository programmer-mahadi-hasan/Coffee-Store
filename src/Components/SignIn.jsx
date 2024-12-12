import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                //update last login time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const signInInfo = { email, lastSignInTime };
                fetch('http://localhost:5000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signInInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('signIn info updated in db', data)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="my-8">
            <div className="bg-card text-primary-foreground p-8 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center text-accent">Join Us Today!</h2>
                <form onSubmit={handleSignIn}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-muted">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-3 mt-1 text-input border border-muted rounded-lg focus:ring focus:ring-primary transition duration-300 hover:border-accent" placeholder="Your email address" required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-muted">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-4 py-3 mt-1 text-input border border-muted rounded-lg focus:ring focus:ring-primary transition duration-300 hover:border-accent" placeholder="Your password" required />
                    </div>

                    <button type="submit" className="w-full bg-amber-600 text-white font-bold py-3 rounded-lg hover:bg-amber-800 transition duration-300 shadow-md">Sign In</button>
                </form>
                <div className="mt-6 text-center">
                    <span className="text-secondary">Or sign up with</span>
                    <a href="#" className="block mt-3 bg-rose-500 py-3 rounded-lg hover:bg-rose-800 text-white font-bold transition duration-300 shadow-md">Sign In with Google</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;