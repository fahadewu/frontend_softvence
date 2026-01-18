import React from 'react';
import '../(dashboard)/admin.css'; // Reuse admin variables if needed, or keeping it isolated

// We might want to include the admin.css for consistency if it has global variables, 
// but since we are refactoring, let's just make sure we have access to Tailwind.
// Tailwind works via global css usually, but 'admin.css' in dashboard had some specific utilities.
// We can just import globals-custom for font variables if needed, or rely on tailwind config.
// Let's import the tailwind directives via a new shared css or just rely on global? 
// The issue is root layout imports globals-custom.css. 
// App router hierarchies: Root Layout -> Admin Auth Layout. 
// So Root Layout styles apply.

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <main className="relative z-10 w-full flex justify-center">
                {children}
            </main>
        </div>
    );
}
