import { Check } from "lucide-react";
import Image from "next/image";
import helmet from "@/public/assets/cruvia-helmet.png";
import { SpecsTabs } from "./specs-tabs";

const Specs = () => {
	return (
		<>
			<h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#1D546C] text-center">
				Premium Specifications
			</h2>
			<div className="w-full h-1/2 flex font-[inter] text-[#1D546C]">
				<div className="w-1/2 flex flex-col items-center justify-center">
					<div className=" rounded-xl bg-amber-100 border-3 border-amber-300 p-10 gap-10">
						<h3 className="text-2xl font-semibold mb-6">
							Technical Excellence
						</h3>
						{[
							"Impact Resistant Polymer Shell",
							"Multi-Density Foam Padding",
							"Integrated Ventilation System",
							"Lightweight Carbon Composite",
							"Adjustable Fit System",
							"Moisture-Wicking Interior",
						].map((spec, idx) => (
							<div key={idx} className="flex gap-3 items-start">
								<div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1">
									<Check size={14} />
								</div>
								<span className="text-lg">{spec}</span>
							</div>
						))}
					</div>
				</div>

				<div className="w-1/2">
					<Image src={helmet} alt="helmet" />
				</div>
			</div>
			<SpecsTabs />
		</>
	);
};

export default Specs;
