import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Find Us In</h2>
      <div className="join flex join-vertical space-y-3 *:bg-teal-50 *:justify-start">
        <button className="btn join-item"><FaFacebook/> Facebook</button>
        <button className="btn join-item"><FaTwitter/> Twitter</button>
        <button className="btn join-item"><FaInstagram/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
