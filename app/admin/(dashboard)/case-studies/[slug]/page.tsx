'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { AdminPageHeader, AdminInput, AdminTextArea, AdminImageUpload } from '@/components/admin/ui';

export default function EditCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        client: '',
        year: '',
        categories: [] as string[],
        services: '',
        description: '',
        image: '',
        content: '',
        sections: [] as any[]
    });

    useEffect(() => {
        const fetchCaseStudy = async () => {
            try {
                const response = await fetch(`/api/case-studies/${slug}`);
                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        title: data.title || '',
                        slug: data.slug || '',
                        client: data.client || '',
                        year: data.year || '',
                        categories: data.categories || [],
                        services: data.services || '',
                        description: data.description || '',
                        image: data.image || '',
                        content: data.content || '',
                        sections: data.sections || []
                    });
                } else {
                    console.error('Failed to fetch case study');
                    router.push('/admin/case-studies');
                }
            } catch (error) {
                console.error('Error fetching case study', error);
            } finally {
                setFetching(false);
            }
        };
        fetchCaseStudy();
    }, [slug, router]);

    const addSection = (type: string) => {
        let newSection: any = { type };
        switch (type) {
            case 'hero':
                newSection = { ...newSection, subHeading: '', heading: '', image: '' };
                break;
            case 'projectInfo':
                newSection = { ...newSection, client: '', category: '', liveUrl: '', services: [] as string[], description: '' };
                break;
            case 'fullWidthImage':
                newSection = { ...newSection, image: '' };
                break;
            case 'problemChallengesSolution':
                newSection = { ...newSection, problem: '', challenges: '', solution: '' };
                break;
            case 'gallery':
                newSection = { ...newSection, images: ['', ''] };
                break;
            case 'testimonial':
                newSection = { ...newSection, quote: '', clientName: '', clientRole: '', clientImage: '' };
                break;
            case 'designProcess':
                newSection = { ...newSection, headline: '', steps: [{ title: '', description: '' }] };
                break;
            case 'visualDesigns':
                newSection = { ...newSection, headline: '', images: ['', '', ''] };
                break;
        }
        setFormData({ ...formData, sections: [...formData.sections, newSection] });
    };

    const removeSection = (index: number) => {
        const newSections = [...formData.sections];
        newSections.splice(index, 1);
        setFormData({ ...formData, sections: newSections });
    };

    const updateSection = (index: number, data: any) => {
        const newSections = [...formData.sections];
        newSections[index] = { ...newSections[index], ...data };
        setFormData({ ...formData, sections: newSections });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`/api/case-studies/${slug}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/admin/case-studies');
            } else {
                console.error('Failed to update case study');
            }
        } catch (error) {
            console.error('Error updating case study', error);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-primary" size={32} />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto font-outfit pb-20">
            <Link href="/admin/case-studies" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-4 transition-colors">
                <ArrowLeft size={16} className="mr-1" />
                Back to Case Studies
            </Link>

            <AdminPageHeader
                title={`Edit Case Study: ${formData.title}`}
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Case Studies', href: '/admin/case-studies' }, { label: 'Edit' }]}
            />

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Metadata */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
                    <h2 className="text-lg font-bold text-gray-800 font-poppins border-b pb-4">Basic Metadata</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AdminInput
                            label="Title (Admin only)"
                            placeholder="e.g. Oneisone Entertainment"
                            required
                            value={formData.title}
                            onChange={(e: any) => setFormData({ ...formData, title: e.target.value })}
                        />
                        <AdminInput
                            label="Slug"
                            placeholder="e.g. oneisone-entertainment-2"
                            required
                            value={formData.slug}
                            onChange={(e: any) => setFormData({ ...formData, slug: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AdminInput
                            label="Client Name"
                            placeholder="e.g. Oneisone Entertainment"
                            required
                            value={formData.client}
                            onChange={(e: any) => setFormData({ ...formData, client: e.target.value })}
                        />
                        <AdminInput
                            label="Year"
                            placeholder="e.g. 2024"
                            value={formData.year}
                            onChange={(e: any) => setFormData({ ...formData, year: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AdminInput
                            label="Categories (Comma separated)"
                            placeholder="e.g. branding, ui-ux"
                            value={formData.categories.join(', ')}
                            onChange={(e: any) => setFormData({ ...formData, categories: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) })}
                        />
                        <AdminInput
                            label="Services List"
                            placeholder="e.g. UI/UX Design, Vibe Coding"
                            value={formData.services}
                            onChange={(e: any) => setFormData({ ...formData, services: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <AdminInput
                            label="Search Description (Home Page)"
                            placeholder="e.g. Branding & Design"
                            value={formData.description}
                            onChange={(e: any) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    <div className="space-y-4 pt-4">
                        <AdminImageUpload
                            label="Thumbnail Image (Home Page Grid)"
                            value={formData.image}
                            onChange={(value: string | null) => setFormData({ ...formData, image: value || '' })}
                        />
                    </div>
                </div>

                {/* Dynamic Sections */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-800 font-poppins">Page Sections</h2>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => addSection('hero')}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold hover:bg-gray-200"
                            >
                                + Hero
                            </button>
                            <button
                                type="button"
                                onClick={() => addSection('projectInfo')}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold hover:bg-gray-200"
                            >
                                + Info
                            </button>
                            <button
                                type="button"
                                onClick={() => addSection('fullWidthImage')}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold hover:bg-gray-200"
                            >
                                + Full Image
                            </button>
                            <button
                                type="button"
                                onClick={() => addSection('problemChallengesSolution')}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold hover:bg-gray-200"
                            >
                                + P/C/S
                            </button>
                            <button
                                type="button"
                                onClick={() => addSection('gallery')}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold hover:bg-gray-200"
                            >
                                + Gallery
                            </button>
                            <button
                                type="button"
                                onClick={() => addSection('testimonial')}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold hover:bg-gray-200"
                            >
                                + Testimonial
                            </button>
                            <button
                                type="button"
                                onClick={() => addSection('designProcess')}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold hover:bg-gray-200"
                            >
                                + Design Proc
                            </button>
                            <button
                                type="button"
                                onClick={() => addSection('visualDesigns')}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold hover:bg-gray-200"
                            >
                                + Visuals
                            </button>
                        </div>
                    </div>

                    {formData.sections.length === 0 && (
                        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-10 text-center">
                            <p className="text-gray-400">No sections added yet. Click the buttons above to build your page.</p>
                        </div>
                    )}

                    <div className="space-y-6">
                        {formData.sections.map((section, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative group">
                                <button
                                    type="button"
                                    onClick={() => removeSection(index)}
                                    className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    Remove
                                </button>

                                <div className="mb-4 inline-block px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">
                                    Section: {section.type}
                                </div>

                                {section.type === 'hero' && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <AdminInput
                                                label="Hero sub-heading"
                                                value={section.subHeading}
                                                onChange={(e: any) => updateSection(index, { subHeading: e.target.value })}
                                            />
                                            <AdminInput
                                                label="Hero heading"
                                                value={section.heading}
                                                onChange={(e: any) => updateSection(index, { heading: e.target.value })}
                                            />
                                        </div>
                                        <AdminImageUpload
                                            label="Hero Image"
                                            value={section.image}
                                            onChange={(val: string | null) => updateSection(index, { image: val || '' })}
                                        />
                                    </div>
                                )}

                                {section.type === 'projectInfo' && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <AdminInput
                                                label="Client"
                                                value={section.client}
                                                onChange={(e: any) => updateSection(index, { client: e.target.value })}
                                            />
                                            <AdminInput
                                                label="Category"
                                                value={section.category}
                                                onChange={(e: any) => updateSection(index, { category: e.target.value })}
                                            />
                                            <AdminInput
                                                label="Live URL"
                                                value={section.liveUrl}
                                                onChange={(e: any) => updateSection(index, { liveUrl: e.target.value })}
                                            />
                                        </div>
                                        <AdminInput
                                            label="Services (Comma separated)"
                                            value={section.services.join(', ')}
                                            onChange={(e: any) => updateSection(index, { services: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) })}
                                        />
                                        <AdminTextArea
                                            label="Project Details Description"
                                            value={section.description}
                                            onChange={(e: any) => updateSection(index, { description: e.target.value })}
                                        />
                                    </div>
                                )}

                                {section.type === 'fullWidthImage' && (
                                    <AdminImageUpload
                                        label="Full Width Image"
                                        value={section.image}
                                        onChange={(val: string | null) => updateSection(index, { image: val || '' })}
                                    />
                                )}

                                {section.type === 'problemChallengesSolution' && (
                                    <div className="space-y-4">
                                        <AdminTextArea
                                            label="Problem Statement"
                                            value={section.problem}
                                            onChange={(e: any) => updateSection(index, { problem: e.target.value })}
                                        />
                                        <AdminTextArea
                                            label="Challenges We Faced"
                                            value={section.challenges}
                                            onChange={(e: any) => updateSection(index, { challenges: e.target.value })}
                                        />
                                        <AdminTextArea
                                            label="Solution"
                                            value={section.solution}
                                            onChange={(e: any) => updateSection(index, { solution: e.target.value })}
                                        />
                                    </div>
                                )}

                                {section.type === 'gallery' && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {section.images.map((img: string, i: number) => (
                                                <AdminImageUpload
                                                    key={i}
                                                    label={`Gallery Image ${i + 1}`}
                                                    value={img}
                                                    onChange={(val: string | null) => {
                                                        const newImgs = [...section.images];
                                                        newImgs[i] = val || '';
                                                        updateSection(index, { images: newImgs });
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => updateSection(index, { images: [...section.images, ''] })}
                                            className="text-xs text-primary font-bold"
                                        >
                                            + Add Image
                                        </button>
                                    </div>
                                )}

                                {section.type === 'testimonial' && (
                                    <div className="space-y-4">
                                        <AdminTextArea
                                            label="Quote"
                                            value={section.quote}
                                            onChange={(e: any) => updateSection(index, { quote: e.target.value })}
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <AdminInput
                                                label="Client Name"
                                                value={section.clientName}
                                                onChange={(e: any) => updateSection(index, { clientName: e.target.value })}
                                            />
                                            <AdminInput
                                                label="Client Role"
                                                value={section.clientRole}
                                                onChange={(e: any) => updateSection(index, { clientRole: e.target.value })}
                                            />
                                        </div>
                                        <AdminImageUpload
                                            label="Client Image"
                                            value={section.clientImage}
                                            onChange={(val: string | null) => updateSection(index, { clientImage: val || '' })}
                                        />
                                    </div>
                                )}

                                {section.type === 'designProcess' && (
                                    <div className="space-y-4">
                                        <AdminInput
                                            label="Headline"
                                            value={section.headline}
                                            onChange={(e: any) => updateSection(index, { headline: e.target.value })}
                                        />
                                        <div className="space-y-4 border-l-2 border-gray-100 pl-4 mt-4">
                                            {section.steps.map((step: any, i: number) => (
                                                <div key={i} className="space-y-2 relative group-item">
                                                    <div className="flex justify-between items-center text-xs font-bold text-gray-400">
                                                        <span>Step {i + 1}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const newSteps = [...section.steps];
                                                                newSteps.splice(i, 1);
                                                                updateSection(index, { steps: newSteps });
                                                            }}
                                                            className="text-red-400 opacity-0 group-item-hover:opacity-100"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                    <AdminInput
                                                        label="Title"
                                                        placeholder="Step Title"
                                                        value={step.title}
                                                        onChange={(e: any) => {
                                                            const newSteps = [...section.steps];
                                                            newSteps[i] = { ...newSteps[i], title: e.target.value };
                                                            updateSection(index, { steps: newSteps });
                                                        }}
                                                    />
                                                    <AdminTextArea
                                                        label="Description"
                                                        placeholder="Step Description"
                                                        value={step.description}
                                                        onChange={(e: any) => {
                                                            const newSteps = [...section.steps];
                                                            newSteps[i] = { ...newSteps[i], description: e.target.value };
                                                            updateSection(index, { steps: newSteps });
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => updateSection(index, { steps: [...section.steps, { title: '', description: '' }] })}
                                                className="text-xs text-primary font-bold"
                                            >
                                                + Add Step
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {section.type === 'visualDesigns' && (
                                    <div className="space-y-4">
                                        <AdminInput
                                            label="Headline"
                                            value={section.headline}
                                            onChange={(e: any) => updateSection(index, { headline: e.target.value })}
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {section.images.map((img: string, i: number) => (
                                                <AdminImageUpload
                                                    key={i}
                                                    label={`Screen ${i + 1}`}
                                                    value={img}
                                                    onChange={(val: string | null) => {
                                                        const newImgs = [...section.images];
                                                        newImgs[i] = val || '';
                                                        updateSection(index, { images: newImgs });
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => updateSection(index, { images: [...section.images, ''] })}
                                            className="text-xs text-primary font-bold"
                                        >
                                            + Add Screen
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legacy Content Fallback */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-4 opacity-50 border-dashed">
                    <h3 className="text-sm font-medium text-gray-700 font-poppins italic">Legacy HTML Content (Optional)</h3>
                    <AdminTextArea
                        label="HTML Body"
                        placeholder="Only use if not using sections..."
                        className="min-h-[100px] font-mono text-xs"
                        value={formData.content}
                        onChange={(e: any) => setFormData({ ...formData, content: e.target.value })}
                    />
                </div>

                {/* Action Buttons */}
                <div className="pt-6 flex justify-end gap-3 px-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-70 shadow-lg shadow-primary/20"
                    >
                        {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                        {loading ? 'Saving Changes...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
}
