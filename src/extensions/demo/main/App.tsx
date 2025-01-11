import { Card } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useSeaLevel } from "./hooks"; 

function App() {
  const { seaLevel, handleSliderChange } = useSeaLevel(0);

  // スライダーの最小値・最大値
  const MIN = 0;
  const MAX = 3687;
  return (
    <div className="p-4">
      {/* カードコンポーネント */}
      <Card className="p-4 w-full max-w-md">
        {/* ラベル（タイトル） */}
        <Label className="mb-2 block text-lg font-semibold">
          海面の高さ
        </Label>

        {/* スライダー：ここでは Input type="range" を利用 */}
        <div className="flex items-center gap-2">
          <span>0m</span>
          <Input
            type="range"
            min={MIN}
            max={MAX}
            value={seaLevel}         
            onChange={handleSliderChange}
            className="slider-custom flex-1"
          />
          <span>{MAX}m</span>
        </div>
        <div className="mt-2">
          現在の海面高さ: <strong>{seaLevel}m</strong>
        </div>
      </Card>
    </div>
  );
}

export default App;
