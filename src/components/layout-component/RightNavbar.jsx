import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div className="space-y-8">
           <SocialLogin/>
           <FindUs/>
        </div>
    );
};

export default RightNavbar;