'use client';

import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, Layout, Users, Award, Image as ImageIcon, Link as LinkIcon, Type } from 'lucide-react';
import { AboutData } from '@/types/about';

export default function AboutAdminPage() {
    const [data, setData] = useState<AboutData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch('/api/about');
            const jsonData = await res.json();
            setData(jsonData);
        } catch (error) {
            console.error('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        if (!data) return;
        setSaving(true);
        setMessage('');
        try {
            const res = await fetch('/api/about', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                setMessage('Data updated successfully!');
                setTimeout(() => setMessage(''), 3000);
            } else {
                setMessage('Failed to update data');
            }
        } catch (error) {
            setMessage('An error occurred');
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (section: keyof AboutData, key: string, value: any) => {
        if (!data) return;
        const sectionData = data[section];
        if (typeof sectionData === 'object' && sectionData !== null && !Array.isArray(sectionData)) {
            setData({
                ...data,
                [section]: {
                    ...sectionData,
                    [key]: value
                }
            });
        }
    };

    const handleNestedChange = (section: keyof AboutData, index: number, key: string, value: any, subArrayName?: string) => {
        if (!data) return;
        const sectionData = data[section] as any;

        if (subArrayName) {
            const updatedArray = [...sectionData[subArrayName]];
            updatedArray[index] = { ...updatedArray[index], [key]: value };
            setData({
                ...data,
                [section]: {
                    ...sectionData,
                    [subArrayName]: updatedArray
                }
            });
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (base64: string) => void) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                callback(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    if (loading || !data) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="max-w-5xl mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-white z-10 p-4 shadow-sm border-b">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">About Us Page Management</h1>
                    <p className="text-gray-500 text-sm">Update content for the public About Us page</p>
                </div>
                <div className="flex items-center gap-4">
                    {message && <span className="text-green-600 font-medium">{message}</span>}
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 bg-primary hover:bg-green-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg disabled:opacity-50"
                        style={{ backgroundColor: 'var(--primary-color)' }} // Fallback if tailwind config issue
                    >
                        <Save size={18} />
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </div>

            <div className="space-y-8">
                {/* Hero Section */}
                <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Layout className="text-blue-500" /> Hero Section</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title Line 1</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg"
                                value={data.hero.title1}
                                onChange={(e) => handleChange('hero', 'title1', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title Line 2</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg"
                                value={data.hero.title2}
                                onChange={(e) => handleChange('hero', 'title2', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CTA Text</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg"
                                value={data.hero.cta.text}
                                onChange={(e) => setData({
                                    ...data,
                                    hero: { ...data.hero, cta: { ...data.hero.cta, text: e.target.value } }
                                })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CTA Link</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg"
                                value={data.hero.cta.link}
                                onChange={(e) => setData({
                                    ...data,
                                    hero: { ...data.hero, cta: { ...data.hero.cta, link: e.target.value } }
                                })}
                            />
                        </div>
                    </div>
                </section>

                {/* About Image */}
                <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><ImageIcon className="text-purple-500" /> Main Image</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="file"
                                accept="image/*"
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                onChange={(e) => handleImageUpload(e, (base64) => setData({ ...data, aboutImage: base64 }))}
                            />
                        </div>
                        <div className="mt-4 h-48 w-full bg-gray-50 rounded-lg overflow-hidden border border-dashed border-gray-300 relative flex items-center justify-center">
                            {data.aboutImage ? (
                                <img src={data.aboutImage} alt="Preview" className="h-full object-contain" />
                            ) : (
                                <span className="text-gray-400 text-sm">No image selected</span>
                            )}
                        </div>
                    </div>
                </section>

                {/* Who We Are */}
                <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Users className="text-green-500" /> Who We Are</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg"
                                value={data.whoWeAre.heading}
                                onChange={(e) => handleChange('whoWeAre', 'heading', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description (HTML supported)</label>
                            <textarea
                                className="w-full p-2 border rounded-lg h-32"
                                value={data.whoWeAre.description}
                                onChange={(e) => handleChange('whoWeAre', 'description', e.target.value)}
                            />
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="font-semibold mb-2">Counters</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {data.whoWeAre.counters.map((counter, idx) => (
                                    <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                                        <div className="space-y-2">
                                            <input
                                                placeholder="Label"
                                                className="w-full p-2 border rounded"
                                                value={counter.label}
                                                onChange={(e) => handleNestedChange('whoWeAre', idx, 'label', e.target.value, 'counters')}
                                            />
                                            <input
                                                placeholder="Value"
                                                type="number"
                                                className="w-full p-2 border rounded"
                                                value={counter.value}
                                                onChange={(e) => handleNestedChange('whoWeAre', idx, 'value', Number(e.target.value), 'counters')}
                                            />
                                            <input
                                                placeholder="Suffix (+)"
                                                className="w-full p-2 border rounded"
                                                value={counter.suffix}
                                                onChange={(e) => handleNestedChange('whoWeAre', idx, 'suffix', e.target.value, 'counters')}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="text-orange-500" /> Why Choose Us</h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.whyChooseUs.heading}
                                    onChange={(e) => handleChange('whyChooseUs', 'heading', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Sub-Heading</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.whyChooseUs.subHeading}
                                    onChange={(e) => handleChange('whyChooseUs', 'subHeading', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {data.whyChooseUs.cards.map((card, idx) => (
                                <div key={idx} className="p-4 border rounded-lg bg-gray-50 flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        {card.id}
                                    </div>
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            placeholder="Title"
                                            className="w-full p-2 border rounded"
                                            value={card.title}
                                            onChange={(e) => handleNestedChange('whyChooseUs', idx, 'title', e.target.value, 'cards')}
                                        />
                                        <div className="flex flex-col gap-2">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="block w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                                onChange={(e) => handleImageUpload(e, (base64) => handleNestedChange('whyChooseUs', idx, 'image', base64, 'cards'))}
                                            />
                                            {card.image && <img src={card.image} alt="Thumbnail" className="h-10 w-10 object-cover rounded border" />}
                                        </div>
                                        <textarea
                                            placeholder="Description"
                                            className="w-full p-2 border rounded col-span-2"
                                            value={card.description}
                                            onChange={(e) => handleNestedChange('whyChooseUs', idx, 'description', e.target.value, 'cards')}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Users className="text-indigo-500" /> Our Team</h2>
                    <div className="space-y-4">
                        <input
                            placeholder="Heading"
                            className="w-full p-2 border rounded-lg"
                            value={data.team.heading}
                            onChange={(e) => handleChange('team', 'heading', e.target.value)}
                        />
                        <input
                            placeholder="Sub-Heading"
                            className="w-full p-2 border rounded-lg"
                            value={data.team.subHeading}
                            onChange={(e) => handleChange('team', 'subHeading', e.target.value)}
                        />
                        <textarea
                            placeholder="Description"
                            className="w-full p-2 border rounded-lg"
                            value={data.team.description}
                            onChange={(e) => handleChange('team', 'description', e.target.value)}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.team.images.map((img, idx) => (
                                <div key={idx} className="p-4 border rounded-lg flex flex-col gap-3">
                                    <div className="relative h-40 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                                        {img ? (
                                            <img src={img} alt="Team Member" className="h-full object-contain" />
                                        ) : (
                                            <span className="text-gray-400 text-sm">No Image</span>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="block w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        onChange={(e) => handleImageUpload(e, (base64) => {
                                            const newImages = [...data.team.images];
                                            newImages[idx] = base64;
                                            setData({
                                                ...data,
                                                team: { ...data.team, images: newImages }
                                            });
                                        })}
                                    />
                                    <button
                                        className="w-full p-2 text-red-500 bg-red-50 hover:bg-red-100 rounded flex items-center justify-center gap-2"
                                        onClick={() => {
                                            const newImages = data.team.images.filter((_, i) => i !== idx);
                                            setData({ ...data, team: { ...data.team, images: newImages } });
                                        }}
                                    >
                                        <Trash2 size={16} /> Remove Member
                                    </button>
                                </div>
                            ))}
                            <button
                                className="w-full p-2 border-2 border-dashed rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2 min-h-[200px]"
                                onClick={() => {
                                    setData({ ...data, team: { ...data.team, images: [...data.team.images, ''] } });
                                }}
                            >
                                <Plus size={24} /> Add Team Member
                            </button>
                        </div>
                    </div>
                </section>

                {/* Awards (simplified for brevity, can be expanded) */}
                <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="text-yellow-500" /> Awards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {data.awards.items.map((award, idx) => (
                            <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                                <input
                                    className="w-full p-2 border rounded mb-2"
                                    value={award.title}
                                    onChange={(e) => handleNestedChange('awards', idx, 'title', e.target.value, 'items')}
                                />
                                <select
                                    className="w-full p-2 border rounded"
                                    value={award.type}
                                    onChange={(e) => handleNestedChange('awards', idx, 'type', e.target.value, 'items')}
                                >
                                    <option value="fiverr">Fiverr</option>
                                    <option value="upwork">Upwork</option>
                                    <option value="clutch">Clutch</option>
                                </select>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Marquee Logos */}
                <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><ImageIcon className="text-teal-500" /> Marquee Logos (SVG)</h2>
                    <div className="space-y-4">
                        {data.marqueeLogos.map((logo, idx) => (
                            <div key={idx} className="flex gap-4 items-start p-4 border rounded-lg bg-gray-50">
                                <div className="w-20 bg-gray-800 p-2 rounded flex items-center justify-center" dangerouslySetInnerHTML={{ __html: logo }} />
                                <textarea
                                    className="flex-1 p-2 border rounded h-20 text-xs font-mono"
                                    value={logo}
                                    onChange={(e) => {
                                        const newLogos = [...data.marqueeLogos];
                                        newLogos[idx] = e.target.value;
                                        setData({ ...data, marqueeLogos: newLogos });
                                    }}
                                />
                                <button
                                    className="text-red-500 p-2"
                                    onClick={() => {
                                        const newLogos = data.marqueeLogos.filter((_, i) => i !== idx);
                                        setData({ ...data, marqueeLogos: newLogos });
                                    }}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                        <button
                            className="w-full p-2 border-2 border-dashed rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2"
                            onClick={() => {
                                setData({ ...data, marqueeLogos: [...data.marqueeLogos, '<svg>New Logo</svg>'] });
                            }}
                        >
                            <Plus size={18} /> Add SVG Logo
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
}
