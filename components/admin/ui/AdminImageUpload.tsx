'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface AdminImageUploadProps {
    label: string;
    value?: string; // URL string or Base64 string or empty
    onChange: (value: string | null) => void;
    error?: string;
}

export const AdminImageUpload = ({ label, value, onChange, error }: AdminImageUploadProps) => {
    const [preview, setPreview] = useState<string | null>(value || null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Update preview when value changes from props
    useEffect(() => {
        setPreview(value || null);
    }, [value]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setPreview(base64String);
                onChange(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemove = () => {
        setPreview(null);
        onChange(null);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>

            <div className={`relative border-2 border-dashed rounded-xl p-4 transition-colors ${error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-primary hover:bg-gray-50'
                }`}>
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />

                {preview ? (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src={preview}
                            alt="Preview"
                            fill
                            className="object-cover"
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation(); // Prevent triggering file input
                                handleRemove();
                            }}
                            className="absolute top-2 right-2 p-1.5 bg-white/90 text-red-500 rounded-full shadow-sm hover:bg-red-50 z-20"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                        <div className="p-3 bg-white rounded-full shadow-sm mb-3">
                            <Upload size={24} className="text-primary" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Click or drag image to upload</p>
                        <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    </div>
                )}
            </div>
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
};
