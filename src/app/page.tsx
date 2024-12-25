export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              あなたのビジネスを次のレベルへ
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              最新のテクノロジーを活用して、ビジネスの可能性を広げましょう。
              私たちのソリューションで、成長への新しい扉を開きます。
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                無料で相談する
              </a>
              <a
                href="#features"
                className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
              >
                詳しく見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">主な特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "高速開発",
                description: "最新のテクノロジーで、スピーディーな開発を実現します。",
                icon: "⚡️",
              },
              {
                title: "セキュリティ",
                description: "堅固なセキュリティで、大切なデータを守ります。",
                icon: "🔒",
              },
              {
                title: "24時間サポート",
                description: "専門スタッフが24時間体制でサポートします。",
                icon: "💬",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">今すぐ始めましょう</h2>
          <p className="text-xl mb-8">
            無料相談を通じて、あなたのビジネスに最適なソリューションをご提案します。
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
