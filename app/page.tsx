export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            EstimateAI
          </h1>
          <p className="text-xl text-gray-600">
            AIを活用したプロジェクト見積もり・WBS自動生成ツール
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            主な機能
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                📝 要件の自然言語入力
              </h3>
              <p className="text-gray-700">
                自然な日本語で要件を入力するだけ
              </p>
            </div>

            <div className="p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                🤖 AIによる工数予測
              </h3>
              <p className="text-gray-700">
                Claude APIが自動で工数を計算
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                📊 WBS自動生成
              </h3>
              <p className="text-gray-700">
                タスクを階層的に自動分解
              </p>
            </div>

            <div className="p-6 bg-pink-50 rounded-lg">
              <h3 className="text-lg font-semibold text-pink-900 mb-2">
                📅 ガントチャート
              </h3>
              <p className="text-gray-700">
                スケジュールを視覚的に表示
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              開発中のプロジェクトです
            </p>
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              🚧 MVP開発中（2025年12月完成予定）
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
