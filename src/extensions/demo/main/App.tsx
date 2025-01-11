import { Card } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import useHooks from "./hooks";

function App() {
  const {} = useHooks();
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
            min="0"
            max="3687"
            defaultValue="0"
            className="flex-1 slider-custom"
          />
          <span>3687m</span>
        </div>

        {/* 現在の海面高さを表示する欄：とりあえず固定値 */}
        <div className="mt-2">
          現在の海面高さ: <strong>0m</strong>
        </div>
      </Card>
    </div>
  );
}

export default App;
