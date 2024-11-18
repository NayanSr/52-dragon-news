import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-lg font-semibold">Login With</h2>
            <div className="*:w-full space-y-4">
                <button className="btn "><FaGoogle/> Login withGoogle </button>
                <button className="btn"><FaGithub/> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;