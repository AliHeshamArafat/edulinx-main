import { Program } from "@/types/program";

export default function ProgramContent({ program }: { program: Program }) {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About Program</h2>
        <p className="text-gray-600">{program.description_Localized}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Learning Outcomes</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Develop strategic thinking and decision-making abilities</span>
          </li>
          {/* Add more learning outcomes */}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Requirements</h2>
        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="font-medium mb-3">Entry Requirements</h3>
          <ul className="space-y-2 text-sm">
            {program.programRequirement.map((req, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 