/* eslint-disable @typescript-eslint/naming-convention */
import { useRouter } from "next/router";
import { useState } from "react";
import { siteMetadata } from "src/data/siteMetadata";

export const FormMemberRegistration = () => {
  const router = useRouter();
  const [isCheckboxState, setIsCheckboxState] = useState(false);
  // console.log(user);

  const handleOnChange = () => {
    setIsCheckboxState((prevCheck) => {
      return !prevCheck;
    });
  };

  const handleRegisterUser = async (event: any) => {
    event.preventDefault();
    // const useremail = user?.email || "";

    const newsletter = isCheckboxState === true ? "はい" : "いいえ";
    const res = await fetch("/api/send", {
      body: JSON.stringify({
        subject: "登録を承りました。",
        to: siteMetadata.email,
        text:
          "以下の内容でご登録を承りました。後ほど、ご登録完了のお知らせをメールでお送りいたします。\n完了まで１⽇程度お時間がかかる場合がございますのでご了承ください。\n\n" +
          "お名前: " +
          event.target.fullname.value +
          " 様\n" +
          "研究室: " +
          event.target.labo.value +
          "\nメールアドレス: " +
          event.target.email.value +
          "\n\nお問い合わせ内容:\n" +
          event.target.message.value +
          "\n\n\nメール購読を希望: " +
          newsletter,
        email: event.target.email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    router.push({
      pathname: "/success",
      query: result,
    });
  };

  return (
    <div>
      <div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 ">会員登録申し込み</p>
        </div>
        <div className="container sm:p-6 lg:px-20 mt-10 sm:mt-0">
          <div className="mt-5 md:mt-0">
            <form onSubmit={handleRegisterUser}>
              <div className="mb-3">
                <label htmlFor="fullname">お名前</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="お名前"
                  autoComplete="name"
                  required
                  minLength={3}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="labo">研究室</label>
                <input
                  id="labo"
                  name="labo"
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">メールアドレス</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="送信可能な形式：name@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message">問合せ内容</label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  rows={3}
                  required
                  minLength={20}
                ></textarea>
              </div>
              <div className="flex my-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="form-checkbox"
                    onChange={handleOnChange}
                    checked={isCheckboxState}
                  />
                  <span className="ml-2 text-blueGray-500">メールの購読を希望 </span>
                </label>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="font-medium shadow-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-50  bg-gradient-to-r from-gray-400 to-gray-500 focus:from-purple-700 focus:to-yellow-400 rounded-md text-gray-200"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
