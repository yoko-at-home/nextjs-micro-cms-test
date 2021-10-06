const handler = (req, res) => {
  let msg = {};
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY); //SendGridのAPIキー

    // validation logic
    // const reg = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    // if (!reg.match(req.body.email)) return;

    msg = {
      to: req.body.to,
      from: req.body.email,
      subject: "お問合せありがとうございました。",
      text:
        "以下の内容でお問合せを受け付けました。回答をお待ちください。\n\n" +
        "お名前: " +
        req.body.name +
        " 様\n" +
        "メールアドレス: " +
        req.body.email +
        "\n\nお問い合わせ内容:\n" +
        req.body.message,
    };

    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200).json(msg);
};

// eslint-disable-next-line import/no-default-export
export default handler;
