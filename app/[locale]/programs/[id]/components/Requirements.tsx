import { Program } from "@/types/program";

export default function Requirements({ program }: { program: Program }) {
  return (
    <div className="bg-purple-50 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-6">Requirements</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">Entry Requirements</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-primary">•</span>
              <span>Bachelor&apos;s degree with minimum 3.0 GPA</span>
            </li>
            {/* Add more requirements */}
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-3">Language Requirements</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-primary">•</span>
              <span>IELTS: 7.0 overall (minimum 6.5 in each component)</span>
            </li>
            {/* Add more language requirements */}
          </ul>
        </div>
      </div>
    </div>
  );
}
