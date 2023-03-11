import { Image, Picture } from "@astrojs/image/components";
import Footer from "@layouts/Footer";
import type { ReactNode } from "react";
import { FaDatabase, FaProjectDiagram } from "react-icons/fa/index";

type CardProps = {
  title: string;
  content: string;
  image: string;
};

const COUNTRIES = {
  us: "アメリカ",
  ca: "カナダ",
  in: "インド",
  cn: "中国",
  tw: "台湾",
  sg: "シンガポール",
  th: "タイ",
  vn: "ベトナム",
  kr: "韓国",
  my: "マレーシア",
  id: "インドネシア",
  de: "ドイツ",
  gb: "イギリス",
  mx: "メキシコ",
  br: "ブラジル",
  au: "オーストラリア",
  nz: "ニュージーランド",
  ee: "エストニア",
  ke: "ケニア",
  za: "南アフリカ",
};

const ServiceCard = ({ title, content, image }: CardProps) => {
  return (
    <div className="shadow-xl bg-base-100 grow p-12 space-y-5 rounded-sm">
      <img src={image} className="max-w-[70%] mx-auto" />
      <h3 className="text-2xl lg:text-3xl text-center whitespace-pre-wrap">
        {title}
      </h3>
      <p className="lg:text-lg">{content}</p>
    </div>
  );
};

const UsecaseCard = ({ title, content, image }: CardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure className="max-h-[18vh]">
        <img src={image} alt="Shoes" className="w-full opacity-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="size-lg">{content}</p>
      </div>
    </div>
  );
};

const Country = ({ code }: { code: keyof typeof COUNTRIES }) => {
  return (
    <div className="flex flex-col space-y-2 justify-between">
      <img src={`/countries/${code}.png`} className="shadow-md" />
      <p className="text-center text-xs hidden lg:block">{COUNTRIES[code]}</p>
    </div>
  );
};

const MeritCard = ({ title, content }: Omit<CardProps, "image">) => {
  return (
    <div>
      <h3 className="text-primary text-lg md:text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-500">{content}</p>
    </div>
  );
};

type TechnologyType = {
  title: string;
  content: string;
  icon: ReactNode;
};

