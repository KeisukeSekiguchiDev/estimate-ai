# EstimateAI

AIを活用したプロジェクト見積もり・WBS自動生成ツール

## 概要

EstimateAIは、フリーランスエンジニアが要件定義から工数見積もり、WBS作成、ガントチャート生成までを自動化するツールです。Claude APIを活用し、過去のプロジェクトデータから学習して見積もり精度を向上させます。

## 主な機能

- 📝 要件の自然言語入力
- 🤖 AIによる工数予測
- 📊 WBS自動生成
- 📅 ガントチャート作成
- 💾 データ保存（使うほど精度向上）
- ✏️ 完全な編集機能（タスク名、工数、追加/削除、並べ替え）
- 🎯 タスク詳細管理（担当者、優先度、進捗%、依存関係）

## 技術スタック

- **フロントエンド**: Next.js 15, TypeScript, Tailwind CSS
- **バックエンド**: Next.js API Routes
- **データベース**: Supabase (PostgreSQL), Prisma
- **AI**: Claude API (Anthropic)
- **UI**: react-gantt-chart
- **デプロイ**: Vercel

## 開発状況

🚧 現在開発中（MVP: 2025年12月完成予定）

- [x] 要件定義完了
- [ ] プロジェクトセットアップ
- [ ] データベース設計
- [ ] 実装開始

## ドキュメント

詳細な要件定義は [EstimateAI_Requirements.md](./EstimateAI_Requirements.md) を参照してください。

## 作成者

**関口佳祐**
- GitHub: [@KeisukeSekiguchiDev](https://github.com/KeisukeSekiguchiDev)
- LinkedIn: [関口佳祐](https://www.linkedin.com/in/佳祐-関口-5a3329391/)
- Qiita: [@Keisuke_Sekiguchi](https://qiita.com/Keisuke_Sekiguchi)
- Portfolio: https://portfolio-site-snowy-eight.vercel.app/

## ライセンス

MIT License
