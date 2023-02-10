import { Image, Picture } from "@astrojs/image/components";
import type { ReactNode } from "react";
import { FaDatabase, FaProjectDiagram } from "react-icons/fa";

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
          <div className="mr-6">{icon}</div>
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
      <p className="mr-5 text-xl">{content}</p>
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
                海外展開を加速する
              </h1>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                現地情報DBクラウド
              </h1>
            </div>
            <p className="mr-5 text-md lg:text-lg xl:text-xl">
              jetGee（ジェット・ジー）は海外展開を目指す企業のためのクラウドサービスです。企業ごと、進出国ごとにパーソナライズされた最新情報や機会を提供し、成功率とスピードを最大化します。
            </p>
            <div className="flex-col lg:flex-row items-center content-center">
              <button className="btn-primary btn-lg text-white">
                メールアドレスで事前登録
              </button>
              <p className="ml-4">※ 2023年3月にβ版リリース予定</p>
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
                title="市場変化"
                content="規制・法律の改正、ニーズ変化、競合環境、国際情勢など、専門家からの一次情報をレポーティングします。"
                image="/top/feature3.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-[70vh] bg-base-100 lg:px-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mockup-window border border-base-300">
            <img
              src="/top.png"
              className="max-w-[60%] object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              Notionで作ってるプロトタイプはる
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-[70vh] bg-base-200 lg:px-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="space-y-10 py-20">
            <Header
              title="導入効果"
              subtitle="機能"
              content="jetGee（ジェット・ジー）は最速で海外展開を目指すために必要なツールを提供します。"
            />
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
              <MeritCard
                title="展開成功率を上げる"
                content="情報不足による失敗を避けることで海外展開の成功率に寄与します。ネットだけでは収集できない現地の情報を、知見を使って集めます。"
              />
              <MeritCard
                title="スピードアップ"
                content="ネットワーク構築には時間がかかってしまいます。知らない土地でゼロから関係性を構築し、キーマンを発見するのには時間がかかります。"
              />
              <MeritCard
                title="情報の集約"
                content="人を採用し、駐在させ、日本と行き来するための航空券チケットを毎回払うのは高額ですし、無駄な気がします。無駄な気がします。"
              />
              <MeritCard
                title="人件費、駐在費、渡航費の削減"
                content="人を採用し、駐在させ、日本と行き来するための航空券チケットを毎回払うのは高額ですし、無駄な気がします。無駄な気がします。"
              />
              <MeritCard
                title="外注コストの削減"
                content="人を採用し、駐在させ、日本と行き来するための航空券チケットを毎回払うのは高額ですし、無駄な気がします。無駄な気がします。"
              />
              <MeritCard
                title="チームの補強"
                content="人を採用し、駐在させ、日本と行き来するための航空券チケットを毎回払うのは高額ですし、無駄な気がします。無駄な気がします。"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-[80vh] bg-base-100 lg:px-20">
        <div className="hero-content flex-col w-full py-10 space-y-10">
          <Header
            title="利用例"
            subtitle="ユースケース"
            content="jetGee（ジェット・ジー）は最速で海外展開を目指すために必要なツールを提供します。"
          />
          <div className="grid lg:grid-cols-2 w-full gap-10">
            <UsecaseCard
              title="海外展開チームのマネージャー"
              content="「XXX国の旅行業法の改正があり、YYYすることになりました。弊社の旅行事業に影響があり、法改正対応をする必要がありましたが、いち早く情報を取得し、素早く動き出すことができました。」"
              image="/usecase/usecase1.jpg"
            />
            <UsecaseCard
              title="経営者・起業家"
              content="アメリカの進出にあたり経営陣が先陣を切ってアメリカ拠点に駐在する。煩雑なVISA取得のステップわかりやすくまとまっていて、かつ取得見込みの日付がわかったので大変助かりました。"
              image="/usecase/usecase2.jpg"
            />
            <UsecaseCard
              title="バックオフィス"
              content="法人設立、銀行口座開設、税務、労務など、何から手をつけて良いかわからない状態でしたが、ドイツ語の最新の手続きをまとめて確認することができたので、実行計画が進めやすかったです。"
              image="/usecase/usecase3.jpg"
            />
            <UsecaseCard
              title="弁護士税理士、行政書士"
              content="申請状況やサポート状況を相互に確認し合えることで、やりとりがスムーズになりました。やりとりがスムーズになりました。やりとりがスムーズになりました。"
              image="/usecase/usecase4.jpg"
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
              content="jetGee（ジェット・ジー）は海外展開に特化した独自のテクノロジーを活用し、ビジネスを支援します。※ 特許出願中"
            />
            <div className="grid gap-4">
              <Technology
                title="AIによるデータキュレーション、リスク予測"
                content="関連する情報のみをピックアップします。独自のアルゴリズムで解析し、ビジネスに与える影響を予測します。"
                icon={<FaDatabase size="30" />}
              />
              <Technology
                title="最新情報ソースとの自動連携"
                content="常に最新情報を取得します。また全世界にいる駐在員から情報をアップデートし、現地の位置情報を信頼できるルートで取得します。"
                icon={<FaProjectDiagram size="30" />}
              />
              <Technology
                title="最速の実行計画を自動作成"
                content="手続きやローカライズの実行計画を自動作成します。最速で海外展開を目指すために必要なツールを提供します。"
                icon={<FaDatabase size="30" />}
              />
            </div>
          </div>
          <div className="align-bottom contents">
            <img
              src="/technology/technology.jpg"
              className="max-w-sm rounded-lg shadow-2xl mt-auto"
            />
          </div>
        </div>
      </div>
      <div className="hero min-h-[50vh] bg-base-100 lg:px-20">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">共に世界を目指しましょう</h1>
            <p className="py-6">
              jetGeeは海外展開の最初から最後まで常に並走する存在です。
            </p>
            <button className="btn btn-primary text-white">
              メールアドレスで事前登録
            </button>
          </div>
        </div>
      </div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <div>
            <img src="/logo.png" className="max-w-[10vw] rounded-lg" />
          </div>
          <p>
            Wrexiv株式会社
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">jetGee</a>
          <a className="link link-hover">jetGee Media</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">利用規約（準備中）</a>
          <a className="link link-hover">プライバシーポリシー</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Top;
