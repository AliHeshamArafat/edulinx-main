import { Program } from "@/types/program";

export default function ProgramStats({ program }: { program: Program }) {
  return (
    <div className="bg-white rounded-lg p-6 sticky top-6">
      <div className="text-3xl font-bold mb-2">
        {program.fees.toLocaleString()} {program.feesCurrency}
        <span className="text-base font-normal text-gray-500">/year</span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-sm text-gray-600 ml-1">5.0</span>
        </div>
        <span className="text-gray-400">•</span>
        <span className="text-sm text-gray-600">3,500+ enrolled</span>
      </div>

      <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 mb-6">
        Apply Now
      </button>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-500">Duration</div>
          <div className="font-medium">{program.duration} Months</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-500">Start Date</div>
          <div className="font-medium">{new Date(program.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-500">Fee</div>
          <div className="font-medium">{program.fees.toLocaleString()} {program.feesCurrency}/year</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-500">Ranking</div>
          <div className="font-medium">Top {program.ranking}%</div>
        </div>
      </div>
    </div>
  );
} 