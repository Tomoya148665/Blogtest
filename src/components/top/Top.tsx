import { Image, Picture } from "@astrojs/image/components";

const Top = () => {
  return (
    <div>
      <div className="hero min-h-[70vh] bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/top.png" className="max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn-primary btn-lg">事前登録</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