const Technology = ({ title, content, icon }: TechnologyType) => {
  return (
    <div className="card border bg-white w-full min-w-full">
      <div className="card-body">
        <div className="flex items-center">
          <div className="mr-6 hidden lg:block">{icon}</div>
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

type HeaderType = {
  title: string;
  subtitle: string;
  content: string;
};

const Header = ({ title, subtitle, content }: HeaderType) => {
  return (
    <div className="space-y-4 w-full">
      <p className="text-primary font-bold text-lg">{subtitle}</p>
      <h2 className="text-3xl lg:text-5xl font-bold">{title}</h2>
      <p className="mr-5 text-sm lg:text-lg text-gray-500">{content}</p>
    </div>
  );
};

const Top = () => {
  return (
    <div>
      <div className="hero min-h-[50vh] bg-base-100 lg:px-20">
        <div className="hero-content flex-row-reverse py-10">
          <img
            src="/top.png"
            className="max-w-[50%] rounded-lg hidden lg:block"
          />
          <div className="space-y-8">
            <div>
              <img
                src="/logo.png"
                className="max-w-[30%] min-w-[150px] rounded-lg"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                海外展開を加速するAI
              </h1>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                現地の最新情報DBクラウド
              </h1>
            </div>
            <p className="mr-5 text-sm lg:text-lg xl:text-xl text-gray-500">
              jetGee（ジェット・ジー）は海外展開を目指す企業のためのAIクラウドサービスです。企業ごと、進出国ごとにパーソナライズされた最新情報や機会を提供し、成功率とスピードを最大化します。
            </p>
            <div className="flex-col lg:flex-row items-center content-center">
              <a
                href="https://opeec3267cu.typeform.com/to/xP79qnLT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary btn-lg text-white">
                  メールアドレスで事前登録
                </button>
              </a>
              <p className="ml-4">※ 2023年5月にβ版リリース予定</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-[10vh] bg-base-100 pb-10 lg:pb-20 pt-0 lg:pt-10 lg:px-20">
        <div className="hero-content flex-col items-start">
          <p className="text-primary font-bold">対応国一覧（一部）</p>
          <div className="grid grid-cols-10 w-full gap-1 lg:gap-10">
            {Object.keys(COUNTRIES).map((code) => {
              return <Country code={code as keyof typeof COUNTRIES} />;
            })}
          </div>
        </div>
      </div>
      <div className="hero min-h-[90vh] bg-base-200 lg:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="space-y-10 py-10">
            <Header
              title="海外の最新情報を一箇所に集約"
              subtitle="jetGee（ジェット・ジー）とは？"
              content="jetGee（ジェット・ジー）は現地のネットワーク、商談機会、キーパーソン、市場変化といった情報をいち早く収集し、パーソナライズされた最新の情報を提供します。"
            />
            <div className="flex-row lg:flex w-full space-y-5 lg:space-y-0 lg:space-x-4">
              <ServiceCard
                title="商談機会"
                content="展示会や商談会、バイヤーからの問い合わせ、ターゲットリストなど商談機会の創出や販路拡大を支援します。"
                image="/top/feature1.png"
              />
              <ServiceCard
                title="ネットワーク"
                content="現地の日本人ネットワークや業界ネットワークへのアクセス、キーパーソンや類似企業に関する情報を集約します。"
                image="/top/feature2.png"
              />
              <ServiceCard
                title="マーケット変化"
                content="規制・法律の改正、ニーズ変化、競合環境、国際情勢など、専門家からの一次情報をレポーティングします。"
                image="/top/feature3.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-[70vh] bg-base-100 lg:px-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mockup-window border border-base-300 shadow-lg lg:mr-10 max-w-none lg:max-w-[50%] mb-4 lg:mb-0">
            <img
              src="/top/screen.png"
              className="object-fit rounded-lg shadow-3xl"
            />
          </div>
          <Header
            title="更新し続けるレポート"
            subtitle="プロダクト"
            content="優れたUIUXのダッシュボード上で、最新の情報を一目で確認できます。フィードバックを学習し続け、よりパーソナライズされた情報を提供します。また、ダッシュボードでタスクや実行ステップを管理し、コラボレーションを加速します。"
          />
        </div>
      </div>
      <div className="hero min-h-[70vh] bg-base-200 lg:px-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="space-y-10 py-20">
            <Header
              title="チームの「海外展開力」を増強"
              subtitle="導入効果"
              content="海外展開に関わるチームの力強い仲間として加わり、より安く、より早く、より高い成功率で海外展開を導きます。"
            />
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
              <MeritCard
                title="海外展開の成功率をUP"
                content="情報不足による失敗を避けることで海外展開の成功率に寄与します。ネットだけでは収集できない一次情報を独自ネットワークとテクノロジーによって収集します。"
              />
              <MeritCard
                title="展開速度の上昇"
                content="現地滞在者を派遣し現地ネットワーク構築するには長い時間がかかります。jetGeeは知らない土地でキーとなる情報やキーパーソンの発見を素早く行います。"
              />
              <MeritCard
                title="情報管理コストの削減"
                content="海外展開に関する情報を1箇所に集約することでチーム間での情報管理を容易にし、本社と現地間での情報共有・連携コストを最小化します。"
              />
              <MeritCard
                title="グローバルチームの補強"
                content="情報データベースそのものが、海外展開チームの強いナレッジとして機能し、複数国への展開や企業のグローバル化を後押しします。"
              />
              <MeritCard
                title="人件費、駐在費、渡航費の削減"
                content="人を採用し、派遣し、渡航費や滞在費を支払うには、年間約3,000円程度の多大なコストが発生します。jetGeeを使うことで、大幅なコストダウンが可能です。"
              />
              <MeritCard
                title="支援会社とのコラボレーション"
                content="海外進出支援コンサルタント、リサーチ会社などの支援会社とのコラボレーションを容易にし、得たノウハウやナレッジを蓄積しやすくします。"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-[80vh] bg-base-100 lg:px-20">
        <div className="hero-content flex-col w-full py-10 space-y-10">
          <Header
            title="さまざまな業界・フェーズで強力なパートナーに"
            subtitle="ユースケース"
            content="企業様のフェーズ、業界、進出国、製品ごとにパーソナライズされた情報を提供します。また細かなご要望に合わせてAIをチューニングし、希望の情報のみを抽出します。"
          />
          <div className="grid lg:grid-cols-2 w-full gap-10">
            <UsecaseCard
              title="海外展開チームのマネージャー"
              content="「中国で消費者契約法の改正がありました。中国での旅行事業において、利用規約や旅行契約約款の変更の必要に迫られましたが、いち早く情報を取得することができたおかげで、素早く動き出すことができました。」"
              image="/usecase/usecase1.jpg"
            />
            <UsecaseCard
              title="大手グローバル企業 経営企画"
              content="「コロナ以後、駐在員の人数を減らしていたため、現地情報の収集に難航していました。jetGee経由で業界特化の情報収集が可能となったため、結果的に駐在員の大幅な業務効率化にもつながりました。」"
              image="/usecase/usecase4.jpg"
            />
            {false && (
              <UsecaseCard
                title="経営者・起業家"
                content="「アメリカの進出にあたり経営陣が先陣を切ってアメリカ拠点に駐在することになりました。煩雑なVISA取得のステップわかりやすくまとまっていて、かつ取得見込みの日付がわかったので大変助かりました。」"
                image="/usecase/usecase2.jpg"
              />
            )}
            <UsecaseCard
              title="経営者・起業家"
              content="「アメリカの進出にあたり経営陣が先陣を切って市場開拓を試みました。早期から少しずつjetGeeを使用して情報収集をしていたので、チームにノウハウやナレッジが蓄積し、スムーズな参入をすることができました。」"
              image="/usecase/usecase2.jpg"
            />
            <UsecaseCard
              title="バックオフィス"
              content="「ドイツ進出にあたり、法人設立、銀行口座開設、税務、労務など、何から手をつけて良いかわからない状態でしたが、ドイツ語の最新の手続きをまとめて確認することができたので、実行計画が進めやすかったです。」"
              image="/usecase/usecase3.jpg"
            />
          </div>
        </div>
      </div>
      <div className="hero min-h-[80vh] bg-base-200 lg:px-20">
        <div className="hero-content flex-col w-full lg:flex-row gap-10">
          <div className="space-y-5">
            <Header
              title="独自技術"
              subtitle="テクノロジー"
              content="jetGee（ジェット・ジー）は海外展開に特化した独自のテクノロジーを活用し、グローバルビジネスを支援します。※ 特許出願中"
            />
            <div className="grid gap-4">
              <Technology
                title="AIによるデータキュレーション、パーソナライズ化"
                content="大量の情報を独自のアルゴリズムで解析し、ビジネスに与える影響度や関連性の高い情報のみを集約し、レポーティングをします。Google検索や長いレポートを読むより効率良く情報収集ができます。"
                icon={<FaDatabase size="30" />}
              />
              <Technology
                title="最新情報ソースとの自動連携"
                content="全世界に存在する駐在員・現地ネットワークから収集した一次情報と、WEB上に存在するあらゆる情報を統合し、情報を常に最新かつ信頼できるものに保ちます。"
                icon={<FaProjectDiagram size="30" />}
              />
              <Technology
                title="最適の実行計画を自動作成"
                content="得た最新の情報をもとに、法務手続きやプロダクトローカライズの実行計画を自動作成します。激しく変わる競争環境の中で、最も最適な海外展開のステップを洗い出します。"
                icon={<FaDatabase size="30" />}
              />
            </div>
          </div>
          <div className="align-bottom contents">
            <img
              src="/technology/technology.jpg"
              className="lg:max-w-sm rounded-lg shadow-2xl mt-auto"
            />
          </div>
        </div>
      </div>
      <div className="hero min-h-[50vh] bg-base-100 lg:px-20">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-5xl font-bold">
              共に世界を目指しましょう
            </h1>
            <p className="py-6">
              jetGeeは海外展開の最初から最後まで常に並走する存在です。
            </p>
            <a
              href="https://opeec3267cu.typeform.com/to/xP79qnLT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary text-white">
                メールアドレスで事前登録
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
