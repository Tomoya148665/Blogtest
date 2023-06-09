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

const SIGNUP_URL = "https://app.jetgee.com/sign_up/";
const TRIAL_FORM_URL = "https://share.hsforms.com/1AXCA5D56Rvqq5vk93eS1nQnndjo";

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
                href={TRIAL_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary btn-lg text-white">
                  トライアルを開始
                </button>
              </a>
              {false && <p className="ml-4">※ 2023年5月にβ版リリース予定</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-[10vh] bg-base-100 pb-10 lg:pb-20 pt-0 lg:pt-10 lg:px-20">
        <div className="hero-content flex-col items-start">
          <p className="text-primary font-bold">対応国一覧（一部）</p>
          <div className="grid grid-cols-10 w-full gap-1 lg:gap-10">
            {Object.keys(COUNTRIES).map(code => {
              return <Country code={code as keyof typeof COUNTRIES} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
