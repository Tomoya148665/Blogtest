import React, { useState, useEffect } from "react";
import { getCategories } from "../lib/contentful";
import { categoryColor } from "./categoryColor";

// TypeScriptでカテゴリーの型を定義
interface CategoryType {
  sys: {
    id: string;
  };
  fields: {
    category: string;
  };
}

const SearchFormContainer = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]); // 型を指定

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <div className="self-stretch bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col pt-8 px-0 pb-12 items-center justify-start text-center text-3xl text-black font-text-lg-semibold">
      <div className="w-full flex flex-col items-center justify-start gap-[26px] max-w-[760px]">
        <div className="self-stretch relative leading-[20px] font-medium">
          あなたの関心ある情報を探しましょう
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[8px]">
          {categories.map((category) => {
            const categoryName = category.fields.category; // フィールド名に注意
            console.log("Category name:", categoryName);
            const { bgColor, textColor } = categoryColor(categoryName);
            return (
              <button
                key={category.sys.id} // IDを使用
                style={{ backgroundColor: bgColor, color: textColor }} // この行を修正
                className="cursor-pointer [border:none] py-0.5 px-2.5 rounded-2xl flex flex-row items-center justify-center"
              >
                <div className="relative text-3xl leading-[20px] font-medium font-text-lg-semibold text-center">
                  {categoryName}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchFormContainer;
