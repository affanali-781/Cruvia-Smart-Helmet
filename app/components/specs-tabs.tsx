"use client";

import type React from "react";

import { useState } from "react";
import { Check, Zap, Gauge, Thermometer } from "lucide-react";

interface SpecTab {
	id: string;
	label: string;
	icon: React.ReactNode;
	specs: Array<{ label: string; value: string }>;
}

const SPEC_TABS: SpecTab[] = [
	{
		id: "materials",
		label: "Materials",
		icon: <Gauge size={20} />,
		specs: [
			{ label: "Shell", value: "Impact Resistant Polymer" },
			{ label: "Padding", value: "Multi-Density Foam" },
			{ label: "Lining", value: "Moisture-Wicking Fabric" },
			{ label: "Strap", value: "Premium Nylon Composite" },
		],
	},
	{
		id: "performance",
		label: "Performance",
		icon: <Zap size={20} />,
		specs: [
			{ label: "Weight", value: "320g" },
			{ label: "Impact Rating", value: "CE EN 1080:2024" },
			{ label: "Impact Protection", value: "Multi-Impact Certified" },
			{ label: "Coverage", value: "360° Protection" },
		],
	},
	{
		id: "conditions",
		label: "Operating Conditions",
		icon: <Thermometer size={20} />,
		specs: [
			{ label: "Temperature Range", value: "-20°C to 60°C" },
			{ label: "Humidity Range", value: "0% to 100%" },
			{ label: "UV Resistance", value: "Enhanced Protection" },
			{ label: "Water Resistance", value: "IP54 Rated" },
		],
	},
	{
		id: "durability",
		label: "Durability",
		icon: <Check size={20} />,
		specs: [
			{ label: "Lifespan", value: "5-7 Years" },
			{ label: "Warranty", value: "3-Year Coverage" },
			{ label: "Maintenance", value: "Easy Care" },
			{ label: "Replacement", value: "Modular Components" },
		],
	},
];

export function SpecsTabs() {
	const [activeTab, setActiveTab] = useState(0);
	const activeSpec = SPEC_TABS[activeTab];

	return (
		<div className="w-full">
			{/* Tab Navigation */}
			<div className="flex justify-center gap-2 md:gap-3 mb-8">
				{SPEC_TABS.map((tab, idx) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(idx)}
						className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
							activeTab === idx
								? "bg-amber-500 text-white shadow-lg scale-105"
								: "bg-amber-500/20 text-amber-500"
						}`}
					>
						{tab.icon}
						<span className="hidden sm:inline">{tab.label}</span>
					</button>
				))}
			</div>

			{/* Specs Grid */}
			<div className="relative min-h-96 w-1/2 mx-auto overflow-hidden">
				<div
					className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500"
					key={activeSpec.id}
				>
					{activeSpec.specs.map((spec, idx) => (
						<div
							key={idx}
							className="bg-linear-to-br from-amber-400/50 to-amber-500/20 border border-border rounded-lg p-6 hover:border-amber-200/50 transition-all duration-300 hover:shadow-lg"
							style={{
								animation: `slideUp 0.5s ease-out ${idx * 0.1}s both`,
							}}
						>
							<p className="text-sm uppercase tracking-wider text-[#1D546C] mb-2">
								{spec.label}
							</p>
							<p className="text-2xl md:text-3xl font-bold text-[#1D546C]">
								{spec.value}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Animation Keyframes */}
			<style jsx>{`
				@keyframes slideUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</div>
	);
}
