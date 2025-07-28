import React from 'react';
import { Mail, User } from 'lucide-react';

interface UserCardProps {
  name: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {name}
          </h3>
          <div className="flex items-center space-x-2 mt-1">
            <Mail className="w-4 h-4 text-gray-400" />
            <p className="text-sm text-gray-600 truncate">
              {email}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;