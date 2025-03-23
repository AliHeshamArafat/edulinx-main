import { Program } from "@/types/program";

export default function AboutProgram({ program }: { program: Program }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">About Program</h2>
      <p className="text-gray-600 mb-6">{program.description_Localized}</p>
      
      <h3 className="font-medium mb-3">Learning Outcomes</h3>
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-600">Develop strategic thinking and decision-making abilities</span>
        </li>
        {/* Add more learning outcomes */}
      </ul>
    </div>
  );
} 