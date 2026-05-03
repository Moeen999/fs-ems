import { User } from "lucide-react";
import { useState } from "react";

const ProfileForm = ({ initialData, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="card p-5 sm:p-6 mb-6">
      <h2 className="text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2 ">
        <User className="w-5 h-5 text-slate-400" /> Public Profile
      </h2>
    </form>
  );
};

export default ProfileForm;
