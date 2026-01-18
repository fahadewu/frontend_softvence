import React from 'react';

interface AdminInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const AdminInput = React.forwardRef<HTMLInputElement, AdminInputProps>(
    ({ label, error, className = '', ...props }, ref) => {
        return (
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                <input
                    ref={ref}
                    className={`w-full px-4 py-2.5 bg-white border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder-gray-400 text-gray-900 ${error ? 'border-red-500' : 'border-gray-200'
                        } ${className}`}
                    {...props}
                />
                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            </div>
        );
    }
);

AdminInput.displayName = 'AdminInput';
